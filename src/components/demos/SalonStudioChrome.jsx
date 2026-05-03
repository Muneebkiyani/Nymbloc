import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { SITE_NAME } from '../../seo/siteConfig';

const SALON_NAV = [
    { label: 'Home', href: '#salon-top' },
    { label: 'Services', href: '#salon-services' },
    { label: 'Gallery', href: '#salon-gallery' },
    { label: 'About', href: '#salon-about' },
    { label: 'Contact', href: '#salon-contact' },
];

export function SalonStudioHeader({ wa }) {
    const [open, setOpen] = useState(false);

    useEffect(() => {
        document.body.style.overflow = open ? 'hidden' : '';
        return () => {
            document.body.style.overflow = '';
        };
    }, [open]);

    const close = () => setOpen(false);

    return (
        <header className="salon-chrome-header">
            <div className="salon-chrome-header__inner">
                <a href="#salon-top" className="salon-chrome-header__brand" onClick={close}>
                    <span className="salon-chrome-header__mark" aria-hidden>
                        LA
                    </span>
                    <span className="salon-chrome-header__brand-text">
                        <span className="salon-chrome-header__wordmark">Linen Atelier</span>
                        <span className="salon-chrome-header__tag">Hair · Colour · Bridal</span>
                    </span>
                </a>

                <button
                    type="button"
                    className="salon-chrome-header__burger"
                    aria-expanded={open}
                    aria-controls="salon-chrome-nav"
                    aria-label={open ? 'Close menu' : 'Open menu'}
                    onClick={() => setOpen(!open)}
                >
                    {open ? '✕' : '☰'}
                </button>

                <nav id="salon-chrome-nav" className={`salon-chrome-header__nav ${open ? 'salon-chrome-header__nav--open' : ''}`}>
                    <ul className="salon-chrome-header__links">
                        {SALON_NAV.map((item) => (
                            <li key={item.href}>
                                <a href={item.href} className="salon-chrome-header__link" onClick={close}>
                                    {item.label}
                                </a>
                            </li>
                        ))}
                    </ul>
                    <a href={wa} className="salon-chrome-header__cta" target="_blank" rel="noopener noreferrer" onClick={close}>
                        Book
                    </a>
                </nav>
            </div>
        </header>
    );
}

export function SalonStudioFooter({ wa }) {
    return (
        <footer className="salon-chrome-footer" id="salon-contact">
            <div className="salon-chrome-footer__inner">
                <div className="salon-chrome-footer__grid">
                    <div>
                        <p className="salon-chrome-footer__brand">Linen Atelier</p>
                        <p className="salon-chrome-footer__text">
                            Sample studio layout by {SITE_NAME}—booking, gallery, and WhatsApp handoff in one calm scroll.
                        </p>
                    </div>
                    <div>
                        <p className="salon-chrome-footer__label">Visit</p>
                        <p className="salon-chrome-footer__text">128 Crown Street, Beauty Quarter</p>
                        <p className="salon-chrome-footer__text">
                            <a href="mailto:hello@nymbloc.com">hello@nymbloc.com</a>
                        </p>
                        <p className="salon-chrome-footer__text">
                            <a href={wa} target="_blank" rel="noopener noreferrer">
                                WhatsApp +92 316 5423233
                            </a>
                        </p>
                    </div>
                    <div>
                        <p className="salon-chrome-footer__label">Follow</p>
                        <div className="salon-chrome-social">
                            <a href="https://instagram.com" target="_blank" rel="noopener noreferrer" aria-label="Instagram">
                                Ig
                            </a>
                            <a href="https://facebook.com" target="_blank" rel="noopener noreferrer" aria-label="Facebook">
                                Fb
                            </a>
                            <a href="https://pinterest.com" target="_blank" rel="noopener noreferrer" aria-label="Pinterest">
                                Pt
                            </a>
                        </div>
                        <nav className="salon-chrome-footer__mini">
                            <Link to="/">NYMBLOC home</Link>
                            <Link to="/contact">Hire us</Link>
                        </nav>
                    </div>
                </div>
                <p className="salon-chrome-footer__bar">
                    © {new Date().getFullYear()} Linen Atelier demo · {SITE_NAME}
                </p>
            </div>
        </footer>
    );
}
