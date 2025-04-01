import { MeshTransmissionMaterial, useGLTF } from '@react-three/drei'
import { useFrame, useThree } from '@react-three/fiber'
import React from 'react'
import { useRef } from 'react'
import { useControls } from 'leva'
import { roughness } from 'three/tsl'
const Model = () => {
    const mesh = useRef();
    const {nodes} = useGLTF("/medias/torus.glb")
    const {viewport} = useThree()

    useFrame(() => {
        mesh.current.rotation.x += 0.02
    })

    const materialProps = useControls({
        thickness: {value: 0.2, min: 0, max: 3, step:0.05},
        roughness: {value: 0, min: 0, max: 1, step: 0.1},
        transmission: {value: 1, min: 0, max: 1, step: 0.1},
        
    })
  return ( 
    <group scale={viewport.width / 25}>
        <mesh ref={mesh} {...nodes.Torus}>
            <MeshTransmissionMaterial {...materialProps}/>
        </mesh>
    </group>
  )
}

export default Model