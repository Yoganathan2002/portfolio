import React, { useEffect, useRef } from 'react';

export default function DNAAnimation() {
  const canvasRef = useRef(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext('2d');
    let animationId;

    const setCanvasSize = () => {
      canvas.width = canvas.offsetWidth * window.devicePixelRatio;
      canvas.height = canvas.offsetHeight * window.devicePixelRatio;
      ctx.scale(window.devicePixelRatio, window.devicePixelRatio);
    };

    setCanvasSize();
    window.addEventListener('resize', setCanvasSize);

    const centerX = canvas.offsetWidth / 2;
    const centerY = canvas.offsetHeight / 2;
    const helixRadius = 60;
    const dotCount = 120;
    const speed = 0.01;
    let time = 0;

    const animate = () => {
      ctx.fillStyle = 'rgba(15, 23, 42, 0.1)';
      ctx.fillRect(0, 0, canvas.offsetWidth, canvas.offsetHeight);

      for (let i = 0; i < dotCount; i++) {
        const angle = (i / dotCount) * Math.PI * 2 + time;
        const yOffset = (i / dotCount) * 200 - 100;
        const radius = helixRadius + Math.sin(angle * 2) * 20;

        const x = centerX + Math.cos(angle) * radius;
        const y = centerY + yOffset;

        const opacity = 0.3 + Math.sin(time + i * 0.05) * 0.4;
        const size = 2 + Math.sin(time + i * 0.03) * 1;

        const hue = (i / dotCount * 360 + time * 50) % 360;
        ctx.fillStyle = `hsla(${hue}, 100%, 50%, ${opacity})`;

        ctx.beginPath();
        ctx.arc(x, y, size, 0, Math.PI * 2);
        ctx.fill();
      }

      time += speed;
      animationId = requestAnimationFrame(animate);
    };

    animate();

    return () => {
      cancelAnimationFrame(animationId);
      window.removeEventListener('resize', setCanvasSize);
    };
  }, []);

  return (
    <canvas
      ref={canvasRef}
      className="w-full h-full bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900 rounded-lg"
    />
  );
}
