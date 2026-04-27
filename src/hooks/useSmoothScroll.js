import { useEffect } from 'react';
import Lenis from 'lenis';
import AOS from 'aos';
import { ScrollTrigger } from '../utils/gsapClient';

/**
 * Lenis smooth scrolling + ScrollTrigger sync. Disabled on small viewports so AOS + native scroll work reliably.
 * Skipped when user prefers reduced motion.
 */
export function useSmoothScroll() {
    useEffect(() => {
        if (typeof window === 'undefined') return undefined;
        if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) return undefined;
        if (window.matchMedia('(max-width: 767px)').matches) return undefined;

        const lenis = new Lenis({
            duration: 1.05,
            easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t)),
            smoothWheel: true,
            touchMultiplier: 1.1,
        });

        lenis.on('scroll', ScrollTrigger.update);

        let aosTimer;
        lenis.on('scroll', () => {
            clearTimeout(aosTimer);
            aosTimer = setTimeout(() => {
                AOS.refresh();
            }, 120);
        });

        let rafId = 0;
        const raf = (time) => {
            lenis.raf(time);
            rafId = requestAnimationFrame(raf);
        };
        rafId = requestAnimationFrame(raf);

        return () => {
            clearTimeout(aosTimer);
            cancelAnimationFrame(rafId);
            lenis.destroy();
        };
    }, []);
}
