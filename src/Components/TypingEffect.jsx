import React, { useState, useEffect } from 'react';

const TypingEffect = () => {
  const [text, setText] = useState('');
  const [index, setIndex] = useState(0);
  const phrases = ['Frontend Developer', 'Innovator','Developer', 'Tech Enthusiast', 'Problem Solver'];

  useEffect(() => {
    const typingInterval = setInterval(() => {
      if (index < phrases.length) {
        setText(phrases[index].slice(0, text.length + 1));
        if (text === phrases[index]) {
          setTimeout(() => {
            setIndex((prevIndex) => (prevIndex + 1) % phrases.length);
            setText('');
          }, 1000);
        }
      }
    }, 100);

    return () => clearInterval(typingInterval);
  }, [text, index, phrases]);

  return (
    <p className="mt-4 text-lg sm:text-3xl font-semibold text-gray-700">
        I am a <span className="text-teal-600">{text}</span>
    </p>
  );
};

export default TypingEffect;
