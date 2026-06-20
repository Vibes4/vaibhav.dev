import type { Metadata } from 'next';
import { Inter, Instrument_Serif, JetBrains_Mono } from 'next/font/google';
import './globals.css';
import { site } from '@/lib/data';
import { Backdrop } from '@/components/backdrop';

const inter = Inter({ subsets: ['latin'], variable: '--font-inter', display: 'swap' });
const instrument = Instrument_Serif({
  subsets: ['latin'],
  weight: '400',
  variable: '--font-instrument',
  display: 'swap',
});
const jetbrains = JetBrains_Mono({ subsets: ['latin'], variable: '--font-jetbrains', display: 'swap' });

const description =
  'Full-stack Software Engineer (backend-focused) specializing in Node.js, NestJS, Angular, distributed systems, platform engineering, Kubernetes, microservices, and workflow automation. 4 years building scalable, cloud-native systems.';

export const metadata: Metadata = {
  metadataBase: new URL(site.url),
  title: {
    default: `${site.name} — Full-Stack Engineer`,
    template: `%s — ${site.name}`,
  },
  description,
  keywords: [
    'Vaibhav Kulkarni',
    'Backend Engineer',
    'Platform Engineer',
    'Node.js',
    'NestJS',
    'TypeScript',
    'Distributed Systems',
    'Microservices',
    'Kubernetes',
    'Helm',
    'Docker',
    'RabbitMQ',
    'PostgreSQL',
    'Workflow Automation',
    'Software Engineer 2',
    'Senior Software Engineer',
  ],
  authors: [{ name: site.name, url: site.url }],
  creator: site.name,
  alternates: { canonical: site.url },
  openGraph: {
    type: 'website',
    locale: 'en_US',
    url: site.url,
    title: `${site.name} — Full-Stack Engineer`,
    description,
    siteName: site.name,
  },
  twitter: {
    card: 'summary_large_image',
    title: `${site.name} — Full-Stack Engineer`,
    description,
  },
  robots: {
    index: true,
    follow: true,
    googleBot: { index: true, follow: true, 'max-image-preview': 'large' },
  },
};

const jsonLd = {
  '@context': 'https://schema.org',
  '@type': 'Person',
  name: site.name,
  jobTitle: 'Full-Stack Engineer (Backend-Focused)',
  email: `mailto:${site.email}`,
  url: site.url,
  address: { '@type': 'PostalAddress', addressLocality: 'Bengaluru', addressCountry: 'IN' },
  sameAs: [site.github, site.linkedin],
  knowsAbout: [
    'Node.js',
    'NestJS',
    'TypeScript',
    'Distributed Systems',
    'Microservices',
    'Kubernetes',
    'PostgreSQL',
    'RabbitMQ',
    'Platform Engineering',
  ],
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html
      lang="en"
      suppressHydrationWarning
      className={`${inter.variable} ${instrument.variable} ${jetbrains.variable}`}
    >
      <body>
        {/* No-flash theme init: runs before paint */}
        <script
          dangerouslySetInnerHTML={{
            __html: `(function(){try{var t=localStorage.getItem('theme');var d=t?t==='dark':window.matchMedia('(prefers-color-scheme: dark)').matches;if(d)document.documentElement.classList.add('dark');}catch(e){}})();`,
          }}
        />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
        <Backdrop />
        <div className="grain" aria-hidden />
        {children}
      </body>
    </html>
  );
}
