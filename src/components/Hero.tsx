import React, { useEffect, useRef } from 'react';

interface Particle {
  x: number;
  y: number;
  vx: number;
  vy: number;
  size: number;
  opacity: number;
}

export const Hero: React.FC = () => {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const particlesRef = useRef<Particle[]>([]);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight;

    // Initialize particles
    particlesRef.current = Array.from({ length: 30 }, () => ({
      x: Math.random() * canvas.width,
      y: Math.random() * canvas.height,
      vx: (Math.random() - 0.5) * 0.5,
      vy: (Math.random() - 0.5) * 0.5,
      size: Math.random() * 2 + 1,
      opacity: Math.random() * 0.5 + 0.1,
    }));

    const animate = () => {
      ctx.clearRect(0, 0, canvas.width, canvas.height);
      ctx.fillStyle = 'rgba(15, 23, 42, 1)';
      ctx.fillRect(0, 0, canvas.width, canvas.height);

      particlesRef.current.forEach((p) => {
        p.x += p.vx;
        p.y += p.vy;

        if (p.x < 0 || p.x > canvas.width) p.vx *= -1;
        if (p.y < 0 || p.y > canvas.height) p.vy *= -1;

        ctx.fillStyle = `rgba(37, 99, 235, ${p.opacity})`;
        ctx.beginPath();
        ctx.arc(p.x, p.y, p.size, 0, Math.PI * 2);
        ctx.fill();
      });

      requestAnimationFrame(animate);
    };

    animate();

    const handleResize = () => {
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;
    };

    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden pt-20 dark:bg-slate-900 light:bg-white transition-colors duration-300">
      <canvas
        ref={canvasRef}
        className="absolute inset-0 z-0 dark:block hidden"
      />
      <div className="absolute inset-0 z-0 dark:hidden light:block bg-gradient-to-br from-slate-50 via-white to-slate-100" />

      <div className="relative z-10 container text-center">
        <div className="inline-block mb-6 px-4 py-2 rounded-full dark:bg-blue-500/10 light:bg-blue-100 dark:border dark:border-blue-500/20 light:border light:border-blue-300">
          <span className="dark:text-blue-400 light:text-blue-600 text-sm font-medium">Available for Opportunities</span>
        </div>

        <h1 className="text-5xl md:text-7xl font-bold mb-6 leading-tight">
          <span className="dark:gradient-text light:text-blue-600">Yoganathan V</span>
          <br />
          <span className="dark:text-slate-300 light:text-slate-700">Data Analyst & Backend Engineer</span>
        </h1>

        <p className="text-xl dark:text-slate-400 light:text-slate-600 max-w-2xl mx-auto mb-12">
          Building scalable data pipelines and backend systems at IIT Madras Research Park.
          1+ years of professional experience crafting analytical solutions that drive business decisions.
        </p>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-12 max-w-2xl mx-auto">
          <div className="p-4 rounded-lg dark:bg-slate-800/50 light:bg-slate-100/50 dark:border dark:border-slate-700/50 light:border light:border-slate-300/50 dark:hover:border-blue-500/50 light:hover:border-blue-400/50 transition">
            <div className="text-2xl font-bold dark:text-blue-400 light:text-blue-600">1+</div>
            <div className="dark:text-slate-400 light:text-slate-600 text-sm">Years Professional</div>
          </div>
          <div className="p-4 rounded-lg dark:bg-slate-800/50 light:bg-slate-100/50 dark:border dark:border-slate-700/50 light:border light:border-slate-300/50 dark:hover:border-blue-500/50 light:hover:border-blue-400/50 transition">
            <div className="text-2xl font-bold dark:text-green-400 light:text-green-600">M.Sc IT</div>
            <div className="dark:text-slate-400 light:text-slate-600 text-sm">University of Madras</div>
          </div>
          <div className="p-4 rounded-lg dark:bg-slate-800/50 light:bg-slate-100/50 dark:border dark:border-slate-700/50 light:border light:border-slate-300/50 dark:hover:border-blue-500/50 light:hover:border-blue-400/50 transition">
            <div className="text-2xl font-bold dark:text-amber-400 light:text-amber-600">87/100</div>
            <div className="dark:text-slate-400 light:text-slate-600 text-sm">ATS Score</div>
          </div>
        </div>

        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <a
            href="#projects"
            className="px-8 py-3 dark:bg-blue-600 light:bg-blue-600 dark:hover:bg-blue-700 light:hover:bg-blue-700 text-white rounded-lg font-semibold transition transform hover:-translate-y-1"
          >
            View Work
          </a>
          <a
            href="#contact"
            className="px-8 py-3 dark:border dark:border-slate-600 light:border light:border-slate-300 dark:text-slate-300 light:text-slate-700 dark:hover:border-blue-500 light:hover:border-blue-600 rounded-lg font-semibold transition"
          >
            Get in Touch
          </a>
        </div>
      </div>
    </section>
  );
};
