"use client"

import React, { useRef } from 'react';
import { Canvas } from '@react-three/fiber';
import { OrbitControls, useGLTF } from '@react-three/drei';
import { Object3D } from 'three';

function Model({ url }: { url: string }) {
  const gltf = useGLTF(url);
  const ref = useRef<Object3D>(null);

  return <primitive object={gltf.scene} ref={ref} scale={[4.5, 4.5, 4.5]} position={[-0.2, -0.5, 0.4]} />;
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