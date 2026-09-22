import React, { useEffect, useRef } from 'react';

export default function AnimatedBackground() {
  const canvasRef = useRef(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    let animationFrameId;
    let width = (canvas.width = window.innerWidth);
    let height = (canvas.height = window.innerHeight);

    const handleResize = () => {
      if (!canvas) return;
      width = canvas.width = window.innerWidth;
      height = canvas.height = window.innerHeight;
    };

    window.addEventListener('resize', handleResize);

    // Subtle drifting analytical particles in Electric Lime #8EE54F
    const particleCount = Math.min(Math.floor(window.innerWidth / 35), 36);
    const particles = [];

    for (let i = 0; i < particleCount; i++) {
      particles.push({
        x: Math.random() * width,
        y: Math.random() * height,
        vx: (Math.random() - 0.5) * 0.25,
        vy: -Math.random() * 0.35 - 0.08, // slow upward drift
        radius: Math.random() * 1.4 + 0.7,
        baseAlpha: Math.random() * 0.22 + 0.08,
        pulseSpeed: Math.random() * 0.015 + 0.008,
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

      // Faint mathematical connection threads between nearby particles
      for (let i = 0; i < particles.length; i++) {
        for (let j = i + 1; j < particles.length; j++) {
          const dx = particles[i].x - particles[j].x;
          const dy = particles[i].y - particles[j].y;
          const dist = Math.sqrt(dx * dx + dy * dy);

          if (dist < 105) {
            const alpha = (1 - dist / 105) * 0.06;
            ctx.strokeStyle = `rgba(142, 229, 79, ${alpha})`;
            ctx.lineWidth = 0.5;
            ctx.beginPath();
            ctx.moveTo(particles[i].x, particles[i].y);
            ctx.lineTo(particles[j].x, particles[j].y);
            ctx.stroke();
          }
        }
      }

      // Draw particles with gentle pulsing luminance
      for (let i = 0; i < particles.length; i++) {
        const p = particles[i];

        p.x += p.vx;
        p.y += p.vy;
        p.pulseAngle += p.pulseSpeed;

        // Wrap around viewport boundaries smoothly
        if (p.x < -10) p.x = width + 10;
        if (p.x > width + 10) p.x = -10;
        if (p.y < -10) p.y = height + 10;
        if (p.y > height + 10) p.y = -10;

        const currentAlpha = p.baseAlpha + Math.sin(p.pulseAngle) * 0.06;

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

      {/* 2. Soft Minimal Animated Aurora Blobs (#1c2824 & #8EE54F) */}
      {/* Top Left Floating Dark Forest/Lime Glow */}
      <div 
        className="absolute -top-[15%] -left-[10%] w-[620px] h-[620px] rounded-full bg-gradient-to-br from-[#1c2824]/40 to-transparent blur-[130px] opacity-70 animate-float"
        style={{ animationDuration: '20s' }}
      />

      {/* Top Right Subtle Electric Lime Ambient Glow */}
      <div 
        className="absolute top-[8%] -right-[12%] w-[520px] h-[520px] rounded-full bg-gradient-to-bl from-sapling-400/10 via-[#1c2824]/20 to-transparent blur-[140px] opacity-60 animate-float-delayed"
        style={{ animationDuration: '24s' }}
      />

      {/* Center Floating Deep Emerald/Forest Accent */}
      <div 
        className="absolute top-[45%] left-[25%] w-[580px] h-[580px] rounded-full bg-gradient-to-tr from-[#1c2824]/30 via-sapling-400/8 to-transparent blur-[150px] opacity-50 animate-float"
        style={{ animationDuration: '28s' }}
      />

      {/* Bottom Floating Subtle Forest Glow */}
      <div 
        className="absolute -bottom-[10%] right-[15%] w-[650px] h-[650px] rounded-full bg-gradient-to-tl from-[#1c2824]/35 via-sapling-400/8 to-transparent blur-[160px] opacity-60 animate-float-delayed"
        style={{ animationDuration: '22s' }}
      />

      {/* 3. Extremely Subtle Mathematical Grid Texture */}
      <div 
        className="absolute inset-0 opacity-[0.022]"
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
