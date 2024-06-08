"use client";

import React, { useState, useRef, useEffect } from "react";
import { Canvas, useFrame, useThree } from "@react-three/fiber";
import { Points, PointMaterial } from "@react-three/drei";
import * as random from "maath/random/dist/maath-random.esm";
import * as THREE from "three";

const StarBackground = (props: any) => {
  const ref = useRef<THREE.Points>(null);
  const { pointer, size, camera } = useThree((state) => state);

  const [sphere, setSphere] = useState(() => {
    let positions = random.inSphere(new Float32Array(5000), { radius: 1.2 });
    positions = positions.map((pos) => (isNaN(pos) ? 0 : pos));
    return positions;
  });

  const originalSphere = useRef(sphere).current;

  const [targetPosition, setTargetPosition] = useState<[number, number, number] | null>(null);
  const [animationProgress, setAnimationProgress] = useState(0);
  const [isHolding, setIsHolding] = useState(false);

  useEffect(() => {
    const handleMouseDown = (event: MouseEvent) => {
      const x = (event.clientX / size.width) * 2 - 1;
      const y = -(event.clientY / size.height) * 2 + 1;

      // Convert screen coordinates to world coordinates
      const vector = new THREE.Vector3(x, y, 0.5);
      vector.unproject(camera);
      const dir = vector.sub(camera.position).normalize();
      const distance = -camera.position.z / dir.z;
      const pos = camera.position.clone().add(dir.multiplyScalar(distance));

      setTargetPosition([pos.x, pos.y, pos.z]);
      setAnimationProgress(0);
      setIsHolding(true);
    };

    const handleMouseUp = () => {
      setIsHolding(false);
    };

    window.addEventListener("mousedown", handleMouseDown);
    window.addEventListener("mouseup", handleMouseUp);
    return () => {
      window.removeEventListener("mousedown", handleMouseDown);
      window.removeEventListener("mouseup", handleMouseUp);
    };
  }, [size, camera]);

  useFrame((state, delta) => {
    if (ref.current) {
      const speedFactor = Math.sqrt(pointer.x * pointer.x + pointer.y * pointer.y) * 0.03; // Reduced speed factor
      ref.current.rotation.x += pointer.y * delta * speedFactor;
      ref.current.rotation.y += pointer.x * delta * speedFactor;

      if (targetPosition && isHolding) {
        setAnimationProgress((prev) => Math.min(prev + delta * 0.05, 1)); // Reduced animation speed
        const newPositions = new Float32Array(5000);
        for (let i = 0; i < sphere.length; i += 3) {
          const t = animationProgress;
          newPositions[i] = originalSphere[i] * (1 - t) + targetPosition[0] * t;
          newPositions[i + 1] = originalSphere[i + 1] * (1 - t) + targetPosition[1] * t;
          newPositions[i + 2] = originalSphere[i + 2] * (1 - t) + targetPosition[2] * t;
        }
        setSphere(newPositions);
      } else if (!isHolding && animationProgress < 1) {
        setAnimationProgress((prev) => Math.min(prev + delta * 0.05, 1)); // Increment progress towards original position
        const fadeBackPositions = new Float32Array(5000);
        for (let i = 0; i < originalSphere.length; i += 3) {
          const t = animationProgress;
          fadeBackPositions[i] = sphere[i] * (1 - t) + originalSphere[i] * t;
          fadeBackPositions[i + 1] = sphere[i + 1] * (1 - t) + originalSphere[i + 1] * t;
          fadeBackPositions[i + 2] = sphere[i + 2] * (1 - t) + originalSphere[i + 2] * t;
        }
        setSphere(fadeBackPositions);
      }
    }
  });

  return (
    <group rotation={[0, 0, Math.PI / 4]}>
      <Points ref={ref} positions={sphere} stride={3} frustumCulled {...props}>
        <PointMaterial
          transparent
          color="#fff"
          size={0.002}
          sizeAttenuation={true}
          depthWrite={false}
        />
      </Points>
    </group>
  );
};

const StarsCanvas = () => (
  <div className="w-full h-full fixed inset-0 pointer-events-none">
    <Canvas camera={{ position: [0, 0, 1] }}>
      <StarBackground />
    </Canvas>
  </div>
);

export default StarsCanvas;
