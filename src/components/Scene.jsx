import { Canvas } from '@react-three/fiber'
import React from 'react'
import Model from './Model.jsx'
import { Modell } from './Modell.jsx'
import { Environment, OrbitControls } from '@react-three/drei'
import { DirectionalLight } from 'three'

const Scene = () => {
  return (
    <Canvas style={{backgroundColor: "white"}}>
        <OrbitControls/>
        {/* <Model></Model> */}
        <Modell></Modell>
        <directionalLight  intensity={3} position={[2, 4, 1]}/>
        <Environment preset='forest'/>
    </Canvas>
  )
}

export default Scene