/** Canonical production origin — keep in sync with public/sitemap.xml and Search Console. */
export const SITE_ORIGIN = 'https://www.nymbloc.com';

export const SITE_NAME = 'NYMBLOC';

export const DEFAULT_DESCRIPTION =
    'NYMBLOC designs and builds fast, clear websites, web applications, and WordPress/WooCommerce experiences—scoped for performance, SEO, and maintainability.';

/** Default Open Graph / Twitter image (absolute URL). */
export const DEFAULT_OG_IMAGE = `${SITE_ORIGIN}/assets/hero.jpg`;

export function absoluteUrl(pathname) {
    if (!pathname || pathname === '/') {
        return `${SITE_ORIGIN}/`;
    }
    const path = pathname.startsWith('/') ? pathname : `/${pathname}`;
    const noTrail = path.replace(/\/+$/, '') || '/';
    return noTrail === '/' ? `${SITE_ORIGIN}/` : `${SITE_ORIGIN}${noTrail}`;
}

export function absoluteImageUrl(src) {
    if (!src) return DEFAULT_OG_IMAGE;
    if (/^https?:\/\//i.test(src)) return src;
    const path = src.startsWith('/') ? src : `/${src}`;
    return `${SITE_ORIGIN}${path}`;
}

export function trimMetaDescription(text, maxLen = 158) {
    const s = (text || '').replace(/\s+/g, ' ').trim();
    if (!s) return DEFAULT_DESCRIPTION;
    if (s.length <= maxLen) return s;
    return `${s.slice(0, maxLen - 1).trim()}…`;
}
