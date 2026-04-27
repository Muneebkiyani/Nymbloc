import React from 'react';

const Contact = () => {
    return (
        <>
            <section className="page-header robot-page-header page-header-simple" data-aos="fade-down">
                <div className="container">
                    <span className="section-subtitle">Get in touch</span>
                    <h1 className="section-title reveal-text">Contact our team</h1>
                    <p className="page-header-lead">
                        Have a project in mind? Share a few details below. We typically reply within one business day.
                    </p>
                </div>
            </section>

            <section className="section-padding robot-page-section" data-aos="fade-up">
                <div className="container">
                    <div className="contact-wrapper">
                        <div className="contact-info-card" data-aos="fade-up" data-aos-delay="0">
                            <h2>Contact information</h2>
                            <p className="contact-info-lead">Whether you need a product build or a WordPress site, we are here to help.</p>
                            
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
                            data-aos="fade-up"
                            data-aos-delay="80"
                        >
                            {/* Form Configuration */}
                            <input type="hidden" name="_subject" value="New NYMBLOC Consultation Request" />
                            <input type="hidden" name="_template" value="table" />
                            <input type="hidden" name="_captcha" value="true" />
                            
                            <div className="form-group">
                                <label className="form-label">Full name</label>
                                <input type="text" name="name" placeholder="John Doe" required />
                            </div>
                            <div className="form-group">
                                <label className="form-label">Email address</label>
                                <input type="email" name="email" placeholder="john@example.com" required />
                            </div>
                            <div className="form-group">
                                <label className="form-label">Interested service</label>
                                <select name="service" required defaultValue="">
                                    <option value="" disabled>Select Service</option>
                                    <option value="website">Website Development</option>
                                    <option value="application">Application Development</option>
                                    <option value="wordpress">WordPress Sites</option>
                                </select>
                            </div>
                            <div className="form-group">
                                <label className="form-label">Project details</label>
                                <textarea name="message" placeholder="Tell us about your project goals..." required></textarea>
                            </div>
                            <button type="submit" className="submit-btn">Send message →</button>
                            
                            <p className="contact-form-footnote">
                                Submissions are sent to{' '}
                                <strong className="contact-form-email">hello@nymbloc.com</strong>
                            </p>
                        </form>
                    </div>
                </div>
            </section>
        </>
    );
};

export default Contact;
