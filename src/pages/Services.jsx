import React from 'react';
import { Link } from 'react-router-dom';
import PageHeader3D from '../components/three/PageHeader3D';

const Services = () => {
    return (
        <>
            <section className="page-header page-header-with-3d robot-page-header" data-aos="fade-down">
                <PageHeader3D variant="blocks" />
                <div className="container">
                    <span className="section-subtitle">What We Do</span>
                    <h1 className="section-title reveal-text robot-heading">Expert Services</h1>
                    <p style={{ maxWidth: '700px', margin: '0 auto', color: 'var(--text-light)' }}>
                        Three focused lines of work—websites, applications, and WordPress—delivered with engineering discipline.
                    </p>
                </div>
            </section>

            <section className="section-padding robot-page-section" data-aos="fade-up">
                <div className="container">
                    <div className="services-detail">
                        <div className="service-row">
                            <div className="service-image" data-aos="fade-right">
                                <img src="/assets/hero.jpg" alt="Website Development" className="responsive-img" />
                            </div>
                            <div className="service-text" data-aos="fade-left">
                                <div className="service-icon-large">
                                    <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><rect x="2" y="3" width="20" height="14" rx="2" ry="2"></rect><line x1="8" y1="21" x2="16" y2="21"></line><line x1="12" y1="17" x2="12" y2="21"></line></svg>
                                </div>
                                <h2 className="section-title robot-heading">Website Development</h2>
                                <p>High-performance marketing sites, landing pages, and web platforms—React, Next.js, SEO, and conversion-focused UX.</p>
                                <br />
                                <Link to="/services/website" className="btn btn-outline" style={{ borderRadius: '10px', fontSize: '0.9rem' }}>Pricing &amp; Details</Link>
                            </div>
                        </div>

                        <div className="service-row">
                            <div className="service-image" data-aos="fade-left">
                                <img src="/assets/expertise.jpg" alt="Application Development" className="responsive-img" />
                            </div>
                            <div className="service-text" data-aos="fade-right">
                                <div className="service-icon-large">
                                    <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M18 10h-1.26A8 8 0 1 0 9 20h9a5 5 0 0 0 0-10z"></path></svg>
                                </div>
                                <h2 className="section-title robot-heading">Application Development</h2>
                                <p>Web and mobile apps, SaaS, APIs, auth, and integrations—built for scale and maintainability.</p>
                                <br />
                                <Link to="/services/application" className="btn btn-outline" style={{ borderRadius: '10px', fontSize: '0.9rem' }}>Pricing &amp; Details</Link>
                            </div>
                        </div>

                        <div className="service-row">
                            <div className="service-image" data-aos="fade-left">
                                <img src="/assets/wordpress.png" alt="WordPress" className="responsive-img" />
                            </div>
                            <div className="service-text" data-aos="fade-right">
                                <div className="service-icon-large">
                                    <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M12 19l7-7 3 3-7 7-3-3z"></path><path d="M18 13l-1.5-7.5L2 2l3.5 14.5L13 18l5-5z"></path><path d="M2 2l7.586 7.586"></path><circle cx="11" cy="11" r="2"></circle></svg>
                                </div>
                                <h2 className="section-title robot-heading">WordPress Sites</h2>
                                <p>Custom themes, WooCommerce, and plugins—fast, secure, and tailored to your content and commerce goals.</p>
                                <br />
                                <Link to="/services/wordpress" className="btn btn-outline" style={{ borderRadius: '10px', fontSize: '0.9rem' }}>Pricing &amp; Details</Link>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </>
    );
};

export default Services;
