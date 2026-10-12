import React, { useEffect, useRef, useState } from "react";

interface Particle {
  x: number;
  y: number;
  vx: number;
  vy: number;
  size: number;
  opacity: number;
  color: string;
}

interface FloatingOrb {
  x: number;
  y: number;
  vx: number;
  vy: number;
  radius: number;
  opacity: number;
}

interface AdVisual {
  x: number;
  y: number;
  vx: number;
  vy: number;
  size: number;
  angle: number;
  opacity: number;
}

export const BackgroundAnimation: React.FC = () => {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const particlesRef = useRef<Particle[]>([]);
  const orbsRef = useRef<FloatingOrb[]>([]);
  const adsRef = useRef<AdVisual[]>([]);
  const [isDark, setIsDark] = useState(true);

  useEffect(() => {
    const html = document.documentElement;
    setIsDark(html.classList.contains("dark"));

    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight;

    const speed = parseFloat(localStorage.getItem("animationSpeed") || "1");
    const count = parseInt(localStorage.getItem("particleCount") || "50");
    const glowIntensity = parseFloat(localStorage.getItem("glowIntensity") || "1");

    // Particles
    particlesRef.current = Array.from({ length: count }, () => ({
      x: Math.random() * canvas.width,
      y: Math.random() * canvas.height,
      vx: (Math.random() - 0.5) * speed,
      vy: (Math.random() - 0.5) * speed,
      size: Math.random() * 3 + 1,
      opacity: Math.random() * 0.6 + 0.2,
      color: isDark ? "#2563eb" : "#3b82f6",
    }));

    // Floating orbs
    orbsRef.current = Array.from({ length: 3 }, () => ({
      x: Math.random() * canvas.width,
      y: Math.random() * canvas.height,
      vx: (Math.random() - 0.5) * 0.3 * speed,
      vy: (Math.random() - 0.5) * 0.3 * speed,
      radius: Math.random() * 80 + 40,
      opacity: isDark ? 0.08 : 0.04,
    }));

    // Random ad visuals
    adsRef.current = Array.from({ length: 6 }, () => ({
      x: Math.random() * canvas.width,
      y: Math.random() * canvas.height,
      vx: (Math.random() - 0.5) * 0.5,
      vy: (Math.random() - 0.5) * 0.5,
      size: Math.random() * 60 + 30,
      angle: Math.random() * Math.PI,
      opacity: Math.random() * 0.3 + 0.2,
    }));

    let animationFrameId: number;

    const animate = () => {
      ctx.fillStyle = isDark
          ? "rgba(15, 23, 42, 0.1)"
          : "rgba(248, 250, 252, 0.05)";
      ctx.fillRect(0, 0, canvas.width, canvas.height);

      // Particles
      particlesRef.current.forEach((p, i) => {
        p.x += p.vx;
        p.y += p.vy;
        if (p.x < 0 || p.x > canvas.width) p.vx *= -1;
        if (p.y < 0 || p.y > canvas.height) p.vy *= -1;

        const glowRadius = p.size * 3 * glowIntensity;
        const gradient = ctx.createRadialGradient(p.x, p.y, 0, p.x, p.y, glowRadius);
        gradient.addColorStop(0, `rgba(37, 99, 235, ${p.opacity * glowIntensity})`);
        gradient.addColorStop(0.5, `rgba(37, 99, 235, ${p.opacity * 0.5 * glowIntensity})`);
        gradient.addColorStop(1, "rgba(37, 99, 235, 0)");

        ctx.fillStyle = gradient;
        ctx.beginPath();
        ctx.arc(p.x, p.y, glowRadius, 0, Math.PI * 2);
        ctx.fill();

        ctx.fillStyle = `rgba(37, 99, 235, ${p.opacity})`;
        ctx.beginPath();
        ctx.arc(p.x, p.y, p.size, 0, Math.PI * 2);
        ctx.fill();

        particlesRef.current.forEach((p2, j) => {
          if (i < j) {
            const dx = p2.x - p.x;
            const dy = p2.y - p.y;
            const distance = Math.sqrt(dx * dx + dy * dy);
            if (distance < 150) {
              ctx.strokeStyle = `rgba(37, 99, 235, ${(1 - distance / 150) * 0.2 * glowIntensity})`;
              ctx.lineWidth = 1;
              ctx.beginPath();
              ctx.moveTo(p.x, p.y);
              ctx.lineTo(p2.x, p2.y);
              ctx.stroke();
            }
          }
        });
      });

      // Orbs
      orbsRef.current.forEach((orb) => {
        orb.x += orb.vx;
        orb.y += orb.vy;
        if (orb.x < orb.radius || orb.x > canvas.width - orb.radius) orb.vx *= -1;
        if (orb.y < orb.radius || orb.y > canvas.height - orb.radius) orb.vy *= -1;

        const gradient = ctx.createRadialGradient(orb.x, orb.y, 0, orb.x, orb.y, orb.radius);
        gradient.addColorStop(0, `rgba(16, 185, 129, ${orb.opacity * glowIntensity})`);
        gradient.addColorStop(0.7, `rgba(16, 185, 129, ${orb.opacity * 0.3 * glowIntensity})`);
        gradient.addColorStop(1, "rgba(16, 185, 129, 0)");

        ctx.fillStyle = gradient;
        ctx.beginPath();
        ctx.arc(orb.x, orb.y, orb.radius, 0, Math.PI * 2);
        ctx.fill();
      });

      // Ad visuals
      adsRef.current.forEach((ad) => {
        ad.x += ad.vx;
        ad.y += ad.vy;
        ad.angle += 0.01;
        if (ad.x < 0 || ad.x > canvas.width) ad.vx *= -1;
        if (ad.y < 0 || ad.y > canvas.height) ad.vy *= -1;

        ctx.save();
        ctx.translate(ad.x, ad.y);
        ctx.rotate(ad.angle);
        ctx.fillStyle = `rgba(245, 166, 35, ${ad.opacity})`;
        ctx.fillRect(-ad.size / 2, -ad.size / 2, ad.size, ad.size);
        ctx.restore();
      });

      // Brand "Y"
      ctx.save();
      ctx.font = "bold 160px Orbitron, sans-serif";
      ctx.textAlign = "center";
      ctx.textBaseline = "middle";
      const pulse = (Math.sin(Date.now() / 2000) + 1) / 2;
      ctx.fillStyle = `rgba(0, 181, 173, ${0.15 + pulse * 0.25})`;
      ctx.fillText("Y", canvas.width / 2, canvas.height / 2);
      ctx.restore();

      animationFrameId = requestAnimationFrame(animate);
    };

    animate();

    const handleResize = () => {
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;
    };
    const handleThemeChange = () => {
      const html = document.documentElement;
      setIsDark(html.classList.contains("dark"));
    };

    window.addEventListener("resize", handleResize);
    window.addEventListener("themechange", handleThemeChange);

    return () => {
      cancelAnimationFrame(animationFrameId);
      window.removeEventListener("resize", handleResize);
      window.removeEventListener("themechange", handleThemeChange);
    };
  }, [isDark]);

  return (
      <canvas
          ref={canvasRef}
          className="fixed inset-0 -z-10 pointer-events-none"
          style={{ mixBlendMode: "screen" }}
      />
  );
};
