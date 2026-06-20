'use client';

import { useRef, type ReactNode } from 'react';
import { motion, useMotionValue, useSpring, useReducedMotion } from 'framer-motion';

type MagneticProps = {
  children: ReactNode;
  className?: string;
  /** How far the element is allowed to drift toward the cursor (px). */
  strength?: number;
};

/**
 * Magnetic hover (Task 5): the element eases toward the cursor while hovered and
 * springs back on leave. Spring-driven transforms stay on the compositor and the
 * effect is fully disabled for reduced-motion / non-fine pointers, so it never
 * fights touch or assistive use. Render any clickable child inside.
 */
export function Magnetic({ children, className, strength = 14 }: MagneticProps) {
  const ref = useRef<HTMLSpanElement>(null);
  const reduce = useReducedMotion();

  const x = useMotionValue(0);
  const y = useMotionValue(0);
  const sx = useSpring(x, { stiffness: 250, damping: 18, mass: 0.5 });
  const sy = useSpring(y, { stiffness: 250, damping: 18, mass: 0.5 });

  const onMove = (e: React.MouseEvent<HTMLSpanElement>) => {
    if (reduce || !window.matchMedia('(pointer: fine)').matches) return;
    const rect = ref.current?.getBoundingClientRect();
    if (!rect) return;
    const relX = e.clientX - (rect.left + rect.width / 2);
    const relY = e.clientY - (rect.top + rect.height / 2);
    x.set((relX / (rect.width / 2)) * strength);
    y.set((relY / (rect.height / 2)) * strength);
  };

  const reset = () => {
    x.set(0);
    y.set(0);
  };

  return (
    <motion.span
      ref={ref}
      onMouseMove={onMove}
      onMouseLeave={reset}
      style={{ x: sx, y: sy }}
      className={className}
    >
      {children}
    </motion.span>
  );
}
