import React, { useState, useEffect } from 'react';

const TypingEffect = () => {
  const [text, setText] = useState('');
  const [index, setIndex] = useState(0);
  const [isDeleting, setIsDeleting] = useState(false);
  const phrases = ['Frontend Developer', 'UI/UX Designer', 'Developer', 'Tech Enthusiast', 'Problem Solver'];
  const typingSpeed = 100;
  const deletingSpeed = 50;
  const pauseTime = 1500;

  useEffect(() => {
    const handleTyping = () => {
      const currentPhrase = phrases[index];
      const updatedText = isDeleting 
        ? currentPhrase.substring(0, text.length - 1) 
        : currentPhrase.substring(0, text.length + 1);

      setText(updatedText);

      if (!isDeleting && updatedText === currentPhrase) {
        setTimeout(() => setIsDeleting(true), pauseTime);
      } else if (isDeleting && updatedText === '') {
        setIsDeleting(false);
        setIndex((prevIndex) => (prevIndex + 1) % phrases.length);
      }
    };

    const typingInterval = setInterval(handleTyping, isDeleting ? deletingSpeed : typingSpeed);

    return () => clearInterval(typingInterval);
  }, [text, index, isDeleting]);

  return (
    <p className="mt-4 text-lg sm:text-3xl font-semibold text-gray-700">
      I am a  <span className="text-teal-600 typing-effect">{text}</span>
    </p>
  );
};

export default TypingEffect;
