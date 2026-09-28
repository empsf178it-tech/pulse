import React, { useEffect, useRef } from 'react';

export const BubbleCanvas = ({ density = 25, speed = 1, accentColor = '#EAF900' }) => {
  const canvasRef = useRef(null);

  useEffect(() => {
    // Check reduced motion preference or low-end mobile
    if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) {
      return;
    }

    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext('2d');

    let animationFrameId;
    let width = (canvas.width = canvas.offsetWidth);
    let height = (canvas.height = canvas.offsetHeight);

    const handleResize = () => {
      if (!canvas) return;
      width = canvas.width = canvas.offsetWidth;
      height = canvas.height = canvas.offsetHeight;
    };

    window.addEventListener('resize', handleResize);

    // Initialize bubbles
    const bubbleCount = Math.min(density, Math.floor(width / 30));
    const bubbles = [];

    for (let i = 0; i < bubbleCount; i++) {
      bubbles.push({
        x: Math.random() * width,
        y: Math.random() * height,
        radius: Math.random() * 3.5 + 1.2,
        speedY: (Math.random() * 0.8 + 0.3) * speed,
        speedX: Math.sin(Math.random() * Math.PI * 2) * 0.2,
        opacity: Math.random() * 0.4 + 0.15,
        wobble: Math.random() * Math.PI * 2,
        wobbleSpeed: Math.random() * 0.03 + 0.01
      });
    }

    const render = () => {
      ctx.clearRect(0, 0, width, height);

      bubbles.forEach((b) => {
        b.y -= b.speedY;
        b.wobble += b.wobbleSpeed;
        b.x += Math.sin(b.wobble) * 0.4;

        if (b.y < -10) {
          b.y = height + 10;
          b.x = Math.random() * width;
        }

        ctx.beginPath();
        ctx.arc(b.x, b.y, b.radius, 0, Math.PI * 2);
        ctx.fillStyle = `rgba(255, 255, 255, ${b.opacity})`;
        ctx.fill();

        // Subtle highlight ring
        ctx.beginPath();
        ctx.arc(b.x - b.radius * 0.3, b.y - b.radius * 0.3, b.radius * 0.4, 0, Math.PI * 2);
        ctx.fillStyle = `rgba(255, 255, 255, ${b.opacity * 0.8})`;
        ctx.fill();
      });

      animationFrameId = requestAnimationFrame(render);
    };

    render();

    return () => {
      cancelAnimationFrame(animationFrameId);
      window.removeEventListener('resize', handleResize);
    };
  }, [density, speed, accentColor]);

  return (
    <canvas
      ref={canvasRef}
      className="absolute inset-0 w-full h-full pointer-events-none z-0 opacity-70"
    />
  );
};
