'use client';

import Image from 'next/image';
import { useRef } from 'react';
import {
  motion,
  useMotionValue,
  useSpring,
  useReducedMotion,
  useMotionTemplate,
} from 'framer-motion';
import { ArrowUpRight, Github, Linkedin, MapPin } from 'lucide-react';
import { site, asset } from '@/lib/data';
import { Magnetic } from '@/components/magnetic';

const ease = [0.22, 1, 0.36, 1] as const;
const stack = ['Node.js', 'NestJS', 'Kubernetes', 'RabbitMQ', 'PostgreSQL'];

export function Hero() {
  return (
    <section id="top" className="relative overflow-hidden pt-32 pb-20 md:pt-40 md:pb-28">
      <div className="container-x grid items-center gap-10 md:grid-cols-[1.25fr_1fr] md:gap-12">
        <div>
          <motion.div
            initial={{ opacity: 0, y: 14 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, ease }}
            className="mb-5 inline-flex items-center gap-2 rounded-full border border-ink/10 bg-card/70 px-3 py-1 text-xs font-medium text-ink/70 backdrop-blur-sm"
          >
            <span className="relative flex h-2 w-2">
              <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-accent opacity-60" />
              <span className="relative inline-flex h-2 w-2 rounded-full bg-accent" />
            </span>
            Open to full-stack & backend roles
          </motion.div>

          <motion.h1
            initial={{ opacity: 0, y: 18 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.05, ease }}
            className="font-sans text-4xl font-semibold leading-[1.05] tracking-tightest sm:text-5xl md:text-6xl"
          >
            Full-Stack Engineer
            <span className="block text-ink/40">Backend-Focused · Platform · Distributed Systems</span>
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 18 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.12, ease }}
            className="mt-6 max-w-xl text-lg leading-relaxed text-ink/65"
          >
            {site.tagline}
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 18 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.18, ease }}
            className="mt-8 flex flex-wrap items-center gap-3"
          >
            <Magnetic className="inline-block">
              <a
                href={site.resume}
                target="_blank"
                rel="noopener noreferrer"
                className="group inline-flex h-12 items-center gap-2 rounded-full bg-ink px-7 text-sm font-medium text-paper transition-all hover:shadow-xl"
              >
                View Resume
                <ArrowUpRight size={16} className="transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
              </a>
            </Magnetic>
            <Magnetic className="inline-block">
              <a
                href="#contact"
                className="inline-flex h-12 items-center gap-2 rounded-full border border-ink/15 px-7 text-sm font-medium text-ink transition-all hover:border-ink/40 hover:bg-ink/[0.03]"
              >
                Contact Me
              </a>
            </Magnetic>
            <div className="ml-1 flex items-center gap-1">
              <a href={site.github} target="_blank" rel="noopener noreferrer" aria-label="GitHub" className="grid h-11 w-11 place-items-center rounded-full border border-ink/10 text-ink/60 transition-all hover:border-ink/30 hover:text-ink">
                <Github size={18} />
              </a>
              <a href={site.linkedin} target="_blank" rel="noopener noreferrer" aria-label="LinkedIn" className="grid h-11 w-11 place-items-center rounded-full border border-ink/10 text-ink/60 transition-all hover:border-ink/30 hover:text-ink">
                <Linkedin size={18} />
              </a>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.8, delay: 0.3 }}
            className="mt-8 flex flex-wrap items-center gap-x-4 gap-y-2 text-sm text-ink/50"
          >
            <span className="inline-flex items-center gap-2">
              <MapPin size={15} /> {site.location}
            </span>
            <span className="hidden h-3 w-px bg-ink/15 sm:inline-block" />
            <ul className="flex flex-wrap items-center gap-x-3 gap-y-1 font-mono text-[11px] uppercase tracking-wider text-ink/45">
              {stack.map((s) => (
                <li key={s} className="before:mr-3 before:text-accent/60 before:content-['·'] first:before:hidden">
                  {s}
                </li>
              ))}
            </ul>
          </motion.div>
        </div>

        <PortraitStage />
      </div>
    </section>
  );
}

/** The figure emerges from a dark spotlight stage: light rays + glow behind,
 *  the image feathered on every edge, and a cursor-following light (desktop). */
function PortraitStage() {
  const reduce = useReducedMotion();
  const ref = useRef<HTMLDivElement>(null);

  // Cursor-following glow (Task 5: cursor interaction)
  const gx = useMotionValue(50);
  const gy = useMotionValue(40);
  const sx = useSpring(gx, { stiffness: 120, damping: 20 });
  const sy = useSpring(gy, { stiffness: 120, damping: 20 });
  const glow = useMotionTemplate`radial-gradient(220px circle at ${sx}% ${sy}%, rgb(168 130 255 / 0.18), transparent 60%)`;

  const onMove = (e: React.MouseEvent<HTMLDivElement>) => {
    if (reduce || !window.matchMedia('(pointer: fine)').matches) return;
    const rect = ref.current?.getBoundingClientRect();
    if (!rect) return;
    gx.set(((e.clientX - rect.left) / rect.width) * 100);
    gy.set(((e.clientY - rect.top) / rect.height) * 100);
  };

  return (
    <motion.div
      ref={ref}
      onMouseMove={onMove}
      initial={{ opacity: 0, scale: 0.98 }}
      animate={{ opacity: 1, scale: 1 }}
      transition={{ duration: 0.9, delay: 0.15, ease }}
      className="relative mx-auto aspect-[3/4] w-full max-w-[260px] sm:max-w-[340px] md:max-w-[420px]"
    >
      {/* Soft halo behind the figure — adds depth without any visible container.
          Works on light and dark because it only adds glow, never a dark box. */}
      <div
        className="absolute left-1/2 top-[20%] -z-10 h-[62%] w-[120%] -translate-x-1/2 rounded-full bg-[radial-gradient(ellipse_at_center,rgb(124_92_252/0.28),rgb(59_130_246/0.14)_42%,transparent_72%)] blur-3xl"
        aria-hidden
      />
      {/* Keynote-style light rays from above */}
      <div
        className="absolute left-1/2 top-[1%] -z-10 h-[52%] w-[150%] -translate-x-1/2 bg-[conic-gradient(from_180deg_at_50%_0%,transparent_330deg,rgb(124_92_252/0.16)_344deg,transparent_350deg,rgb(59_130_246/0.16)_356deg,transparent_4deg,rgb(168_130_255/0.14)_12deg,transparent_26deg)] blur-md"
        aria-hidden
      />
      {/* Accent grounding glow behind the torso */}
      <div
        className="absolute left-1/2 top-[40%] -z-10 h-[44%] w-[80%] -translate-x-1/2 -translate-y-1/2 rounded-full bg-[radial-gradient(circle,rgb(var(--accent)/0.3),transparent_68%)] blur-2xl"
        aria-hidden
      />
      {/* Cursor-following light */}
      {!reduce && (
        <motion.div
          className="absolute inset-0 -z-10 hidden md:block"
          style={{ background: glow }}
          aria-hidden
        />
      )}

      <Image
        src={asset('/portrait-cut.webp')}
        alt={`${site.name} — Full-Stack Engineer`}
        width={860}
        height={1151}
        priority
        sizes="(max-width: 640px) 60vw, (max-width: 768px) 340px, 420px"
        className="portrait-cut h-full w-full object-contain object-bottom"
      />
    </motion.div>
  );
}
