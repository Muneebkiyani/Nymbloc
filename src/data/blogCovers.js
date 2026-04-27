/**
 * Cover imagery for blog posts (Unsplash — see https://unsplash.com/license).
 * Images are chosen to match each article topic; not scraped from Google.
 */
/** Params aligned with Unsplash/imgix hotlink guidance — avoids broken crops and 404s on some assets. */
const U = (id, params = 'auto=format&fit=crop&w=1200&q=80&ixlib=rb-4.0.3') =>
    `https://images.unsplash.com/${id}?${params}`;

export const BLOG_COVERS = {
    'how-much-does-a-website-cost-2026': {
        coverImage: U('photo-1554224155-8d04cb21cd6c'),
        coverAlt: 'Desk with laptop, calculator, and paperwork—illustrating website budgeting and costs.',
    },
    'why-small-businesses-struggle-online': {
        coverImage: U('photo-1556761175-5973dc0f32e7'),
        coverAlt: 'Small business team collaborating around a laptop in a bright office.',
    },
    'wordpress-vs-custom-website': {
        coverImage: U('photo-1498050108023-c5249f4df085'),
        coverAlt: 'Developer laptop on a desk showing code and web design work.',
    },
    'how-to-get-clients-from-your-website': {
        coverImage: U('photo-1600880292203-757bb62b4baf'),
        coverAlt: 'Two professionals shaking hands after a successful business meeting.',
    },
    'core-web-vitals-explained-business': {
        coverImage: U('photo-1551288049-bebda4e38f71'),
        coverAlt: 'Analytics dashboard on a monitor representing site performance and Core Web Vitals.',
    },
    'rebuild-vs-redesign-website': {
        coverImage: U('photo-1503387762-592deb58ef4e'),
        coverAlt: 'Architectural blueprints and tools—metaphor for rebuilding versus redesigning a site.',
    },
    'choosing-web-hosting-small-business': {
        coverImage: U('photo-1451187580459-43490279c0fa'),
        coverAlt: 'Abstract technology and network imagery suggesting servers and global hosting.',
    },
    'website-maintenance-checklist': {
        coverImage: U('photo-1454165804606-c3d57bc86b40'),
        coverAlt: 'Notebook and checklist on a desk for ongoing website maintenance tasks.',
    },
    'react-vs-wordpress-business-site': {
        coverImage: U('photo-1672309046475-4cce2039f342'),
        coverAlt: 'Laptop on a desk with code and editor—representing modern front-end development and React.',
    },
    'security-basics-business-websites': {
        coverImage: U('photo-1563013544-824ae1b704d3'),
        coverAlt: 'Cybersecurity concept with padlock imagery protecting digital information.',
    },
    'website-copy-that-converts': {
        coverImage: U('photo-1569229761589-8838faca0b91'),
        coverAlt: 'Person writing in a notebook—representing clear website copy and messaging.',
    },
    'local-seo-basics-2026': {
        coverImage: U('photo-1524661135-423995f22d0b'),
        coverAlt: 'Map and navigation imagery suggesting local search and geographic relevance.',
    },
    'analytics-what-to-measure': {
        coverImage: U('photo-1460925895917-afdab827c52f'),
        coverAlt: 'Laptop displaying charts and graphs for web analytics review.',
    },
    'accessibility-matters-for-business': {
        coverImage: U('photo-1573496359142-b8d87734a5a2'),
        coverAlt: 'Inclusive workplace discussion—representing accessible, user-centered design.',
    },
    'landing-page-vs-full-website': {
        coverImage: U('photo-1516321318423-f06f85e504b3'),
        coverAlt: 'Multiple browser windows comparing simple landing pages to full websites.',
    },
    'outsourcing-development-red-flags': {
        coverImage: U('photo-1522071820081-009f0129c71c'),
        coverAlt: 'Team meeting evaluating a project—careful vendor and outsourcing decisions.',
    },
    'planning-a-saas-mvp': {
        coverImage: U('photo-1559136555-9303baea8ebd'),
        coverAlt: 'Startup planning session with notes and strategy for building an MVP product.',
    },
    'email-capture-without-being-spammy': {
        coverImage: U('photo-1533750446969-255bbf191920'),
        coverAlt: 'Laptop with notes on a desk—email, newsletters, and respectful lead capture.',
    },
};

const DEFAULT_COVER = {
    coverImage: U('photo-1460925895917-afdab827c52f'),
    coverAlt: 'Laptop on a desk with business workspace in the background.',
};

/** Used when a hotlinked image fails (removed asset, network, or blockers). */
export const BLOG_COVER_FALLBACK_URL = DEFAULT_COVER.coverImage;

export function withBlogCover(post) {
    if (!post) return post;
    const extra = BLOG_COVERS[post.slug] || DEFAULT_COVER;
    return { ...post, ...extra };
}
