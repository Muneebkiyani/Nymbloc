import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import Counter from '../components/Counter';
import SplineBackground from '../components/spline/SplineBackground';
import { usePrefersReducedMotion } from '../hooks/usePrefersReducedMotion';

const PROCESS_STEPS = [
    {
        num: '01',
        title: 'Discovery & Consultation',
        desc: 'We map goals, audience, and constraints through workshops and define a clear success scope.',
        points: ['Goal alignment', 'User personas', 'Tech requirements'],
    },
    {
        num: '02',
        title: 'Strategy & Planning',
        desc: 'Sitemaps, wireframes, and a technical roadmap with realistic timelines.',
        points: ['UX & IA', 'Architecture', 'Sprint plan'],
    },
    {
        num: '03',
        title: 'Agile Development',
        desc: 'Sprint-based builds with demos, QA, and continuous feedback.',
        points: ['Sprints & demos', 'Testing', 'Iterations'],
    },
    {
        num: '04',
        title: 'Launch & Growth',
        desc: 'Production deploy, tuning, and ongoing support for long-term performance.',
        points: ['Deploy', 'Monitoring', 'Support'],
    },
];

const WHY_BENEFITS = [
    { title: 'Future-Proof Tech', desc: 'React, Laravel, and modern stacks that stay maintainable and secure.' },
    { title: 'Scalable by Design', desc: 'Architecture ready for traffic and feature growth from day one.' },
    { title: 'Agile & Transparent', desc: 'Regular demos and clear communication—no black boxes.' },
    { title: 'Performance Optimized', desc: 'Assets, queries, and Core Web Vitals tuned for speed and SEO.' },
    { title: 'Security First', desc: 'Industry-standard protections for your data and your users.' },
    { title: 'Dedicated Support', desc: 'Maintenance tiers so expert help is always within reach.' },
];

const CASE_STUDIES = [
    {
        title: 'CloudFlow ERP',
        cat: 'SaaS / Enterprise',
        img: '/assets/expertise.jpg',
        desc: 'ERP for manufacturing: inventory, reporting, and real-time ops.',
    },
    {
        title: 'Nexus Dashboard',
        cat: 'React / Analytics',
        img: '/assets/react.png',
        desc: 'High-performance analytics dashboard with deep behavioral insights.',
    },
    {
        title: 'EcoStyle Store',
        cat: 'WordPress / E-commerce',
        img: '/assets/wordpress.png',
        desc: 'Custom WooCommerce with conversion-focused UX.',
    },
];

const YouTubeVisionHandler = () => {
    useEffect(() => {
        const observer = new IntersectionObserver((entries) => {
            if (entries[0].isIntersecting) {
                if (!window.YT) {
                    const tag = document.createElement('script');
                    tag.src = 'https://www.youtube.com/iframe_api';
                    const firstScriptTag = document.getElementsByTagName('script')[0];
                    firstScriptTag.parentNode.insertBefore(tag, firstScriptTag);
                }

                const createPlayer = () => {
                    new window.YT.Player('vision-player', {
                        height: '100%',
                        width: '100%',
                        videoId: 'zqwT2hr_Z5E',
                        playerVars: {
                            autoplay: 1,
                            mute: 1,
                            loop: 1,
                            playlist: 'zqwT2hr_Z5E',
                            controls: 0,
                            modestbranding: 1,
                            rel: 0,
                            iv_load_policy: 3,
                            origin:
                                location.origin ||
                                window.location.protocol +
                                    '//' +
                                    window.location.hostname +
                                    (window.location.port ? ':' + window.location.port : ''),
                        },
                        events: {
                            onReady: (event) => {
                                event.target.playVideo();
                                event.target.setPlaybackRate(2);
                            },
                        },
                    });
                };

                if (window.YT && window.YT.Player) {
                    createPlayer();
                } else {
                    window.onYouTubeIframeAPIReady = createPlayer;
                }

                observer.disconnect();
            }
        }, { threshold: 0.1 });

        const playerElement = document.getElementById('vision-player');
        if (playerElement) observer.observe(playerElement);

        return () => observer.disconnect();
    }, []);

    return null;
};

