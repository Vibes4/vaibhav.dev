'use client';

import { useEffect, useRef } from 'react';

/**
 * Global ambient background: an aurora / gradient-mesh, a faint dev grid, a
 * cursor-follow glow, and a light multi-layer scroll parallax.
 *
 * Everything animates on `transform`/`opacity`/CSS vars only, so it stays on the
 * GPU compositor and holds 60fps. The cursor glow and parallax are disabled for
 * reduced-motion and on coarse-pointer / small screens.
 */
export function Backdrop() {
  const auroraRef = useRef<HTMLDivElement>(null);
  const gridRef = useRef<HTMLDivElement>(null);
  const glowRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const reduce = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
    const fine = window.matchMedia('(pointer: fine)').matches;
    if (reduce) return;

    // --- Multi-layer scroll parallax (aurora drifts more than the grid) ---
    let sraf = 0;
    const onScroll = () => {
      if (sraf) return;
      sraf = requestAnimationFrame(() => {
        sraf = 0;
        const y = window.scrollY;
        if (auroraRef.current) auroraRef.current.style.transform = `translate3d(0, ${y * 0.12}px, 0)`;
        if (gridRef.current) gridRef.current.style.transform = `translate3d(0, ${y * -0.04}px, 0)`;
      });
    };
    window.addEventListener('scroll', onScroll, { passive: true });

    // --- Cursor-follow glow (desktop only) ---
    let mraf = 0;
    const onMove = (e: PointerEvent) => {
      if (mraf) return;
      mraf = requestAnimationFrame(() => {
        mraf = 0;
        const el = glowRef.current;
        if (el) {
          el.style.setProperty('--cx', `${e.clientX}px`);
          el.style.setProperty('--cy', `${e.clientY}px`);
          el.style.opacity = '1';
        }
      });
    };
    if (fine) window.addEventListener('pointermove', onMove, { passive: true });

    return () => {
      window.removeEventListener('scroll', onScroll);
      window.removeEventListener('pointermove', onMove);
      if (sraf) cancelAnimationFrame(sraf);
      if (mraf) cancelAnimationFrame(mraf);
    };
  }, []);

  return (
    <div className="pointer-events-none fixed inset-0 -z-10 overflow-hidden" aria-hidden>
      <div ref={auroraRef} className="absolute inset-0 will-change-transform">
        <div className="aurora-blob aurora-1" />
        <div className="aurora-blob aurora-2" />
        <div className="aurora-blob aurora-3" />
      </div>
      <div ref={gridRef} className="absolute inset-0 will-change-transform">
        <div className="bg-grid absolute inset-0" />
      </div>
      {/* Cursor glow — follows the pointer, fades in on first move */}
      <div ref={glowRef} className="cursor-glow absolute inset-0 opacity-0" />
      {/* Top vignette so the nav area stays calm and text stays legible */}
      <div className="absolute inset-x-0 top-0 h-64 bg-gradient-to-b from-paper to-transparent" />
    </div>
  );
}
