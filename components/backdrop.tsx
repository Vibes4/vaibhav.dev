'use client';

import { useEffect, useRef } from 'react';

/**
 * Global ambient background.
 *
 * Why this approach (Task 4): an **aurora / gradient-mesh** with a faint dev grid
 * and a *very* light scroll parallax.
 *  - Animation is pure CSS on `transform`/`opacity` only -> runs on the GPU
 *    compositor, off the main thread, so it holds 60fps and barely touches the
 *    battery. A canvas particle/constellation field (Options B/C) repaints every
 *    frame on the CPU and is the first thing to drop frames on mid-range phones.
 *  - It reads as "premium product landing page" (Linear / Vercel / Stripe) rather
 *    than a gimmick, which is what recruiters expect — not a distracting starfield.
 *  - Parallax is a single rAF-throttled transform on one layer, disabled for
 *    reduced-motion and on coarse-pointer / small screens.
 */
export function Backdrop() {
  const parallaxRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const el = parallaxRef.current;
    if (!el) return;

    const reduce = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
    const fine = window.matchMedia('(pointer: fine)').matches;
    if (reduce || !fine) return; // skip parallax where it isn't wanted/affordable

    let raf = 0;
    const onScroll = () => {
      if (raf) return;
      raf = requestAnimationFrame(() => {
        raf = 0;
        // subtle: 1px of drift per ~14px scrolled
        el.style.transform = `translate3d(0, ${window.scrollY * 0.07}px, 0)`;
      });
    };
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => {
      window.removeEventListener('scroll', onScroll);
      if (raf) cancelAnimationFrame(raf);
    };
  }, []);

  return (
    <div className="pointer-events-none fixed inset-0 -z-10 overflow-hidden" aria-hidden>
      {/* Aurora mesh — drifts via CSS keyframes (compositor only) */}
      <div ref={parallaxRef} className="absolute inset-0 will-change-transform">
        <div className="aurora-blob aurora-1" />
        <div className="aurora-blob aurora-2" />
        <div className="aurora-blob aurora-3" />
      </div>
      {/* Faint technical grid, masked to fade at the edges */}
      <div className="bg-grid absolute inset-0" />
      {/* Top vignette so the nav area stays calm and text stays legible */}
      <div className="absolute inset-x-0 top-0 h-64 bg-gradient-to-b from-paper to-transparent" />
    </div>
  );
}
