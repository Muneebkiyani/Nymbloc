import React from 'react';
import { Link } from 'react-router-dom';
import Counter from '../components/Counter';
import FaqAccordion from '../components/FaqAccordion';

const PROCESS_STEPS = [
    {
        num: '01',
        title: 'Discovery',
        desc: 'We clarify goals, audience, and constraints so scope and success metrics are obvious before build work starts.',
    },
    {
        num: '02',
        title: 'Plan & UX',
        desc: 'Structure, key pages, and technical approach are documented—no surprise phases mid-project.',
    },
    {
        num: '03',
        title: 'Build & QA',
        desc: 'Iterative delivery with reviews, performance checks, and fixes before launch.',
    },
    {
        num: '04',
        title: 'Launch & support',
        desc: 'Go-live, monitoring, and optional maintenance so the site stays fast and secure.',
    },
];

const SAMPLE_PROJECTS = [
    {
        title: 'CloudFlow ERP (sample)',
        cat: 'Internal ops / reporting',
        img: '/assets/expertise.jpg',
        desc: 'Illustrative example: dashboards and workflows for inventory and operations—not a live client endorsement.',
    },
    {
        title: 'Nexus Analytics (sample)',
        cat: 'Product UI',
        img: '/assets/react.png',
        desc: 'Illustrative example: a focused analytics experience for teams that need fast load times and clear KPIs.',
    },
    {
        title: 'EcoStyle Commerce (sample)',
        cat: 'WordPress / WooCommerce',
        img: '/assets/wordpress.png',
        desc: 'Illustrative example: content-led storefront patterns with conversion-oriented product pages.',
    },
];

/** Real photography hero (Unsplash — not generated). Same hotlink pattern as blog covers. */
const HOME_HERO_IMAGE =
    'https://images.unsplash.com/photo-1522071820081-009f0129c71c?auto=format&fit=crop&w=2000&q=82&ixlib=rb-4.0.3';

const HOME_FAQ = [
    {
        q: 'What do you actually build?',
        a: 'Marketing sites, web applications, and WordPress/WooCommerce builds—depending on what will serve your customers best, not a one-size-fits-all stack.',
    },
    {
        q: 'How do projects usually start?',
        a: 'With a short discovery: what you sell, who it is for, and what “done” looks like. Then we propose scope, timeline, and investment.',
    },
    {
        q: 'Do you own my code?',
        a: 'For custom work, our standard expectation is you receive source and deployment access after agreed milestones—details are spelled out in your statement of work.',
    },
];

