import React from 'react'
import Scene from './components/Scene.jsx'
import { HashRouter, Route, Routes } from 'react-router-dom'
import Example from './components/Navbar.jsx'
import { FooterWithLogo } from './components/Footer.jsx'
import Choicer from './components/Choicer.jsx'
import CustomizerPage from './components/CustomizerPage.jsx'
import ProductPage from './components/ProductPage.jsx'

const App = () => {
  return (
    <main className='relative h-screen'>
      <Example></Example>
      

   
        <Routes>
          <Route path='/product' element = {<ProductPage/>}/>
         <Route path='/customizer-page' element = {<CustomizerPage/>}/>
        </Routes>
     




      {/* <CustomizerPage></CustomizerPage> */}
    
     

      
    </main>
  )
}

export default App