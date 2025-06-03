// Scene.jsx

import { Canvas } from "@react-three/fiber";
import React from "react";
import Bumblebee from "../meshes/Bumblebee.jsx";
import Honeybee from "../meshes/Honeybee.jsx";
import Hornet from "../meshes/Hornet.jsx";
import Wasp from "../meshes/Wasp.jsx";
import { Environment, OrbitControls } from "@react-three/drei";

export default function Scene({
  selectedModel,
  selectedCategory,
  selectedColor,
  lastColors,       // parent’tan gelen
}) {
  return (
    <Canvas
      camera={{ position: [0, 1.5, -2.9], fov: 20 }}
      gl={{ toneMappingExposure: 0.75 }}
      className="w-full h-full"
    >
      <OrbitControls />
      <directionalLight intensity={0.9} position={[0, 5, 2]} color="#dddddd" />
      <ambientLight intensity={0.3} />
      <Environment preset="studio" intensity={0.001} background={false} />

      {selectedModel === "Bumblebee" && (
        <Bumblebee
          selectedCategory={selectedCategory}
          selectedColor={selectedColor}
          lastColors={lastColors}       // pass ediyoruz
        />
      )}
      {selectedModel === "Honeybee" && (
        <Honeybee
          selectedCategory={selectedCategory}
          selectedColor={selectedColor}
          lastColors={lastColors}
        />
      )}
      {selectedModel === "Wasp" && (
        <Wasp
          selectedCategory={selectedCategory}
          selectedColor={selectedColor}
          lastColors={lastColors}
        />
      )}
      {selectedModel === "Hornet" && (
        <Hornet
          selectedCategory={selectedCategory}
          selectedColor={selectedColor}
          lastColors={lastColors}
        />
      )}
      
    </Canvas>
  );
}
