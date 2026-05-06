import React from 'react';
import { Link } from 'react-router-dom';

const About = () => {
    return (
        <>
            <section className="page-header robot-page-header page-header-simple" data-aos="fade-down">
                <div className="container">
                    <span className="section-subtitle">Get to know us</span>
                    <h1 className="section-title reveal-text">About NYMBLOC</h1>
                    <p className="page-header-lead">
                        NYMBLOC is a remote-first web studio: we plan, design, and build marketing sites, WordPress and
                        WooCommerce stores, and custom web applications for teams that care about clarity, speed, and
                        maintainability—not buzzwords on a slide deck.
                    </p>
                </div>
            </section>

            <section className="section-padding robot-page-section section--mobile-grid" data-aos="fade-up">
                <div className="container">
                    <div className="about-grid">
                        <div className="about-image" data-aos="fade-right">
                            <img src="/assets/expertise.jpg" alt="NYMBLOC Team" className="responsive-img" />
                        </div>
                        <div className="about-text" data-aos="fade-left">
                            <h2 className="section-title">Our story</h2>
                            <p>
                                NYMBLOC started from a simple frustration: too many business websites looked polished in a
                                pitch deck but felt slow, vague, or fragile once real customers used them. We wanted a
                                practice where scope is honest, performance is planned—not patched later—and content owners
                                can update copy without breaking layout.
                            </p>
                            <br />
                            <p>
                                Today we ship production-grade React and static sites, WordPress and WooCommerce builds,
                                and application-style experiences when logged-in workflows or integrations are the core
                                product. Every engagement combines UX judgment with engineering discipline: accessibility
                                basics, sensible analytics, security hygiene, and hosting choices that match how much you
                                want to operate yourself.
                            </p>
                            <br />
                            <p>
                                Our{' '}
                                <Link to="/blog" className="text-link">
                                    blog
                                </Link>{' '}
                                is written for operators and owners—pricing guides, hosting trade-offs, SEO and analytics
                                primers—not keyword fluff. We cite sources, avoid hype, and update articles when standards
                                change so readers get durable guidance.
                            </p>
                            <ul className="feature-list" style={{ marginTop: '20px' }}>
                                <li>
                                    <svg fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" />
                                    </svg>
                                    Documented discovery, milestones, and staging before launch
                                </li>
                                <li>
                                    <svg fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" />
                                    </svg>
                                    Performance, SEO structure, and accessibility treated as requirements—not extras
                                </li>
                                <li>
                                    <svg fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" />
                                    </svg>
                                    Source ownership and clear handoffs when the build is complete
                                </li>
                            </ul>
                        </div>
                    </div>

                    <div className="mission-vision" data-aos="fade-up">
                        <div className="mv-card" data-aos="fade-up" data-aos-delay="0">
                            <h3>Our mission</h3>
                            <p>
                                Help growing organizations ship digital experiences that load fast, explain clearly, and
                                stay secure—without trapping them in opaque retainers or stacks they cannot operate.
                            </p>
                        </div>
                        <div className="mv-card" data-aos="fade-up" data-aos-delay="80">
                            <h3>Our Vision</h3>
                            <p>
                                To be a dependable partner for teams that care about quality—known for honest scoping,
                                careful execution, and long-term support when you need it.
                            </p>
                        </div>
                    </div>
                </div>
            </section>

            <section className="culture-section section-padding robot-page-section section--mobile-grid" data-aos="fade-up">
                <div className="container">
                    <div className="text-center" style={{ marginBottom: '50px' }}>
                        <span className="section-subtitle">Our Values</span>
                        <h2 className="section-title reveal-text">What Drives NYMBLOC</h2>
                    </div>
                    <div className="culture-grid">
                        <div className="culture-card" data-aos="fade-up" data-aos-delay="0">
                            <span className="culture-icon">🎯</span>
                            <h3>Precision</h3>
                            <p>We believe in getting it right the first time. Our rigorous testing and code review processes ensure that every release is stable and high-performing.</p>
                        </div>
                        <div className="culture-card" data-aos="zoom-in" data-aos-delay="100">
                            <span className="culture-icon">🤝</span>
                            <h3>Transparency</h3>
                            <p>No black boxes here. We maintain open communication channels and provide full visibility into our development process via shared boards and weekly demos.</p>
                        </div>
                        <div className="culture-card" data-aos="fade-up" data-aos-delay="160">
                            <span className="culture-icon">🚀</span>
                            <h3>Agility</h3>
                            <p>The digital landscape changes fast. Our agile mindset allows us to pivot and adapt to your feedback, ensuring the end product meets your evolving needs.</p>
                        </div>
                    </div>
                </div>
            </section>
        </>
    );
};

export default About;
