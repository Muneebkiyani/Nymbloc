import React, { useState, useEffect, useRef, lazy, Suspense } from 'react';
import { Link } from 'react-router-dom';
import { ScrollTrigger } from '../utils/gsapClient';
import Counter from '../components/Counter';
import ScrollSection3D from '../components/three/ScrollSection3D';

const HeroScene3D = lazy(() => import('../components/hero/HeroScene3D'));

const YouTubeVisionHandler = () => {
    useEffect(() => {
        // Only load YouTube IFrame API when user reaches the section to improve initial page load
        const observer = new IntersectionObserver((entries) => {
            if (entries[0].isIntersecting) {
                if (!window.YT) {
                    const tag = document.createElement('script');
                    tag.src = "https://www.youtube.com/iframe_api";
                    const firstScriptTag = document.getElementsByTagName('script')[0];
                    firstScriptTag.parentNode.insertBefore(tag, firstScriptTag);
                }

                const createPlayer = () => {
                    new window.YT.Player('vision-player', {
                        height: '100%',
                        width: '100%',
                        videoId: 'zqwT2hr_Z5E',
                        playerVars: {
                            'autoplay': 1,
                            'mute': 1,
                            'loop': 1,
                            'playlist': 'zqwT2hr_Z5E',
                            'controls': 0,
                            'modestbranding': 1,
                            'rel': 0,
                            'iv_load_policy': 3,
                            'origin': location.origin || window.location.protocol + '//' + window.location.hostname + (window.location.port ? ':' + window.location.port : ''),
                        },
                        events: {
                            'onReady': (event) => {
                                event.target.playVideo();
                                event.target.setPlaybackRate(2); // Fast-forward effect
                            }
                        }
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
            name: "Sarah Jenkins",
            role: "CTO, TechFlow",
            text: "NYMBLOC transformed our legacy site into a blazing fast React application. Their attention to detail is unmatched.",
            avatar: "https://picsum.photos/seed/user1/50/50.jpg"
        },
        {
            name: "David Ross",
            role: "Founder, StartUp Inc",
            text: "The SaaS product they built for us handles thousands of users seamlessly. The Laravel backend is rock solid.",
            avatar: "https://picsum.photos/seed/user2/50/50.jpg"
        }
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

    /** 'off' = static gradient only, 'light' = lighter 3D (mobile), 'full' = full scene */
    const [heroSceneMode, setHeroSceneMode] = useState('full');
    const heroSectionRef = useRef(null);
    const scrollProgressRef = useRef(0);

    useEffect(() => {
        const mqReduce = window.matchMedia('(prefers-reduced-motion: reduce)');
        const mqSmall = window.matchMedia('(max-width: 768px)');
        const apply = () => {
            if (mqReduce.matches) setHeroSceneMode('off');
            else if (mqSmall.matches) setHeroSceneMode('light');
            else setHeroSceneMode('full');
        };
        apply();
        mqReduce.addEventListener('change', apply);
        mqSmall.addEventListener('change', apply);
        return () => {
            mqReduce.removeEventListener('change', apply);
            mqSmall.removeEventListener('change', apply);
        };
    }, []);

    useEffect(() => {
        const el = heroSectionRef.current;
        if (!el || heroSceneMode === 'off') return undefined;
        const st = ScrollTrigger.create({
            trigger: el,
            start: 'top top',
            end: 'bottom top',
            scrub: 0.6,
            onUpdate: (self) => {
                scrollProgressRef.current = self.progress;
            },
        });
        requestAnimationFrame(() => ScrollTrigger.refresh());
        return () => {
            st.kill();
        };
    }, [heroSceneMode]);

    useEffect(() => {
        localStorage.setItem('nymbloc_testimonials', JSON.stringify(testimonials));
    }, [testimonials]);

    const handleAddTestimonial = (e) => {
        e.preventDefault();
        if (!newTestimonial.name || !newTestimonial.text) return;
        
        const testimonial = {
            ...newTestimonial,
            avatar: `https://picsum.photos/seed/${Date.now()}/50/50.jpg`
        };
        
        setTestimonials([testimonial, ...testimonials]);
        setNewTestimonial({ name: '', role: '', text: '' });
        setShowForm(false);
        alert('Thank you for your feedback! It has been added to our success stories.');
    };

    return (
        <>
            {/* Hero — immersive WebGL blocks + scroll-linked motion */}
            <section id="home" ref={heroSectionRef} className="hero-with-3d">
                {heroSceneMode === 'off' && <div className="hero-3d-fallback" aria-hidden />}
                {(heroSceneMode === 'light' || heroSceneMode === 'full') && (
                    <Suspense fallback={<div className="hero-3d-fallback" aria-hidden />}>
                        <HeroScene3D
                            scrollProgressRef={scrollProgressRef}
                            reduced={heroSceneMode === 'light'}
                        />
                    </Suspense>
                )}
                <div className="hero-3d-overlay" aria-hidden />
                <div className="container hero-content hero-content-3d">
                    <div className="hero-text" data-aos="fade-right">
                        <span className="section-subtitle">NYMBLOC Digital Agency</span>
                        <h1 className="reveal-text">Engineering the <br /><span>Digital Future</span></h1>
                        <p>We don't just build websites; we engineer high-performance digital ecosystems. From data-driven SaaS platforms to blazing-fast React applications, we provide the technical foundation for your global scale.</p>
                        <div className="hero-buttons">
                            <Link to="/services" className="btn btn-primary">Our Solutions</Link>
                            <Link to="/contact" className="btn btn-outline">Consult an Expert</Link>
                        </div>
                    </div>
                </div>
            </section>

            {/* Why Us Section (Section 2 - Static) */}
            <section id="home-why" className="section-padding section-has-3d" data-aos="fade-up">
                <div className="scroll-3d-corner scroll-3d-corner-tr">
                    <ScrollSection3D variant="torus" height={260} />
                </div>
                <div className="container" style={{ position: 'relative', zIndex: 2 }}>
                    <div className="text-center" style={{ marginBottom: '50px' }}>
                        <span className="section-subtitle">The NYMBLOC Edge</span>
                        <h2 className="section-title reveal-text">Why Industry Leaders Choose Us</h2>
                    </div>
                    <div className="benefits-grid">
                        <div className="benefit-card" data-aos="fade-up" data-aos-delay="0">
                            <div className="benefit-icon">🚀</div>
                            <h3>Peak Performance</h3>
                            <p>Every line of code is optimized for speed, ensuring sub-second load times and superior Core Web Vitals.</p>
                        </div>
                        <div className="benefit-card" data-aos="fade-up" data-aos-delay="100">
                            <div className="benefit-icon">🛡️</div>
                            <h3>Hardened Security</h3>
                            <p>Enterprise-grade security protocols integrated from day one to protect your data and user trust.</p>
                        </div>
                        <div className="benefit-card" data-aos="fade-up" data-aos-delay="200">
                            <div className="benefit-icon">⚙️</div>
                            <h3>Infinite Scalability</h3>
                            <p>Cloud-native architecture designed to handle traffic surges and business growth without friction.</p>
                        </div>
                    </div>
                </div>
            </section>

            <section id="innovation-showcase" className="section-padding section-has-3d" style={{ position: 'relative', overflow: 'hidden', backgroundColor: 'var(--bg-dark)' }}>
                <div className="scroll-3d-corner scroll-3d-corner-bl">
                    <ScrollSection3D variant="blocks" height={240} />
                </div>
                <div className="container" style={{ position: 'relative', zIndex: 10 }}>
                    <div className="text-center">
                        <span className="section-subtitle">Forward Thinking</span>
                        <h2 className="section-title">The Future of Software Development</h2>
                        <p style={{ maxWidth: '800px', margin: '0 auto 40px', color: 'var(--text-light)' }}>Our multi-disciplinary team combines architectural precision with rapid execution to transform ambitious visions into market-leading digital realities.</p>
                    </div>
                    <div className="portfolio-grid">
                        <div className="benefit-card" data-aos="zoom-in">
                            <div className="benefit-icon">🧬</div>
                            <h3>Quantum Scalability</h3>
                            <p>Architectures that anticipate growth and handle massive data flow with negligible overhead.</p>
                        </div>
                        <div className="benefit-card" data-aos="zoom-in" data-aos-delay="100">
                            <div className="benefit-icon">🧠</div>
                            <h3>AI-Augmented Logic</h3>
                            <p>Integrating intelligent automation into your workflows to accelerate decisions and user impact.</p>
                        </div>
                        <div className="benefit-card" data-aos="zoom-in" data-aos-delay="200">
                            <div className="benefit-icon">⚡</div>
                            <h3>Edge Decoupling</h3>
                            <p>State-of-the-art micro-frontends and serverless backends for specialized business silos.</p>
                        </div>
                    </div>
                </div>
            </section>

            {/* Video Showcase Section (Section 4 - Static) */}
            <section id="video-showcase" className="section-padding video-section" data-aos="fade-up">
                <div className="container">
                    <div className="text-center" style={{ marginBottom: '40px' }}>
                        <span className="section-subtitle">Our Vision</span>
                        <h2 className="section-title reveal-text">Engineering Excellence in Motion</h2>
                        <p style={{ maxWidth: '700px', margin: '0 auto', color: 'var(--text-light)' }}>Our core mission is to bridge the gap between complex digital architecture and seamless user experiences.</p>
                    </div>
                    <div className="video-container" data-aos="zoom-in" style={{ borderRadius: '24px', overflow: 'hidden', boxShadow: 'var(--shadow-glow-blue)', background: 'black', position: 'relative' }}>
                        <div id="vision-player" style={{ position: 'absolute', top: '50%', left: '50%', width: '120%', height: '120%', transform: 'translate(-50%, -50%)', pointerEvents: 'none' }}></div>
                        <div className="portfolio-overlay" style={{ background: 'linear-gradient(transparent, rgba(2, 6, 23, 0.4))', padding: '20px', zIndex: 10, display: 'flex', alignItems: 'flex-end', justifyContent: 'center' }}>
                            <span className="section-subtitle" style={{ fontSize: '0.8rem', color: 'white', letterSpacing: '2px' }}>KINETIC CORE INFRASTRUCTURE DASHBOARD</span>
                        </div>
                    </div>

                    <YouTubeVisionHandler />

                    <div className="text-center" style={{ marginTop: '20px' }}>
                        <span className="section-subtitle" style={{ fontSize: '0.8rem', opacity: 0.6 }}>Experience our high-performance cloud architecture visualization</span>
                    </div>
                </div>
            </section>

            <section id="portfolio-preview" className="section-padding section-has-3d" style={{ position: 'relative', overflow: 'hidden' }}>
                <div className="scroll-3d-corner scroll-3d-corner-tr">
                    <ScrollSection3D variant="orbs" height={260} />
                </div>
                <div className="container" style={{ position: 'relative', zIndex: 10 }}>
                    <div className="text-center" style={{ marginBottom: '50px' }}>
                        <span className="section-subtitle">Our Work</span>
                        <h2 className="section-title reveal-text">Success Stories</h2>
                        <p style={{ maxWidth: '700px', margin: '0 auto', color: 'var(--text-light)' }}>A glimpse into the digital transformations we've delivered for our clients across various industries.</p>
                    </div>
                    
                    <div className="portfolio-grid">
                        <div className="portfolio-item" data-aos="zoom-in">
                            <img src="/assets/expertise.jpg" alt="CloudFlow ERP" className="portfolio-image" />
                            <div className="portfolio-overlay">
                                <span>SaaS / Enterprise</span>
                                <h3>CloudFlow ERP</h3>
                                <Link to="/portfolio" className="service-link">View Project →</Link>
                            </div>
                        </div>
                        <div className="portfolio-item" data-aos="zoom-in" data-aos-delay="100">
                            <img src="/assets/react.png" alt="Nexus Dashboard" className="portfolio-image" />
                            <div className="portfolio-overlay">
                                <span>React / Analytics</span>
                                <h3>Nexus Dashboard</h3>
                                <Link to="/portfolio" className="service-link">View Project →</Link>
                            </div>
                        </div>
                    </div>
                    
                    <div className="text-center" style={{ marginTop: '50px' }}>
                        <Link to="/portfolio" className="btn btn-outline">View Full Portfolio</Link>
                    </div>
                </div>
            </section>

            {/* Stats Banner (Section 6 - Dynamic Counters) */}
            <div className="stats-banner stats-banner-with-3d" data-aos="zoom-in">
                <div className="stats-banner-3d" aria-hidden>
                    <ScrollSection3D variant="rings" height="100%" />
                </div>
                <div className="container stats-container" style={{ position: 'relative', zIndex: 2 }}>
                    <div className="stat-item">
                        <h2><Counter target={50} suffix="+" /></h2>
                        <p>Projects Delivered</p>
                    </div>
                    <div className="stat-item">
                        <h2><Counter target={98} suffix="%" /></h2>
                        <p>Client Satisfaction</p>
                    </div>
                    <div className="stat-item">
                        <h2><Counter target={10} suffix="+" /></h2>
                        <p>Tech Experts</p>
                    </div>
                    <div className="stat-item">
                        <h2><Counter target={5} suffix="+" /></h2>
                        <p>Years of Innovation</p>
                    </div>
                </div>
            </div>

            <section className="expertise-section section-padding" style={{ position: 'relative', overflow: 'hidden' }}>
                <div className="container" style={{ position: 'relative', zIndex: 10 }}>
                    <div className="expertise-grid">
                        <div className="expertise-image" data-aos="fade-right">
                            <img src="/assets/innovation.jpg" alt="Our Expertise" className="responsive-img" />
                        </div>
                        <div className="expertise-text" data-aos="fade-left">
                            <span className="section-subtitle">How we help</span>
                            <h2 className="section-title reveal-text">Solving Complex Challenges with Simple Code</h2>
                            <p style={{ marginBottom: '30px' }}>At NYMBLOC, we don't just write code; we architect solutions. Whether you're a startup looking for an MVP or an enterprise needing a digital overhaul, our multi-disciplinary team has the expertise to deliver.</p>
                            
                            <div className="expertise-card">
                                <h3>Full-Stack Mastery</h3>
                                <p>We handle everything from the database architecture to the pixel-perfect frontend, ensuring a cohesive and performant product.</p>
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

            {/* Testimonials (Section 8 - Dynamic Update) */}
            <section id="testimonials" className="section-padding" data-aos="fade-up">
                <div className="container">
                    <div className="text-center" style={{ marginBottom: '50px' }}>
                        <span className="section-subtitle">Testimonials</span>
                        <h2 className="section-title">Client Feedback</h2>
                        <p style={{ color: 'var(--text-light)', marginTop: '10px' }}>Join our list of satisfied partners.</p>
                    </div>
                    
                    <div className="testimonials-grid">
                        {testimonials.map((t, index) => (
                            <div className="testimonial-card" data-aos="zoom-in" key={index} data-aos-delay={index * 100}>
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
                            className="btn btn-outline" 
                            onClick={() => setShowForm(!showForm)}
                            style={{ padding: '10px 25px', fontSize: '0.9rem' }}
                        >
                            {showForm ? "Cancel Feedback" : "Add Your Feedback +"}
                        </button>
                    </div>

                    {showForm && (
                        <div className="contact-form-wrapper" data-aos="fade-up">
                            <div className="contact-form">
                            <form onSubmit={handleAddTestimonial}>
                                <h3 style={{ color: 'white', marginBottom: '25px', textAlign: 'center' }}>Submit Your Testimonial</h3>
                                <div className="form-group">
                                    <input 
                                        type="text" 
                                        placeholder="Your Name" 
                                        required 
                                        value={newTestimonial.name}
                                        onChange={(e) => setNewTestimonial({...newTestimonial, name: e.target.value})}
                                    />
                                </div>
                                <div className="form-group">
                                    <input 
                                        type="text" 
                                        placeholder="Role (e.g., CEO, TechFlow)" 
                                        required 
                                        value={newTestimonial.role}
                                        onChange={(e) => setNewTestimonial({...newTestimonial, role: e.target.value})}
                                    />
                                </div>
                                <div className="form-group">
                                    <textarea 
                                        placeholder="Share your experience working with NYMBLOC..." 
                                        required
                                        value={newTestimonial.text}
                                        onChange={(e) => setNewTestimonial({...newTestimonial, text: e.target.value})}
                                    ></textarea>
                                </div>
                                <button type="submit" className="submit-btn reveal-text">Publish Success Story →</button>
                            </form>
                        </div>
                        </div>
                    )}
                </div>
            </section>

            <section className="section-padding section-cta-3d" data-aos="fade-up" style={{ position: 'relative', overflow: 'hidden', background: "linear-gradient(rgba(15, 23, 42, 0.85), rgba(15, 23, 42, 0.88)), url('/assets/bg-network-2.jpg')", backgroundSize: 'cover', backgroundPosition: 'center', color: 'white', textAlign: 'center' }}>
                <div className="cta-3d-layer" aria-hidden>
                    <ScrollSection3D variant="torus" height={280} />
                </div>
                <div className="container" style={{ position: 'relative', zIndex: 10 }}>
                    <h2 className="section-title" style={{ color: 'white' }}>Ready to Build Something Amazing?</h2>
                    <p style={{ marginBottom: '30px', color: '#cbd5e1' }}>Contact us today and let's turn your vision into a digital reality.</p>
                    <Link to="/contact" className="btn btn-primary">Start Your Project</Link>
                </div>
            </section>
        </>
    );
};

export default Home;

