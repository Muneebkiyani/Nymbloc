/**
 * Post-build prerender: writes route-shaped HTML under dist/ so crawlers and reviewers
 * see real text without relying on client-side rendering alone.
 * Set SKIP_PRERENDER=1 to skip (e.g. CI without Chromium libs).
 */
import { mkdir, writeFile } from 'node:fs/promises';
import path from 'node:path';
import { fileURLToPath } from 'node:url';
import { spawn } from 'node:child_process';
import net from 'node:net';
import puppeteer from 'puppeteer';
import { blogPosts } from '../src/data/blogPosts.js';
import { NICHE_DEMO_LIST } from '../src/data/nicheDemos.js';

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const root = path.join(__dirname, '..');
const distDir = path.join(root, 'dist');

const viteCli = path.join(root, 'node_modules', 'vite', 'bin', 'vite.js');

function getFreePort() {
    return new Promise((resolve, reject) => {
        const s = net.createServer();
        s.listen(0, '127.0.0.1', () => {
            const addr = s.address();
            const port = typeof addr === 'object' && addr ? addr.port : null;
            s.close(() => (port ? resolve(port) : reject(new Error('No port'))));
        });
        s.on('error', reject);
    });
}

const STATIC_ROUTES = [
    '/',
    '/about',
    '/services',
    '/faq',
    '/contact',
    '/services/website',
    '/services/application',
    '/services/wordpress',
    '/blog',
    '/privacy',
    '/terms',
    '/demos',
];

function collectRoutes() {
    const blogRoutes = blogPosts
        .filter((p) => p.slug)
        .map((p) => `/blog/${p.slug}`);
    const demoRoutes = NICHE_DEMO_LIST.map((d) => d.path);
    return [...STATIC_ROUTES, ...blogRoutes, ...demoRoutes];
}

function routeToFile(route) {
    if (route === '/') return path.join(distDir, 'index.html');
    const clean = route.replace(/^\/+/, '');
    return path.join(distDir, clean, 'index.html');
}

async function waitForPreview(origin, timeoutMs = 180000) {
    const start = Date.now();
    while (Date.now() - start < timeoutMs) {
        try {
            const res = await fetch(origin);
            if (res.ok) return;
        } catch {
            /* retry */
        }
        await new Promise((r) => setTimeout(r, 400));
    }
    throw new Error(`Preview server did not respond at ${origin}`);
}

async function waitForHydrated(page) {
    await page.waitForFunction(
        () => {
            const body = document.body?.innerText ?? '';
            if (body.includes('Loading…')) return false;
            return body.trim().length > 350;
        },
        { timeout: 120000 },
    );
}

async function main() {
    if (process.env.SKIP_PRERENDER === '1') {
        console.info('[prerender] SKIP_PRERENDER=1 — skipping.');
        return;
    }

    const routes = collectRoutes();
    const port = await getFreePort();
    const origin = `http://127.0.0.1:${port}`;

    const child = spawn(
        process.execPath,
        [viteCli, 'preview', '--strictPort', '--host', '127.0.0.1', '--port', String(port)],
        {
            cwd: root,
            stdio: ['ignore', 'pipe', 'pipe'],
            env: { ...process.env },
        },
    );

    let stderr = '';
    let stdout = '';
    child.stderr?.on('data', (c) => {
        stderr += c.toString();
    });
    child.stdout?.on('data', (c) => {
        stdout += c.toString();
    });

    child.on('exit', (code) => {
        if (code !== 0 && code !== null) {
            console.warn('[prerender] preview exited early:', code, stdout.slice(-800), stderr.slice(-800));
        }
    });

    await waitForPreview(origin);

    const browser = await puppeteer.launch({
        headless: true,
        args: ['--no-sandbox', '--disable-setuid-sandbox', '--disable-dev-shm-usage'],
    });

    try {
        const page = await browser.newPage();
        await page.setViewport({ width: 1280, height: 900 });

        for (const route of routes) {
            const url = `${origin}${route === '/' ? '/' : route}`;
            await page.goto(url, { waitUntil: 'domcontentloaded', timeout: 90000 });
            await waitForHydrated(page);
            await new Promise((r) => setTimeout(r, 600));

            const html = await page.content();
            const outPath = routeToFile(route);
            await mkdir(path.dirname(outPath), { recursive: true });
            await writeFile(outPath, html, 'utf8');
            console.info('[prerender]', route, '→', path.relative(distDir, outPath));
        }
    } finally {
        await browser.close();
        child.kill('SIGTERM');
        await new Promise((r) => setTimeout(r, 500));
        try {
            child.kill('SIGKILL');
        } catch {
            /* ignore */
        }
    }

    if (stderr && /error/i.test(stderr)) {
        console.warn('[prerender] preview stderr:', stderr.slice(-2000));
    }
}

main().catch((err) => {
    console.error('[prerender] failed:', err);
    process.exit(1);
});
