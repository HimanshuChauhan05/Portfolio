import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import Logoimg from '../assets/Logo.png'; 
import { MdOutlineMenu } from "react-icons/md";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isMobile, setIsMobile] = useState(window.innerWidth <= 640);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  const handleResize = () => {
    setIsMobile(window.innerWidth <= 640);
  };

  useEffect(() => {
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  return (
    <div className="bg-gradient-to-r from-blue-100 via-teal-50 to-purple-100 relative w-full flex items-center justify-between p-5 bg-white text-black">
      <div className="w-1/2 px-4 flex items-center">
        {/* Logo Image */}
        <img src={Logoimg} alt="Logo" className="h-16" />
      </div>
      <div className="w-1/2 flex justify-end pr-5 text-xl">
        {isMobile ? (
          <button onClick={toggleMenu} className="focus:outline-none text-2xl">
            <MdOutlineMenu />
          </button>
        ) : (
          <ul className="flex gap-8 font-semibold ">
            <li className="pl-11 hover:underline">
              <Link to="/">Home</Link>
            </li>
            <li className="pl-11">
              <a href={'https://drive.google.com/file/d/12HiKiwEVz3i7GarUdwKz4ym9DdJp2PHb/view?usp=drive_link'} download target="_blank" className="hover:underline">Resume</a>
            </li>
            <li className="pl-11 hover:underline">
              <Link to="/projects">Projects</Link>
            </li>
            <li className="pl-11 hover:underline">
              <Link to="/contact">Contact</Link>
            </li>
          </ul>
        )}
      </div>

      {isMobile && isOpen && (
        <div className="absolute top-full left-0 w-full bg-emerald-100">
          <ul className="flex flex-col items-center space-y-4 py-4">
            <li className="text-black text-xl font-semibold py-2">
              <Link to="/" className="block" onClick={toggleMenu}>Home</Link>
            </li>
            <li className="text-black text-xl font-semibold py-2">
              <Link to="/resume" className="block" onClick={toggleMenu}>Resume</Link>
            </li>
            <li className="text-black text-xl font-semibold py-2">
              <Link to="/projects" className="block" onClick={toggleMenu}>Projects</Link>
            </li>
            <li className="text-black text-xl font-semibold py-2">
              <Link to="/contact" className="block" onClick={toggleMenu}>Contact</Link>
            </li>
          </ul>
        </div>
      )}
    </div>
  );
};

export default Navbar;
