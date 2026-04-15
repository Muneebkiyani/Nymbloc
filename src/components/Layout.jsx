import React, { useEffect, useRef } from 'react';
import { useLocation } from 'react-router-dom';
import { ScrollTrigger } from '../utils/gsapClient';
import { useRobotScrollFX } from '../hooks/useRobotScrollFX';
import Header from './Header';
import Footer from './Footer';
import SplineBackground from './spline/SplineBackground';
import { usePrefersReducedMotion } from '../hooks/usePrefersReducedMotion';
import AOS from 'aos';
import 'aos/dist/aos.css';

const Layout = ({ children }) => {
    const { pathname } = useLocation();
    const reducedMotion = usePrefersReducedMotion();
    useRobotScrollFX(true);

    useEffect(() => {
        document.body.classList.add('robot-site');
        return () => document.body.classList.remove('robot-site');
    }, []);
    const cursorRef = useRef(null);
    const progressRef = useRef(null);

    useEffect(() => {
        // Initialize AOS
        AOS.init({
            duration: 1000,
            once: true,
            offset: 100,
            easing: 'ease-out-quint'
        });

        // Scroll Progress
        const handleScroll = () => {
            const totalHeight = document.documentElement.scrollHeight - window.innerHeight;
            const progress = totalHeight <= 0 ? 0 : (window.pageYOffset / totalHeight) * 100;
            if (progressRef.current) {
                progressRef.current.style.width = progress + '%';
            }
        };

        // Custom Cursor
        const handleMouseMove = (e) => {
            if (cursorRef.current) {
                cursorRef.current.style.left = e.clientX + 'px';
                cursorRef.current.style.top = e.clientY + 'px';

                const target = e.target;
                const isHoverable =
                    target.closest('a') ||
                    target.closest('button') ||
                    target.closest('.benefit-card') ||
                    target.closest('.portfolio-item') ||
                    target.closest('.service-card') ||
                    target.closest('.robot-card');
                
                if (isHoverable) {
                    cursorRef.current.style.transform = 'translate(-50%, -50%) scale(2.5)';
                    cursorRef.current.style.backgroundColor = 'rgba(245, 158, 11, 0.4)';
                } else {
                    cursorRef.current.style.transform = 'translate(-50%, -50%) scale(1)';
                    cursorRef.current.style.backgroundColor = 'var(--accent-orange)';
                }
            }

            // Cards Proximity Effect
            const cards = document.querySelectorAll(
                '.benefit-card, .service-card, .expertise-card, .culture-card, .stat-card, .benefit-item, .step-content, .robot-card, .robot-process-card, .pricing-card'
            );
            cards.forEach(card => {
                const rect = card.getBoundingClientRect();
                const x = e.clientX - rect.left;
                const y = e.clientY - rect.top;
                card.style.setProperty('--mouse-x', x + 'px');
                card.style.setProperty('--mouse-y', y + 'px');
            });
        };

        window.addEventListener('scroll', handleScroll);
        window.addEventListener('mousemove', handleMouseMove);

        return () => {
            window.removeEventListener('scroll', handleScroll);
            window.removeEventListener('mousemove', handleMouseMove);
        };
    }, []);

    useEffect(() => {
        AOS.refresh();
        requestAnimationFrame(() => ScrollTrigger.refresh());
    }, [pathname]);

    return (
        <div className="app-layout">
            {pathname !== '/' && (
                <SplineBackground reducedMotion={reducedMotion} staticScene />
            )}
            <div className="scroll-progress" ref={progressRef}></div>
            <div className="custom-cursor" ref={cursorRef}></div>
            <Header />
            <main className="robot-main">{children}</main>
            <Footer />
        </div>
    );
};

export default Layout;
