import { Reveal } from '@/components/reveal';
import { metrics } from '@/lib/data';

export function Impact() {
  return (
    <section id="impact" className="border-y border-ink/10 bg-ink/[0.02] py-20 dark:bg-white/[0.02] md:py-28">
      <div className="container-x">
        <Reveal>
          <div className="mb-12 flex flex-wrap items-end justify-between gap-4">
            <div className="max-w-2xl">
              <span className="section-label">Engineering Impact</span>
              <h2 className="heading-lg">Twelve months, measured.</h2>
              <p className="mt-4 text-ink/60">
                Delivery across a 40+ module low-code platform — features, reliability, and release work.
              </p>
            </div>
            <span className="rounded-full border border-ink/15 px-4 py-1.5 font-mono text-xs text-ink/55">
              2025 — 2026
            </span>
          </div>
        </Reveal>

        <div className="grid grid-cols-2 gap-px overflow-hidden rounded-2xl border border-ink/10 bg-ink/10 dark:bg-white/10 md:grid-cols-3 lg:grid-cols-5">
          {metrics.map((m, i) => (
            <Reveal key={m.label} delay={i * 0.05}>
              <div className="h-full bg-paper p-6 transition-colors hover:bg-card">
                <div className="font-sans text-4xl font-semibold tracking-tightest md:text-5xl">
                  {m.value}
                </div>
                <div className="mt-2 text-sm font-medium text-ink/85">{m.label}</div>
                <div className="mt-1 text-xs text-ink/45">{m.sub}</div>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
