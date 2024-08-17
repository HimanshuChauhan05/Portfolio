import React from "react";
import Navbar from "./Navbar";
import InfoandPhoto from "./InfoandPhoto";
import Tech_carousel from "./Tech_carousel";
import ProjectsShowcase from "./ProjectsShowcase";
import Contact from "./Contact";
import Footer from "./Footer";


const Home = () => {
  return <>
   <div className="bg-gradient-to-r from-blue-100 via-teal-50 to-purple">
    <Navbar/>
    <InfoandPhoto/>
    <Tech_carousel/>
    <ProjectsShowcase/>
    <Contact/>
    <Footer/>
   </div>
  </>
};

export default Home;
