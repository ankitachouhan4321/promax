import React from 'react'
import { BrowserRouter, Routes, Route } from "react-router-dom";

import Home from './pages/Home';
import About from './pages/About';
import Products from './pages/Products';
import Contact from './pages/Contact';

import Navbar from './components/Navbar';
import Footer from './components/Footer';

// products page
import SyrupMakingMachine from './pages/SyrupMakingMachine'



const App = () => {
  return (
    <>
      <Navbar />
    <BrowserRouter>
    <Routes>
          <Route path="/" element={<Home/>} />
          <Route path="/about-us" element={<About  />} />
          <Route path="/products" element={<Products />} />
          <Route path="/contact-us" element={<Contact />} />

          <Route path="/syrup-making-machine" element={<SyrupMakingMachine />} />

    </Routes>

    </BrowserRouter>
    <Footer/>
    
    </>
  )
}

export default App
