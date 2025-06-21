'use client';

import React, { useEffect, useState, useRef } from 'react';
import { useGame } from '@/contexts/GameContext';
import { Star } from 'lucide-react';

interface StarProps {
  id: number;
  top: string;
  left: string;
  size: number;
  delay: number;
}

const FloatingStars = () => {
  const { points } = useGame();
  const [stars, setStars] = useState<StarProps[]>([]);
  const [isScrolling, setIsScrolling] = useState(false);
  const scrollTimeout = useRef<NodeJS.Timeout | null>(null);

  const numStars = points + 10;

  useEffect(() => {
    const newStars: StarProps[] = Array.from({ length: numStars }, (_, i) => ({
      id: i,
      top: `${Math.random() * 100}%`,
      left: `${Math.random() * 100}%`,
      size: Math.random() * 10 + 10, // 10px to 20px
      delay: Math.random() * 0.5,
    }));
    setStars(newStars);
  }, [points]); // Rerun when points change

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolling(true);
      if (scrollTimeout.current) {
        clearTimeout(scrollTimeout.current);
      }
      scrollTimeout.current = setTimeout(() => {
        setIsScrolling(false);
      }, 300); // Reset after animation could finish
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => {
      window.removeEventListener('scroll', handleScroll);
      if (scrollTimeout.current) {
        clearTimeout(scrollTimeout.current);
      }
    };
  }, []);

  return (
    <div className="fixed top-0 left-0 w-full h-full -z-10 overflow-hidden" aria-hidden="true">
      {stars.map((star) => (
        <div
          key={star.id}
          className="absolute text-yellow-400"
          style={{
            top: star.top,
            left: star.left,
            animationDelay: isScrolling ? `${star.delay}s` : '0s',
          }}
        >
          <Star
            className={isScrolling ? 'boing-animation' : ''}
            size={star.size}
            strokeWidth={1}
            fill="currentColor"
          />
        </div>
      ))}
    </div>
  );
};

export default FloatingStars;
