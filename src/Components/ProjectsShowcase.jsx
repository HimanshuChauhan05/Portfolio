import React from 'react';
import { motion } from 'framer-motion';
import Product from '../assets/Product.png';
import Cynthia from '../assets/Cynthia.png';
import Info from '../assets/Info.png';
import Portfolio from '../assets/Portfolio.png';
import Rayban from '../assets/Rayban.png';
import FitForge from '../assets/FitForge.png';
import Navbar from './Navbar';


const ProjectCard = ({ title, description, link, techStack, image }) => {
    const handleClick = () => {
      window.open(link, '_blank');
    };
  
    return (
      <motion.div
        whileHover={{ scale: 1.05 }}
        whileTap={{ scale: 0.95 }}
        className="project-card bg-white shadow-lg rounded-lg p-6 hover:shadow-2xl transition-shadow duration-300 transform-gpu cursor-pointer"
        onClick={handleClick}
      >
        <img
          src={image}
          alt={title}
          className="w-full h-72 object-cover object-left-top rounded-md mb-4"
        />
        <h3 className="text-xl font-semibold mb-3 text-gray-800">{title}</h3>
        <p className="text-gray-600 mb-4">{description}</p>
        <div className="mb-4">
          <strong>Tech Stack:</strong> <span className="text-teal-600">{techStack.join(', ')}</span>
        </div>
        <div className="inline-block mt-4 py-2 px-4 text-white bg-teal-500 rounded-lg shadow-md hover:bg-teal-600 focus:outline-none focus:ring-2 focus:ring-teal-300 transition-colors duration-300">
          View Project &rarr;
        </div>
      </motion.div>
    );
  };


// Main component to showcase projects with images and animations
const ProjectsShowcase = () => {
  const projects = [
    {
      title: 'Product Hub',
      description: 'An e-commerce platform designed for seamless product browsing and purchase.',
      link: 'https://product-hub-lake.vercel.app/',
      techStack: ['React', 'Tailwindcss'],
      image: Product 
    },
    {
      title: 'FitForge GYM Website',
      description: 'A modern GYM website with merchandise, BMI calculator, and exercise sections.',
      link: 'https://fit-forge.vercel.app/',
      techStack: ['HTML', 'CSS', 'JavaScript'],
      image: FitForge 
    },
    {
      title: 'RayBan Landing Page',
      description: ' A modern landing Page created with unique animations.',
      link: 'https://landing-page-snowy-omega.vercel.app/', 
      techStack: ['HTML', 'CSS', 'JavaScript'],
      image: Rayban 
    },
    {
        title: 'Portfolio Website',
        description: 'A sleek, responsive personal portfolio to showcase projects and skills',
        link: '#',
        techStack: ['React', 'Tailwindcss'],
        image: Portfolio 
    },
    {
        title: 'Cynthia Website Clone',
        description: 'A clone of the Cynthia website with a focus on UI and animations.',
        link: 'https://cynthia-clone-omega.vercel.app/', 
        techStack: ['HTML', 'CSS', 'JavaScript'],
        image: Cynthia 
    },
    {
      title: 'Info Card',
      description: 'A basic personal info card maker.',
      link: 'https://react-info-card.vercel.app/', 
      techStack: ['React', 'Tailwindcss'],
      image: Info 
    }
  ];

  return (
    <section className="projects-section w-full py-14">
      <div className="container mx-auto w-[90%]">
        <h2 className="text-4xl font-bold text-center text-gray-800 mb-10">My Projects</h2>
        <motion.div 
          className="grid grid-cols-1 sm:grid-cols-2 gap-10"
        >
          {projects.map((project, index) => (
            <ProjectCard
              key={index}
              title={project.title}
              description={project.description}
              link={project.link}
              techStack={project.techStack}
              image={project.image}
            />
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default ProjectsShowcase;
