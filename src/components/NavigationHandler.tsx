import React, { useEffect, useRef } from 'react';

export const NavigationHandler: React.FC = () => {
  const scrollSpeedRef = useRef(1);
  const isRightClickRef = useRef(false);

  useEffect(() => {
    // Direct navigation links handler
    const handleNavigation = () => {
      const links = document.querySelectorAll('a[data-nav]');

      links.forEach((link) => {
        link.addEventListener('click', (e: any) => {
          e.preventDefault();
          e.stopPropagation();

          const target = link.getAttribute('data-nav');

          if (target === 'home') {
            window.scrollTo({ top: 0, behavior: 'smooth' });
            return;
          }

          const element = document.getElementById(target);
          if (element) {
            const headerOffset = 100;
            const elementPosition = element.getBoundingClientRect().top + window.scrollY;
            const offsetPosition = elementPosition - headerOffset;

            window.scrollTo({
              top: offsetPosition,
              behavior: 'smooth',
            });
          }
        });
      });
    };

    // Right-click to boost scroll speed
    const handleMouseMove = (e: MouseEvent) => {
      const threshold = 80;
      const maxSpeed = isRightClickRef.current ? 15 : 8; // Increased speed when right-clicking
      const rightEdgeThreshold = window.innerWidth - threshold;
      const bottomEdgeThreshold = window.innerHeight - threshold;
      const topEdgeThreshold = threshold;

      if (e.clientX > rightEdgeThreshold) {
        if (e.clientY > bottomEdgeThreshold) {
          const distance = window.innerHeight - e.clientY;
          scrollSpeedRef.current = maxSpeed * ((threshold - distance) / threshold);
        } else if (e.clientY < topEdgeThreshold) {
          const distance = e.clientY;
          scrollSpeedRef.current = -maxSpeed * ((threshold - distance) / threshold);
        } else {
          scrollSpeedRef.current = 0;
        }
      } else {
        scrollSpeedRef.current = 0;
      }
    };

    const handleMouseDown = (e: MouseEvent) => {
      if (e.button === 2) {
        // Right-click
        isRightClickRef.current = true;
      }
    };

    const handleMouseUp = (e: MouseEvent) => {
      if (e.button === 2) {
        isRightClickRef.current = false;
      }
    };

    const handleContextMenu = (e: MouseEvent) => {
      const threshold = 80;
      if (e.clientX > window.innerWidth - threshold) {
        e.preventDefault();
      }
    };

    // Auto-scroll animation
    let animationFrameId: number;
    const animate = () => {
      if (scrollSpeedRef.current !== 0) {
        window.scrollBy(0, scrollSpeedRef.current);
      }
      animationFrameId = requestAnimationFrame(animate);
    };

    // Set up all listeners
    document.addEventListener('contextmenu', handleContextMenu);
    document.addEventListener('mousemove', handleMouseMove);
    document.addEventListener('mousedown', handleMouseDown);
    document.addEventListener('mouseup', handleMouseUp);
    animationFrameId = requestAnimationFrame(animate);

    // Initialize navigation after a short delay
    setTimeout(handleNavigation, 100);

    return () => {
      document.removeEventListener('contextmenu', handleContextMenu);
      document.removeEventListener('mousemove', handleMouseMove);
      document.removeEventListener('mousedown', handleMouseDown);
      document.removeEventListener('mouseup', handleMouseUp);
      cancelAnimationFrame(animationFrameId);
    };
  }, []);

  return null;
};
