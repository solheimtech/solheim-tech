"use client";

import { Canvas, useFrame } from "@react-three/fiber";
import { useGLTF, OrbitControls } from "@react-three/drei";
import { Suspense, useRef, useEffect } from "react";
import * as THREE from "three";

function DroneModel() {
  const gltf = useGLTF("/Drone_Solheim_Technologies.glb");
  const droneRef = useRef();

  useEffect(() => {
    // Change the color of the drone to white
    gltf.scene.traverse((object) => {
      if (object instanceof THREE.Mesh) {
        const material = object.material;
        if (Array.isArray(material)) {
          material.forEach((mat) => {
            if (mat instanceof THREE.MeshStandardMaterial) {
              mat.color.set(0xffffff);
              mat.needsUpdate = true;
            }
          });
        } else if (material instanceof THREE.MeshStandardMaterial) {
          material.color.set(0xffffff);
          material.needsUpdate = true;
        }
      }
    });
  }, [gltf]);

  // Make the drone hover in place
  useFrame(() => {
    if (droneRef.current && typeof droneRef.current === 'object') {
      (droneRef.current as THREE.Object3D).position.y = Math.sin(Date.now() * 0.001) * 0.5;
    }
  });

  return <primitive ref={droneRef} object={gltf.scene} scale={[.5, 0.5, 0.5]} />; // Adjust the scale to make the drone smaller
}

function DroneHoverEffect() {
  const controlsRef = useRef<typeof OrbitControls>(null);

  return (
    <Canvas style={{ width: "100%", height: "100vh" }}>
      <Suspense fallback={null}>
        <ambientLight intensity={0.5} />
        <pointLight position={[10, 10, 10]} />
        <DroneModel />
        <OrbitControls
          ref={controlsRef as any}
          enableZoom={false}
          enablePan={false}
          autoRotate
          autoRotateSpeed={2}
        />
      </Suspense>
    </Canvas>
  );
}

export default DroneHoverEffect;
