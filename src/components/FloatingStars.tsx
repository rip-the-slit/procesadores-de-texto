'use client';

import React, { useEffect, useState, useRef } from 'react';

interface Star {
  id: number;
  top: string;
  left: string;
  size: number;
  speed: number;
}

const FloatingStars = () => {
  const [stars, setStars] = useState<Star[]>([]);
  const starRefs = useRef<(HTMLDivElement | null)[]>([]);

  useEffect(() => {
    // Generate stars on component mount
    const generateStars = () => {
      const newStars: Star[] = [];
      const numStars = 100;
      for (let i = 0; i < numStars; i++) {
        newStars.push({
          id: i,
          top: `${Math.random() * 100}%`,
          left: `${Math.random() * 100}%`,
          size: Math.random() * 2 + 1,
          speed: Math.random() * 0.3 + 0.1, // Different speeds for parallax
        });
      }
      setStars(newStars);
      starRefs.current = new Array(newStars.length).fill(null);
    };
    generateStars();
  }, []);

  useEffect(() => {
    // Handle scroll event for parallax effect
    const handleScroll = () => {
      const scrollY = window.scrollY;
      starRefs.current.forEach((starEl, index) => {
        if (starEl) {
          const starData = stars[index];
          if (starData) {
            starEl.style.transform = `translateY(${scrollY * starData.speed}px)`;
          }
        }
      });
    };

    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, [stars]);

  return (
    <div className="fixed top-0 left-0 w-full h-full -z-10 overflow-hidden" aria-hidden="true">
      {stars.map((star, index) => (
        <div
          key={star.id}
          ref={(el) => (starRefs.current[index] = el)}
          className="absolute rounded-full bg-yellow-300 transition-transform duration-100 ease-out"
          style={{
            top: star.top,
            left: star.left,
            width: `${star.size}px`,
            height: `${star.size}px`,
            boxShadow: '0 0 6px 2px rgba(253, 244, 155, 0.5)',
          }}
        />
      ))}
    </div>
  );
};

export default FloatingStars;
