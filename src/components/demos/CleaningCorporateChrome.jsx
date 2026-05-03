import React, { useEffect, useState } from 'react';

const NAV = [
    { label: 'Home', href: '#cc-top' },
    { label: 'About', href: '#cc-about' },
    { label: 'Services', href: '#cc-services' },
    { label: 'Stories', href: '#cc-stories' },
    { label: 'Work', href: '#cc-gallery' },
    { label: 'Contact', href: '#cc-contact' },
];

export function CleaningCorporateHeader({ wa, topBar, brandShort }) {
    const [open, setOpen] = useState(false);

    useEffect(() => {
        document.body.style.overflow = open ? 'hidden' : '';
        return () => {
            document.body.style.overflow = '';
        };
    }, [open]);

    const close = () => setOpen(false);

    return (
        <header className="cc-chrome">
            <div className="cc-chrome__topbar" aria-label="Contact strip">
                <div className="cc-chrome__topbar-inner">
                    <div className="cc-chrome__topbar-contact">
                        <a href={`tel:${String(topBar?.phone).replace(/[^\d+]/g, '')}`} className="cc-chrome__topbar-link">
                            {topBar?.phone}
                        </a>
                        <span className="cc-chrome__topbar-sep" aria-hidden>
                            |
                        </span>
                        <a href={`mailto:${topBar?.email}`} className="cc-chrome__topbar-link">
                            {topBar?.email}
                        </a>
                    </div>
                    <div className="cc-chrome__topbar-social">
                        <a href="https://www.linkedin.com" className="cc-chrome__social" target="_blank" rel="noopener noreferrer" aria-label="LinkedIn">
                            in
                        </a>
                        <a href="https://twitter.com" className="cc-chrome__social" target="_blank" rel="noopener noreferrer" aria-label="X">
                            𝕏
                        </a>
                    </div>
                </div>
            </div>
            <div className="cc-chrome__main">
                <div className="cc-chrome__main-inner">
                    <a href="#cc-top" className="cc-chrome__brand" onClick={close}>
                        <span className="cc-chrome__logo" aria-hidden>
                            PC
                        </span>
                        <span className="cc-chrome__brand-name">{brandShort}</span>
                    </a>
                    <button
                        type="button"
                        className="cc-chrome__burger"
                        aria-expanded={open}
                        aria-controls="cc-chrome-nav"
                        aria-label={open ? 'Close menu' : 'Open menu'}
                        onClick={() => setOpen(!open)}
                    >
                        {open ? '✕' : '☰'}
                    </button>
                    <nav id="cc-chrome-nav" className={`cc-chrome__nav ${open ? 'cc-chrome__nav--open' : ''}`}>
                        <ul className="cc-chrome__links">
                            {NAV.map((item) => (
                                <li key={item.href}>
                                    <a href={item.href} className="cc-chrome__link" onClick={close}>
                                        {item.label}
                                    </a>
                                </li>
                            ))}
                        </ul>
                        <button type="button" className="cc-chrome__search" aria-label="Search (demo only)" onClick={close}>
                            ⌕
                        </button>
                        <a href={wa} className="cc-btn cc-btn--header" target="_blank" rel="noopener noreferrer" onClick={close}>
                            Book now <span aria-hidden>→</span>
                        </a>
                    </nav>
                </div>
            </div>
        </header>
    );
}

export function CleaningCorporateFooter({ wa, brandShort }) {
    return (
        <footer className="cc-footer" id="cc-contact">
            <div className="cc-footer__inner">
                <div className="cc-footer__top">
                    <a href={wa} className="cc-btn cc-btn--footer" target="_blank" rel="noopener noreferrer">
                        Contact us <span aria-hidden>→</span>
                    </a>
                    <div className="cc-footer__social">
                        <a href="https://www.linkedin.com" target="_blank" rel="noopener noreferrer" aria-label="LinkedIn">
                            LinkedIn
                        </a>
                        <a href="https://twitter.com" target="_blank" rel="noopener noreferrer" aria-label="X">
                            X
                        </a>
                        <a href={wa} target="_blank" rel="noopener noreferrer" aria-label="WhatsApp">
                            WhatsApp
                        </a>
                    </div>
                </div>
                <div className="cc-footer__rule" />
                <div className="cc-footer__grid">
                    <div>
                        <p className="cc-footer__label">Find us</p>
                        <p className="cc-footer__text">128 Service Yard, Docklands Business Park</p>
                        <p className="cc-footer__text">Sample address for layout only.</p>
                    </div>
                    <div>
                        <p className="cc-footer__label">Contact</p>
                        <p className="cc-footer__text">
                            <a href="mailto:hello@nymbloc.com">hello@nymbloc.com</a>
                        </p>
                        <p className="cc-footer__text">+92 316 5423233</p>
                    </div>
                    <div>
                        <p className="cc-footer__label">Sample brand</p>
                        <p className="cc-footer__text">This page demonstrates a corporate cleaning layout pattern for client previews.</p>
                    </div>
                </div>
                <div className="cc-footer__mark-wrap">
                    <span className="cc-footer__mark" aria-hidden>
                        PC
                    </span>
                    <p className="cc-footer__mark-label">{brandShort}</p>
                </div>
                <p className="cc-footer__legal">© {new Date().getFullYear()} {brandShort} — demo layout. Insurance and certification copy is illustrative only.</p>
            </div>
        </footer>
    );
}
