// src/App.jsx
import React from "react";
import { Routes, Route } from 'react-router-dom';
import Home from "./Components/Home";
import ProjectsShowcase from "./Components/ProjectsShowcase";
import Contact from "./Components/Contact";

const App = () => {
  return <>
    <div  className="w-full h-full">
    
      <Routes>
          <Route path="/" element={<Home/>}/>
          <Route path="/projects" element={ <ProjectsShowcase />} />
          <Route path="/contact" element={ <Contact />} />
      </Routes>

    </div>
  </>
};

export default App;

