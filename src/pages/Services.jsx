import React from 'react';

const Services = () => {
    return (
        <>
            <section className="page-header">
                <div className="container">
                    <span className="section-subtitle">What We Do</span>
                    <h1 className="section-title reveal-text">Expert Services</h1>
                    <p style={{ maxWidth: '700px', margin: '0 auto', color: 'var(--text-light)' }}>We provide a wide range of digital services tailored to your business needs, from initial concept to final launch.</p>
                </div>
            </section>

            <section className="section-padding">
                <div className="container">
                    <div className="services-detail">
                        {/* SaaS */}
                        <div className="service-row">
                            <div className="service-image" data-aos="fade-right">
                                <img src="/assets/expertise.jpg" alt="SaaS Development" />
                            </div>
                            <div className="service-text" data-aos="fade-left">
                                <div className="service-icon-large">
                                    <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M18 10h-1.26A8 8 0 1 0 9 20h9a5 5 0 0 0 0-10z"></path></svg>
                                </div>
                                <h2 className="section-title">SaaS Development</h2>
                                <p>We specialize in building multi-tenant Software as a Service applications. Our solutions include secure user authentication, subscription management with Stripe or PayPal integration, and scalable cloud infrastructure on AWS or DigitalOcean.</p>
                                <br />
                                <p>Whether you're building a CRM, an ERP, or a specialized niche tool, we ensure your SaaS is built to handle growth from day one.</p>
                            </div>
                        </div>

                        {/* React */}
                        <div className="service-row">
                            <div className="service-image" data-aos="fade-left">
                                <img src="/assets/react.png" alt="React Development" />
                            </div>
                            <div className="service-text" data-aos="fade-right">
                                <div className="service-icon-large">
                                    <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><polygon points="13 2 3 14 12 14 11 22 21 10 12 10 13 2"></polygon></svg>
                                </div>
                                <h2 className="section-title">React & Frontend</h2>
                                <p>Our frontend team creates blazing-fast, reactive user interfaces using React, Next.js, and TypeScript. We focus on performance, accessibility (a11y), and providing a seamless user experience across all devices.</p>
                                <br />
                                <p>From complex dashboards to landing pages that convert, we bring your designs to life with clean, maintainable code.</p>
                            </div>
                        </div>

                        {/* Laravel */}
                        <div className="service-row">
                            <div className="service-image" data-aos="fade-right">
                                <img src="/assets/laravel.png" alt="Laravel Development" />
                            </div>
                            <div className="service-text" data-aos="fade-left">
                                <div className="service-icon-large">
                                    <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><rect x="2" y="3" width="20" height="14" rx="2" ry="2"></rect><line x1="8" y1="21" x2="16" y2="21"></line><line x1="12" y1="17" x2="12" y2="21"></line></svg>
                                </div>
                                <h2 className="section-title">Laravel Backend</h2>
                                <p>We leverage the elegance and power of the Laravel PHP framework to build robust, secure backends. We handle API development, database architecture (PostgreSQL, MySQL), and complex business logic with ease.</p>
                                <br />
                                <p>Our Laravel solutions are built following best practices, ensuring your application is easy to maintain and scale as your user base grows.</p>
                            </div>
                        </div>

                        {/* WordPress */}
                        <div className="service-row">
                            <div className="service-image" data-aos="fade-left">
                                <img src="/assets/wordpress.png" alt="WordPress Development" />
                            </div>
                            <div className="service-text" data-aos="fade-right">
                                <div className="service-icon-large">
                                    <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M12 19l7-7 3 3-7 7-3-3z"></path><path d="M18 13l-1.5-7.5L2 2l3.5 14.5L13 18l5-5z"></path><path d="M2 2l7.586 7.586"></path><circle cx="11" cy="11" r="2"></circle></svg>
                                </div>
                                <h2 className="section-title">Custom WordPress</h2>
                                <p>More than just templates—we build custom WordPress themes and plugins tailored to your specific requirements. We optimize for speed (Core Web Vitals) and SEO, ensuring your site performs as well as it looks.</p>
                                <br />
                                <p>Whether it's a content-heavy news site or a custom WooCommerce store, we turn WordPress into a professional business platform.</p>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </>
    );
};

export default Services;
