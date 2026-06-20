import { site } from '@/lib/data';
import { Github, Linkedin, Mail } from 'lucide-react';

export function Footer() {
  return (
    <footer className="border-t border-ink/10 py-10">
      <div className="container-x flex flex-col items-center justify-between gap-4 text-sm text-ink/50 sm:flex-row">
        <span className="font-serif text-base text-ink/70">
          Vaibhav<span className="text-accent">.</span>
        </span>
        <p>© {new Date().getFullYear()} {site.name}. Built with Next.js & Tailwind.</p>
        <div className="flex items-center gap-4">
          <a href={site.github} target="_blank" rel="noopener noreferrer" aria-label="GitHub" className="transition-colors hover:text-ink">
            <Github size={17} />
          </a>
          <a href={site.linkedin} target="_blank" rel="noopener noreferrer" aria-label="LinkedIn" className="transition-colors hover:text-ink">
            <Linkedin size={17} />
          </a>
          <a href={`mailto:${site.email}`} aria-label="Email" className="transition-colors hover:text-ink">
            <Mail size={17} />
          </a>
        </div>
      </div>
    </footer>
  );
}
