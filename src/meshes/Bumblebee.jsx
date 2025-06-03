// Bumblebee.jsx

import React from "react";
import { useGLTF } from "@react-three/drei";
import { MeshStandardMaterial } from "three";

export default function Bumblebee({
  selectedCategory,
  selectedColor,
  lastColors,        // parent’tan gelen obje
  ...props
}) {
  const { nodes, materials } = useGLTF("https://mege707.github.io/guitar-3d/medias/Bumblebee.glb");

  // 1) getColorForCategory artık parent’ı okuyor:
  const getColorForCategory = (category) => {
    return lastColors[category] || "#1065c7";
  };

  // 2) Malzemeler:
  const guitarBodyMaterial = new MeshStandardMaterial({
    color: getColorForCategory("Guitar Body"),
    roughness: 0.4,
    metalness: 0.1,
  });
  const guitarPickguardMaterial = new MeshStandardMaterial({
    color: getColorForCategory("Pickguard"),
    roughness: 0.4,
    metalness: 0.1,
  });
  const guitarButtonsMaterial = new MeshStandardMaterial({
    color: getColorForCategory("Buttons"),
    roughness: 0.4,
    metalness: 0.1,
  });
  const guitarNeckMaterial = new MeshStandardMaterial({
    color: getColorForCategory("Guitar Neck"),
    roughness: 1,
    metalness: 0.1,
  });

  return (
    <group {...props} dispose={null}>
      <group
        position={[-0.76, 0.1, 0]}
        scale={[0.008, 0.008, 0.008]}
        rotation={[-Math.PI / 2.3, 0, 0]}
      >
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Bumblebee01.geometry}
          material={guitarNeckMaterial}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Bumblebee01_1.geometry}
          material={guitarPickguardMaterial}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Bumblebee01_2.geometry}
          material={guitarBodyMaterial}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Bumblebee01_3.geometry}
          material={materials["White painted metal.005"]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Bumblebee01_4.geometry}
          material={materials["Metal Pale Grey Edgewear"]}
        />
      </group>
    </group>
  );
}

useGLTF.preload("/medias/Bumblebee.glb");
