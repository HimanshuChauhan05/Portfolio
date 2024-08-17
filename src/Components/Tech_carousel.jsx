import React from 'react';

const technologies = [
  'Java',
  'HTML5',
  'CSS3',
  'JavaScript',
  'Tailwind CSS',
  'React',
  'Node.js',
  'Express.js',
  'MongoDB',
  'SQL',
  'AWS',
  'Git',
];

const TechCarousel = () => {
  return (
    <div className="overflow-hidden bg-gradient-to-r from-blue-100 via-teal-50 to-purple w-full h-32 flex items-center mt-11">
      <div className="flex h-[50%] justify-center items-center animate-scroll whitespace-nowrap">
        {[...technologies, ...technologies].map((tech, index) => (
          <div key={index} className="bg-gray-100 text-xl font-bold p-4 mx-4 rounded-lg flex-shrink-0 min-w-[200px] text-center">
            {tech}
          </div>
        ))}
      </div>
    </div>
  );
};

export default TechCarousel;
