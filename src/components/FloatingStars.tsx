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
  const scrollY = useRef(0);
  const animationFrameId = useRef<number | null>(null);

  useEffect(() => {
    const generateStars = () => {
      const newStars: Star[] = [];
      const numStars = 75; // Reduced for better performance
      for (let i = 0; i < numStars; i++) {
        newStars.push({
          id: i,
          top: `${Math.random() * 100}%`,
          left: `${Math.random() * 100}%`,
          size: Math.random() * 2 + 1,
          speed: Math.random() * 0.5 + 0.1, // Increased speed variance for more depth
        });
      }
      setStars(newStars);
      starRefs.current = new Array(newStars.length).fill(null);
    };
    generateStars();
  }, []);

  useEffect(() => {
    // This function updates star positions. It's called inside requestAnimationFrame
    // to ensure it runs smoothly and doesn't block the main thread.
    const updateStars = () => {
      const currentScrollY = scrollY.current;
      starRefs.current.forEach((starEl, index) => {
        if (starEl) {
          const starData = stars[index];
          if (starData) {
            starEl.style.transform = `translateY(${currentScrollY * starData.speed}px)`;
          }
        }
      });
      animationFrameId.current = null; // Allow the next frame to be requested
    };

    // This function runs on every scroll event
    const onScroll = () => {
      scrollY.current = window.scrollY;
      // We schedule an animation frame only if there isn't one already pending.
      // This prevents doing expensive work on every single scroll tick.
      if (animationFrameId.current === null) {
        animationFrameId.current = requestAnimationFrame(updateStars);
      }
    };

    window.addEventListener('scroll', onScroll, { passive: true });

    return () => {
      window.removeEventListener('scroll', onScroll);
      if (animationFrameId.current) {
        cancelAnimationFrame(animationFrameId.current);
      }
    };
  }, [stars]); // Rerun if stars are regenerated

  return (
    <div className="fixed top-0 left-0 w-full h-full -z-10 overflow-hidden" aria-hidden="true">
      {stars.map((star, index) => (
        <div
          key={star.id}
          ref={(el) => (starRefs.current[index] = el)}
          className="absolute rounded-full bg-yellow-300 transition-transform duration-500 ease-in-out"
          style={{
            top: star.top,
            left: star.left,
            width: `${star.size}px`,
            height: `${star.size}px`,
            boxShadow: '0 0 6px 2px rgba(253, 244, 155, 0.5)',
            willChange: 'transform', // Browser performance hint
          }}
        />
      ))}
    </div>
  );
};

export default FloatingStars;
