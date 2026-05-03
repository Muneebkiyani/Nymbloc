import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { SITE_NAME } from '../../seo/siteConfig';
import { NICHE_DEMO_LIST } from '../../data/nicheDemos';

/** In-page anchors — must match ids on `RestaurantFarmLayout`. */
const RF_NAV = [
    { label: 'Home', href: '#rf-top' },
    { label: 'Our services', href: '#rf-services' },
    { label: 'Why us', href: '#rf-why' },
    { label: 'Gallery', href: '#rf-gallery' },
    { label: 'Experiences', href: '#rf-experience' },
    { label: 'Enquire', href: '#rf-enquire' },
];

/**
 * Container / FARMform-style site header: near-black bar, serif wordmark, horizontal nav, reserve CTA.
 */
export function RestaurantFarmHeader({ wa }) {
    const [open, setOpen] = useState(false);

    useEffect(() => {
        document.body.style.overflow = open ? 'hidden' : '';
        return () => {
            document.body.style.overflow = '';
        };
    }, [open]);

    const close = () => setOpen(false);

    return (
        <header className="rf-site-header" data-aos="fade-down" data-aos-duration="600" data-aos-once="true">
            <div className="rf-site-header__inner">
                <a href="#rf-top" className="rf-site-header__brand" onClick={close}>
                    <span className="rf-site-header__wordmark">Ember Yard</span>
                    <span className="rf-site-header__eyebrow">Dining · Private dining · Events</span>
                </a>

                <button
                    type="button"
                    className="rf-site-header__burger"
                    aria-expanded={open}
                    aria-controls="rf-site-nav"
                    aria-label={open ? 'Close menu' : 'Open menu'}
                    onClick={() => setOpen(!open)}
                >
                    {open ? '✕' : '☰'}
                </button>

                <nav id="rf-site-nav" className={`rf-site-header__nav ${open ? 'rf-site-header__nav--open' : ''}`}>
                    <ul className="rf-site-header__links">
                        {RF_NAV.map((item) => (
                            <li key={item.href}>
                                <a href={item.href} className="rf-site-header__link" onClick={close}>
                                    {item.label}
                                </a>
                            </li>
                        ))}
                    </ul>
                    <a href={wa} className="rf-site-header__reserve" target="_blank" rel="noopener noreferrer" onClick={close}>
                        Reserve
                    </a>
                </nav>
            </div>
        </header>
    );
}

/**
 * Container / FARMform-style footer: centered serif CTA, contact + social, menu column, bottom bar.
 */
export function RestaurantFarmFooter({ wa }) {
    return (
        <footer className="rf-chrome-footer" id="rf-contact">
            <div className="rf-chrome-footer__inner">
                <p
                    className="rf-chrome-footer__cta"
                    data-aos="fade-up"
                    data-aos-duration="700"
                >
                    Be the first at our table—where fire meets flavor. Get specials, wine drops, and chef’s notes.
                </p>
                <div className="rf-chrome-footer__grid" data-aos="fade-up" data-aos-delay="60" data-aos-duration="650">
                    <div className="rf-chrome-footer__col">
                        <p className="rf-chrome-footer__label">Contact</p>
                        <p>
                            <a href="mailto:hello@nymbloc.com">hello@nymbloc.com</a>
                        </p>
                        <p>
                            <a href={wa} target="_blank" rel="noopener noreferrer">
                                WhatsApp +92 316 5423233
                            </a>
                        </p>
                        <p className="rf-chrome-footer__muted">101 Tech Avenue, Innovation City</p>
                        <div className="rf-chrome-social" aria-label="Social">
                            <a href="https://facebook.com" target="_blank" rel="noopener noreferrer" className="rf-chrome-social__btn" aria-label="Facebook">
                                f
                            </a>
                            <a href="https://instagram.com" target="_blank" rel="noopener noreferrer" className="rf-chrome-social__btn" aria-label="Instagram">
                                in
                            </a>
                            <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer" className="rf-chrome-social__btn" aria-label="LinkedIn">
                                Li
                            </a>
                        </div>
                    </div>
                    <div className="rf-chrome-footer__col rf-chrome-footer__col--menu">
                        <p className="rf-chrome-footer__label">Menu</p>
                        <nav className="rf-chrome-footer__nav">
                            <Link to="/">Home</Link>
                            <Link to="/about">About</Link>
                            <Link to="/services">Services</Link>
                            <Link to="/blog">Blog</Link>
                            <Link to="/faq">FAQ</Link>
                            <Link to="/contact">Contact</Link>
                        </nav>
                    </div>
                </div>
                <p className="rf-chrome-footer__samples">
                    <span className="rf-chrome-footer__samples-label">Other layout demos · </span>
                    {NICHE_DEMO_LIST.filter((d) => d.slug !== 'restaurants').map((d, i, arr) => (
                        <React.Fragment key={d.slug}>
                            <Link to={d.path}>{d.label}</Link>
                            {i < arr.length - 1 ? ' · ' : null}
                        </React.Fragment>
                    ))}
                </p>
                <div className="rf-chrome-footer__bar">
                    <span>
                        © {new Date().getFullYear()} Ember Yard demo · {SITE_NAME}
                    </span>
                    <a href={wa} target="_blank" rel="noopener noreferrer">
                        +92 316 5423233
                    </a>
                </div>
            </div>
        </footer>
    );
}
