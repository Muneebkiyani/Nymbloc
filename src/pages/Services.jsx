import React from 'react';
import { Link } from 'react-router-dom';
import PageHeader3D from '../components/three/PageHeader3D';

const Services = () => {
    return (
        <>
            <section className="page-header page-header-with-3d">
                <PageHeader3D variant="blocks" />
                <div className="container">
                    <span className="section-subtitle">What We Do</span>
                    <h1 className="section-title reveal-text">Expert Services</h1>
                    <p style={{ maxWidth: '700px', margin: '0 auto', color: 'var(--text-light)' }}>We provide a wide range of digital services tailored to your business needs, from initial concept to final launch.</p>
                </div>
            </section>

            <section className="section-padding">
                <div className="container">
                    <div className="services-detail">
                        {/* Website Development */}
                        <div className="service-row">
                            <div className="service-image" data-aos="fade-right">
                                <img src="/assets/hero.jpg" alt="Website Development" className="responsive-img" />
                            </div>
                            <div className="service-text" data-aos="fade-left">
                                <div className="service-icon-large">
                                    <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><rect x="2" y="3" width="20" height="14" rx="2" ry="2"></rect><line x1="8" y1="21" x2="16" y2="21"></line><line x1="12" y1="17" x2="12" y2="21"></line></svg>
                                </div>
                                <h2 className="section-title">Website Development</h2>
                                <p>We create stunning, high-performance websites that serve as the digital cornerstone of your brand. From high-converting landing pages to complex e-commerce platforms, we build with speed, SEO, and conversion in mind.</p>
                                <br />
                                <Link to="/services/website" className="btn btn-outline" style={{ borderRadius: '10px', fontSize: '0.9rem' }}>Learn More & Pricing</Link>
                            </div>
                        </div>

                        {/* Application Development */}
                        <div className="service-row">
                            <div className="service-image" data-aos="fade-left">
                                <img src="/assets/expertise.jpg" alt="Application Development" className="responsive-img" />
                            </div>
                            <div className="service-text" data-aos="fade-right">
                                <div className="service-icon-large">
                                    <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M18 10h-1.26A8 8 0 1 0 9 20h9a5 5 0 0 0 0-10z"></path></svg>
                                </div>
                                <h2 className="section-title">Application Development</h2>
                                <p>We build sophisticated software solutions and SaaS platforms designed for scale. Our development team tackles complex business logic, multi-tenant architectures, and enterprise-grade security to ensure your application is built to handle growth from day one.</p>
                                <br />
                                <Link to="/services/application" className="btn btn-outline" style={{ borderRadius: '10px', fontSize: '0.9rem' }}>Learn More & Pricing</Link>
                            </div>
                        </div>

                        {/* React & Frontend */}
                        <div className="service-row">
                            <div className="service-image" data-aos="fade-right">
                                <img src="/assets/react.png" alt="React and frontend development" className="responsive-img" />
                            </div>
                            <div className="service-text" data-aos="fade-left">
                                <div className="service-icon-large">
                                    <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><circle cx="12" cy="12" r="10"></circle><path d="M12 6v6l4 2"></path></svg>
                                </div>
                                <h2 className="section-title">React &amp; Frontend</h2>
                                <p>High-performance interfaces with React and Next.js—component-driven architecture, accessibility, and speed that convert visitors into customers.</p>
                                <br />
                                <Link to="/services/frontend" className="btn btn-outline" style={{ borderRadius: '10px', fontSize: '0.9rem' }}>Learn More &amp; Pricing</Link>
                            </div>
                        </div>

                        {/* Laravel & Backend */}
                        <div className="service-row">
                            <div className="service-image" data-aos="fade-left">
                                <img src="/assets/laravel.png" alt="Laravel and backend development" className="responsive-img" />
                            </div>
                            <div className="service-text" data-aos="fade-right">
                                <div className="service-icon-large">
                                    <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M4 19h16M4 15l4-4 4 4 4-4 4 4M4 7h16"></path></svg>
                                </div>
                                <h2 className="section-title">Laravel &amp; Backend</h2>
                                <p>Secure APIs, business logic, and scalable data layers—built with Laravel and solid architecture so your product can grow with confidence.</p>
                                <br />
                                <Link to="/services/backend" className="btn btn-outline" style={{ borderRadius: '10px', fontSize: '0.9rem' }}>Learn More &amp; Pricing</Link>
                            </div>
                        </div>

                        {/* WordPress */}
                        <div className="service-row">
                            <div className="service-image" data-aos="fade-left">
                                <img src="/assets/wordpress.png" alt="WordPress Development" className="responsive-img" />
                            </div>
                            <div className="service-text" data-aos="fade-right">
                                <div className="service-icon-large">
                                    <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M12 19l7-7 3 3-7 7-3-3z"></path><path d="M18 13l-1.5-7.5L2 2l3.5 14.5L13 18l5-5z"></path><path d="M2 2l7.586 7.586"></path><circle cx="11" cy="11" r="2"></circle></svg>
                                </div>
                                <h2 className="section-title">Custom WordPress</h2>
                                <p>More than just templates—we build custom WordPress themes and plugins tailored to your specific requirements. We optimize for speed (Core Web Vitals) and SEO, ensuring your site performs as well as it looks.</p>
                                <br />
                                <p>Whether it's a content-heavy news site or a custom WooCommerce store, we turn WordPress into a professional business platform.</p>
                                <br />
                                <Link to="/services/wordpress" className="btn btn-outline" style={{ borderRadius: '10px', fontSize: '0.9rem' }}>Learn More & Pricing</Link>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </>
    );
};

export default Services;
