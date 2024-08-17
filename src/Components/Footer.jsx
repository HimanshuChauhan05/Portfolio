import React from 'react';
import { motion } from 'framer-motion';
import { FaTwitter, FaLinkedin, FaGithub, FaInstagram } from 'react-icons/fa';

const Footer = () => {
  return (
    <footer className="bg-gray-800 text-white py-6">
      <div className="container mx-auto px-4">
        <div className="flex flex-col md:flex-row md:justify-between">
          {/* Logo and Description */}
          <div className="mb-6 md:mb-0">
            <h2 className="text-2xl font-bold">Portfolio</h2>
            <p className="mt-2">Showcasing my projects and skills. Feel free to connect!</p>
          </div>
          

          {/* Social Media Links */}
          <div className="flex space-x-4">
            <a
              href="https://twitter.com/yourusername"
              target="_blank"
              rel="noopener noreferrer"
              className="text-gray-400 hover:text-white"
            >
              <FaTwitter size={24} />
            </a>
            <a
              href="https://www.linkedin.com/in/himanshu-chauhan-0b9b5b220/"
              className="text-gray-400 hover:text-white"
            >
              <FaLinkedin size={24} />
            </a>
            <a
              href="https://github.com/HimanshuChauhan05"
              className="text-gray-400 hover:text-white"
            >
              <FaGithub size={24} />
            </a>
            <a
              href="https://www.instagram.com/himanshuchauhan0005/"
              className="text-gray-400 hover:text-white"
            >
              <FaInstagram size={24} />
            </a>
          </div>
        </div>

        {/* Copyright */}
        <div className="mt-6 border-t border-gray-700 pt-4 text-center text-sm">
          <p>&copy; {new Date().getFullYear()} Portfolio. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
