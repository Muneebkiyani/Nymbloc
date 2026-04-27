import React, { useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import { ScrollTrigger } from '../utils/gsapClient';
import Header from './Header';
import Footer from './Footer';
import Seo from './Seo';
import AOS from 'aos';
import { useSmoothScroll } from '../hooks/useSmoothScroll';

const Layout = ({ children }) => {
    const { pathname } = useLocation();
    useSmoothScroll();

    useEffect(() => {
        AOS.init({
            /* Subtle fades; repeat on scroll so sections fade in / out (AdSense-safe: no infinite loops, no flashing ads) */
            duration: 520,
            once: false,
            offset: 56,
            easing: 'ease-out-cubic',
            delay: 0,
            anchorPlacement: 'top-bottom',
        });

        return () => {};
    }, []);

    useEffect(() => {
        AOS.refresh();
        requestAnimationFrame(() => ScrollTrigger.refresh());
    }, [pathname]);

    return (
        <div className="app-layout site-shell">
            <Seo />
            <Header />
            <main className="site-main">{children}</main>
            <Footer />
        </div>
    );
};

export default Layout;
