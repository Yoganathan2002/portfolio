import React, { useEffect, useRef } from 'react';

export const VaporEffect: React.FC = () => {
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const container = containerRef.current;
    if (!container) return;

    // Create vapor elements
    const createVapor = () => {
      const vapor = document.createElement('div');
      const size = Math.random() * 100 + 50;
      const duration = Math.random() * 8 + 12;
      const delay = Math.random() * 2;
      const xStart = Math.random() * 100;
      const opacity = Math.random() * 0.3 + 0.1;

      vapor.style.position = 'absolute';
      vapor.style.width = size + 'px';
      vapor.style.height = size + 'px';
      vapor.style.left = xStart + '%';
      vapor.style.bottom = '-' + size + 'px';
      vapor.style.borderRadius = '50%';
      vapor.style.background = `radial-gradient(circle at 30% 30%, rgba(37, 99, 235, ${opacity}), transparent)`;
      vapor.style.filter = `blur(${Math.random() * 20 + 30}px)`;
      vapor.style.animation = `vapor ${duration}s ease-out ${delay}s forwards`;
      vapor.style.mixBlendMode = 'screen';
      vapor.style.pointerEvents = 'none';

      container?.appendChild(vapor);

      // Remove element after animation
      setTimeout(() => vapor.remove(), (duration + delay) * 1000);
    };

    // Create new vapor effects periodically
    const vaporInterval = setInterval(createVapor, 500);

    // Add keyframes if not already present
    if (!document.getElementById('vapor-keyframes')) {
      const style = document.createElement('style');
      style.id = 'vapor-keyframes';
      style.textContent = `
        @keyframes vapor {
          0% {
            opacity: 0;
            transform: translateY(0) translateX(0) scale(1);
          }
          50% {
            opacity: 1;
          }
          100% {
            opacity: 0;
            transform: translateY(-150vh) translateX(${Math.random() * 200 - 100}px) scale(1.5);
          }
        }
      `;
      document.head.appendChild(style);
    }

    return () => {
      clearInterval(vaporInterval);
    };
  }, []);

  return (
    <div
      ref={containerRef}
      className="fixed inset-0 overflow-hidden pointer-events-none"
      style={{ zIndex: 5 }}
    />
  );
};
