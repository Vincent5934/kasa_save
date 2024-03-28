import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import './index.css';
import Homepage from "./Pages/Homepage/Homepage"
import About from "./Pages/About/About"
import Error from "./Pages/Error/Error"
import Rental from "./Pages/Rental/Rental"


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
   
    <BrowserRouter>
         <Routes>
       <Route path="/" element={<Homepage />} />
       <Route path="about" element={<About />} />
       <Route path="Logement/:id" element={<Rental />} />
       <Route path="*" element={<Error />} />
     </Routes>
   </BrowserRouter>
 
  </React.StrictMode>
);
