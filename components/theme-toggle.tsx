'use client';

import { useEffect, useState } from 'react';
import { Moon, Sun } from 'lucide-react';

export function ThemeToggle({ className = '' }: { className?: string }) {
  const [dark, setDark] = useState(false);
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
    setDark(document.documentElement.classList.contains('dark'));
  }, []);

  const toggle = () => {
    const next = !dark;
    setDark(next);
    document.documentElement.classList.toggle('dark', next);
    try {
      localStorage.setItem('theme', next ? 'dark' : 'light');
    } catch {}
  };

  return (
    <button
      onClick={toggle}
      aria-label="Toggle dark mode"
      className={`grid h-10 w-10 place-items-center rounded-full border border-ink/10 text-ink/60 transition-all hover:border-ink/30 hover:text-ink ${className}`}
    >
      {mounted && dark ? <Sun size={17} /> : <Moon size={17} />}
    </button>
  );
}
