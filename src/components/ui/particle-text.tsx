"use client";

import React, { useEffect, useRef } from "react";

type ParticleTextProps = {
  text: string;
  className?: string;
  particleColor?: string;
  spacing?: number;
  repelRadius?: number;
  repelStrength?: number;
  particleSize?: number;
  padding?: number;
  baseOpacity?: number;
};

type Particle = {
  x: number;
  y: number;
  ox: number;
  oy: number;
  vx: number;
  vy: number;
};

export function ParticleText({
  text,
  className,
  particleColor = "rgba(255,255,255,0.9)",
  spacing = 4,
  repelRadius = 80,
  repelStrength = 0.25,
  particleSize = 0.7,
  padding = 36,
  baseOpacity = 0.2,
}: ParticleTextProps) {
  const containerRef = useRef<HTMLSpanElement | null>(null);
  const spanRef = useRef<HTMLSpanElement | null>(null);
  const canvasRef = useRef<HTMLCanvasElement | null>(null);
  const particlesRef = useRef<Particle[]>([]);
  const rafRef = useRef<number | null>(null);
  const mouseRef = useRef<{ x: number; y: number; active: boolean }>({
    x: 0,
    y: 0,
    active: false,
  });

  useEffect(() => {
    const container = containerRef.current;
    const span = spanRef.current;
    const canvas = canvasRef.current;
    if (!container || !span || !canvas) return;

    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    const offscreen = document.createElement("canvas");
    const offCtx = offscreen.getContext("2d");
    if (!offCtx) return;

    const buildParticles = () => {
      const rect = span.getBoundingClientRect();
      const dpr = window.devicePixelRatio || 1;
      const width = Math.max(1, Math.floor(rect.width + padding * 2));
      const height = Math.max(1, Math.floor(rect.height + padding * 2));

      canvas.width = width * dpr;
      canvas.height = height * dpr;
      canvas.style.width = `${width}px`;
      canvas.style.height = `${height}px`;
      canvas.style.left = `${-padding}px`;
      canvas.style.top = `${-padding}px`;
      ctx.setTransform(dpr, 0, 0, dpr, 0, 0);

      offscreen.width = width;
      offscreen.height = height;

      const style = getComputedStyle(span);
      const font = `${style.fontWeight} ${style.fontSize} ${style.fontFamily}`;
      offCtx.clearRect(0, 0, width, height);
      offCtx.fillStyle = "#ffffff";
      offCtx.textBaseline = "top";
      offCtx.font = font;
      offCtx.fillText(text, padding, padding);

      const image = offCtx.getImageData(0, 0, width, height).data;
      const particles: Particle[] = [];
      for (let y = 0; y < height; y += spacing) {
        for (let x = 0; x < width; x += spacing) {
          const idx = (y * width + x) * 4 + 3;
          if (image[idx] > 10) {
            particles.push({
              x: x + (Math.random() - 0.5) * 3,
              y: y + (Math.random() - 0.5) * 3,
              ox: x,
              oy: y,
              vx: 0,
              vy: 0,
            });
          }
        }
      }

      particlesRef.current = particles;
    };

    const animate = () => {
      const particles = particlesRef.current;
      const rect = canvas.getBoundingClientRect();
      ctx.clearRect(0, 0, rect.width, rect.height);
      ctx.fillStyle = particleColor;

      const mouse = mouseRef.current;
      for (const p of particles) {
        const dx = p.ox - p.x;
        const dy = p.oy - p.y;

        p.vx += dx * 0.02;
        p.vy += dy * 0.02;

        if (mouse.active) {
          const mx = mouse.x - rect.left;
          const my = mouse.y - rect.top;
          const rx = p.x - mx;
          const ry = p.y - my;
          const dist = Math.hypot(rx, ry);
          if (dist < repelRadius && dist > 0.001) {
            const force = (1 - dist / repelRadius) * repelStrength;
            p.vx += (rx / dist) * force * 12;
            p.vy += (ry / dist) * force * 12;
          }
        }

        p.vx *= 0.88;
        p.vy *= 0.88;
        p.x += p.vx;
        p.y += p.vy;

        ctx.fillRect(p.x, p.y, particleSize, particleSize);
      }

      rafRef.current = requestAnimationFrame(animate);
    };

    buildParticles();
    animate();

    const ro = new ResizeObserver(() => buildParticles());
    ro.observe(container);

    return () => {
      if (rafRef.current) cancelAnimationFrame(rafRef.current);
      ro.disconnect();
    };
  }, [particleColor, repelRadius, repelStrength, spacing, text]);

  return (
    <span
      ref={containerRef}
      className="relative inline-block align-baseline overflow-visible"
      onMouseMove={(e) => {
        mouseRef.current.x = e.clientX;
        mouseRef.current.y = e.clientY;
        mouseRef.current.active = true;
      }}
      onMouseLeave={() => {
        mouseRef.current.active = false;
      }}
    >
      <span ref={spanRef} className={className} style={{ opacity: baseOpacity }}>
        {text}
      </span>
      <canvas
        ref={canvasRef}
        className="absolute inset-0 pointer-events-none"
        aria-hidden
      />
    </span>
  );
}
