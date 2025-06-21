'use client';

import React, { useEffect, useState } from 'react';

interface Star {
  id: number;
  top: string;
  left: string;
  animationDuration: string;
  animationDelay: string;
  size: number;
}

const FloatingStars = () => {
  const [stars, setStars] = useState<Star[]>([]);

  useEffect(() => {
    // Math.random is safe in useEffect
    const generateStars = () => {
      const newStars: Star[] = [];
      const numStars = 100;
      for (let i = 0; i < numStars; i++) {
        newStars.push({
          id: i,
          top: `${Math.random() * 100}%`,
          left: `${Math.random() * 100}%`,
          animationDuration: `${Math.random() * 30 + 15}s`,
          animationDelay: `${Math.random() * 15}s`,
          size: Math.random() * 2 + 1,
        });
      }
      setStars(newStars);
    };
    generateStars();
  }, []);

  return (
    <div className="fixed top-0 left-0 w-full h-full -z-10 overflow-hidden" aria-hidden="true">
      {stars.map((star) => (
        <div
          key={star.id}
          className="absolute rounded-full bg-yellow-300 star-animation"
          style={{
            top: star.top,
            left: star.left,
            width: `${star.size}px`,
            height: `${star.size}px`,
            animationDuration: star.animationDuration,
            animationDelay: star.animationDelay,
            boxShadow: '0 0 6px 2px rgba(253, 244, 155, 0.5)',
          }}
        />
      ))}
    </div>
  );
};

export default FloatingStars;
