import React, { useRef, useState } from 'react'
import { useGLTF } from '@react-three/drei'
import { useFrame, useThree } from '@react-three/fiber'

export function Modell(props) {
  const { nodes, materials } = useGLTF('medias/Guitarra.glb')
  const guitar = useRef();
  const {viewport} = useThree()

  const [selectedComponent, setSelectedComponent] = useState(null)
  const [color, setColor] = useState('white')
  const [isMenuOpened, setIsMenuOpened] = useState(false)
  const [menuType, setMenuType] = useState(null)


  const handleComponentClick = (component) => {
    setSele
  }


  return (
    <group scale={viewport.width/25} ref={guitar} position={[-1.5, 0.2, 0.5]} rotation={[0, Math.PI / 2, Math.PI / 2]} {...props} dispose={null}>
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Plano002.geometry}
        material={materials.Cavalete}
        position={[-3.168, 0, 1.883]}
        material-color={'green'}
        
      />
      <mesh  // strings
        castShadow
        receiveShadow
        geometry={nodes['Bézier_-_Curva005'].geometry}
        material={materials.Cordas}
        position={[-2.072, 0.781, 2.135]}
        material-color= {"red"}
     
      />
      <mesh // kulakçık
        castShadow
        receiveShadow
        geometry={nodes.Círculo018.geometry}
        material={materials['Metal Dourado']}
        position={[3.751, 0.136, 2.116]}
        rotation={[-0.001, 0.001, -0.274]}
        scale={0.066}
        material-color={'blue'}
         
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Círculo008.geometry}
        material={materials['Metal Dourado']}
        position={[3.766, -0.539, 1.93]}
        scale={[0.07, 0.07, 0.055]}
        material-color={'blue'}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Plano.geometry}
        material={materials.Corpo}
        position={[-3.168, 0, 1.883]}
        material-color={"red"}
      />
      <mesh // buckerham'lar
        castShadow
        receiveShadow
        geometry={nodes.Plano008.geometry}
        material={materials.Metal}
        position={[-1.529, 0.093, 1.923]}
        rotation={[-Math.PI, 0, -3.083]}
        scale={0.367}
        
        
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Cilindro001.geometry}
        material={nodes.Cilindro001.material}
        position={[-3.086, 0.751, 2.267]}
        scale={0.066}
        
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Círculo007.geometry}
        material={nodes.Círculo007.material}
        position={[-3.086, 0.796, 1.92]}
        scale={0.059}
        
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Círculo006.geometry}
        material={materials.Metal}
        position={[-3.096, 1.739, 1.92]}
        
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Cubo012.geometry}
        material={materials.Cavalete}
        position={[2.639, 0.473, 1.898]}
        rotation={[0, 0, -0.085]}
        scale={[0.006, 0.029, 0.029]}
        material-color={'green'}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Cubo011.geometry}
        material={nodes.Cubo011.material}
        position={[-5.704, 0.183, 2.012]}
        rotation={[0, 0.058, 0]}
        
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Cubo010.geometry}
        material={materials.Metal}
        position={[-5.67, 0.183, 2.595]}
        rotation={[0, 0.058, 0]}

      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Cubo009.geometry}
        material={materials.Metal}
        position={[-3.178, 3.647, 2.945]}
        rotation={[0, 0.058, -Math.PI / 2]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Cubo008.geometry}
        material={nodes.Cubo008.material}
        position={[-5.443, 0.109, 2.462]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Cubo007.geometry}
        material={materials.Metal}
        position={[-2.754, 1.835, 1.722]}
        rotation={[0, 0.058, 0]}
        scale={0.026}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Círculo.geometry}
        material={materials.Metal}
        position={[-2.747, 0.838, 1.925]}
        rotation={[0, 0.058, 0]}
        scale={0.067}
        
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Cubo001.geometry}
        material={materials.Metal}
        position={[1.579, -0.088, 1.381]}
        rotation={[-Math.PI, 0, -3.083]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Cubo.geometry}
        material={materials.Metal}
        position={[-5.443, 0.109, 2.462]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Círculo021.geometry}
        material={materials.Metal}
        position={[-1.105, 0.676, 1.283]}
        rotation={[0.001, 0.005, -0.149]}
        scale={0.147}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Cilindro003.geometry}
        material={materials.Metal}
        position={[-4.339, 2.412, 1.928]}
        rotation={[Math.PI / 2, 0, -1.528]}
        scale={0.061}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Cilindro002.geometry}
        material={materials.Metal}
        position={[-0.551, 2.412, 1.416]}
        rotation={[Math.PI / 2, 0, 1.407]}
        scale={0.061}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Círculo001.geometry}
        material={materials.Cavalete}
        position={[-1.105, 0.676, 1.283]}
        rotation={[0.001, 0.005, -0.149]}
        scale={0.147}
        material-color={'green'}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Cilindro.geometry}
        material={materials.Trastes}
        position={[0.293, 0.613, 1.907]}
        rotation={[Math.PI / 2, 0, 0]}
        scale={0.022}
      />
      <mesh //volume
        castShadow
        receiveShadow
        geometry={nodes.Círculo003.geometry}
        material={materials['Botões de Volume']}
        position={[-3.587, 0.682, 2.577]}
        rotation={[-0.044, 0.002, 0.104]}
        scale={0.111}
        
      />
    </group>

    


  )
}

useGLTF.preload('medias/Guitarra.glb')
