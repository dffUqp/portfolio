// Reference: https://github.com/cubedhuang

'use client';

import { useEffect, useRef, useState } from 'react';

import { useAnimatedTheme } from 'providers/ThemeProvider';

interface Boid {
  x: number;
  y: number;
  vx: number;
  vy: number;
  hue: number;
  r: number;
  rand: number;
}

const REPULSION_RADIUS = 200;
const SPEED = 0.2;
const BOID_COUNT = 20;

const CirclesBackground = () => {
  const { theme } = useAnimatedTheme();
  const isDarkMode = theme === 'dark';

  const [boids, setBoids] = useState<Boid[]>([]);
  const animationRef = useRef<number | null>(null);

  const widthRef = useRef<number | null>(null);
  const heightRef = useRef<number | null>(null);

  const getBoid = (width: number, height: number): Boid => {
    const rand = Math.random() * 1 + 1;
    const r = (rand * width * height * window.devicePixelRatio) / 8000;

    return {
      x: Math.random() * (width + 2 * r) - r,
      y: Math.random() * (height + 2 * r) - r,
      vx: (Math.random() - 0.5) * 5,
      vy: (Math.random() - 0.5) * 5,
      hue: isDarkMode ? Math.random() * 60 + 240 : Math.random() * 20 + 200,
      r,
      rand,
    };
  };

  const initBoids = (count: number, width: number, height: number) => {
    setBoids(Array.from({ length: count }, () => getBoid(width, height)));
  };

  const updateBoids = (width: number, height: number) => {
    setBoids(old => {
      const updated = [...old];

      updated.forEach(boid => {
        boid.x += boid.vx;
        boid.y += boid.vy;

        if (boid.x < -boid.r) boid.x += width + 2 * boid.r;
        else if (boid.x > width + boid.r) boid.x -= width + 2 * boid.r;
        if (boid.y < -boid.r) boid.y += height + 2 * boid.r;
        else if (boid.y > height + boid.r) boid.y -= height + 2 * boid.r;
      });

      updated.forEach(boid => {
        updated.forEach(other => {
          if (other === boid) return;

          const dx = boid.x - other.x;
          const dy = boid.y - other.y;
          const dist = Math.hypot(dx, dy);

          if (dist < REPULSION_RADIUS && dist > 0.0001) {
            const force = (REPULSION_RADIUS - dist) / REPULSION_RADIUS;
            boid.vx += (dx / dist) * force;
            boid.vy += (dy / dist) * force;
          }
        });

        const len = Math.hypot(boid.vx, boid.vy);
        if (len > 0) {
          boid.vx = (boid.vx / len) * SPEED;
          boid.vy = (boid.vy / len) * SPEED;
        }
      });

      return updated;
    });
  };

  const resize = () => {
    const newWidth = window.innerWidth;
    const newHeight = window.innerHeight;

    setBoids(prev => {
      return prev.map(boid => {
        const r =
          (boid.rand * newWidth * newHeight * window.devicePixelRatio) / 8000;

        const prevWidth = widthRef.current ?? newWidth;
        const prevHeight = heightRef.current ?? newHeight;
        const dw = newWidth / prevWidth;
        const dh = newHeight / prevHeight;

        return {
          ...boid,
          x: boid.x * dw,
          y: boid.y * dh,
          r,
        };
      });
    });

    widthRef.current = newWidth;
    heightRef.current = newHeight;
  };

  const animate = () => {
    updateBoids(window.innerWidth, window.innerHeight);
    animationRef.current = requestAnimationFrame(animate);
  };

  useEffect(() => {
    widthRef.current = window.innerWidth;
    heightRef.current = window.innerHeight;
    initBoids(BOID_COUNT, widthRef.current, heightRef.current);
    animationRef.current = requestAnimationFrame(animate);
    window.addEventListener('resize', resize);

    return () => {
      if (animationRef.current) {
        cancelAnimationFrame(animationRef.current);
      }
      window.removeEventListener('resize', resize);
    };
  }, [isDarkMode]);

  return (
    <svg className="w-screen h-[100dvh] fixed -z-10 top-0 left-0 pointer-events-none">
      {boids.map((b, i) => (
        <radialGradient
          key={i}
          id={`g${i}`}
          cx="50%"
          cy="50%"
          r="50%"
          fx="50%"
          fy="50%"
        >
          {isDarkMode ? (
            <>
              <stop offset="0%" stopColor={`hsla(${b.hue},100%,50%,0.1)`} />
              <stop offset="100%" stopColor={`hsla(${b.hue},100%,50%,0)`} />
            </>
          ) : (
            <>
              <stop offset="0%" stopColor={`hsla(${b.hue}, 100%, 70%, 0.25)`} />
              <stop offset="100%" stopColor={`hsla(${b.hue}, 100%, 70%, 0)`} />
            </>
          )}
        </radialGradient>
      ))}
      {boids.map((b, i) => (
        <circle key={i} cx={b.x} cy={b.y} r={b.r} fill={`url(#g${i})`} />
      ))}
    </svg>
  );
};

export { CirclesBackground };
