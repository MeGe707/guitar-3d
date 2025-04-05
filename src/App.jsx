import React from 'react'
import Scene from './components/Scene.jsx'
import Example from './components/Navbar.jsx'
import { FooterWithLogo } from './components/Footer.jsx'
import Choicer from './components/Choicer.jsx'

const App = () => {
  return (
    <main className='relative h-screen'>
      <Example></Example>
        <Scene></Scene> 
      <Choicer></Choicer> 
     
      <FooterWithLogo></FooterWithLogo> 

      
    </main>
  )
}

export default App