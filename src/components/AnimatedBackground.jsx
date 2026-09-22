import React, { useEffect, useRef } from 'react';

export default function AnimatedBackground() {
  const canvasRef = useRef(null);

  useEffect(() => {
    // Skip heavy canvas loop if user prefers reduced motion
    if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) {
      return;
    }

    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext('2d', { alpha: true });
    if (!ctx) return;

    let animationFrameId;
    let width = (canvas.width = window.innerWidth);
    let height = (canvas.height = window.innerHeight);

    const handleResize = () => {
      if (!canvas) return;
      width = canvas.width = window.innerWidth;
      height = canvas.height = window.innerHeight;
    };

    window.addEventListener('resize', handleResize, { passive: true });

    // Lightweight drifting particles: 18 on desktop, 8 on small screens
    const isMobile = window.innerWidth < 768;
    const particleCount = isMobile ? 8 : 18;
    const particles = [];

    for (let i = 0; i < particleCount; i++) {
      particles.push({
        x: Math.random() * width,
        y: Math.random() * height,
        vx: (Math.random() - 0.5) * 0.2,
        vy: -Math.random() * 0.25 - 0.05,
        radius: Math.random() * 1.2 + 0.6,
        baseAlpha: Math.random() * 0.2 + 0.08,
        pulseSpeed: Math.random() * 0.012 + 0.006,
        pulseAngle: Math.random() * Math.PI * 2,
      });
    }

    let isVisible = true;
    const handleVisibility = () => {
      isVisible = !document.hidden;
    };
    document.addEventListener('visibilitychange', handleVisibility);

    const render = () => {
      if (!isVisible) {
        animationFrameId = requestAnimationFrame(render);
        return;
      }

      ctx.clearRect(0, 0, width, height);

      // Draw lightweight glowing particles
      for (let i = 0; i < particles.length; i++) {
        const p = particles[i];

        p.x += p.vx;
        p.y += p.vy;
        p.pulseAngle += p.pulseSpeed;

        if (p.x < -10) p.x = width + 10;
        if (p.x > width + 10) p.x = -10;
        if (p.y < -10) p.y = height + 10;
        if (p.y > height + 10) p.y = -10;

        const currentAlpha = p.baseAlpha + Math.sin(p.pulseAngle) * 0.05;

        ctx.fillStyle = `rgba(142, 229, 79, ${Math.max(0.04, currentAlpha)})`;
        ctx.beginPath();
        ctx.arc(p.x, p.y, p.radius, 0, Math.PI * 2);
        ctx.fill();
      }

      animationFrameId = requestAnimationFrame(render);
    };

    render();

    return () => {
      window.removeEventListener('resize', handleResize);
      document.removeEventListener('visibilitychange', handleVisibility);
      cancelAnimationFrame(animationFrameId);
    };
  }, []);

  return (
    <div className="fixed inset-0 pointer-events-none -z-20 overflow-hidden">
      {/* 1. Deep Obsidian Base Canvas */}
      <div className="absolute inset-0 bg-[#060807]" />

      {/* 2. Optimized Static Ambient Aurora Spots (No heavy GPU blur re-rasterization) */}
      {/* Top Left Dark Forest Glow */}
      <div className="absolute -top-[10%] -left-[5%] w-[500px] h-[500px] rounded-full bg-gradient-to-br from-[#1c2824]/40 to-transparent blur-3xl opacity-60 pointer-events-none" />

      {/* Top Right Subtle Electric Lime Ambient Glow */}
      <div className="absolute top-[5%] -right-[8%] w-[450px] h-[450px] rounded-full bg-gradient-to-bl from-sapling-400/10 via-[#1c2824]/20 to-transparent blur-3xl opacity-50 pointer-events-none" />

      {/* Center Floating Deep Emerald Accent */}
      <div className="absolute top-[40%] left-[20%] w-[480px] h-[480px] rounded-full bg-gradient-to-tr from-[#1c2824]/25 via-sapling-400/5 to-transparent blur-3xl opacity-40 pointer-events-none" />

      {/* Bottom Subtle Forest Glow */}
      <div className="absolute -bottom-[8%] right-[10%] w-[500px] h-[500px] rounded-full bg-gradient-to-tl from-[#1c2824]/30 via-sapling-400/6 to-transparent blur-3xl opacity-50 pointer-events-none" />

      {/* 3. Extremely Subtle Mathematical Grid Texture */}
      <div 
        className="absolute inset-0 opacity-[0.02]"
        style={{
          backgroundImage: `
            linear-gradient(to right, rgba(142, 229, 79, 0.4) 1px, transparent 1px),
            linear-gradient(to bottom, rgba(142, 229, 79, 0.4) 1px, transparent 1px)
          `,
          backgroundSize: '48px 48px'
        }}
      />

      {/* 4. Canvas for Minimal Drifting Starlet Particles */}
      <canvas 
        ref={canvasRef} 
        className="absolute inset-0 w-full h-full"
      />
    </div>
  );
}
