import React from 'react';
import { Link } from 'react-router-dom';
import { NICHE_DEMO_LIST } from '../../data/nicheDemos';
import { SITE_NAME } from '../../seo/siteConfig';

export default function DemoFooter() {
    return (
        <footer className="demo-footer">
            <div className="demo-footer__inner">
                <div className="demo-footer__grid" data-aos="fade-up" data-aos-duration="600">
                    <div className="demo-footer__col">
                        <p className="demo-footer__heading">About these pages</p>
                        <p className="demo-footer__text">
                            Sample one-page layouts for sharing with clients or on social—each opens in its own browser tab
                            from the main {SITE_NAME} site.
                        </p>
                    </div>
                    <div className="demo-footer__col">
                        <p className="demo-footer__heading">Explore demos</p>
                        <ul className="demo-footer__list">
                            {NICHE_DEMO_LIST.map((demo) => (
                                <li key={demo.slug}>
                                    <Link to={demo.path}>{demo.label}</Link>
                                </li>
                            ))}
                        </ul>
                    </div>
                    <div className="demo-footer__col">
                        <p className="demo-footer__heading">{SITE_NAME}</p>
                        <ul className="demo-footer__list">
                            <li>
                                <Link to="/">Main site home</Link>
                            </li>
                            <li>
                                <Link to="/services">Services</Link>
                            </li>
                            <li>
                                <Link to="/contact">Contact</Link>
                            </li>
                            <li>
                                <Link to="/privacy">Privacy</Link>
                            </li>
                        </ul>
                    </div>
                </div>
                <div className="demo-footer__bar" data-aos="fade-up" data-aos-delay="80" data-aos-duration="500">
                    <span>© {new Date().getFullYear()} {SITE_NAME}. Demo layouts are for illustration.</span>
                    <a href="mailto:hello@nymbloc.com">hello@nymbloc.com</a>
                </div>
            </div>
        </footer>
    );
}
