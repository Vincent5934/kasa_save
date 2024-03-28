// REACT
import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter, Routes, Route } from 'react-router-dom'
// CSS
import './index.css';
// PAGES
import Homepage from "./Pages/Homepage/Homepage"
import About from "./Pages/About/About"
import Error from "./Pages/Error/Error"
import Rental from "./Pages/Rental/Rental"
// COMPONENTS
import Navbar from './Components/Navbar/Navbar';
import Footer from './Components/Footer/Footer';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <BrowserRouter>
      <Navbar />
      <Routes>
        <Route path="/" element={<Homepage />} />
        <Route path="about" element={<About />} />
        <Route path="Logement/:id" element={<Rental />} />
        <Route path="*" element={<Error />} />
      </Routes>
      <Footer />
    </BrowserRouter>
  </React.StrictMode>
);
