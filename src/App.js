import React from "react";
import Personal from "./pages/Personal";
import Navbar from "./components/Navbar"
import About from "./pages/About";
import Projects from "./pages/Projects";
import Contact from "./pages/Contact";
import {Routes, Route} from 'react-router-dom';

function App() {
  return (
    <>
    <Navbar />
    <Routes>
      <Route path='/' element={<Personal />} />
      <Route path='/about' element={<About />} />
      <Route path='/projects' element={<Projects />} />
      <Route path='/contact' element={<Contact />} />
    </Routes></>
    
  );
}

export default App;
