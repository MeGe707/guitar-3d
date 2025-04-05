import { Canvas } from "@react-three/fiber";
import React, { useRef } from "react";
import Model from "./Model.jsx";
import Modell from "./Modell.jsx";
import { Environment, OrbitControls } from "@react-three/drei";
import { DirectionalLight } from "three";
import { DirectionalLightHelper } from "three";
import { useHelper } from "@react-three/drei";
import { AmbientLight } from "three";

const Scene = () => {
  return (
    <Canvas
      camera={{ position: [0, 1.5, -2.9], fov: 50 }}
      gl={{ toneMappingExposure: 1.5 }}
    >
      <OrbitControls />

      <ambientLight intensity={0.5} />
      <directionalLight intensity={2} position={[4, 0, 5]} color="#ffffff" />

      <Environment preset="sunset" background={false} />

      <Modell />
    </Canvas>
  );
};

export default Scene;