const Home = () => {
    return (
        <div className="home-page">
            <section
                className="home-hero-business"
                id="home"
                data-aos="fade-up"
                data-aos-once="true"
                style={{ '--home-hero-photo': `url("${HOME_HERO_IMAGE.replace(/"/g, '%22')}")` }}
            >
                <div className="home-hero-bg" aria-hidden="true">
                    <div className="home-hero-photo" />
                    <div className="home-hero-gradient" />
                    <div className="home-hero-grid-pattern home-hero-grid-pattern--subtle" />
                </div>
                <div className="container home-hero-inner-business">
                    <p className="home-eyebrow">Web design & development</p>
                    <h1 className="home-headline">
                        We build high-converting websites for growing businesses
                    </h1>
                    <p className="home-subhead">
                        Clear messaging, fast pages, and sensible technology—so visitors understand what you offer
                        and can take the next step without friction.
                    </p>
                    <div className="home-hero-actions">
                        <Link to="/contact" className="btn btn-primary">
                            Start a project
                        </Link>
                        <Link to="/services" className="btn btn-outline">
                            View services
                        </Link>
                    </div>
                    <ul className="home-trust-inline">
                        <li>Performance-minded builds</li>
                        <li>Transparent process</li>
                        <li>WordPress & custom stacks</li>
                    </ul>
                </div>
                <p className="home-hero-credit">
                    Hero: real stock photo (not AI-generated) via{' '}
                    <a href="https://unsplash.com/license" target="_blank" rel="noopener noreferrer">
                        Unsplash
                    </a>
                </p>
            </section>

            <section className="section-padding section-alt robot-page-section section--mobile-grid" data-aos="fade-up">
                <div className="container">
                    <div className="section-intro">
                        <span className="section-subtitle">Problems we solve</span>
                        <h2 className="section-title section-title-business">Real constraints, plain language</h2>
                        <p className="section-lead">
                            Most teams do not need a spectacle—they need a site that loads quickly, reads clearly on
                            mobile, and supports the way you actually sell.
                        </p>
                    </div>
                    <div className="benefits-grid business-cards">
                        <div className="benefit-card business-card" data-aos="fade-up">
                            <h3>Slow or confusing sites</h3>
                            <p>
                                We tighten structure, copy hierarchy, and technical performance so first-time visitors
                                get the point in seconds.
                            </p>
                        </div>
                        <div className="benefit-card business-card" data-aos="fade-up" data-aos-delay="60">
                            <h3>Hard to update</h3>
                            <p>
                                WordPress or a lightweight CMS workflow—so your team can publish without filing a ticket
                                for every typo.
                            </p>
                        </div>
                        <div className="benefit-card business-card" data-aos="fade-up" data-aos-delay="120">
                            <h3>Outgrowing a template</h3>
                            <p>
                                When integrations, auth, or scale matter, we design architecture that will not fight you
                                in six months.
                            </p>
                        </div>
                    </div>
                </div>
            </section>

            <section className="section-padding robot-page-section section--mobile-grid" data-aos="fade-up">
                <div className="container">
                    <div className="section-intro">
                        <span className="section-subtitle">Services</span>
                        <h2 className="section-title section-title-business">Three ways we help</h2>
                    </div>
                    <div className="services-preview-grid">
                        <div className="service-preview-card">
                            <h3>Websites</h3>
                            <p>Marketing sites and landing experiences focused on clarity and speed.</p>
                            <Link to="/services/website">Plans & details →</Link>
                        </div>
                        <div className="service-preview-card">
                            <h3>Applications</h3>
                            <p>Dashboards, SaaS-style products, and integrations when you have logged-in users.</p>
                            <Link to="/services/application">Plans & details →</Link>
                        </div>
                        <div className="service-preview-card">
                            <h3>WordPress</h3>
                            <p>Themes, WooCommerce, and content workflows for teams that live in the block editor.</p>
                            <Link to="/services/wordpress">Plans & details →</Link>
                        </div>
                    </div>
                    <p className="text-center" style={{ marginTop: '2rem' }}>
                        <Link to="/blog" className="text-link">
                            Read practical guides on our blog →
                        </Link>
                    </p>
                </div>
            </section>

            <section className="section-padding section-alt robot-page-section section--mobile-grid" data-aos="fade-up">
                <div className="container">
                    <div className="section-intro">
                        <span className="section-subtitle">Process</span>
                        <h2 className="section-title section-title-business">How engagements run</h2>
                    </div>
                    <div className="robot-process-grid business-process">
                        {PROCESS_STEPS.map((step, index) => (
                            <article key={step.num} className="robot-process-card business-process-card" data-aos="fade-up" data-aos-delay={index * 50}>
                                <div className="robot-process-num">{step.num}</div>
                                <h3>{step.title}</h3>
                                <p>{step.desc}</p>
                            </article>
                        ))}
                    </div>
                </div>
            </section>

            <section className="section-padding robot-page-section section--mobile-grid" data-aos="fade-up">
                <div className="container">
                    <div className="section-intro">
                        <span className="section-subtitle">Sample work</span>
                        <h2 className="section-title section-title-business">Illustrative project snapshots</h2>
                        <p className="section-lead">
                            These are labeled samples to show the types of problems we work on—not testimonials or
                            guaranteed outcomes for your business.
                        </p>
                    </div>
                    <div className="portfolio-grid">
                        {SAMPLE_PROJECTS.map((p, i) => (
                            <div className="portfolio-item business-portfolio-card" key={p.title} data-aos="fade-up" data-aos-delay={i * 60}>
                                <img src={p.img} alt="" className="portfolio-image" />
                                <div className="portfolio-overlay business-portfolio-overlay">
                                    <span>{p.cat}</span>
                                    <h3>{p.title}</h3>
                                    <p>{p.desc}</p>
                                    <Link to="/contact" className="service-link">
                                        Discuss something similar →
                                    </Link>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            <div className="stats-banner business-stats" data-aos="fade-up">
                <div className="container stats-container">
                    <div className="stat-item">
                        <h2>
                            <Counter target={50} suffix="+" />
                        </h2>
                        <p>Projects delivered (all time)</p>
                    </div>
                    <div className="stat-item">
                        <h2>
                            <Counter target={98} suffix="%" />
                        </h2>
                        <p>Clients satisfied (reported)</p>
                    </div>
                    <div className="stat-item">
                        <h2>
                            <Counter target={10} suffix="+" />
                        </h2>
                        <p>Specialists on tap</p>
                    </div>
                    <div className="stat-item">
                        <h2>
                            <Counter target={5} suffix="+" />
                        </h2>
                        <p>Years building for the web</p>
                    </div>
                </div>
            </div>

            <section className="section-padding section-alt robot-page-section" data-aos="fade-up">
                <div className="container">
                    <div className="section-intro">
                        <span className="section-subtitle">Common questions</span>
                        <h2 className="section-title section-title-business">Before you reach out</h2>
                    </div>
                    <FaqAccordion items={HOME_FAQ} idPrefix="home-faq" />
                    <p className="faq-section-footer text-center">
                        <Link to="/faq" className="text-link">
                            Full FAQ →
                        </Link>
                    </p>
                </div>
            </section>

            <section
                className="section-padding home-cta-business robot-page-section"
                data-aos="fade-up"
            >
                <div className="container text-center">
                    <h2 className="section-title section-title-business">Tell us what you are trying to fix</h2>
                    <p className="section-lead" style={{ margin: '0 auto 1.75rem', maxWidth: '36rem' }}>
                        Share your context on the contact page. We reply within one business day with next steps—or an
                        honest “not a fit” if we are not the right team.
                    </p>
                    <Link to="/contact" className="btn btn-primary">
                        Contact NYMBLOC
                    </Link>
                </div>
            </section>
        </div>
    );
};

export default Home;
