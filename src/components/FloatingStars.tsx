'use client';

import React, { useEffect, useState, useRef, useCallback } from 'react';
import { useGame } from '@/contexts/GameContext';
import { Star } from 'lucide-react';

interface StarState {
  id: number;
  x: number;
  y: number;
  vx: number;
  vy: number;
  size: number;
}

const FloatingStars = () => {
  const { points } = useGame();
  const [stars, setStars] = useState<StarState[]>([]);
  const animationFrameId = useRef<number>();
  const lastScrollY = useRef(0);

  // Initialize or update stars when points change
  useEffect(() => {
    const numStars = points + 10;
    // Use a function with setStars to correctly handle state updates
    setStars(prevStars => {
        const currentCount = prevStars.length;
        if (numStars > currentCount) {
            const newStars = Array.from({ length: numStars - currentCount }, (_, i) => ({
                id: Date.now() + i,
                x: Math.random() * window.innerWidth,
                y: Math.random() * window.innerHeight,
                vx: 0,
                vy: 0,
                size: Math.random() * 10 + 10,
            }));
            return [...prevStars, ...newStars];
        }
        if (numStars < currentCount) {
            return prevStars.slice(0, numStars);
        }
        return prevStars;
    });
    lastScrollY.current = window.scrollY;
  }, [points]);
  
  // Animation loop using requestAnimationFrame
  const animate = useCallback(() => {
    const width = window.innerWidth;
    const height = window.innerHeight;
    const friction = 0.96; // Slows down stars over time
    const bounceDamping = 0.75; // Energy loss on bounce

    setStars(prevStars => prevStars.map(star => {
        let { x, y, vx, vy } = star;

        // Apply friction to create deceleration
        vx *= friction;
        vy *= friction;

        // Update position based on velocity
        x += vx;
        y += vy;

        // Bounce off screen edges
        if (x <= 0) {
            x = 0;
            vx *= -bounceDamping;
        } else if (x >= width - star.size) {
            x = width - star.size;
            vx *= -bounceDamping;
        }

        if (y <= 0) {
            y = 0;
            vy *= -bounceDamping;
        } else if (y >= height - star.size) {
            y = height - star.size;
            vy *= -bounceDamping;
        }
        
        // Stop movement completely if velocity is very low
        if (Math.abs(vx) < 0.1) vx = 0;
        if (Math.abs(vy) < 0.1) vy = 0;

        return { ...star, x, y, vx, vy };
    }));

    animationFrameId.current = requestAnimationFrame(animate);
  }, []);

  // Handle scroll to apply a "kick" to the stars
  const handleScroll = useCallback(() => {
    const scrollDelta = window.scrollY - lastScrollY.current;
    lastScrollY.current = window.scrollY;

    // Only apply kick if scroll is significant to avoid jitter
    if (Math.abs(scrollDelta) < 2) return;
    
    // Calculate a dynamic "kick" strength based on scroll speed
    const kickStrength = Math.min(Math.abs(scrollDelta) * 0.1, 15);
    // The direction is based on the scroll. Positive delta (scroll down) means positive vy kick (stars move down).
    const direction = scrollDelta > 0 ? 1 : -1; 

    setStars(prevStars => prevStars.map(star => ({
        ...star,
        // Give a little horizontal kick for variety
        vx: star.vx + (Math.random() - 0.5) * kickStrength * 0.5,
        // The main kick is vertical, in the direction of the scroll
        vy: star.vy + direction * kickStrength * (0.8 + Math.random() * 0.4),
    })));
  }, []);
  
  // Set up and tear down the animation loop and scroll listener
  useEffect(() => {
    animationFrameId.current = requestAnimationFrame(animate);
    window.addEventListener('scroll', handleScroll, { passive: true });

    return () => {
      if (animationFrameId.current) {
        cancelAnimationFrame(animationFrameId.current);
      }
      window.removeEventListener('scroll', handleScroll);
    };
  }, [animate, handleScroll]);

  return (
    <div className="fixed top-0 left-0 w-full h-full -z-10 overflow-hidden" aria-hidden="true">
      {stars.map((star) => (
        <div
          key={star.id}
          className="absolute text-yellow-400"
          style={{
            transform: `translate(${star.x}px, ${star.y}px)`,
            willChange: 'transform',
          }}
        >
          <Star
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