const Home = () => {
    const defaultTestimonials = [
        {
            name: 'Sarah Jenkins',
            role: 'CTO, TechFlow',
            text: 'NYMBLOC transformed our legacy site into a blazing fast React application. Their attention to detail is unmatched.',
            avatar: 'https://picsum.photos/seed/user1/50/50.jpg',
        },
        {
            name: 'David Ross',
            role: 'Founder, StartUp Inc',
            text: 'The SaaS product they built for us handles thousands of users seamlessly. The Laravel backend is rock solid.',
            avatar: 'https://picsum.photos/seed/user2/50/50.jpg',
        },
    ];

    const [testimonials, setTestimonials] = useState(() => {
        const saved = localStorage.getItem('nymbloc_testimonials');
        if (!saved) return defaultTestimonials;
        try {
            const parsed = JSON.parse(saved);
            return Array.isArray(parsed) ? parsed : defaultTestimonials;
        } catch {
            return defaultTestimonials;
        }
    });

    const [newTestimonial, setNewTestimonial] = useState({ name: '', role: '', text: '' });
    const [showForm, setShowForm] = useState(false);
    const reducedMotion = usePrefersReducedMotion();

    useEffect(() => {
        localStorage.setItem('nymbloc_testimonials', JSON.stringify(testimonials));
    }, [testimonials]);

    const handleAddTestimonial = (e) => {
        e.preventDefault();
        if (!newTestimonial.name || !newTestimonial.text) return;

        const testimonial = {
            ...newTestimonial,
            avatar: `https://picsum.photos/seed/${Date.now()}/50/50.jpg`,
        };

        setTestimonials([testimonial, ...testimonials]);
        setNewTestimonial({ name: '', role: '', text: '' });
        setShowForm(false);
        alert('Thank you for your feedback! It has been added to our success stories.');
    };

    return (
        <div className="home-spline-root">
            <SplineBackground reducedMotion={reducedMotion} />
            <div className="home-spline-content">
                <section id="home" className="robot-hero home-spline-section">
                    <div className="robot-hero-grid" aria-hidden />
                    <div className="robot-hero-deco robot-deco-tl" data-robot-parallax="0.2" />
                    <div className="robot-hero-deco robot-deco-br" data-robot-parallax="0.14" />

                    <div className="container robot-hero-inner">
                        <div className="robot-hero-layout">
                        <div className="robot-hero-panel">
                            <div className="robot-hero-topbar">
                                <span className="robot-tag robot-pulse">SYS // ONLINE</span>
                                <span className="robot-tag robot-tag-muted">NYMBLOC v2.0</span>
                                <span className="robot-tag robot-tag-accent">Spline // Linked</span>
                            </div>
                            <h1 className="robot-title">
                                <span className="robot-title-line">Engineering</span>
                                <span className="robot-title-accent">Digital Systems</span>
                            </h1>
                            <p className="robot-hero-lead">
                                High-performance websites, applications, and WordPress platforms—built like
                                precision machinery: measurable, scalable, and ready for production.
                            </p>
                            <div className="robot-hero-metrics">
                                <div className="robot-metric">
                                    <span className="robot-metric-val">50+</span>
                                    <span className="robot-metric-lab">Deployments</span>
                                </div>
                                <div className="robot-metric">
                                    <span className="robot-metric-val">98%</span>
                                    <span className="robot-metric-lab">Satisfaction</span>
                                </div>
                                <div className="robot-metric">
                                    <span className="robot-metric-val">24/7</span>
                                    <span className="robot-metric-lab">Support</span>
                                </div>
                            </div>
                            <div className="hero-buttons robot-hero-cta">
                                <Link to="/services" className="btn btn-primary">
                                    View Services
                                </Link>
                                <Link to="/contact" className="btn btn-outline">
                                    Initialize Project
                                </Link>
                            </div>
                        </div>
                        </div>
                    </div>
                </section>

                <section
                    id="advantage"
                    className="section-padding home-spline-section home-spline-reveal robot-section"
                    data-aos="fade-up"
                >
                    <div className="container">
                        <div className="robot-section-head">
                            <span className="section-subtitle">Signal</span>
                            <h2 className="section-title robot-heading">Why Industry Leaders Choose Us</h2>
                        </div>
                        <div className="benefits-grid">
                            <div className="benefit-card robot-card" data-aos="fade-up" data-aos-delay="0">
                                <div className="benefit-icon">🚀</div>
                                <h3>Peak Performance</h3>
                                <p>
                                    Sub-second loads, Core Web Vitals, and code paths tuned for real traffic—not
                                    demo environments.
                                </p>
                            </div>
                            <div className="benefit-card robot-card" data-aos="fade-up" data-aos-delay="100">
                                <div className="benefit-icon">🛡️</div>
                                <h3>Hardened Security</h3>
                                <p>
                                    Security baked in from day one—auth, data handling, and deployment hygiene
                                    aligned to your risk profile.
                                </p>
                            </div>
                            <div className="benefit-card robot-card" data-aos="fade-up" data-aos-delay="200">
                                <div className="benefit-icon">⚙️</div>
                                <h3>Infinite Scalability</h3>
                                <p>
                                    Cloud-native patterns and modular architecture so growth doesn&apos;t require a
                                    rewrite.
                                </p>
                            </div>
                        </div>
                    </div>
                </section>

                <section
                    id="innovation-showcase"
                    className="section-padding home-spline-section home-spline-reveal robot-section"
                    data-aos="fade-up"
                >
                    <div className="container">
                        <div className="robot-section-head">
                            <span className="section-subtitle">Forward</span>
                            <h2 className="section-title robot-heading">The Future of Software Development</h2>
                        </div>
                        <p
                            className="text-center"
                            style={{ maxWidth: '800px', margin: '0 auto 40px', color: 'var(--text-light)' }}
                        >
                            Architectural precision meets rapid execution—shipping products that behave
                            predictably under load.
                        </p>
                        <div className="portfolio-grid">
                            <div className="benefit-card robot-card" data-aos="zoom-in">
                                <div className="benefit-icon">🧬</div>
                                <h3>Quantum Scalability</h3>
                                <p>Systems that grow with data volume and user demand without brittle bottlenecks.</p>
                            </div>
                            <div className="benefit-card robot-card" data-aos="zoom-in" data-aos-delay="100">
                                <div className="benefit-icon">🧠</div>
                                <h3>AI-Augmented Logic</h3>
                                <p>Automation where it earns ROI—workflows, scoring, and decision support.</p>
                            </div>
                            <div className="benefit-card robot-card" data-aos="zoom-in" data-aos-delay="200">
                                <div className="benefit-icon">⚡</div>
                                <h3>Edge Decoupling</h3>
                                <p>Micro-frontends and APIs that let teams ship independently without chaos.</p>
                            </div>
                        </div>
                    </div>
                </section>

                <section
                    id="video-showcase"
                    className="section-padding video-section home-spline-section home-spline-reveal robot-section"
                    data-aos="fade-up"
                >
                    <div className="container">
                        <div className="robot-section-head">
                            <span className="section-subtitle">Vision</span>
                            <h2 className="section-title robot-heading">Engineering Excellence in Motion</h2>
                        </div>
                        <div
                            className="video-container robot-video-frame"
                            data-aos="zoom-in"
                            style={{
                                borderRadius: '16px',
                                overflow: 'hidden',
                                boxShadow: 'var(--shadow-glow-blue)',
                                background: 'black',
                                position: 'relative',
                            }}
                        >
                            <div
                                id="vision-player"
                                style={{
                                    position: 'absolute',
                                    top: '50%',
                                    left: '50%',
                                    width: '120%',
                                    height: '120%',
                                    transform: 'translate(-50%, -50%)',
                                    pointerEvents: 'none',
                                }}
                            />
                            <div
                                className="portfolio-overlay"
                                style={{
                                    background: 'linear-gradient(transparent, rgba(2, 6, 23, 0.5))',
                                    padding: '20px',
                                    zIndex: 10,
                                    display: 'flex',
                                    alignItems: 'flex-end',
                                    justifyContent: 'center',
                                }}
                            >
                                <span
                                    className="section-subtitle"
                                    style={{ fontSize: '0.75rem', color: 'white', letterSpacing: '3px' }}
                                >
                                    VISUAL // CORE DASHBOARD
                                </span>
                            </div>
                        </div>
                        <YouTubeVisionHandler />
                    </div>
                </section>

                <section
                    id="process"
                    className="section-padding home-spline-section home-spline-reveal robot-section"
                    data-aos="fade-up"
                >
                    <div className="container">
                        <div className="robot-section-head">
                            <span className="section-subtitle">Pipeline</span>
                            <h2 className="section-title robot-heading">Development Process</h2>
                            <p style={{ color: 'var(--text-light)', maxWidth: '640px', margin: '0 auto' }}>
                                A streamlined, agile pipeline—on time, on budget, with measurable checkpoints.
                            </p>
                        </div>
                        <div className="robot-process-grid">
                            {PROCESS_STEPS.map((step, index) => (
                                <article key={step.num} className="robot-process-card" data-aos="fade-up" data-aos-delay={index * 80}>
                                    <div className="robot-process-num">{step.num}</div>
                                    <h3>{step.title}</h3>
                                    <p>{step.desc}</p>
                                    <ul className="robot-process-points">
                                        {step.points.map((p) => (
                                            <li key={p}>{p}</li>
                                        ))}
                                    </ul>
                                </article>
                            ))}
                        </div>
                    </div>
                </section>

                <section
                    id="case-studies"
                    className="section-padding home-spline-section home-spline-reveal robot-section"
                    data-aos="fade-up"
                >
                    <div className="container">
                        <div className="robot-section-head">
                            <span className="section-subtitle">Archive</span>
                            <h2 className="section-title robot-heading">Case Studies</h2>
                        </div>
                        <div className="portfolio-grid">
                            {CASE_STUDIES.map((p, i) => (
                                <div className="portfolio-item robot-card" data-aos="zoom-in" key={p.title} data-aos-delay={i * 100}>
                                    <img src={p.img} alt="" className="portfolio-image" />
                                    <div className="portfolio-overlay">
                                        <span>{p.cat}</span>
                                        <h3>{p.title}</h3>
                                        <p style={{ fontSize: '0.9rem', marginTop: '8px' }}>{p.desc}</p>
                                        <Link to="/services" className="service-link" style={{ marginTop: '12px' }}>
                                            Explore services →
                                        </Link>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>
                </section>

                <div className="stats-banner home-spline-section home-spline-reveal robot-stats" data-aos="zoom-in">
                    <div className="container stats-container">
                        <div className="stat-item">
                            <h2>
                                <Counter target={50} suffix="+" />
                            </h2>
                            <p>Projects Delivered</p>
                        </div>
                        <div className="stat-item">
                            <h2>
                                <Counter target={98} suffix="%" />
                            </h2>
                            <p>Client Satisfaction</p>
                        </div>
                        <div className="stat-item">
                            <h2>
                                <Counter target={10} suffix="+" />
                            </h2>
                            <p>Tech Experts</p>
                        </div>
                        <div className="stat-item">
                            <h2>
                                <Counter target={5} suffix="+" />
                            </h2>
                            <p>Years of Innovation</p>
                        </div>
                    </div>
                </div>

                <section
                    className="expertise-section section-padding home-spline-section home-spline-reveal robot-section"
                    data-aos="fade-up"
                >
                    <div className="container">
                        <div className="expertise-grid">
                            <div className="expertise-image" data-aos="fade-right">
                                <img src="/assets/innovation.jpg" alt="Our Expertise" className="responsive-img" />
                            </div>
                            <div className="expertise-text" data-aos="fade-left">
                                <span className="section-subtitle">Innovation Lab</span>
                                <h2 className="section-title robot-heading">Pushing the Boundaries of Tech</h2>
                                <p style={{ marginBottom: '20px' }}>
                                    We don&apos;t just follow trends—we set them. Our lab explores AI, automation,
                                    and scalable architecture so your product stays ahead.
                                </p>
                                <p style={{ marginBottom: '30px' }}>
                                    At NYMBLOC, we architect solutions—whether you need an MVP or an enterprise
                                    overhaul.
                                </p>
                                <div className="expertise-card robot-card">
                                    <h3>Full-Stack Mastery</h3>
                                    <p>
                                        Database to pixel-perfect UI—one cohesive, performant product.
                                    </p>
                                    <div className="tech-tags">
                                        <span className="tech-tag">React</span>
                                        <span className="tech-tag">Next.js</span>
                                        <span className="tech-tag">Laravel</span>
                                        <span className="tech-tag">TypeScript</span>
                                        <span className="tech-tag">Node.js</span>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>

                <section className="section-padding home-spline-section home-spline-reveal robot-section">
                    <div className="container">
                        <div className="robot-section-head">
                            <span className="section-subtitle">Matrix</span>
                            <h2 className="section-title robot-heading">Why NYMBLOC</h2>
                        </div>
                        <div className="benefits-detail robot-benefits-grid">
                            {WHY_BENEFITS.map((b, i) => (
                                <div className="benefit-item robot-card" data-aos="fade-up" data-aos-delay={i * 60} key={b.title}>
                                    <h3>{b.title}</h3>
                                    <p>{b.desc}</p>
                                </div>
                            ))}
                        </div>
                    </div>
                </section>

                <section
                    className="section-padding home-spline-section home-spline-reveal robot-section section-band-infrastructure"
                    data-aos="fade-up"
                >
                    <div className="container">
                        <div className="innovation-section">
                            <div className="innovation-text" data-aos="fade-right">
                                <span className="section-subtitle" style={{ color: 'var(--accent-orange)' }}>
                                    Infrastructure
                                </span>
                                <h2 className="section-title robot-heading" style={{ color: 'white' }}>
                                    Bulletproof Hosting &amp; Security
                                </h2>
                                <p style={{ color: '#cbd5e1' }}>
                                    We deploy to secure, high-performance environments—encryption, monitoring,
                                    and reliability built into the stack.
                                </p>
                            </div>
                            <div className="innovation-image" data-aos="fade-left">
                                <img
                                    src="/assets/infrastructure.jpg"
                                    alt="Infrastructure"
                                    className="responsive-img"
                                    onError={(e) => {
                                        e.currentTarget.src = '/assets/innovation.jpg';
                                    }}
                                />
                            </div>
                        </div>
                    </div>
                </section>

                <section id="testimonials" className="section-padding home-spline-section home-spline-reveal robot-section" data-aos="fade-up">
                    <div className="container">
                        <div className="robot-section-head">
                            <span className="section-subtitle">Feedback</span>
                            <h2 className="section-title robot-heading">Client Feedback</h2>
                        </div>
                        <div className="testimonials-grid">
                            {testimonials.map((t, index) => (
                                <div className="testimonial-card robot-card" data-aos="zoom-in" key={index} data-aos-delay={index * 100}>
                                    <div className="quote-icon">“</div>
                                    <p className="testimonial-text">{t.text}</p>
                                    <div className="client-info">
                                        <img src={t.avatar} alt={t.name} className="client-avatar" />
                                        <div className="client-details">
                                            <h4>{t.name}</h4>
                                            <span>{t.role}</span>
                                        </div>
                                    </div>
                                </div>
                            ))}
                        </div>
                        <div className="text-center" style={{ marginTop: '60px' }}>
                            <button
                                type="button"
                                className="btn btn-outline"
                                onClick={() => setShowForm(!showForm)}
                                style={{ padding: '10px 25px', fontSize: '0.9rem' }}
                            >
                                {showForm ? 'Cancel Feedback' : 'Add Your Feedback +'}
                            </button>
                        </div>
                        {showForm && (
                            <div className="contact-form-wrapper" data-aos="fade-up">
                                <div className="contact-form">
                                    <form onSubmit={handleAddTestimonial}>
                                        <h3 style={{ color: 'white', marginBottom: '25px', textAlign: 'center' }}>
                                            Submit Your Testimonial
                                        </h3>
                                        <div className="form-group">
                                            <input
                                                type="text"
                                                placeholder="Your Name"
                                                required
                                                value={newTestimonial.name}
                                                onChange={(e) =>
                                                    setNewTestimonial({ ...newTestimonial, name: e.target.value })
                                                }
                                            />
                                        </div>
                                        <div className="form-group">
                                            <input
                                                type="text"
                                                placeholder="Role"
                                                required
                                                value={newTestimonial.role}
                                                onChange={(e) =>
                                                    setNewTestimonial({ ...newTestimonial, role: e.target.value })
                                                }
                                            />
                                        </div>
                                        <div className="form-group">
                                            <textarea
                                                placeholder="Your message..."
                                                required
                                                value={newTestimonial.text}
                                                onChange={(e) =>
                                                    setNewTestimonial({ ...newTestimonial, text: e.target.value })
                                                }
                                            />
                                        </div>
                                        <button type="submit" className="submit-btn reveal-text">
                                            Publish →
                                        </button>
                                    </form>
                                </div>
                            </div>
                        )}
                    </div>
                </section>

                <section
                    className="section-padding home-spline-section home-spline-reveal home-spline-cta robot-section robot-cta-final"
                    data-aos="fade-up"
                    style={{
                        position: 'relative',
                        overflow: 'hidden',
                        background:
                            'linear-gradient(rgba(15, 23, 42, 0.92), rgba(15, 23, 42, 0.95)), url(/assets/bg-network-2.jpg)',
                        backgroundSize: 'cover',
                        backgroundPosition: 'center',
                        color: 'white',
                        textAlign: 'center',
                    }}
                >
                    <div className="container" style={{ position: 'relative', zIndex: 10 }}>
                        <h2 className="section-title robot-heading" style={{ color: 'white' }}>
                            Ready to Build Something Amazing?
                        </h2>
                        <p style={{ marginBottom: '30px', color: '#cbd5e1' }}>
                            Contact us and let&apos;s turn your vision into a digital reality.
                        </p>
                        <Link to="/contact" className="btn btn-primary">
                            Start Your Project
                        </Link>
                    </div>
                </section>
            </div>
        </div>
    );
};

export default Home;
