import { withBlogCover } from './blogCovers.js';

/** Editorial posts for /blog — informational content (AdSense-friendly mix). */
const blogPostsRaw = [
    {
        slug: 'how-much-does-a-website-cost-2026',
        title: 'How Much Does a Website Cost in 2026?',
        date: '2026-01-08',
        readTime: '11 min read',
        excerpt:
            'A practical breakdown of domains, hosting, design, development, and ongoing costs—so you can budget without surprises.',
        sections: [
            {
                type: 'p',
                text: 'Website pricing is one of the most searched questions for good reason: the range is enormous. A simple brochure site can cost a few hundred dollars if you use a template and do the work yourself, while a custom web application can run well into six figures. What matters is matching scope to outcomes—not buying the most expensive option by default.',
            },
            {
                type: 'h2',
                text: 'The main cost buckets',
            },
            {
                type: 'p',
                text: 'Most projects fall into five buckets: strategy and content, design, front-end development, back-end or integrations, and launch plus hosting. Small businesses often underestimate content and photography; those line items affect timeline as much as code.',
            },
            {
                type: 'ul',
                items: [
                    'Domain: typically $10–$20 per year for a standard .com.',
                    'Hosting: shared hosting can be $5–$30/month; managed WordPress or cloud setups scale up from there.',
                    'Design and build: template sites are cheaper; custom UX and components cost more because they are built for your brand and conversion goals.',
                    'Maintenance: security updates, backups, and small fixes are ongoing—plan for them annually.',
                ],
            },
            {
                type: 'h2',
                text: 'How to get an accurate quote',
            },
            {
                type: 'p',
                text: 'Bring a one-page brief: who the site is for, what actions visitors should take, must-have pages, and any systems you need to connect (CRM, booking, payments). Vague requests produce vague estimates; specificity keeps both sides honest.',
            },
            {
                type: 'p',
                text: 'If you are comparing agencies, ask what is included in “launch”: performance tuning, basic SEO setup, analytics, training, and warranty period. Those details separate a finished product from a handoff that creates extra bills later.',
            },
        ],
    },
    {
        slug: 'why-small-businesses-struggle-online',
        title: 'Why Small Businesses Struggle Online (and How to Fix It)',
        date: '2026-01-12',
        readTime: '9 min read',
        excerpt:
            'Common patterns we see: unclear offers, slow sites, and no measurement. Here is a grounded checklist to improve traction.',
        sections: [
            {
                type: 'p',
                text: 'Many small business websites look fine at a glance but underperform because they never answer three questions in the first screen: what you do, who it is for, and what the visitor should do next. Without that clarity, even paid traffic wastes money.',
            },
            {
                type: 'h2',
                text: 'Clarity beats cleverness',
            },
            {
                type: 'p',
                text: 'Jargon and vague claims (“we empower synergy”) do not help someone decide to call or book. Replace them with concrete outcomes: timelines, service areas, pricing ranges where possible, and proof such as reviews or certifications.',
            },
            {
                type: 'h2',
                text: 'Speed and mobile matter for trust',
            },
            {
                type: 'p',
                text: 'Slow pages feel broken. Large unoptimized images, excessive third-party scripts, and cheap overcrowded hosting are frequent culprits. Run a simple performance audit, compress images, and remove plugins or scripts you do not need.',
            },
            {
                type: 'p',
                text: 'Finally, install basic analytics and define one primary goal (calls, form fills, bookings). If you are not measuring, you are guessing—which makes improvement nearly impossible.',
            },
        ],
    },
    {
        slug: 'wordpress-vs-custom-website',
        title: 'WordPress vs Custom Websites: Which Fits Your Business?',
        date: '2026-01-18',
        readTime: '10 min read',
        excerpt:
            'When WordPress wins, when a custom stack wins, and how to avoid choosing the wrong foundation.',
        sections: [
            {
                type: 'p',
                text: 'WordPress powers a huge share of the web because it is excellent for content-heavy sites, blogs, and many e-commerce setups with WooCommerce. A custom site—often React, Next.js, or similar—shines when you need a highly tailored product experience, strict performance budgets, or complex authenticated applications.',
            },
            {
                type: 'h2',
                text: 'Choose WordPress when…',
            },
            {
                type: 'ul',
                items: [
                    'Marketing and editorial teams will update pages and posts frequently.',
                    'You want a large plugin ecosystem for SEO, forms, and commerce.',
                    'Time-to-launch and budget favor a proven CMS workflow.',
                ],
            },
            {
                type: 'h2',
                text: 'Choose custom when…',
            },
            {
                type: 'ul',
                items: [
                    'The site is really a web app: dashboards, roles, real-time data, or heavy interactivity.',
                    'You need fine-grained control over performance and architecture.',
                    'WordPress’s model would fight your product instead of supporting it.',
                ],
            },
            {
                type: 'p',
                text: 'Hybrid approaches exist: headless WordPress for content with a custom front-end. That adds complexity, so use it when the benefits clearly outweigh operational cost.',
            },
        ],
    },
    {
        slug: 'how-to-get-clients-from-your-website',
        title: 'How to Get Clients From Your Website Without “Hacks”',
        date: '2026-01-22',
        readTime: '8 min read',
        excerpt:
            'Focus on message-market fit, proof, and friction-free contact paths—tactics that compound over time.',
        sections: [
            {
                type: 'p',
                text: 'Client acquisition from a website is less about tricks and more about reducing doubt. Prospects want to understand what you deliver, see that others trust you, and take the next step without confusion.',
            },
            {
                type: 'h2',
                text: 'Lead with outcomes',
            },
            {
                type: 'p',
                text: 'Describe services in terms of customer outcomes: saved time, increased leads, fewer support tickets, clearer reporting. Pair that with case-style blurbs—even anonymized ones with metrics help more than generic superlatives.',
            },
            {
                type: 'h2',
                text: 'Make contact obvious',
            },
            {
                type: 'p',
                text: 'Use a persistent phone number or “Book a call” in the header on desktop and mobile. Forms should ask only what you need at first contact; long forms kill conversion. Set expectations for response time.',
            },
        ],
    },
    {
        slug: 'core-web-vitals-explained-business',
        title: 'Core Web Vitals Explained for Business Owners',
        date: '2026-02-02',
        readTime: '7 min read',
        excerpt:
            'What LCP, INP, and CLS mean in plain language—and why they affect SEO and user trust.',
        sections: [
            {
                type: 'p',
                text: 'Core Web Vitals are Google’s way of measuring real-world user experience: loading, interactivity, and visual stability. They are not the only ranking factors, but they align with what visitors already feel—slow, jumpy sites lose trust fast.',
            },
            {
                type: 'h2',
                text: 'Largest Contentful Paint (LCP)',
            },
            {
                type: 'p',
                text: 'LCP measures when the main content element becomes visible. Large hero images, slow servers, and render-blocking scripts often hurt LCP. Fix it with image optimization, caching, and lean critical CSS/JavaScript.',
            },
            {
                type: 'h2',
                text: 'Interaction to Next Paint (INP)',
            },
            {
                type: 'p',
                text: 'INP reflects responsiveness: how long it takes for the page to react to clicks and taps. Heavy JavaScript on the main thread is a common issue; code splitting and deferring non-essential work help.',
            },
            {
                type: 'h2',
                text: 'Cumulative Layout Shift (CLS)',
            },
            {
                type: 'p',
                text: 'CLS captures unexpected layout movement—ads, fonts, or images popping in without reserved space. Reserve dimensions for media, load fonts carefully, and avoid inserting content above existing text after load.',
            },
        ],
    },
    {
        slug: 'rebuild-vs-redesign-website',
        title: 'When to Rebuild vs Redesign Your Website',
        date: '2026-02-06',
        readTime: '8 min read',
        excerpt:
            'Redesigns refresh presentation; rebuilds fix foundations. Here is how to tell which you need.',
        sections: [
            {
                type: 'p',
                text: 'A redesign typically updates visuals, copy structure, and some templates while keeping the underlying stack. A rebuild replaces or heavily restructures the codebase—often needed when security, performance, or features outgrow the old foundation.',
            },
            {
                type: 'h2',
                text: 'Signals you may need a rebuild',
            },
            {
                type: 'ul',
                items: [
                    'The site cannot meet performance or accessibility targets without heroic workarounds.',
                    'You are fighting the CMS or framework to ship basic features.',
                    'Technical debt blocks safe updates or integrations.',
                ],
            },
            {
                type: 'h2',
                text: 'Signals a redesign may be enough',
            },
            {
                type: 'ul',
                items: [
                    'The stack is stable but the brand and messaging are outdated.',
                    'Conversion paths are confusing despite solid underlying technology.',
                    'You need better content architecture, not a new platform.',
                ],
            },
        ],
    },
    {
        slug: 'choosing-web-hosting-small-business',
        title: 'Choosing Web Hosting for a Small Business Site',
        date: '2026-02-10',
        readTime: '9 min read',
        excerpt:
            'Shared, VPS, managed WordPress, and static hosting—what to pick based on traffic and responsibility.',
        sections: [
            {
                type: 'p',
                text: 'Hosting is the environment where your site runs. The right choice depends on traffic expectations, whether you run a CMS, compliance needs, and how much server administration you want to handle.',
            },
            {
                type: 'h2',
                text: 'Shared hosting',
            },
            {
                type: 'p',
                text: 'Low cost and easy setup, but neighbors on the same server can affect performance. Fine for early-stage brochure sites with modest traffic if the provider has good support.',
            },
            {
                type: 'h2',
                text: 'Managed WordPress or application hosting',
            },
            {
                type: 'p',
                text: 'You pay more for automated backups, staging, caching, and security hardening tailored to the platform. Usually worth it if your site drives revenue.',
            },
            {
                type: 'p',
                text: 'For static or JAMstack sites, edge-hosted deployments can be extremely fast globally; dynamic features may need complementary services.',
            },
        ],
    },
    {
        slug: 'website-maintenance-checklist',
        title: 'A Practical Website Maintenance Checklist',
        date: '2026-02-14',
        readTime: '6 min read',
        excerpt:
            'Monthly and quarterly tasks to keep your site secure, fast, and accurate.',
        sections: [
            {
                type: 'p',
                text: 'Websites are not “set and forget.” Software updates, content drift, and broken links accumulate. A lightweight maintenance rhythm prevents emergencies.',
            },
            {
                type: 'h2',
                text: 'Monthly',
            },
            {
                type: 'ul',
                items: [
                    'Apply CMS, plugin, and theme updates after a backup.',
                    'Check forms and transactional emails still deliver.',
                    'Review top pages in analytics for sudden traffic or error spikes.',
                ],
            },
            {
                type: 'h2',
                text: 'Quarterly',
            },
            {
                type: 'ul',
                items: [
                    'Audit key facts: hours, pricing, team, addresses, legal pages.',
                    'Run link and image checks; fix or redirect broken URLs.',
                    'Review user permissions and remove unused accounts or plugins.',
                ],
            },
        ],
    },
    {
        slug: 'react-vs-wordpress-business-site',
        title: 'React vs WordPress for a Business Marketing Site',
        date: '2026-02-20',
        readTime: '8 min read',
        excerpt:
            'Marketing sites rarely need React—but sometimes they benefit. Here is a decision framework.',
        sections: [
            {
                type: 'p',
                text: 'React and similar frameworks excel at interactive interfaces and design systems at scale. For a straightforward marketing site with a blog, WordPress or another CMS often ships faster and empowers non-developers to publish.',
            },
            {
                type: 'p',
                text: 'Consider React when you are integrating with a larger product ecosystem, need advanced personalization, or have engineering resources to own deployment and content workflows (possibly headless).',
            },
            {
                type: 'p',
                text: 'Total cost includes not only build but also who will update the site in six months. Pick the stack your team can sustain.',
            },
        ],
    },
    {
        slug: 'security-basics-business-websites',
        title: 'Security Basics Every Business Website Should Follow',
        date: '2026-02-24',
        readTime: '9 min read',
        excerpt:
            'HTTPS, updates, least-privilege accounts, and backups—foundations that stop most common issues.',
        sections: [
            {
                type: 'p',
                text: 'No site is unhackable, but most compromises are opportunistic. Basic hygiene eliminates a large share of risk without exotic tools.',
            },
            {
                type: 'h2',
                text: 'Start with HTTPS everywhere',
            },
            {
                type: 'p',
                text: 'TLS certificates encrypt traffic between visitors and your server. Modern hosts provide free certificates; enforce HTTPS redirects and avoid mixed content.',
            },
            {
                type: 'h2',
                text: 'Updates and least privilege',
            },
            {
                type: 'p',
                text: 'Remove unused plugins and themes. Use strong unique passwords and role-based access—contributors should not need administrator rights. Enable multi-factor authentication for admin accounts when available.',
            },
            {
                type: 'h2',
                text: 'Backups you have tested',
            },
            {
                type: 'p',
                text: 'Automated backups are useless if you cannot restore them. Periodically verify a restore path, especially before major changes.',
            },
        ],
    },
    {
        slug: 'website-copy-that-converts',
        title: 'Writing Website Copy That Actually Converts',
        date: '2026-03-02',
        readTime: '10 min read',
        excerpt:
            'Structure pages for scanners, speak to one reader, and back claims with specifics.',
        sections: [
            {
                type: 'p',
                text: 'Most visitors skim. Headlines, subheads, and bullets carry the message; body copy supports detail for those who want it. Write the hero section as if it were the only paragraph anyone reads.',
            },
            {
                type: 'h2',
                text: 'One reader, one job per page',
            },
            {
                type: 'p',
                text: 'Define a primary persona and their primary action on each page. Service pages should not try to serve every industry at once unless you use clear segmentation.',
            },
            {
                type: 'h2',
                text: 'Proof and objections',
            },
            {
                type: 'p',
                text: 'Anticipate objections: price, timeline, geography, guarantees. Address them with FAQs, short case notes, or process explanations. Specificity builds credibility; fluff does the opposite.',
            },
        ],
    },
    {
        slug: 'local-seo-basics-2026',
        title: 'Local SEO Basics That Still Work in 2026',
        date: '2026-03-08',
        readTime: '8 min read',
        excerpt:
            'Google Business Profile, citations, on-page signals, and reviews—without spammy shortcuts.',
        sections: [
            {
                type: 'p',
                text: 'Local SEO connects your business to nearby search intent. It blends your website, your Google Business Profile, and consistent business information across the web.',
            },
            {
                type: 'h2',
                text: 'NAP consistency',
            },
            {
                type: 'p',
                text: 'Name, address, and phone should match across directories. Inconsistencies confuse both humans and algorithms.',
            },
            {
                type: 'h2',
                text: 'On-page relevance',
            },
            {
                type: 'p',
                text: 'Use clear service pages for each core offering and location where applicable. Titles and headings should reflect how customers describe the service, not only internal jargon.',
            },
            {
                type: 'p',
                text: 'Reviews matter: request them ethically after successful work, and respond professionally. They are both a ranking signal and a conversion asset.',
            },
        ],
    },
    {
        slug: 'analytics-what-to-measure',
        title: 'Website Analytics: What to Measure First',
        date: '2026-03-12',
        readTime: '7 min read',
        excerpt:
            'Start with acquisition, engagement on key pages, and conversions—ignore vanity metrics early on.',
        sections: [
            {
                type: 'p',
                text: 'Analytics should answer whether your site helps the business. That means tying data to actions: leads, calls, signups, purchases, or qualified inquiries.',
            },
            {
                type: 'h2',
                text: 'A minimal useful dashboard',
            },
            {
                type: 'ul',
                items: [
                    'Traffic sources: where visitors come from.',
                    'Landing pages: what they first see from each channel.',
                    'Conversion events: form submits, clicks-to-call, bookings.',
                    'Funnel drop-offs on your main user paths.',
                ],
            },
            {
                type: 'p',
                text: 'Respect privacy regulations and consent rules in your region. Many teams use privacy-friendly configurations and documented retention policies.',
            },
        ],
    },
    {
        slug: 'accessibility-matters-for-business',
        title: 'Why Web Accessibility Matters for Business Sites',
        date: '2026-03-18',
        readTime: '11 min read',
        excerpt:
            'Legal exposure aside, accessible sites reach more customers and tend to be cleaner under the hood.',
        sections: [
            {
                type: 'p',
                text: 'Accessibility means people with disabilities can use your site: keyboard navigation, screen reader compatibility, sufficient contrast, and clear focus states. It overlaps heavily with good UX and SEO structure.',
            },
            {
                type: 'h2',
                text: 'Quick wins',
            },
            {
                type: 'ul',
                items: [
                    'Meaningful alt text for informative images.',
                    'Logical heading hierarchy (one h1 per page).',
                    'Visible focus styles and skip links where appropriate.',
                    'Form labels tied to inputs, not placeholder-only hints.',
                ],
            },
            {
                type: 'h2',
                text: 'Why this is not only a compliance checkbox',
            },
            {
                type: 'p',
                text: 'Roughly one in four adults in the United States lives with a disability; globally the share is substantial as well. If navigation, contrast, or forms exclude those visitors, you are turning away revenue that competitors may capture with modest fixes. Accessible markup—semantic headings, descriptive buttons, labeled inputs—also helps search engines understand pages.',
            },
            {
                type: 'h2',
                text: 'Media and motion',
            },
            {
                type: 'p',
                text: 'Provide captions or transcripts for video with speech; offer pause controls for carousels; avoid autoplay audio that hijacks screen readers. Decorative images should use empty alt attributes so assistive tech skips them intentionally.',
            },
            {
                type: 'h2',
                text: 'Testing beyond automated scans',
            },
            {
                type: 'p',
                text: 'Tools such as axe or Lighthouse find obvious failures but miss context: whether alt text is meaningful, whether error messages make sense when read aloud, or whether focus order follows visual logic. Schedule quarterly keyboard passes after major launches.',
            },
        ],
    },
    {
        slug: 'landing-page-vs-full-website',
        title: 'Landing Page vs Full Website: When to Use Each',
        date: '2026-03-22',
        readTime: '10 min read',
        excerpt:
            'Campaign landers focus on one offer; full sites build brand depth and SEO. Match the asset to the goal.',
        sections: [
            {
                type: 'p',
                text: 'A landing page is a single focused URL designed around one conversion goal—often used with paid ads or email campaigns. A full website supports multiple services, trust pages, resources, and organic discovery.',
            },
            {
                type: 'h2',
                text: 'Information architecture: one job vs many jobs',
            },
            {
                type: 'p',
                text: 'Landing pages intentionally strip navigation noise so the visitor cannot wander into unrelated pages mid-decision. Full sites intentionally expose navigation so prospects can validate credibility (About, team, case evidence), compare offers (pricing tiers, service pages), and find support answers (FAQ, docs). If you force a multi-intent visitor through a lander, you often increase bounce—not conversions.',
            },
            {
                type: 'h2',
                text: 'SEO and organic discovery',
            },
            {
                type: 'p',
                text: 'Landing pages can rank for tight queries when they earn links and match intent, but most organic programs need a cluster of related pages: topical articles, service detail pages, and localized landing pages where relevant. A brochure site with thin pages still struggles; the advantage of a full site is room to publish helpful content without cramming everything above the fold.',
            },
            {
                type: 'h2',
                text: 'Campaign measurement vs brand measurement',
            },
            {
                type: 'p',
                text: 'Use landing pages when you need clean attribution for a single offer and audience segment—message match from ad to headline matters more than showcasing your whole company. Use a full site when buyers research across sessions: they compare vendors, read educational posts, and return later via branded search.',
            },
            {
                type: 'h2',
                text: 'When to graduate from landers to a site',
            },
            {
                type: 'ul',
                items: [
                    'You are expanding services or regions and one page cannot explain them without becoming a novel.',
                    'Support and sales keep answering the same questions that deserve permanent FAQ or documentation pages.',
                    'Organic traffic is a strategic channel—not only paid acquisition.',
                ],
            },
            {
                type: 'p',
                text: 'Hybrid setups are normal: a flagship marketing site plus dedicated landing pages for campaigns. The mistake is treating your only URL like a slide deck—beautiful but thin—when buyers expect depth before they commit.',
            },
        ],
    },
    {
        slug: 'outsourcing-development-red-flags',
        title: 'Red Flags When Outsourcing Web Development',
        date: '2026-03-28',
        readTime: '13 min read',
        excerpt:
            'Opaque pricing, no staging process, and missing ownership clauses—warning signs to avoid.',
        sections: [
            {
                type: 'p',
                text: 'A good agency explains trade-offs, documents scope, and gives you access to repositories and hosting. Be cautious when everything is “unlimited revisions” with no process, or when contracts omit IP ownership and deliverables.',
            },
            {
                type: 'h2',
                text: 'Process signals quality',
            },
            {
                type: 'p',
                text: 'Expect discovery, milestones, a staging environment, and a launch checklist. If testing is an afterthought, production bugs become your problem.',
            },
            {
                type: 'h2',
                text: 'Contract checklist before you pay deposits',
            },
            {
                type: 'ul',
                items: [
                    'Intellectual property: who owns code, designs, accounts, and third-party licenses after final payment?',
                    'Hosting and domains registered in your name—or documented transfers when milestones complete.',
                    'Change orders in writing with revised timeline and cost, not informal chat promises.',
                    'Accessibility or performance targets called out if they matter for procurement.',
                    'Warranty/support window defined with realistic response expectations.',
                ],
            },
            {
                type: 'h2',
                text: 'Tooling transparency',
            },
            {
                type: 'p',
                text: 'You should receive credentials or collaborator access to version control, hosting, CMS admin, analytics, and DNS—not discover everything lives in the vendor’s personal accounts during an emergency handoff.',
            },
        ],
    },
    {
        slug: 'planning-a-saas-mvp',
        title: 'Planning a SaaS MVP Without Overbuilding',
        date: '2026-04-04',
        readTime: '14 min read',
        excerpt:
            'Scope the smallest version that validates value, billing, and retention—not every feature you imagine.',
        sections: [
            {
                type: 'p',
                text: 'MVPs fail when they try to be full products. The goal is learning: will target users pay, return, and recommend? Everything else is secondary until those signals exist.',
            },
            {
                type: 'h2',
                text: 'Define the core loop',
            },
            {
                type: 'p',
                text: 'What is the repeated action that delivers value? Build onboarding that gets users to that action fast. Defer nice-to-have dashboards and integrations until the core loop feels solid.',
            },
            {
                type: 'h2',
                text: 'Billing and support early',
            },
            {
                type: 'p',
                text: 'Even a simple subscription with manual onboarding teaches you about willingness to pay. Plan support paths: email, docs, or in-app guidance—otherwise churn will be ambiguous noise.',
            },
            {
                type: 'h2',
                text: 'Scope fences that prevent drift',
            },
            {
                type: 'p',
                text: 'Write a one-page “not now” list: integrations you will postpone, reports you will export manually first, roles you will simulate with scripts instead of full RBAC. Revisit that list only after you see retention and expansion revenue—not because a stakeholder feels impatient.',
            },
            {
                type: 'h2',
                text: 'Non-functional requirements still matter',
            },
            {
                type: 'ul',
                items: [
                    'Backups and disaster recovery for customer data.',
                    'Logging that lets you answer “what happened to account X?” without guessing.',
                    'Rate limiting and basic abuse prevention once you expose APIs.',
                    'A migration story if you are replacing spreadsheets—imports beat heroic manual entry.',
                ],
            },
            {
                type: 'h2',
                text: 'When to ignore feature requests temporarily',
            },
            {
                type: 'p',
                text: 'Enterprise procurement checklists often demand SSO, SOC reports, and complex RBAC before a pilot proves adoption. Unless those buyers are your day-one segment, park those asks behind a validated wedge customer who pays annually without bespoke procurement theater.',
            },
        ],
    },
    {
        slug: 'email-capture-without-being-spammy',
        title: 'Email Capture That Respects Visitors',
        date: '2026-04-10',
        readTime: '11 min read',
        excerpt:
            'Lead magnets, timing, and consent copy that build trust instead of annoying pop-ups.',
        sections: [
            {
                type: 'p',
                text: 'Email lists work when people expect your messages. That starts with a clear value exchange: a useful checklist, template, or mini-course—not “subscribe for updates” with no specifics.',
            },
            {
                type: 'h2',
                text: 'Consent copy that holds up',
            },
            {
                type: 'p',
                text: 'Checkboxes should describe what someone is opting into: topics, approximate cadence, and whether you share data with sponsors. Pre-checked boxes for marketing email are poor practice and illegal in several jurisdictions. If you run ads or pixels, align your privacy policy with what actually fires on the page.',
            },
            {
                type: 'h2',
                text: 'Lead magnets that feel worth an inbox slot',
            },
            {
                type: 'ul',
                items: [
                    'Templates tied to a specific pain (cash-flow spreadsheet, hiring rubric, site launch checklist).',
                    'Short email courses where each message teaches one idea—not repeats your sales pitch.',
                    'Curated resource lists maintained quarterly so subscribers trust freshness.',
                ],
            },
            {
                type: 'h2',
                text: 'Timing and presentation',
            },
            {
                type: 'p',
                text: 'Full-screen pop-ups on the first second of a visit frustrate users and can depress engagement. Prefer contextual placements: end of useful articles, sidebars on desktop where they do not cover reading flow, or exit prompts used sparingly. Mobile layouts deserve smaller footprints—sticky bars beat modal stacks.',
            },
            {
                type: 'h2',
                text: 'Deliverability basics',
            },
            {
                type: 'p',
                text: 'Authenticate sending domains with SPF, DKIM, and DMARC guidance from your ESP; purge bounced addresses; segment inactive subscribers instead of blasting cold lists. A smaller engaged audience outperforms vanity totals—and protects your domain reputation.',
            },
            {
                type: 'p',
                text: 'Disclose how often you email, honor unsubscribes immediately at the link level, and avoid burying preferences three menus deep. Trust compounds when expectations match reality.',
            },
        ],
    },
    {
        slug: 'website-project-brief-how-to-write-one',
        title: 'How to Write a Website Project Brief That Saves Time and Money',
        date: '2026-05-06',
        readTime: '13 min read',
        excerpt:
            'Goals, audiences, content sources, integrations, and acceptance criteria—organized so proposals match reality.',
        sections: [
            {
                type: 'p',
                text: 'Most budget blowups trace back to fuzzy briefs: stakeholders disagree about priorities, assets arrive late, or “simple” integrations hide legacy systems. A disciplined brief does not need perfect prose—it needs decisions written down so estimates compare apples to apples.',
            },
            {
                type: 'h2',
                text: 'Start with outcomes, not features',
            },
            {
                type: 'p',
                text: 'List the three jobs the site must accomplish in the next twelve months: for example, qualified inbound leads, self-serve bookings, or authenticated customer dashboards. Tie each outcome to a measurable signal (form completions per week, average order value, login frequency). Features emerge from outcomes; reversing that order invites shelf-ware.',
            },
            {
                type: 'h2',
                text: 'Audience and journeys',
            },
            {
                type: 'ul',
                items: [
                    'Primary persona: role, pain, objections, and preferred proof (reviews, certifications, demos).',
                    'Secondary audiences such as press, recruits, or regulators—note if they need dedicated pages.',
                    'Primary conversion paths: contact, purchase, signup, support ticket—each with required fields.',
                ],
            },
            {
                type: 'h2',
                text: 'Brand, content, and assets',
            },
            {
                type: 'p',
                text: 'Specify logo formats, color tokens, typography licenses, photography sources, and voice/tone notes. Call out which pages need legal review and who owns approvals. If migration from an old site matters, inventory URLs that must redirect and content that is obsolete.',
            },
            {
                type: 'h2',
                text: 'Technical constraints and integrations',
            },
            {
                type: 'p',
                text: 'Document CRMs, ESPs, analytics IDs, payment processors, SSO providers, and APIs—with sandbox access timelines if vendors must approve keys. Mention hosting preferences, data residency needs, and any accessibility or performance targets procurement expects (WCAG level, Core Web Vitals budgets).',
            },
            {
                type: 'h2',
                text: 'Launch definition',
            },
            {
                type: 'ul',
                items: [
                    'Staging URL behavior, QA checklist owners, and sign-off criteria.',
                    'DNS cutover plan, SSL expectations, and rollback strategy.',
                    'Training: who edits content post-launch and what guardrails exist.',
                    'Post-launch warranty window versus ongoing maintenance scope.',
                ],
            },
            {
                type: 'p',
                text: 'Attach rough timelines for delivering copy, imagery, and legal clearance—late content is the silent multiplier on calendar risk. A brief this concrete lets vendors propose phased milestones instead of vague phases that collapse near launch.',
            },
        ],
    },
];

export const blogPosts = blogPostsRaw.map(withBlogCover);

export function getPostBySlug(slug) {
    return blogPosts.find((p) => p.slug === slug);
}
