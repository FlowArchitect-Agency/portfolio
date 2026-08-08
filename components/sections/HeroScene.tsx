'use client';

import { useRef, useMemo } from 'react';
import { Canvas, useFrame } from '@react-three/fiber';
import { Line, Float } from '@react-three/drei';
import * as THREE from 'three';

function NodeCluster() {
  const groupRef = useRef<THREE.Group>(null!);

  // Generate node positions in a sphere
  const count = 42;
  const [positions, connections] = useMemo(() => {
    const pos: [number, number, number][] = [];
    const radius = 2.8;

    for (let i = 0; i < count; i++) {
      const u = Math.random();
      const v = Math.random();
      const theta = u * 2.0 * Math.PI;
      const phi = Math.acos(2.0 * v - 1.0);
      const r = Math.cbrt(Math.random()) * radius;

      const x = r * Math.sin(phi) * Math.cos(theta);
      const y = r * Math.sin(phi) * Math.sin(theta);
      const z = r * Math.cos(phi);
      pos.push([x, y, z]);
    }

    // Connect nodes that are close to each other
    const conn: [[number, number, number], [number, number, number]][] = [];
    for (let i = 0; i < count; i++) {
      for (let j = i + 1; j < count; j++) {
        const p1 = pos[i];
        const p2 = pos[j];
        const dist = Math.hypot(p1[0] - p2[0], p1[1] - p2[1], p1[2] - p2[2]);
        if (dist < 1.6) {
          conn.push([p1, p2]);
        }
      }
    }

    return [pos, conn];
  }, []);

  useFrame((state) => {
    if (!groupRef.current) return;
    // Slow ambient rotation
    groupRef.current.rotation.y = state.clock.getElapsedTime() * 0.12;
    groupRef.current.rotation.x = Math.sin(state.clock.getElapsedTime() * 0.08) * 0.15;

    // React to pointer
    const targetX = (state.pointer.x * Math.PI) / 6;
    const targetY = (state.pointer.y * Math.PI) / 6;

    groupRef.current.rotation.y += (targetX - groupRef.current.rotation.y) * 0.05;
    groupRef.current.rotation.x += (-targetY - groupRef.current.rotation.x) * 0.05;
  });

  return (
    <group ref={groupRef}>
      {/* Node Spheres */}
      {positions.map((pos, idx) => (
        <mesh key={idx} position={pos}>
          <sphereGeometry args={[idx % 5 === 0 ? 0.07 : 0.04, 16, 16]} />
          <meshBasicMaterial
            color={idx % 7 === 0 ? '#FF3B00' : idx % 3 === 0 ? '#111318' : '#888890'}
          />
        </mesh>
      ))}

      {/* Connecting Graph Lines */}
      {connections.map((line, idx) => (
        <Line
          key={idx}
          points={line}
          color="#DCDAD4"
          lineWidth={0.8}
          transparent
          opacity={0.65}
        />
      ))}
    </group>
  );
}

export default function HeroScene() {
  return (
    <div className="w-full h-full relative cursor-grab active:cursor-grabbing">
      <Canvas
        camera={{ position: [0, 0, 6], fov: 45 }}
        gl={{ antialias: true, alpha: true }}
        dpr={[1, 2]}
      >
        <ambientLight intensity={0.8} />
        <Float speed={1.5} rotationIntensity={0.2} floatIntensity={0.4}>
          <NodeCluster />
        </Float>
      </Canvas>
    </div>
  );
}
