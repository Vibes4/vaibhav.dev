'use client';

import { useEffect } from 'react';
import Lenis from 'lenis';

/**
 * Smooth inertial scrolling (Lenis). Drives the wheel only — touch keeps native
 * scrolling so mobile stays snappy and accessible. Disabled for reduced-motion.
 * Exposes the instance on `window.__lenis` so nav links can scrollTo() with it.
 */
export function SmoothScroll() {
  useEffect(() => {
    if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) return;

    const lenis = new Lenis({
      duration: 1.05,
      easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t)),
      smoothWheel: true,
    });
    (window as unknown as { __lenis?: Lenis }).__lenis = lenis;

    let raf = 0;
    const loop = (time: number) => {
      lenis.raf(time);
      raf = requestAnimationFrame(loop);
    };
    raf = requestAnimationFrame(loop);

    return () => {
      cancelAnimationFrame(raf);
      lenis.destroy();
      (window as unknown as { __lenis?: Lenis }).__lenis = undefined;
    };
  }, []);

  return null;
}

/** Smoothly scroll to a hash target, accounting for the fixed header. */
export function scrollToHash(hash: string) {
  const el = document.querySelector(hash);
  if (!el) return;
  const lenis = (window as unknown as { __lenis?: Lenis }).__lenis;
  if (lenis) lenis.scrollTo(el as HTMLElement, { offset: -72 });
  else el.scrollIntoView({ behavior: 'smooth' });
}
