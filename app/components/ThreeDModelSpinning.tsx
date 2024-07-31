"use client";

import React, { useRef, useState, useEffect } from 'react';
import { Canvas, useFrame } from '@react-three/fiber';
import { OrbitControls, useGLTF } from '@react-three/drei';
import { Object3D } from 'three';

function Model({ url }: { url: string }) {
  const gltf = useGLTF(url);
  const ref = useRef<Object3D>(null);
  const [hovered, setHover] = useState(false);
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });

  const handleMouseMove = (e: MouseEvent) => {
    setMousePosition({
      x: (e.clientX / window.innerWidth) * 2 - 1,
      y: -(e.clientY / window.innerHeight) * 2 + 1,
    });
  };

  useEffect(() => {
    if (hovered) {
      window.addEventListener('mousemove', handleMouseMove);
    } else {
      window.removeEventListener('mousemove', handleMouseMove);
    }
    return () => window.removeEventListener('mousemove', handleMouseMove);
  }, [hovered]);

  useFrame(() => {
    if (hovered && ref.current) {
      ref.current.rotation.y += (mousePosition.x * 0.6 - ref.current.rotation.y) * 0.1; // Increased sensitivity
      ref.current.rotation.x += (mousePosition.y * 0.6 - ref.current.rotation.x) * 0.1; // Increased sensitivity
    }
  });

  return (
    <primitive
      object={gltf.scene}
      ref={ref}
      scale={[4.5, 4.5, 4.5]}
      position={[-0.2, -0.5, 0.4]}
      onPointerOver={() => setHover(true)}
      onPointerOut={() => setHover(false)}
    />
  );
}

const SpinningModel = ({ url }: { url: string }) => (
  <Canvas>
    <ambientLight intensity={0.5} />
    <directionalLight position={[0, 5, 5]} />
    <Model url={url} />
    <OrbitControls enableRotate={true} enableZoom={false} enablePan={false} />
  </Canvas>
);

export default SpinningModel;
