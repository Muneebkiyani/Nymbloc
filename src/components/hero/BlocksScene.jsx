import { useRef } from 'react';
import { useFrame } from '@react-three/fiber';
import { Stars } from '@react-three/drei';

/** Static layout — brand blocks + cyan wireframe “core” */
const BLOCKS = [
  { position: [3.4, 1.1, -1.2], scale: 0.72, color: '#1e293b', emissive: '#0f172a', speed: 0.9 },
  { position: [-2.8, 0.6, 0.4], scale: 0.55, color: '#172033', emissive: '#1e293b', speed: 1.1 },
  { position: [1.2, -1.4, -2.5], scale: 0.95, color: '#1e293b', emissive: '#f59e0b', emissiveIntensity: 0.12, speed: 0.75 },
  { position: [-1.5, 2.0, -1.8], scale: 0.48, color: '#0f172a', emissive: '#38bdf8', emissiveIntensity: 0.08, speed: 1.2 },
  { position: [4.1, -0.9, 0.8], scale: 0.62, color: '#1e293b', emissive: '#0f172a', speed: 0.85 },
  { position: [-3.6, -1.2, -0.6], scale: 0.88, color: '#172033', emissive: '#f59e0b', emissiveIntensity: 0.1, speed: 0.95 },
  { position: [0.2, 2.4, 0.2], scale: 0.4, color: '#0f172a', emissive: '#94a3b8', emissiveIntensity: 0.06, speed: 1.35 },
  { position: [2.1, -2.0, 1.5], scale: 0.58, color: '#1e293b', emissive: '#0f172a', speed: 1.0 },
  { position: [-4.0, 1.5, 1.0], scale: 0.5, color: '#172033', emissive: '#0f172a', speed: 1.15 },
  { position: [5.0, 0.2, -2.8], scale: 0.45, color: '#0f172a', emissive: '#38bdf8', emissiveIntensity: 0.07, speed: 1.25 },
  { position: [-0.8, -2.2, -1.5], scale: 0.7, color: '#1e293b', emissive: '#0f172a', speed: 0.8 },
  { position: [1.8, 1.6, 2.2], scale: 0.52, color: '#172033', emissive: '#f59e0b', emissiveIntensity: 0.09, speed: 1.05 },
  { position: [-2.2, -0.4, 2.6], scale: 0.68, color: '#1e293b', emissive: '#0f172a', speed: 0.88 },
  { position: [3.0, 2.2, 1.4], scale: 0.42, color: '#0f172a', emissive: '#94a3b8', emissiveIntensity: 0.05, speed: 1.3 },
];

function FloatingBlock({
  position,
  scale,
  color,
  emissive,
  emissiveIntensity = 0.04,
  speed,
}) {
  const meshRef = useRef(null);
  useFrame((_, delta) => {
    if (!meshRef.current) return;
    meshRef.current.rotation.x += delta * 0.12 * speed;
    meshRef.current.rotation.y += delta * 0.18 * speed;
  });

  return (
    <mesh ref={meshRef} position={position} scale={scale}>
      <boxGeometry args={[1, 1, 1]} />
      <meshStandardMaterial
        color={color}
        metalness={0.45}
        roughness={0.35}
        emissive={emissive}
        emissiveIntensity={emissiveIntensity}
      />
    </mesh>
  );
}

export function BlocksScene({ scrollProgressRef, reduced }) {
  const groupRef = useRef(null);
  const blocks = reduced ? BLOCKS.slice(0, 7) : BLOCKS;

  useFrame((state) => {
    if (!groupRef.current) return;
    const t = state.clock.elapsedTime;
    const p = scrollProgressRef?.current ?? 0;
    groupRef.current.rotation.y = p * 0.85 + Math.sin(t * 0.11) * 0.07;
    groupRef.current.rotation.x = p * 0.14 + Math.cos(t * 0.09) * 0.035;
  });

  return (
    <group ref={groupRef}>
      <ambientLight intensity={0.38} />
      <pointLight position={[12, 10, 8]} intensity={1.15} color="#f59e0b" />
      <pointLight position={[-10, -6, -4]} intensity={0.55} color="#38bdf8" />
      <spotLight position={[0, 14, 10]} angle={0.45} penumbra={0.85} intensity={0.65} color="#ffffff" />

      <mesh position={[0, 0, 0]}>
        <boxGeometry args={[5.2, 5.2, 5.2]} />
        <meshBasicMaterial color="#38bdf8" wireframe transparent opacity={0.11} depthWrite={false} />
      </mesh>

      {blocks.map((b, i) => (
        <FloatingBlock key={i} {...b} />
      ))}

      {!reduced && (
        <Stars radius={90} depth={45} count={600} factor={3.2} saturation={0.15} fade speed={0.35} />
      )}
    </group>
  );
}
