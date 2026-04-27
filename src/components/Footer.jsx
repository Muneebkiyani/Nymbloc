import React from 'react';
import { Link } from 'react-router-dom';

const Footer = () => {
    return (
        <footer
            className="robot-footer"
            data-aos="fade-up"
            data-aos-delay="80"
            data-aos-once="true"
        >
            <div className="container">
                <div className="footer-grid">
                    <div className="footer-col">
                        <img src="/assets/logo-footer.png" alt="NYMBLOC" className="footer-logo" style={{ height: '80px', width: 'auto', maxWidth: '300px', objectFit: 'contain', marginBottom: '20px' }} />
                        <p style={{ marginBottom: '25px' }}>Precision-built digital systems—websites, applications, and WordPress platforms engineered for scale.</p>
                        <p className="social-links" style={{ marginBottom: 0 }}>
                            <a href="mailto:hello@nymbloc.com?subject=NYMBLOC%20inquiry">Email us</a>
                            {' · '}
                            <Link to="/contact">Contact form</Link>
                        </p>
                    </div>
                    <div className="footer-col">
                        <h4>Company</h4>
                        <ul>
                            <li><Link to="/">Home</Link></li>
                            <li><Link to="/about">About Us</Link></li>
                            <li><Link to="/blog">Blog</Link></li>
                            <li><Link to="/faq">FAQ</Link></li>
                            <li><Link to="/contact">Contact</Link></li>
                            <li><Link to="/privacy">Privacy Policy</Link></li>
                            <li><Link to="/terms">Terms of Service</Link></li>
                        </ul>
                    </div>
                    <div className="footer-col">
                        <h4>Services</h4>
                        <ul>
                            <li><Link to="/services/website">Website Development</Link></li>
                            <li><Link to="/services/application">Application Development</Link></li>
                            <li><Link to="/services/wordpress">WordPress Sites</Link></li>
                        </ul>
                    </div>
                    <div className="footer-col">
                        <h4>Contact Us</h4>
                        <div className="footer-contact-item">
                            <svg fill="none" viewBox="0 0 24 24" stroke="currentColor" width="18"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"/></svg>
                            <span>hello@nymbloc.com</span>
                        </div>
                        <div className="footer-contact-item">
                            <svg fill="none" viewBox="0 0 24 24" stroke="currentColor" width="18"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"/></svg>
                            <span>+1 740 762 6613</span>
                        </div>
                        <div className="footer-contact-item">
                            <svg fill="none" viewBox="0 0 24 24" stroke="currentColor" width="18"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"/><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"/></svg>
                            <span>101 Tech Avenue, Innovation City</span>
                        </div>
                    </div>
                </div>
                <div className="footer-bottom">
                    <p>&copy; 2026 NYMBLOC. All rights reserved.</p>
                    <div className="footer-bottom-links">
                        <Link to="/privacy">Privacy</Link>
                        <Link to="/terms">Terms</Link>
                    </div>
                </div>
            </div>
        </footer>
    );
};

export default Footer;
