import React, { useEffect } from 'react';

export const SmoothNavigation: React.FC = () => {
  useEffect(() => {
    // Simple, direct smooth scroll implementation
    document.addEventListener('click', (e) => {
      const target = e.target as HTMLElement;

      // Check if it's a link
      if (target.tagName !== 'A') return;

      const href = (target as HTMLAnchorElement).href;
      const url = new URL(href);

      // Only handle hash links
      if (!url.hash) return;

      e.preventDefault();

      const hash = url.hash.substring(1); // Remove #
      const element = document.getElementById(hash);

      if (element) {
        const offsetTop = element.offsetTop - 100;
        window.scrollTo({
          top: offsetTop,
          behavior: 'smooth',
        });
      } else if (hash === '') {
        // Handle root hash
        window.scrollTo({
          top: 0,
          behavior: 'smooth',
        });
      }
    });

    // Add hover effect for auto-scroll indicator
    document.addEventListener('mousemove', (e) => {
      const threshold = 100;
      const scrollIndicator = document.getElementById('scroll-indicator');

      if (!scrollIndicator) return;

      if (e.clientX > window.innerWidth - threshold && e.clientY > window.innerHeight - threshold) {
        scrollIndicator.textContent = '↓ Auto-scroll';
        scrollIndicator.style.opacity = '0.7';
      } else if (e.clientX > window.innerWidth - threshold && e.clientY < threshold) {
        scrollIndicator.textContent = '↑ Auto-scroll';
        scrollIndicator.style.opacity = '0.7';
      } else {
        scrollIndicator.style.opacity = '0';
      }
    });
  }, []);

  return (
    <div
      id="scroll-indicator"
      className="fixed bottom-8 right-8 px-4 py-2 dark:bg-blue-600/20 light:bg-blue-400/10 dark:text-blue-300 light:text-blue-600 rounded-lg text-sm font-semibold backdrop-blur-md dark:border dark:border-blue-500/30 light:border light:border-blue-300/30 transition-opacity duration-300"
      style={{ opacity: 0, pointerEvents: 'none', zIndex: 40 }}
    />
  );
};
