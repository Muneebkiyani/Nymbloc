import { useRef } from 'react';
import { useFrame } from '@react-three/fiber';

/** Shared scroll progress (0–1) drives rotation; clock adds idle drift */
function useScrollMotion(scrollProgressRef, groupRef, opts = {}) {
    const { spinY = 0.2, spinX = 0.08, idle = 0.12 } = opts;
    useFrame((state) => {
        if (!groupRef.current) return;
        const p = scrollProgressRef?.current ?? 0;
        const t = state.clock.elapsedTime;
        groupRef.current.rotation.y = p * Math.PI * 2 * spinY + t * idle;
        groupRef.current.rotation.x = p * 0.85 * spinX + Math.sin(t * 0.15) * 0.05;
    });
}

export function TorusScrollScene({ scrollProgressRef }) {
    const groupRef = useRef(null);
    useScrollMotion(scrollProgressRef, groupRef, { spinY: 0.35, spinX: 0.12, idle: 0.15 });

    return (
        <group ref={groupRef}>
            <ambientLight intensity={0.45} />
            <pointLight position={[6, 8, 6]} intensity={1.1} color="#f59e0b" />
            <pointLight position={[-6, -4, -4]} intensity={0.55} color="#38bdf8" />
            <mesh>
                <torusKnotGeometry args={[0.85, 0.26, 120, 16]} />
                <meshStandardMaterial
                    color="#1e293b"
                    metalness={0.55}
                    roughness={0.28}
                    emissive="#f59e0b"
                    emissiveIntensity={0.12}
                />
            </mesh>
            <mesh position={[1.2, -0.6, 0.4]} scale={0.35}>
                <icosahedronGeometry args={[1, 0]} />
                <meshStandardMaterial
                    color="#1e293b"
                    metalness={0.4}
                    roughness={0.35}
                    emissive="#38bdf8"
                    emissiveIntensity={0.1}
                />
            </mesh>
        </group>
    );
}

export function OrbClusterScene({ scrollProgressRef }) {
    const groupRef = useRef(null);
    useScrollMotion(scrollProgressRef, groupRef, { spinY: 0.28, spinX: 0.1, idle: 0.08 });

    const orbs = [
        { pos: [0, 0.35, 0], s: 0.55, color: '#1e293b', em: '#f59e0b', ei: 0.14 },
        { pos: [-0.9, -0.35, 0.1], s: 0.38, color: '#172033', em: '#38bdf8', ei: 0.1 },
        { pos: [0.85, -0.2, -0.1], s: 0.32, color: '#0f172a', em: '#94a3b8', ei: 0.06 },
    ];

    return (
        <group ref={groupRef}>
            <ambientLight intensity={0.5} />
            <pointLight position={[6, 8, 6]} intensity={1} color="#f59e0b" />
            <pointLight position={[-5, -3, -5]} intensity={0.45} color="#38bdf8" />
            {orbs.map((o, i) => (
                <mesh key={i} position={o.pos} scale={o.s}>
                    <sphereGeometry args={[1, 48, 48]} />
                    <meshStandardMaterial
                        color={o.color}
                        metalness={0.45}
                        roughness={0.25}
                        emissive={o.em}
                        emissiveIntensity={o.ei}
                    />
                </mesh>
            ))}
        </group>
    );
}

export function BlocksMiniScene({ scrollProgressRef }) {
    const groupRef = useRef(null);
    useScrollMotion(scrollProgressRef, groupRef, { spinY: 0.32, spinX: 0.14, idle: 0.18 });

    const blocks = [
        { pos: [0.9, 0.4, -0.3], s: 0.45, em: '#f59e0b', ei: 0.14 },
        { pos: [-0.7, -0.1, 0.2], s: 0.55, em: '#0f172a', ei: 0.04 },
        { pos: [0.2, -0.65, 0.5], s: 0.38, em: '#38bdf8', ei: 0.1 },
        { pos: [-0.35, 0.55, -0.4], s: 0.32, em: '#0f172a', ei: 0.04 },
    ];

    return (
        <group ref={groupRef}>
            <ambientLight intensity={0.42} />
            <pointLight position={[8, 6, 8]} intensity={1.05} color="#f59e0b" />
            <pointLight position={[-6, -4, -4]} intensity={0.5} color="#38bdf8" />
            <mesh>
                <boxGeometry args={[2.2, 2.2, 2.2]} />
                <meshBasicMaterial color="#38bdf8" wireframe transparent opacity={0.1} depthWrite={false} />
            </mesh>
            {blocks.map((b, i) => (
                <mesh key={i} position={b.pos} scale={b.s}>
                    <boxGeometry args={[1, 1, 1]} />
                    <meshStandardMaterial
                        color="#1e293b"
                        metalness={0.5}
                        roughness={0.32}
                        emissive={b.em}
                        emissiveIntensity={b.ei}
                    />
                </mesh>
            ))}
        </group>
    );
}

export function RingScrollScene({ scrollProgressRef }) {
    const groupRef = useRef(null);
    useScrollMotion(scrollProgressRef, groupRef, { spinY: 0.4, spinX: 0.06, idle: 0.2 });

    return (
        <group ref={groupRef}>
            <ambientLight intensity={0.4} />
            <pointLight position={[6, 8, 6]} intensity={1.1} color="#38bdf8" />
            <pointLight position={[-6, -4, -4]} intensity={0.55} color="#f59e0b" />
            <mesh rotation={[Math.PI / 2, 0, 0]}>
                <torusGeometry args={[1.1, 0.08, 32, 100]} />
                <meshStandardMaterial
                    color="#1e293b"
                    metalness={0.65}
                    roughness={0.22}
                    emissive="#38bdf8"
                    emissiveIntensity={0.18}
                />
            </mesh>
            <mesh rotation={[Math.PI / 2, 0, 0]}>
                <torusGeometry args={[0.65, 0.06, 24, 64]} />
                <meshStandardMaterial
                    color="#172033"
                    metalness={0.5}
                    roughness={0.3}
                    emissive="#f59e0b"
                    emissiveIntensity={0.12}
                />
            </mesh>
            <mesh position={[0, 0, 0]}>
                <octahedronGeometry args={[0.45, 0]} />
                <meshStandardMaterial
                    color="#0f172a"
                    metalness={0.45}
                    roughness={0.35}
                    emissive="#f59e0b"
                    emissiveIntensity={0.15}
                />
            </mesh>
        </group>
    );
}
