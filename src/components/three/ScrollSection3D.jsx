import { Suspense, useRef, useEffect, useState } from 'react';
import { Canvas } from '@react-three/fiber';
import { ScrollTrigger } from '../../utils/gsapClient';
import { usePrefersReducedMotion } from '../../hooks/usePrefersReducedMotion';
import {
    TorusScrollScene,
    OrbClusterScene,
    BlocksMiniScene,
    RingScrollScene,
} from './scrollScenes';

const VARIANTS = {
    torus: TorusScrollScene,
    orbs: OrbClusterScene,
    blocks: BlocksMiniScene,
    rings: RingScrollScene,
};

/**
 * Scroll-scrubbed 3D accent: rotation driven by GSAP ScrollTrigger while the block crosses the viewport.
 * Mounts WebGL only while the container is near/in view (IntersectionObserver).
 */
export default function ScrollSection3D({
    variant = 'torus',
    height = 300,
    className = '',
}) {
    const wrapRef = useRef(null);
    const progressRef = useRef(0);
    const [inView, setInView] = useState(false);
    const reduced = usePrefersReducedMotion();

    useEffect(() => {
        const el = wrapRef.current;
        if (!el) return undefined;
        const io = new IntersectionObserver(
            ([e]) => setInView(e.isIntersecting),
            { rootMargin: '180px 0px', threshold: 0 }
        );
        io.observe(el);
        return () => io.disconnect();
    }, []);

    useEffect(() => {
        if (!inView || reduced) return undefined;
        const el = wrapRef.current;
        if (!el) return undefined;
        const st = ScrollTrigger.create({
            trigger: el,
            start: 'top bottom',
            end: 'bottom top',
            scrub: 0.45,
            onUpdate: (self) => {
                progressRef.current = self.progress;
            },
        });
        const raf = requestAnimationFrame(() => ScrollTrigger.refresh());
        return () => {
            cancelAnimationFrame(raf);
            st.kill();
        };
    }, [inView, reduced]);

    const Scene = VARIANTS[variant] || VARIANTS.torus;
    const h = typeof height === 'number' ? `${height}px` : height;

    if (reduced) {
        return (
            <div
                className={`scroll-3d-fallback ${className}`}
                style={{ height: h, width: '100%' }}
                aria-hidden
            />
        );
    }

    return (
        <div
            ref={wrapRef}
            className={`scroll-3d-wrap ${className}`}
            style={{ height: h, width: '100%' }}
        >
            {inView && (
                <Suspense
                    fallback={
                        <div
                            className="scroll-3d-fallback-inner"
                            style={{ height: '100%' }}
                            aria-hidden
                        />
                    }
                >
                    <Canvas
                        gl={{
                            alpha: true,
                            antialias: true,
                            powerPreference: 'high-performance',
                        }}
                        dpr={[1, 1.35]}
                        camera={{ position: [0, 0, 4.2], fov: 42, near: 0.1, far: 100 }}
                        style={{ width: '100%', height: '100%', display: 'block' }}
                    >
                        <Scene scrollProgressRef={progressRef} />
                    </Canvas>
                </Suspense>
            )}
        </div>
    );
}
