import { Reveal, Stagger, StaggerItem } from '@/components/reveal';
import { skills } from '@/lib/data';

export function Skills() {
  return (
    <section id="skills" className="border-t border-ink/10 py-20 md:py-28">
      <div className="container-x">
        <Reveal>
          <span className="section-label">Toolkit</span>
          <h2 className="heading-lg mb-14 max-w-lg">Technologies I work with.</h2>
        </Reveal>

        <Stagger className="grid gap-x-10 gap-y-10 sm:grid-cols-2 lg:grid-cols-3">
          {skills.map((group) => (
            <StaggerItem key={group.category}>
              <div className="border-t border-ink/15 pt-4">
                <h3 className="mb-3 text-sm font-semibold uppercase tracking-[0.12em] text-ink/40">
                  {group.category}
                </h3>
                <ul className="flex flex-wrap gap-2">
                  {group.items.map((item) => (
                    <li
                      key={item}
                      className="rounded-lg border border-ink/10 bg-card/70 px-3 py-1.5 text-sm text-ink/80 transition-colors hover:border-accent/40 hover:text-ink"
                    >
                      {item}
                    </li>
                  ))}
                </ul>
              </div>
            </StaggerItem>
          ))}
        </Stagger>
      </div>
    </section>
  );
}
