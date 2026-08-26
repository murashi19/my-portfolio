import { Suspense, useMemo, useRef } from "react";
import { Canvas, useFrame } from "@react-three/fiber";
import { Float, MeshDistortMaterial, Points, PointMaterial } from "@react-three/drei";
import * as THREE from "three";

/**
 * Signature hero visual: a distorted glass icosahedron core
 * (the "build") surrounded by a slowly rotating particle shell
 * (the "system" around it). Camera drifts gently with the
 * cursor. Kept deliberately lightweight for performance.
 */
function Core() {
  const meshRef = useRef();
  useFrame((state, delta) => {
    meshRef.current.rotation.x += delta * 0.08;
    meshRef.current.rotation.y += delta * 0.12;
  });

  return (
    <Float speed={1.4} rotationIntensity={0.4} floatIntensity={0.9}>
      <mesh ref={meshRef}>
        <icosahedronGeometry args={[1.4, 4]} />
        <MeshDistortMaterial
          color="#3b82f6"
          attach="material"
          distort={0.35}
          speed={1.6}
          roughness={0.15}
          metalness={0.4}
          emissive="#8b5cf6"
          emissiveIntensity={0.15}
          transparent
          opacity={0.92}
        />
      </mesh>
    </Float>
  );
}

function ParticleShell() {
  const ref = useRef();
  const count = 900;

  const positions = useMemo(() => {
    const pts = new Float32Array(count * 3);
    for (let i = 0; i < count; i++) {
      const r = 2.6 + Math.random() * 1.1;
      const theta = Math.random() * Math.PI * 2;
      const phi = Math.acos(2 * Math.random() - 1);
      pts[i * 3] = r * Math.sin(phi) * Math.cos(theta);
      pts[i * 3 + 1] = r * Math.sin(phi) * Math.sin(theta);
      pts[i * 3 + 2] = r * Math.cos(phi);
    }
    return pts;
  }, []);

  useFrame((state, delta) => {
    ref.current.rotation.y += delta * 0.045;
    ref.current.rotation.x += delta * 0.015;
  });

  return (
    <Points ref={ref} positions={positions} stride={3} frustumCulled>
      <PointMaterial
        transparent
        color="#06b6d4"
        size={0.018}
        sizeAttenuation
        depthWrite={false}
        opacity={0.7}
      />
    </Points>
  );
}

function Rig() {
  useFrame((state) => {
    const target = new THREE.Vector3(
      (state.mouse.x * Math.PI) / 40,
      (state.mouse.y * Math.PI) / 40,
      0
    );
    state.camera.position.x += (target.x - state.camera.position.x) * 0.03;
    state.camera.position.y += (target.y - state.camera.position.y) * 0.03;
    state.camera.lookAt(0, 0, 0);
  });
  return null;
}

export default function HeroScene() {
  return (
    <Canvas
      dpr={[1, 1.6]}
      camera={{ position: [0, 0, 6], fov: 42 }}
      gl={{ antialias: true, alpha: true, powerPreference: "high-performance" }}
    >
      <ambientLight intensity={0.6} />
      <directionalLight position={[3, 3, 3]} intensity={1.1} color="#ffffff" />
      <pointLight position={[-4, -2, -3]} intensity={0.8} color="#8b5cf6" />
      <Suspense fallback={null}>
        <Core />
        <ParticleShell />
      </Suspense>
      <Rig />
    </Canvas>
  );
}
