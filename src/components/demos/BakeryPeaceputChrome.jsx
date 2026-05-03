import React, { useEffect, useState } from 'react';

const NAV = [
    { label: 'top', href: '#pp-top' },
    { label: 'brand', href: '#pp-brand' },
    { label: 'story', href: '#pp-story-0' },
    { label: 'recruit', href: '#pp-recruit' },
    { label: 'news', href: '#pp-news' },
    { label: 'contact', href: '#pp-contact' },
];

export function BakeryPeaceputHeader({ wa, wordmark }) {
    const [open, setOpen] = useState(false);
    const [scrolled, setScrolled] = useState(false);

    useEffect(() => {
        document.body.style.overflow = open ? 'hidden' : '';
        return () => {
            document.body.style.overflow = '';
        };
    }, [open]);

    useEffect(() => {
        const onScroll = () => setScrolled(window.scrollY > 32);
        onScroll();
        window.addEventListener('scroll', onScroll, { passive: true });
        return () => window.removeEventListener('scroll', onScroll);
    }, []);

    const close = () => setOpen(false);

    return (
        <header className={`pp-header ${scrolled ? 'pp-header--solid' : ''}`}>
            <div className="pp-header__inner">
                <a href="#pp-top" className="pp-header__brand" onClick={close}>
                    <span className="pp-header__mark" aria-hidden>
                        P
                    </span>
                    <span className="pp-header__wordmark">{wordmark}</span>
                </a>
                <button
                    type="button"
                    className="pp-header__burger"
                    aria-expanded={open}
                    aria-controls="pp-header-nav"
                    aria-label={open ? 'Close menu' : 'Open menu'}
                    onClick={() => setOpen(!open)}
                >
                    {open ? '✕' : '☰'}
                </button>
                <nav id="pp-header-nav" className={`pp-header__nav ${open ? 'pp-header__nav--open' : ''}`}>
                    <ul className="pp-header__links">
                        {NAV.map((item) => (
                            <li key={item.href}>
                                <a href={item.href} className="pp-header__link" onClick={close}>
                                    {item.label}
                                </a>
                            </li>
                        ))}
                    </ul>
                    <a href={wa} className="pp-header__order" target="_blank" rel="noopener noreferrer" onClick={close}>
                        order now
                    </a>
                </nav>
            </div>
        </header>
    );
}

export function BakeryPeaceputFooter({ wa, pp, wordmark }) {
    const markQ = pp?.footerMarkQuestion ?? '?';
    const markP = pp?.footerMarkEmoji ?? ':P';
    const tag = (pp?.footerTagline ?? '').split('\n');

    return (
        <footer className="pp-footer" id="pp-contact">
            <div className="pp-footer__hero">
                <div className="pp-footer__mark" aria-hidden>
                    <span className="pp-footer__mark-q">{markQ}</span>
                    <span className="pp-footer__mark-p">{markP}</span>
                </div>
                <div className="pp-footer__tag">
                    {tag.map((line) => (
                        <span key={line}>
                            {line}
                            <br />
                        </span>
                    ))}
                </div>
            </div>
            <div className="pp-footer__grid">
                <div>
                    <p className="pp-footer__label">{wordmark}</p>
                    <ul className="pp-footer__list">
                        <li>
                            <a href="#pp-top">top</a>
                        </li>
                        <li>
                            <a href="#pp-brand">brand</a>
                        </li>
                        <li>
                            <a href="#pp-story-0">story</a>
                        </li>
                    </ul>
                </div>
                <div>
                    <p className="pp-footer__label">company</p>
                    <ul className="pp-footer__list">
                        <li>
                            <a href="#pp-recruit">recruit</a>
                        </li>
                        <li>
                            <a href="#pp-news">news</a>
                        </li>
                        <li>
                            <a href={wa} target="_blank" rel="noopener noreferrer">
                                contact
                            </a>
                        </li>
                    </ul>
                </div>
                <div>
                    <p className="pp-footer__label">sample</p>
                    <ul className="pp-footer__list">
                        <li>
                            <a href="https://peaceput.com/" target="_blank" rel="noopener noreferrer">
                                reference: peace put
                            </a>
                        </li>
                    </ul>
                </div>
            </div>
            <div className="pp-footer__bottom">
                <p className="pp-footer__copy">
                    © {new Date().getFullYear()} {wordmark} · demo layout
                </p>
                <p className="pp-footer__fine">{pp?.footerDisclaimer}</p>
            </div>
        </footer>
    );
}
