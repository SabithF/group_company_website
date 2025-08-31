import { useState } from 'react'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import NavBar from './components/NavBar';
import Hero from './components/Hero';
import About from './components/About';
import Vision from './components/Vision';
import './App.css'
import Chairman from './components/Chairman';
import {Legacy} from './components/Legacy';
import { TimelineD } from './components/helperComponents/Timeline';
import Testimonial from './components/Testimonial';
import Integrity from './components/Integrity';
import Contact from './Contact';
import Footer from './Footer';

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
        <Chairman/>
        <TimelineD/>
        <Testimonial/>
        <Integrity/>
        <Contact />
        <Footer/>

        </>
      }/>
      
    </Routes>



    </BrowserRouter>
  )
   
}

export default App
