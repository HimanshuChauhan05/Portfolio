import React, { useEffect, useState } from 'react';
import TypingEffect from './TypingEffect';
import { FaDownload } from "react-icons/fa6";
import Product from '../assets/Product.png';
import Cynthia from '../assets/Cynthia.png';
import Info from '../assets/Info.png';
import Portfolio from '../assets/Portfolio.png';
import Rayban from '../assets/Rayban.png';
import FitForge from '../assets/FitForge.png';
import { Link } from "react-router-dom";

const photos = [
  Product, Cynthia, Info, Portfolio, Rayban, FitForge
];

const InfoandPhoto = () => {
  const [currentPhotoIndex, setCurrentPhotoIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentPhotoIndex((prevIndex) => (prevIndex + 1) % photos.length);
    }, 3000); // Change photo every 3 seconds

    return () => clearInterval(interval);
  }, []);

  return (
    <div className="w-full h-5/6 flex flex-col sm:flex-row items-center justify-evenly  sm:mt-11">
      <div className="w-full sm:w-[40%] order-2 sm:order-1 text-black p-5 px-11 leading-8">
        <h1 className="text-2xl md:text-4xl lg:text-4xl xl:text-7xl   whitespace-nowrap ">Himanshu Chauhan</h1>
        <div className='px-2'>
          <TypingEffect />

        </div>
        <div className="mt-6 w-full flex gap-2">
          <a href={'https://drive.google.com/file/d/12HiKiwEVz3i7GarUdwKz4ym9DdJp2PHb/view?usp=drive_link'} download target="_blank"> 

            <button className="text-black bg-blue-400 flex gap-2 justify-center items-center rounded-full w-32 h-10">Resume <FaDownload/></button>
          </a>
          <Link to="/contact" className="text-black bg-blue-400 flex gap-2 justify-center items-center rounded-full w-32 h-10">Hire</Link>
        </div>
      </div>
      <div className="w-full sm:w-1/2 order-1 sm:order-2 flex items-center justify-center p-5 ">
        <img
          className="w-[20rem] h-[13rem] sm:w-[90%] sm:h-96 object-cover overflow-hidden object-left-top rounded-lg"
          src={photos[currentPhotoIndex]}
          alt="Project"
        />
      </div>
    </div>
  );
};

export default InfoandPhoto;
