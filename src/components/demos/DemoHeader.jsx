import React, { useEffect, useState } from 'react';
import { NavLink, Link } from 'react-router-dom';
import { NICHE_DEMO_LIST } from '../../data/nicheDemos';
import { SITE_NAME } from '../../seo/siteConfig';

export default function DemoHeader() {
    const [open, setOpen] = useState(false);
    const [scrolled, setScrolled] = useState(false);

    useEffect(() => {
        const onScroll = () => setScrolled(window.scrollY > 8);
        window.addEventListener('scroll', onScroll, { passive: true });
        return () => window.removeEventListener('scroll', onScroll);
    }, []);

    useEffect(() => {
        document.body.style.overflow = open ? 'hidden' : '';
        return () => {
            document.body.style.overflow = '';
        };
    }, [open]);

    const close = () => setOpen(false);

    return (
        <header className={`demo-header ${scrolled ? 'demo-header--scrolled' : ''}`}>
            {open ? (
                <button type="button" className="demo-header__backdrop" aria-label="Close menu" onClick={close} />
            ) : null}
            <div className="demo-header__inner">
                <Link to="/" className="demo-header__brand" onClick={close}>
                    <img src="/assets/logo-header.png" alt={`${SITE_NAME} home`} className="demo-header__logo" />
                    <span className="demo-header__brand-text">
                        <span className="demo-header__name">{SITE_NAME}</span>
                        <span className="demo-header__tag">Layout demo</span>
                    </span>
                </Link>

                <button
                    type="button"
                    className="demo-header__menu-btn"
                    aria-expanded={open}
                    aria-controls="demo-header-nav"
                    aria-label={open ? 'Close menu' : 'Open menu'}
                    onClick={() => setOpen(!open)}
                >
                    {open ? '✕' : '☰'}
                </button>

                <nav id="demo-header-nav" className={`demo-header__nav ${open ? 'demo-header__nav--open' : ''}`}>
                    <ul className="demo-header__links">
                        {NICHE_DEMO_LIST.map((demo) => (
                            <li key={demo.slug}>
                                <NavLink
                                    to={demo.path}
                                    className={({ isActive }) => (isActive ? 'demo-header__link demo-header__link--active' : 'demo-header__link')}
                                    onClick={close}
                                >
                                    {demo.label}
                                </NavLink>
                            </li>
                        ))}
                    </ul>
                    <div className="demo-header__actions">
                        <Link to="/demos" className="demo-header__ghost" onClick={close}>
                            Demo hub
                        </Link>
                        <Link to="/contact" className="demo-header__cta" onClick={close}>
                            Hire {SITE_NAME}
                        </Link>
                    </div>
                </nav>
            </div>
        </header>
    );
}
