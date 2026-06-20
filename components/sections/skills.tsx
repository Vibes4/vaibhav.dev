import type { CSSProperties } from 'react';
import { Reveal, Stagger, StaggerItem } from '@/components/reveal';
import { skills } from '@/lib/data';
import { TECH, TechIcon } from '@/lib/tech';

export function Skills() {
  return (
    <section id="skills" className="border-t border-ink/10 py-20 md:py-28">
      <div className="container-x">
        <Reveal>
          <span className="section-label">Toolkit</span>
          <h2 className="heading-lg mb-14 max-w-lg">Technologies I work with.</h2>
        </Reveal>

        <div className="space-y-10">
          {skills.map((group) => (
            <Reveal key={group.category}>
              <div className="grid gap-x-8 gap-y-4 md:grid-cols-[160px_1fr] md:items-start">
                <h3 className="pt-2 text-sm font-semibold uppercase tracking-[0.12em] text-ink/40">
                  {group.category}
                </h3>
                <Stagger className="flex flex-wrap gap-2.5">
                  {group.items.map((item) => {
                    const tech = TECH[item] ?? { label: item };
                    return (
                      <StaggerItem key={item}>
                        <div
                          className="tech-chip"
                          style={tech.color ? ({ '--brand': tech.color } as unknown as CSSProperties) : undefined}
                        >
                          <TechIcon tech={tech} className="tech-ico h-[18px] w-[18px] shrink-0" />
                          <span className="tech-label text-sm font-medium">{tech.label}</span>
                        </div>
                      </StaggerItem>
                    );
                  })}
                </Stagger>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
