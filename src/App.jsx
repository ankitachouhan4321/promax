import React from 'react'
import { Routes, Route } from "react-router-dom";


import Home from './pages/Home';
import About from './pages/About';
import Products from './pages/Products';
import Contact from './pages/Contact';

import Navbar from './components/Navbar';
import Footer from './components/Footer';

// products page
import ProductDetails from "./pages/ProductDetails";
import ScrollToTop from './components/ScrollToTop';
import ScrollToHash from "./components/ScrollToHash";




const App = () => {
  return (
    <>
      <ScrollToTop />
      <ScrollToHash />


      <Navbar />
  
    <Routes>
          <Route path="/" element={<Home/>} />
          <Route path="/about-us" element={<About  />} />
          <Route path="/products" element={<Products />} />
          <Route path="/contact-us" element={<Contact />} />
        <Route
          path="/products/:slug"
          element={<ProductDetails />}
        />

    </Routes>

    <Footer/>
    
    </>
  )
}

export default App


