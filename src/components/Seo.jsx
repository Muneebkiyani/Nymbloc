import { Helmet } from 'react-helmet-async';
import { useLocation } from 'react-router-dom';
import { getPostBySlug } from '../data/blogPosts';
import {
    SITE_NAME,
    SITE_ORIGIN,
    DEFAULT_DESCRIPTION,
    DEFAULT_OG_IMAGE,
    absoluteUrl,
    absoluteImageUrl,
    trimMetaDescription,
} from '../seo/siteConfig';
import { ROUTE_META } from '../seo/routeMeta';
import { getNicheDemoBySlug } from '../data/nicheDemos';

function organizationJsonLd() {
    return {
        '@context': 'https://schema.org',
        '@type': 'Organization',
        name: SITE_NAME,
        url: SITE_ORIGIN,
        logo: absoluteUrl('/assets/logo-header.png'),
    };
}

function websiteJsonLd() {
    return {
        '@context': 'https://schema.org',
        '@type': 'WebSite',
        name: SITE_NAME,
        url: SITE_ORIGIN,
        publisher: {
            '@type': 'Organization',
            name: SITE_NAME,
            url: SITE_ORIGIN,
        },
    };
}

function blogPostingJsonLd(post, pathname) {
    const url = absoluteUrl(pathname);
    return {
        '@context': 'https://schema.org',
        '@type': 'BlogPosting',
        headline: post.title,
        description: trimMetaDescription(post.excerpt),
        datePublished: `${post.date}T12:00:00.000Z`,
        image: absoluteImageUrl(post.coverImage),
        mainEntityOfPage: { '@type': 'WebPage', '@id': url },
        url,
        publisher: {
            '@type': 'Organization',
            name: SITE_NAME,
            logo: {
                '@type': 'ImageObject',
                url: absoluteUrl('/assets/logo-header.png'),
            },
        },
    };
}

function normalizePath(pathname) {
    if (!pathname) return '/';
    const p = pathname.replace(/\/+$/, '') || '/';
    return p;
}

/** Single canonical URL for demos (/demos/...) when users visit /demo/... */
function canonicalPathForSeo(pathname) {
    const p = normalizePath(pathname);
    if (p === '/demo') return '/demos';
    if (p.startsWith('/demo/')) return `/demos${p.slice(5)}`;
    return p;
}

export default function Seo() {
    const { pathname: rawPath } = useLocation();
    const pathname = normalizePath(rawPath);

    let title = `${SITE_NAME} | Digital solutions & development`;
    let description = DEFAULT_DESCRIPTION;
    let ogType = 'website';
    let ogImage = DEFAULT_OG_IMAGE;
    let robots = 'index, follow';
    let extraJsonLd = null;

    const blogPostMatch = /^\/blog\/([^/]+)$/.exec(pathname);

    if (pathname === '/blog') {
        const m = ROUTE_META['/blog'];
        title = m.title;
        description = m.description;
    } else if (blogPostMatch) {
        const slug = blogPostMatch[1];
        const post = getPostBySlug(slug);
        if (post) {
            title = `${post.title} | ${SITE_NAME}`;
            description = trimMetaDescription(post.excerpt);
            ogType = 'article';
            ogImage = absoluteImageUrl(post.coverImage);
            extraJsonLd = blogPostingJsonLd(post, pathname);
        } else {
            title = `Article not found | ${SITE_NAME}`;
            description = 'This article does not exist or the link is out of date.';
            robots = 'noindex, follow';
        }
    } else {
        const demoMatch = /^\/demos?\/([^/]+)$/.exec(pathname);
        if (pathname === '/demos' || pathname === '/demo') {
            const m = ROUTE_META['/demos'];
            title = m.title;
            description = m.description;
        } else if (demoMatch) {
            const slug = demoMatch[1];
            const demo = getNicheDemoBySlug(slug);
            if (demo) {
                title = demo.seoTitle;
                description = trimMetaDescription(demo.seoDescription);
                ogImage = absoluteImageUrl(demo.heroImage);
            } else {
                title = `Demo not found | ${SITE_NAME}`;
                description = 'This preview link is invalid or out of date.';
                robots = 'noindex, follow';
            }
        } else {
            const meta = ROUTE_META[pathname];
            if (meta) {
                title = meta.title;
                description = meta.description;
            }
        }
    }

    if (pathname === '/checkout') {
        robots = 'noindex, follow';
    }

    const canonical = absoluteUrl(canonicalPathForSeo(pathname));
    const showWebSiteSchema = pathname === '/' || pathname === '';

    return (
        <Helmet prioritizeSeoTags>
            <html lang="en" />
            <title>{title}</title>
            <meta name="description" content={description} />
            <meta name="robots" content={robots} />
            <link rel="canonical" href={canonical} />

            <meta property="og:site_name" content={SITE_NAME} />
            <meta property="og:type" content={ogType} />
            <meta property="og:title" content={title} />
            <meta property="og:description" content={description} />
            <meta property="og:url" content={canonical} />
            <meta property="og:image" content={ogImage} />
            <meta property="og:locale" content="en_US" />

            <meta name="twitter:card" content="summary_large_image" />
            <meta name="twitter:title" content={title} />
            <meta name="twitter:description" content={description} />
            <meta name="twitter:image" content={ogImage} />

            <script type="application/ld+json">{JSON.stringify(organizationJsonLd())}</script>
            {showWebSiteSchema && (
                <script type="application/ld+json">{JSON.stringify(websiteJsonLd())}</script>
            )}
            {extraJsonLd && (
                <script type="application/ld+json">{JSON.stringify(extraJsonLd)}</script>
            )}
        </Helmet>
    );
}
