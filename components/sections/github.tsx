import { Reveal } from '@/components/reveal';
import { Github as GithubIcon, ArrowUpRight } from 'lucide-react';
import { site, featuredRepos } from '@/lib/data';

export function GitHub() {
  return (
    <section id="github" className="border-t border-ink/10 py-20 md:py-28">
      <div className="container-x">
        <Reveal>
          <div className="mb-12 flex flex-wrap items-end justify-between gap-4">
            <div>
              <span className="section-label">Open Source</span>
              <h2 className="heading-lg max-w-md">Building in the open.</h2>
            </div>
            <a
              href={site.github}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 rounded-full border border-ink/15 px-5 py-2.5 text-sm font-medium transition-all hover:border-ink/40 hover:bg-ink/[0.04]"
            >
              <GithubIcon size={16} /> @{site.githubUser}
              <ArrowUpRight size={15} />
            </a>
          </div>
        </Reveal>

        <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3">
          {featuredRepos.map((r, i) => (
            <Reveal key={r.name} delay={i * 0.05}>
              <a
                href={r.link}
                target="_blank"
                rel="noopener noreferrer"
                className="group flex h-full flex-col rounded-2xl border border-ink/10 bg-card/70 p-5 backdrop-blur-sm transition-all hover:-translate-y-1 hover:shadow-lg hover:shadow-ink/5"
              >
                <div className="flex items-center justify-between gap-2">
                  <div className="flex items-center gap-2 text-sm font-semibold">
                    <GithubIcon size={15} className="text-ink/40" />
                    <span className="truncate">{r.name}</span>
                  </div>
                  {r.status && (
                    <span className="shrink-0 rounded-full bg-accent/10 px-2.5 py-0.5 text-[11px] font-medium text-accent">
                      {r.status}
                    </span>
                  )}
                </div>
                <p className="mt-2 line-clamp-3 flex-1 text-sm leading-relaxed text-ink/60">
                  {r.description}
                </p>
                <div className="mt-4 flex items-center justify-between text-xs text-ink/50">
                  <span className="inline-flex items-center gap-1.5">
                    <span className="h-2.5 w-2.5 rounded-full bg-accent" /> {r.language}
                  </span>
                  <span className="inline-flex items-center gap-1 text-ink/40 transition-colors group-hover:text-ink">
                    View <ArrowUpRight size={13} />
                  </span>
                </div>
              </a>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
