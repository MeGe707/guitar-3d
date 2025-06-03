// Modell.jsx

import React, { useEffect, useState } from "react";
import { useGLTF } from "@react-three/drei";
import { MeshStandardMaterial } from "three";
import  Honeybee  from "../meshes/Honeybee.jsx";
import Bumblebee  from "../meshes/Bumblebee.jsx";
import  Wasp  from "../meshes/Wasp.jsx";
import   Hornet  from "../meshes/Hornet.jsx";

export default function Modell({
  selectedModel,      // Örn: "Honeybee", "Bumblebee", "Hornet", "Wasp"
  selectedCategory,   // Örn: "Guitar Body", "Pickguard", "Buttons", "Guitar Neck"
  selectedColor,      // Örn: "Red", "Blue", "Black", "Dark", "Light" vb.
  ...props
}) {

  return (
    <group {...props} dispose={null}>
        {selectedModel === "Bumblebee" && <Bumblebee key={`${selectedModel}-${selectedCategory}-${selectedColor}`} selectedModel={selectedModel} selectedCategory={selectedCategory} selectedColor={selectedColor}/>}
        {selectedModel === "Honeybee" && <Honeybee key={`${selectedModel}-${selectedCategory}-${selectedColor}`} selectedModel={selectedModel} selectedCategory={selectedCategory} selectedColor={selectedColor}/>}
        {selectedModel === "Wasp" && <Wasp key={`${selectedModel}-${selectedCategory}-${selectedColor}`} selectedModel={selectedModel} selectedCategory={selectedCategory} selectedColor={selectedColor}/>}
        {selectedModel === "Hornet" && <Hornet key={`${selectedModel}-${selectedCategory}-${selectedColor}`} selectedModel={selectedModel} selectedCategory={selectedCategory} selectedColor={selectedColor}/>}
    </group>
  );
}

// 8) Tüm varyantları önceden yüklemek (preload)
//    Böylece butona bastığında anında geçiş olur, takılma olmaz:
useGLTF.preload("/medias/Bumblebee.glb");
useGLTF.preload("/medias/Honeybee.glb");
useGLTF.preload("/medias/Hornet.glb");
useGLTF.preload("/medias/Wasp.glb");
