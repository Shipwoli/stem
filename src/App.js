import React from "react";
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Header from "./Components/Header/Header";
import HomePage from "./Components/Homepage/HomePage";
import Footer from "./Components/Foooter/Footer";
// index.js or App.js
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min';


function App() {
  return (
    <Router>
      <Header />
      <main>
      <Routes>
        <Route path="/" element={<HomePage />} />
        {/* <Route path="/about-us" element={<AboutUs />} />
        <Route path="/classes" element={<Classes />} />
        <Route path="/contact" element={<Contact />} /> */}
      </Routes>
      </main>
      <Footer /> {/* Add the Footer component here */}

    </Router>
  );
}

export default App;
