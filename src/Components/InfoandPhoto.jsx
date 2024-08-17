import React, { useEffect, useState } from 'react';
import TypingEffect from './TypingEffect';
import { FaDownload } from "react-icons/fa6";
import Product from '../assets/Product.png';
import Cynthia from '../assets/Cynthia.png';
import Info from '../assets/Info.png';
import Portfolio from '../assets/Portfolio.png';
import Rayban from '../assets/Rayban.png';
import FitForge from '../assets/FitForge.png';

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
        {/* <h3 className="text-3xl sm:text-4xl">Hello,</h3> */}
        <h1 className="text-2xl md:text-4xl lg:text-6xl xl:text-7xl   whitespace-nowrap ">Himanshu Chauhan</h1>
        {/* <h2 className="text-4xl font-bold text-gray-800 mb-10">Welcome to My Portfolio</h2> */}
        <div className='px-2'>
          <TypingEffect />

        </div>
        <div className="mt-6 w-full flex gap-2">
          <button className="text-black bg-blue-400 flex gap-2 justify-center items-center rounded-full w-32 h-10">Resume <FaDownload/></button>
          <button className="text-black bg-blue-400 rounded-full w-32 h-10">Hire me</button>
        </div>
      </div>
      <div className="w-full sm:w-1/2 order-1 sm:order-2 flex items-center justify-center p-5 ">
        <img
          className="w-[20rem] h-[13rem] sm:w-96 sm:h-96 object-cover object-left-top rounded-lg"
          src={photos[currentPhotoIndex]}
          alt="Project"
        />
      </div>
    </div>
  );
};

export default InfoandPhoto;
