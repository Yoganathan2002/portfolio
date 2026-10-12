import React, { useEffect, useRef } from 'react';

export const AutoScroll: React.FC = () => {
  const scrollSpeedRef = useRef(0);
  const animationFrameRef = useRef<number>();

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      const threshold = 80;
      const maxSpeed = 8;

      // Check right side
      if (e.clientX > window.innerWidth - threshold) {
        const distance = window.innerWidth - e.clientX;
        scrollSpeedRef.current = maxSpeed * ((threshold - distance) / threshold);
      }
      // Check left side (for future use)
      else if (e.clientX < threshold) {
        scrollSpeedRef.current = 0;
      }
      // Check top
      else if (e.clientY < threshold) {
        scrollSpeedRef.current = -maxSpeed * ((threshold - e.clientY) / threshold);
      }
      // Check bottom
      else if (e.clientY > window.innerHeight - threshold) {
        const distance = window.innerHeight - e.clientY;
        scrollSpeedRef.current = maxSpeed * ((threshold - distance) / threshold);
      }
      // Default - no scroll
      else {
        scrollSpeedRef.current = 0;
      }
    };

    const animate = () => {
      if (scrollSpeedRef.current !== 0) {
        window.scrollBy(0, scrollSpeedRef.current);
      }
      animationFrameRef.current = requestAnimationFrame(animate);
    };

    window.addEventListener('mousemove', handleMouseMove);
    animationFrameRef.current = requestAnimationFrame(animate);

    return () => {
      window.removeEventListener('mousemove', handleMouseMove);
      if (animationFrameRef.current) {
        cancelAnimationFrame(animationFrameRef.current);
      }
    };
  }, []);

  return null;
};
