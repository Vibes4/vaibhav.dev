'use client';

import { useState } from 'react';
import { Mail, Github, Linkedin, MapPin, Copy, Check, ArrowUpRight } from 'lucide-react';
import { Reveal } from '@/components/reveal';
import { Magnetic } from '@/components/magnetic';
import { site } from '@/lib/data';

const whatsappHref = `https://wa.me/${site.whatsapp}?text=${encodeURIComponent(site.whatsappMessage)}`;

export function Contact() {
  const [copied, setCopied] = useState(false);

  const copyEmail = async () => {
    try {
      await navigator.clipboard.writeText(site.email);
      setCopied(true);
      setTimeout(() => setCopied(false), 1800);
    } catch {
      window.location.href = `mailto:${site.email}`;
    }
  };

  return (
    <section id="contact" className="border-t border-ink/10 py-20 md:py-28">
      <div className="container-x grid items-center gap-12 md:grid-cols-2">
        <Reveal>
          <span className="section-label">Contact</span>
          <h2 className="heading-lg max-w-sm">Let&apos;s build something reliable.</h2>
          <p className="mt-4 max-w-md text-ink/65">
            Open to backend, platform, and senior engineering roles. The quickest way to reach me is
            a WhatsApp message — I usually reply within a few hours.
          </p>

          <div className="mt-8 flex items-center gap-2 text-sm text-ink/50">
            <MapPin size={15} /> {site.location}
            <span className="ml-2 inline-flex items-center gap-1.5 text-ink/45">
              <span className="relative flex h-2 w-2">
                <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-green-500 opacity-60" />
                <span className="relative inline-flex h-2 w-2 rounded-full bg-green-500" />
              </span>
              Usually replies same day
            </span>
          </div>
        </Reveal>

        <Reveal delay={0.1}>
          <div className="card-depth relative overflow-hidden rounded-2xl border border-ink/10 bg-card/70 p-6 backdrop-blur-sm sm:p-8">
            {/* soft accent wash */}
            <div
              className="pointer-events-none absolute -right-16 -top-16 h-48 w-48 rounded-full bg-[radial-gradient(circle,rgb(34_197_94/0.18),transparent_70%)] blur-2xl"
              aria-hidden
            />

            {/* Primary CTA — WhatsApp */}
            <Magnetic className="block" strength={10}>
              <a
                href={whatsappHref}
                target="_blank"
                rel="noopener noreferrer"
                className="group flex w-full items-center justify-center gap-3 rounded-full bg-[#25D366] px-6 py-4 text-base font-semibold text-[#04331c] shadow-lg shadow-[#25D366]/25 transition-all hover:-translate-y-0.5 hover:shadow-xl hover:shadow-[#25D366]/30"
              >
                <WhatsAppIcon className="h-5 w-5" />
                Connect on WhatsApp
                <ArrowUpRight size={17} className="transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
              </a>
            </Magnetic>
            <p className="mt-3 text-center text-xs text-ink/45">
              Opens WhatsApp with a quick intro already written.
            </p>

            <div className="my-6 flex items-center gap-3 text-xs uppercase tracking-wider text-ink/35">
              <span className="h-px flex-1 bg-ink/10" />
              or reach me here
              <span className="h-px flex-1 bg-ink/10" />
            </div>

            {/* Alternatives */}
            <div className="space-y-3">
              <button
                onClick={copyEmail}
                className="group flex w-full items-center gap-3 rounded-xl border border-ink/10 bg-paper/60 px-4 py-3 text-left text-sm transition-colors hover:border-ink/25"
              >
                <Mail size={17} className="text-accent" />
                <span className="flex-1 truncate">{site.email}</span>
                {copied ? (
                  <span className="flex items-center gap-1 text-xs text-green-600 dark:text-green-400">
                    <Check size={14} /> Copied
                  </span>
                ) : (
                  <Copy size={15} className="text-ink/40 transition-colors group-hover:text-ink/70" />
                )}
              </button>

              <div className="flex gap-3">
                <ContactLink href={site.linkedin} icon={<Linkedin size={17} />} label="LinkedIn" />
                <ContactLink href={site.github} icon={<Github size={17} />} label="GitHub" />
              </div>
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  );
}

function ContactLink({ href, icon, label }: { href: string; icon: React.ReactNode; label: string }) {
  return (
    <a
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      className="flex flex-1 items-center justify-center gap-2 rounded-xl border border-ink/10 bg-paper/60 px-4 py-3 text-sm font-medium transition-colors hover:border-ink/25"
    >
      {icon} {label}
    </a>
  );
}

function WhatsAppIcon({ className }: { className?: string }) {
  return (
    <svg viewBox="0 0 24 24" fill="currentColor" className={className} aria-hidden>
      <path d="M.057 24l1.687-6.163a11.867 11.867 0 01-1.587-5.946C.16 5.335 5.495 0 12.05 0a11.82 11.82 0 018.413 3.488 11.82 11.82 0 013.484 8.414c-.003 6.557-5.338 11.892-11.893 11.892a11.9 11.9 0 01-5.688-1.448L.057 24zm6.597-3.807c1.676.995 3.276 1.591 5.392 1.592 5.448 0 9.886-4.434 9.889-9.885.002-5.462-4.415-9.89-9.881-9.892-5.452 0-9.887 4.434-9.889 9.884a9.86 9.86 0 001.523 5.256l-.999 3.648 3.965-1.041zm11.387-5.464c-.074-.124-.272-.198-.57-.347-.297-.149-1.758-.868-2.031-.967-.272-.099-.47-.149-.669.149-.198.297-.768.967-.941 1.165-.173.198-.347.223-.644.074-.297-.149-1.255-.462-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.297-.347.446-.521.151-.172.2-.296.3-.495.099-.198.05-.372-.025-.521-.075-.148-.669-1.611-.916-2.206-.242-.579-.487-.501-.669-.51l-.57-.01c-.198 0-.52.074-.792.372s-1.04 1.016-1.04 2.479 1.065 2.876 1.213 3.074c.149.198 2.095 3.2 5.076 4.487.709.306 1.263.489 1.694.626.712.226 1.36.194 1.872.118.571-.085 1.758-.719 2.006-1.413.248-.695.248-1.29.173-1.414z" />
    </svg>
  );
}
