import { Suspense } from 'react';
import { Canvas } from '@react-three/fiber';
import { BlocksScene } from './BlocksScene';

/**
 * Full-viewport WebGL layer for the home hero (pointer-events none — UI stays clickable).
 */
export default function HeroScene3D({ scrollProgressRef, reduced }) {
  return (
    <div className="hero-3d-canvas-wrap" aria-hidden="true">
      <Canvas
        gl={{
          alpha: true,
          antialias: !reduced,
          powerPreference: 'high-performance',
        }}
        dpr={reduced ? [1, 1.25] : [1, 1.75]}
        camera={{ position: [0, 0, 14], fov: 42, near: 0.1, far: 200 }}
      >
        <color attach="background" args={['transparent']} />
        <Suspense fallback={null}>
          <BlocksScene scrollProgressRef={scrollProgressRef} reduced={reduced} />
        </Suspense>
      </Canvas>
    </div>
  );
}
