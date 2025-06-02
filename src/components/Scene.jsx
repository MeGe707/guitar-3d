import { Canvas } from "@react-three/fiber";
import React, { useRef } from "react";
import Model from "./Model.jsx";
import Modell from "./Modell.jsx";
import { Environment, OrbitControls } from "@react-three/drei";
import { DirectionalLight } from "three";
import { DirectionalLightHelper } from "three";
import { useHelper } from "@react-three/drei";
import { AmbientLight } from "three";

const Scene = ({selectedCategory, selectedColor}) => {
  
  return (
    <Canvas
      camera={{ position: [0, 1.5, -2.9], fov: 20 }}
      gl={{ toneMappingExposure: 0.75 }}
    >
      <OrbitControls />

      
      <directionalLight
 
  intensity={0.9}
  position={[0, 5, 2]}
  color="#dddddd"
/>

      <Environment preset="studio" intensity={0.001} background={false} />

      
      <Modell
        selectedCategory={selectedCategory}
        selectedColor={selectedColor}
      />
    </Canvas>
  );
};

export default Scene;
