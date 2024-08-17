// src/App.jsx
import React from "react";
import { Routes, Route } from 'react-router-dom';
import Home from "./Components/Home";
import ProjectsShowcase from "./Components/ProjectsShowcase";

const App = () => {
  return <>
    <div  className="w-full h-full">
    
      <Routes>
          <Route path="/" element={<Home/>}/>
          <Route path="/projects" element={ <ProjectsShowcase />} />
      </Routes>

    </div>
  </>
};

export default App;

