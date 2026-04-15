import React, { useState, useEffect } from 'react';
import { NavLink, Link } from 'react-router-dom';

const Header = () => {
    const [isMenuOpen, setIsMenuOpen] = useState(false);
    const [isScrolled, setIsScrolled] = useState(false);
    const [isServicesOpen, setIsServicesOpen] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
            setIsScrolled(window.scrollY > 50);
        };
        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    const closeMenu = () => {
        setIsMenuOpen(false);
        setIsServicesOpen(false);
    };

    return (
        <header className={`robot-header ${isScrolled ? 'header-scrolled' : ''}`}>
            <div className="container nav-container">
                <button className="mobile-menu-btn" aria-label="Toggle Menu" onClick={() => setIsMenuOpen(!isMenuOpen)}>
                    {isMenuOpen ? '✕' : '☰'}
                </button>

                <Link to="/" className="logo" onClick={closeMenu}>
                    <img src="/assets/logo-header.png" alt="NYMBLOC Logo" style={{ height: '60px', width: 'auto', maxWidth: '250px', objectFit: 'contain' }} />
                </Link>

                <nav>
                    <ul className={`nav-links ${isMenuOpen ? 'active' : ''}`}>
                        <li><NavLink to="/" className={({ isActive }) => isActive ? 'active-link' : ''} onClick={closeMenu} end>Home</NavLink></li>
                        <li><NavLink to="/about" className={({ isActive }) => isActive ? 'active-link' : ''} onClick={closeMenu}>About</NavLink></li>
                        <li
                            className="dropdown"
                            onMouseEnter={() => window.innerWidth > 992 && setIsServicesOpen(true)}
                            onMouseLeave={() => window.innerWidth > 992 && setIsServicesOpen(false)}
                        >
                            <NavLink
                                to="/services"
                                className={({ isActive }) => (isActive || isServicesOpen) ? 'active-link dropdown-toggle' : 'dropdown-toggle'}
                                onClick={(e) => {
                                    if (window.innerWidth <= 992) {
                                        e.preventDefault();
                                        setIsServicesOpen(!isServicesOpen);
                                    } else {
                                        closeMenu();
                                    }
                                }}
                            >
                                Services <span className={`arrow ${isServicesOpen ? 'up' : ''}`}>▾</span>
                            </NavLink>
                            <ul className={`dropdown-menu ${isServicesOpen ? 'show' : ''}`}>
                                <li><Link to="/services/website" onClick={closeMenu}>Website Development</Link></li>
                                <li><Link to="/services/application" onClick={closeMenu}>Application Development</Link></li>
                                <li><Link to="/services/wordpress" onClick={closeMenu}>WordPress Sites</Link></li>
                            </ul>
                        </li>
                        <li><NavLink to="/faq" className={({ isActive }) => isActive ? 'active-link' : ''} onClick={closeMenu}>FAQ</NavLink></li>
                        <li><Link to="/contact" className="btn btn-primary" style={{ padding: '8px 20px', color: 'white' }} onClick={closeMenu}>Contact</Link></li>
                    </ul>
                </nav>
            </div>
        </header>
    );
};

export default Header;
