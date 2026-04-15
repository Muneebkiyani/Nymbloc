import { useEffect } from 'react';
import { gsap, ScrollTrigger } from '../utils/gsapClient';

/**
 * Parallax for [data-robot-parallax] (numeric strength, e.g. 0.15).
 */
export function useRobotScrollFX(enabled = true) {
    useEffect(() => {
        if (!enabled) return undefined;

        const ctx = gsap.context(() => {
            document.querySelectorAll('[data-robot-parallax]').forEach((el) => {
                const raw = el.getAttribute('data-robot-parallax') || '0.12';
                const amt = parseFloat(raw) || 0.12;
                gsap.fromTo(
                    el,
                    { y: -48 * amt },
                    {
                        y: 48 * amt,
                        ease: 'none',
                        scrollTrigger: {
                            trigger: el,
                            start: 'top bottom',
                            end: 'bottom top',
                            scrub: true,
                        },
                    }
                );
            });
        });

        requestAnimationFrame(() => ScrollTrigger.refresh());

        return () => ctx.revert();
    }, [enabled]);
}
