import { Reveal } from '@/components/reveal';
import { about } from '@/lib/data';
import { Check } from 'lucide-react';

export function About() {
  return (
    <section id="about" className="py-20 md:py-28">
      <div className="container-x grid gap-12 md:grid-cols-[0.8fr_1.2fr]">
        <Reveal>
          <div className="md:sticky md:top-28">
            <span className="section-label">About</span>
            <h2 className="heading-lg max-w-xs">
              Systems owned end-to-end.
            </h2>
            <ul className="mt-8 space-y-3">
              {about.highlights.map((h) => (
                <li key={h} className="flex items-start gap-3 text-sm text-ink/70">
                  <span className="mt-0.5 grid h-5 w-5 shrink-0 place-items-center rounded-full bg-accent/10 text-accent">
                    <Check size={12} strokeWidth={3} />
                  </span>
                  {h}
                </li>
              ))}
            </ul>
          </div>
        </Reveal>

        <div className="about-prose max-w-[60ch] space-y-6">
          {about.paragraphs.map((p, i) => (
            <Reveal key={i} delay={i * 0.08}>
              <p
                className={
                  i === 0
                    ? 'text-[1.35rem] font-medium leading-[1.6] tracking-[-0.01em] text-ink/90'
                    : 'text-[1.0625rem] leading-[1.85] text-ink/65'
                }
              >
                {p}
              </p>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
