import { useState } from 'react'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import NavBar from './components/NavBar';
import Hero from './components/Hero';
import About from './components/About';
import Vision from './components/Vision';

import './App.css'

const App = () => {


  return (
    <BrowserRouter>
    
    <div className="relative z-1 ">
      <NavBar/>
    </div>

    <Routes>
      <Route path="/" element={
        <>
        <Hero/>
        <About/>
        <Vision/>
        </>
      }/>
      
    </Routes>



    </BrowserRouter>
  )
   
}

export default App
