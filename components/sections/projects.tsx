'use client';

import { motion, useReducedMotion } from 'framer-motion';
import { ArrowUpRight, Github } from 'lucide-react';
import { Badge } from '@/components/ui/badge';
import { projects } from '@/lib/data';

export function Projects() {
  const reduce = useReducedMotion();
  return (
    <section id="projects" className="py-20 md:py-28">
      <div className="container-x">
        <span className="section-label">Selected Work</span>
        <h2 className="heading-lg mb-14 max-w-lg">Projects I&apos;ve designed and built.</h2>

        <div className="grid gap-5 md:grid-cols-2">
          {projects.map((p, i) => (
            <motion.a
              key={p.name}
              href={p.link}
              target="_blank"
              rel="noopener noreferrer"
              initial={reduce ? { opacity: 0 } : { opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-60px' }}
              transition={{ duration: 0.55, delay: i * 0.06, ease: [0.22, 1, 0.36, 1] }}
              whileHover={reduce ? undefined : { y: -4 }}
              className={`group relative flex flex-col rounded-2xl border border-ink/10 bg-card/70 p-7 backdrop-blur-sm transition-[box-shadow,border-color] hover:border-accent/30 hover:shadow-xl hover:shadow-accent/10 ${
                i === 0 ? 'md:col-span-2' : ''
              }`}
            >
              <div className="flex items-start justify-between gap-4">
                <div>
                  <div className="flex items-center gap-3">
                    <h3 className="text-2xl font-semibold tracking-tight">{p.name}</h3>
                    {p.status && (
                      <span className="rounded-full bg-accent/10 px-2.5 py-0.5 text-[11px] font-medium text-accent">
                        {p.status}
                      </span>
                    )}
                  </div>
                  <p className="mt-1 font-serif text-lg text-ink/55">{p.tagline}</p>
                </div>
                <span className="grid h-10 w-10 shrink-0 place-items-center rounded-full border border-ink/10 text-ink/40 transition-all group-hover:border-ink/30 group-hover:text-ink">
                  <ArrowUpRight size={18} />
                </span>
              </div>

              <div className={`mt-5 grid gap-5 ${i === 0 ? 'md:grid-cols-3' : ''}`}>
                <Detail label="Problem" text={p.problem} />
                <Detail label="Architecture" text={p.architecture} />
                <Detail label="Challenges" text={p.challenges} />
              </div>

              <div className="mt-6 flex flex-wrap items-center gap-1.5">
                {p.stack.map((s) => (
                  <Badge key={s}>{s}</Badge>
                ))}
                <span className="ml-auto inline-flex items-center gap-1.5 text-xs text-ink/45">
                  <Github size={13} /> View on GitHub
                </span>
              </div>
            </motion.a>
          ))}
        </div>
      </div>
    </section>
  );
}

function Detail({ label, text }: { label: string; text: string }) {
  return (
    <div>
      <div className="mb-1 text-[11px] font-medium uppercase tracking-[0.14em] text-ink/40">
        {label}
      </div>
      <p className="text-sm leading-relaxed text-ink/70">{text}</p>
    </div>
  );
}
