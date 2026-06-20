import { Reveal } from '@/components/reveal';
import { Badge } from '@/components/ui/badge';
import { company, metrics } from '@/lib/data';
import { MapPin } from 'lucide-react';

export function Experience() {
  return (
    <section id="experience" className="py-20 md:py-28">
      <div className="container-x">
        <Reveal>
          <span className="section-label">Experience</span>
          <h2 className="heading-lg mb-12 max-w-lg">Where I&apos;ve built and shipped.</h2>
        </Reveal>

        {/* Company header */}
        <Reveal>
          <div className="rounded-2xl border border-ink/10 bg-card/60 p-6 backdrop-blur-sm sm:p-8">
            <div className="flex flex-wrap items-start justify-between gap-3">
              <div>
                <h3 className="text-xl font-semibold tracking-tight sm:text-2xl">{company.name}</h3>
                <div className="mt-1.5 flex items-center gap-1.5 text-sm text-ink/55">
                  <MapPin size={14} /> {company.location}
                </div>
              </div>
              <span className="inline-flex items-center gap-2 rounded-full border border-accent/30 bg-accent/5 px-3.5 py-1.5 font-mono text-xs text-accent">
                <span className="relative flex h-1.5 w-1.5">
                  <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-accent opacity-60" />
                  <span className="relative inline-flex h-1.5 w-1.5 rounded-full bg-accent" />
                </span>
                {company.period}
              </span>
            </div>
            <p className="mt-4 max-w-2xl text-[15px] leading-relaxed text-ink/65">{company.summary}</p>

            {/* Engineering impact — embedded in the company block */}
            <div className="mt-7">
              <div className="mb-3 text-[11px] font-semibold uppercase tracking-[0.16em] text-ink/40">
                Engineering impact · 12 months
              </div>
              <div className="grid grid-cols-2 gap-px overflow-hidden rounded-xl border border-ink/10 bg-ink/10 dark:bg-white/10 sm:grid-cols-3 lg:grid-cols-5">
                {metrics.map((m) => (
                  <div key={m.label} className="bg-paper p-4 transition-colors hover:bg-card">
                    <div className="font-sans text-2xl font-semibold tracking-tightest md:text-3xl">
                      {m.value}
                    </div>
                    <div className="mt-1 text-xs font-medium text-ink/80">{m.label}</div>
                    <div className="mt-0.5 text-[11px] leading-snug text-ink/45">{m.sub}</div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </Reveal>

        {/* Projects under the company — vertical timeline */}
        <div className="relative mt-10 md:pl-2">
          <div className="absolute left-[5px] top-3 bottom-3 hidden w-px bg-ink/10 md:block" aria-hidden />

          <div className="space-y-10">
            {company.projects.map((p, i) => (
              <Reveal key={p.name} delay={i * 0.05}>
                <div className="relative md:pl-10">
                  <div className="absolute left-0 top-1.5 hidden h-3 w-3 rounded-full border-2 border-accent bg-paper md:block" aria-hidden />

                  <div className="flex flex-wrap items-baseline gap-x-3 gap-y-1">
                    <span className="rounded-full bg-accent/10 px-2.5 py-0.5 text-[11px] font-medium text-accent">
                      {p.role}
                    </span>
                    <span className="font-mono text-xs text-ink/45">{p.period}</span>
                  </div>
                  <h4 className="mt-2 font-serif text-xl text-ink/90">{p.name}</h4>

                  <div className="mt-3 flex flex-wrap gap-1.5">
                    {p.stack.map((s) => (
                      <Badge key={s}>{s}</Badge>
                    ))}
                  </div>

                  <ul className="mt-5 space-y-2.5">
                    {p.achievements.map((a, j) => (
                      <li key={j} className="flex gap-3 text-[15px] leading-relaxed text-ink/75">
                        <span className="mt-2 h-1 w-1 shrink-0 rounded-full bg-accent" aria-hidden />
                        {a}
                      </li>
                    ))}
                  </ul>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
