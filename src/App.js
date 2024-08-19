import React from "react";
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Header from "./Components/Header/Header";
import HomePage from "./Components/Homepage/HomePage";
import Footer from "./Components/Foooter/Footer";
import Contact from "./Components/Contact/Contact";
import About from "./Components/About/About";
import Programs from "./Components/Programs/Program";
// index.js or App.js
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min';
import ProductPage from "./Components/products/Product";


function App() {
  return (
    <Router>
      <Header />
      <main>
      <Routes>
        <Route path="/" element={<HomePage />} />
         <Route path="/about" element={<About/>} /> 
         <Route path="/programs" element={<Programs />} />
        <Route path="/products" element={<ProductPage/>} />
        <Route path="/contact" element={<Contact />} />
      </Routes>
      </main>
      <Footer /> {/* Add the Footer component here */}

    </Router>
  );
}

export default App;
