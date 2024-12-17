'use client'

import React, { useEffect, useState } from 'react';

interface TypewriterProps {
  text: string;
  speed?: number; // Speed of typing in milliseconds
}

const Typewriter: React.FC<TypewriterProps> = ({ text, speed = 100 }) => {
  const [displayedText, setDisplayedText] = useState('');

  useEffect(() => {
    let index = 0;
    const intervalId = setInterval(() => {
      setDisplayedText((prev) => prev + text[index]);
      index += 1;
      if (index === text.length) {
        clearInterval(intervalId);
      }
    }, speed);

    return () => clearInterval(intervalId);
  }, [text, speed]);

  return <h1 className="text-5xl md:text-6xl font-extrabold mb-4 text-white">{displayedText}</h1>;
};

export default Typewriter;