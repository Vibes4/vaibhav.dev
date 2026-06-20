import { Reveal } from '@/components/reveal';
import { Badge } from '@/components/ui/badge';
import { experience } from '@/lib/data';

export function Experience() {
  return (
    <section id="experience" className="py-20 md:py-28">
      <div className="container-x">
        <Reveal>
          <span className="section-label">Experience</span>
          <h2 className="heading-lg mb-14 max-w-lg">Where I&apos;ve built and shipped.</h2>
        </Reveal>

        <div className="relative">
          <div className="absolute left-0 top-2 bottom-2 hidden w-px bg-ink/10 md:block md:left-[7px]" aria-hidden />

          <div className="space-y-12">
            {experience.map((job, i) => (
              <Reveal key={job.product} delay={i * 0.05}>
                <div className="relative md:pl-12">
                  <div className="absolute left-0 top-1.5 hidden h-4 w-4 rounded-full border-2 border-accent bg-paper md:block" aria-hidden />

                  <div className="flex flex-wrap items-baseline justify-between gap-2">
                    <h3 className="text-xl font-semibold tracking-tight">{job.role}</h3>
                    <span className="font-mono text-xs text-ink/50">{job.period}</span>
                  </div>
                  <div className="mt-0.5 text-sm text-ink/60">
                    {job.company} · {job.location}
                  </div>
                  <div className="mt-1 font-serif text-lg text-accent">{job.product}</div>

                  <div className="mt-3 flex flex-wrap gap-1.5">
                    {job.stack.map((s) => (
                      <Badge key={s}>{s}</Badge>
                    ))}
                  </div>

                  <ul className="mt-5 space-y-2.5">
                    {job.achievements.map((a, j) => (
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
