import React from 'react';
import PageHeader3D from '../components/three/PageHeader3D';

const Contact = () => {
    return (
        <>
            <section className="page-header page-header-with-3d">
                <PageHeader3D variant="orbs" />
                <div className="container">
                    <span className="section-subtitle">Get In Touch</span>
                    <h1 className="section-title reveal-text">Contact Our Team</h1>
                    <p style={{ maxWidth: '700px', margin: '0 auto', color: 'var(--text-light)' }}>Have a project in mind? We'd love to hear from you. Fill out the form below and we'll get back to you within 24 hours.</p>
                </div>
            </section>

            <section className="section-padding">
                <div className="container">
                    <div className="contact-wrapper">
                        <div className="contact-info-card">
                            <h2>Contact Information</h2>
                            <p style={{ marginBottom: '40px', color: '#cbd5e1' }}>Whether you're looking for a full-scale SaaS platform or a simple WordPress site, we're here to help.</p>
                            
                            <div className="info-item">
                                <svg fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"/></svg>
                                <div className="info-text">
                                    <h4>Email Us</h4>
                                    <p>hello@nymbloc.com</p>
                                </div>
                            </div>
                            
                            <div className="info-item">
                                <svg fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"/></svg>
                                <div className="info-text">
                                    <h4>Call Us</h4>
                                    <p>+1 740 762 6613</p>
                                </div>
                            </div>
                            
                            <div className="info-item">
                                <svg fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"/><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"/></svg>
                                <div className="info-text">
                                    <h4>Visit Us</h4>
                                    <p>101 Tech Avenue, Innovation City</p>
                                </div>
                            </div>
                        </div>

                        <form 
                            className="contact-form" 
                            action="https://formsubmit.co/hello@nymbloc.com" 
                            method="POST"
                        >
                            {/* Form Configuration */}
                            <input type="hidden" name="_subject" value="New NYMBLOC Consultation Request" />
                            <input type="hidden" name="_template" value="table" />
                            <input type="hidden" name="_captcha" value="true" />
                            
                            <div className="form-group">
                                <label style={{ color: 'white', opacity: 0.8, fontSize: '0.9rem', marginBottom: '8px', display: 'block' }}>Full Name</label>
                                <input type="text" name="name" placeholder="John Doe" required />
                            </div>
                            <div className="form-group">
                                <label style={{ color: 'white', opacity: 0.8, fontSize: '0.9rem', marginBottom: '8px', display: 'block' }}>Email Address</label>
                                <input type="email" name="email" placeholder="john@example.com" required />
                            </div>
                            <div className="form-group">
                                <label style={{ color: 'white', opacity: 0.8, fontSize: '0.9rem', marginBottom: '8px', display: 'block' }}>Interested Service</label>
                                <select name="service" required defaultValue="">
                                    <option value="" disabled>Select Service</option>
                                    <option value="website">Website Development</option>
                                    <option value="application">Application Development</option>
                                    <option value="frontend">React &amp; Frontend</option>
                                    <option value="backend">Laravel &amp; Backend</option>
                                    <option value="wordpress">Custom WordPress</option>
                                </select>
                            </div>
                            <div className="form-group">
                                <label style={{ color: 'white', opacity: 0.8, fontSize: '0.9rem', marginBottom: '8px', display: 'block' }}>Project Details</label>
                                <textarea name="message" placeholder="Tell us about your project goals..." required></textarea>
                            </div>
                            <button type="submit" className="submit-btn" style={{ fontWeight: 800 }}>Launch Project →</button>
                            
                            <p style={{ marginTop: '20px', fontSize: '0.8rem', color: 'var(--text-light)', textAlign: 'center' }}>
                                Form submissions are automatically routed to <br /> 
                                <strong style={{ color: 'var(--accent-orange)' }}>hello@nymbloc.com</strong>
                            </p>
                        </form>
                    </div>
                </div>
            </section>
        </>
    );
};

export default Contact;
