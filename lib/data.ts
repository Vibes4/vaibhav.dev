// Base path for GitHub Pages project repos (e.g. "/vaibhav.dev"); empty for a
// user site or custom domain. Injected by CI; safe-defaults to "" for local dev.
const rawBase = process.env.NEXT_PUBLIC_BASE_PATH ?? '';
const basePath = rawBase === '/' ? '' : rawBase;

// Prefix a public/ asset with the base path. Needed for plain <a> hrefs and for
// next/image, which doesn't apply basePath to `unoptimized` srcs in static export.
export const asset = (path: string) => `${basePath}${path}`;

export const site = {
  name: 'Vaibhav Kulkarni',
  role: 'Full-Stack Engineer (Backend-Focused)',
  // Full site URL (used for SEO/OG/sitemap). Injected by CI; falls back below.
  url: process.env.NEXT_PUBLIC_SITE_URL || 'https://vibes4.github.io',
  location: 'Bengaluru, India',
  email: 'vaibhav.developer.2022@gmail.com',
  phone: '+91 8105083708',
  // Digits only (country code + number) for WhatsApp deep links.
  whatsapp: '918105083708',
  whatsappMessage: 'Hi Vaibhav, I came across your portfolio and would like to connect.',
  github: 'https://github.com/vibes4',
  githubUser: 'vibes4',
  linkedin: 'https://linkedin.com/in/vaibhav-dev2022',
  // Plain <a href> assets aren't auto-prefixed by Next, so add the base path here.
  resume: `${basePath}/Vaibhav_Resume.pdf`,
  tagline:
    'Building scalable backend systems, workflow automation platforms, and cloud-native applications.',
};

export const about = {
  years: '4',
  paragraphs: [
    "I'm a full-stack software engineer with a backend focus and 4 years of experience building scalable microservices, workflow-automation platforms, and distributed systems. I work primarily across Node.js, NestJS, and TypeScript with an Angular frontend, backed by PostgreSQL and RabbitMQ, and I ship to Kubernetes with Helm and Docker.",
    "At Neutrinos I work across backend services end-to-end — from database schema and REST API design through deployment and production support. I built config-type adapters and JSON diffing on the platform's Change Tracking (Config Ledger) system, delivered a high-volume BPM archival service, and contributed reusable SDKs and shared libraries used across services.",
    'Beyond features, I take on production-reliability and release work: resolving high-severity incidents, optimizing critical APIs and database load, driving a Helm chart migration ahead of a major release, and helping keep the platform continuously shippable.',
  ],
  highlights: [
    'Distributed systems & event-driven architecture',
    'Platform engineering: Kubernetes, Helm, Docker',
    'SDK & shared-library ownership',
    'Production incident response & performance tuning',
  ],
};

export const metrics = [
  { value: '160', label: 'Jira Tickets Delivered', sub: 'across features, epics & incidents' },
  { value: '1500+', label: 'Commits Authored', sub: 'in a 12-month window' },
  { value: '439', label: 'Pull Requests Merged', sub: 'incl. release & hotfix integration' },
  { value: '15', label: 'Backend Services', sub: 'owned & contributed to' },
  { value: '42', label: 'Modules Touched', sub: 'services, apps & shared libraries' },
];

export type Experience = {
  company: string;
  role: string;
  period: string;
  location: string;
  product: string;
  stack: string[];
  achievements: string[];
};

export const experience: Experience[] = [
  {
    company: 'Neutrinos Software Services Pvt Ltd',
    role: 'SDE II',
    period: 'Aug 2022 — Present',
    location: 'Bengaluru',
    product: 'Alpha — Low-Code Workflow Automation Platform',
    stack: ['NestJS', 'Angular', 'RabbitMQ', 'PostgreSQL', 'jBPM', 'Kubernetes', 'Helm'],
    achievements: [
      "Built config-type adapters and implemented JSON diffing with tag-based config fetching on top of the platform's Change Tracking (Config Ledger) system, and resolved defects across config versioning flows.",
      'Built and published reusable SDKs and shared libraries (config/API and admin-filters) consumed across multiple backend services, reducing duplicated configuration code.',
      'Delivered a production BPM Archival service for backup, restore, and deletion of high-volume process data with restartable batch processing, keeping production databases performant at scale.',
      'Built a RabbitMQ-backed task-distribution flow end-to-end and migrated the integration to quorum queues, improving message durability and failover.',
      'Resolved high-severity production incidents (production outage, session-expiry crash, task re-attempt blocker), owning root-cause analysis and recovery.',
      'Optimized a critical API 95% (200ms → 10ms) via PostgreSQL query tuning and stabilized a production database, cutting CPU from 90%+ spikes to a steady ~50%.',
      'Contributed to the Helm chart migration ahead of a major release and maintained Kubernetes deployment manifests and Dockerfiles across services; worked on the database migration and audit tooling.',
      'Helped with release integration — reconciling release, hotfix, and snapshot branches to keep the platform shippable.',
    ],
  },
  {
    company: 'Neutrinos Software Services Pvt Ltd',
    role: 'Software Engineer',
    period: 'Earlier tenure',
    location: 'Bengaluru',
    product: 'Neutrinos Studio — Low-Code Full-Stack Builder',
    stack: ['Angular', 'Node.js', 'Electron'],
    achievements: [
      'Resolved 30+ production issues in 30 days, owning platform stability during a critical hardening window and reducing customer-reported failures.',
      'Built a database entity designer and internal tooling that accelerated customer-application generation for internal builders.',
    ],
  },
];

export type Project = {
  name: string;
  tagline: string;
  problem: string;
  architecture: string;
  challenges: string;
  stack: string[];
  link: string;
  status?: string;
};

export const projects: Project[] = [
  {
    name: 'Vibes Shield',
    tagline: 'On-Prem Identity & Access Management Platform',
    problem:
      'Enterprises need a self-hosted IAM that unifies local auth with external providers (Microsoft Entra ID, Google) while enforcing strong multi-tenant isolation.',
    architecture:
      'Identity broker + authorization engine: an API-first Auth Service fronting an Auth Engine, RBAC Engine, Mapping Engine, and a pluggable Provider Layer (Azure / GCP / custom adapters), with an optional Admin UI add-on.',
    challenges:
      'Multi-tenant isolation, external identity federation with attribute mapping, and RBAC-with-groups across federated providers — all configurable via CLI and REST.',
    stack: ['NestJS', 'TypeScript', 'PostgreSQL', 'OIDC', 'RBAC', 'pnpm Monorepo'],
    link: 'https://github.com/vibes4',
  },
  {
    name: 'Vibes DS Server',
    tagline: 'Redis-like In-Memory Datastore in C++',
    problem:
      'Build a high-performance key-value datastore from first principles to master low-level networking, memory, and protocol handling.',
    architecture:
      'A custom C++ HTTP server with a hand-written socket layer, a dedicated KV-store engine, and a cross-platform abstraction layer — containerized with Docker and built via Make.',
    challenges:
      'Implementing the server event loop, request parsing, and an in-memory store without a framework, while keeping the codebase cross-platform.',
    stack: ['C++', 'Sockets', 'Docker', 'Make'],
    link: 'https://github.com/vibes4',
  },
  {
    name: 'Vibes Copy Manager',
    tagline: 'Cross-Platform Clipboard Manager',
    problem:
      'Provide a fast, lightweight clipboard manager for desktop workflows, packaged as a native cross-platform app.',
    architecture:
      'A Tauri shell with a Rust core for native performance and low memory, an Angular UI, and a NestJS service layer — shipped as a desktop binary via GitHub Releases.',
    challenges:
      'Keeping the footprint lightweight while bridging a Rust/Tauri native layer with a web UI, and packaging cross-platform release artifacts.',
    stack: ['Rust', 'Tauri', 'Angular', 'NestJS'],
    link: 'https://github.com/vibes4',
    status: 'Released',
  },
];

export type Repo = {
  name: string;
  description: string;
  language: string;
  link: string;
  status?: string;
};

// Curated — only these repositories are featured in the GitHub section.
export const featuredRepos: Repo[] = [
  {
    name: 'vibes-copy-manager',
    description:
      'Cross-platform clipboard manager (Rust + Tauri + Angular + NestJS), shipped via GitHub Releases.',
    language: 'Rust',
    link: 'https://github.com/vibes4/vibes-copy-manager',
    status: 'Released',
  },
  {
    name: 'vibes-shield',
    description: 'Multi-tenant, on-prem IAM platform — authentication, RBAC, and identity federation.',
    language: 'TypeScript',
    link: 'https://github.com/vibes4/vibes-shield',
  },
  {
    name: 'vibes-ds-server',
    description: 'Redis-like in-memory datastore built on a custom C++ HTTP server and socket layer.',
    language: 'C++',
    link: 'https://github.com/vibes4/vibes-ds-server',
  },
  {
    name: 'nx-selector',
    description: 'npm package — a CLI tool to browse and run Nx workspace commands quickly.',
    language: 'TypeScript',
    link: 'https://github.com/vibes4/nx-selector',
    status: 'npm',
  },
  {
    name: 'vaibhav-engineering-life',
    description:
      'Interview-prep guide covering Node.js, Express, NestJS, DSA, System Design, PostgreSQL, MongoDB, Kafka, CI/CD and more.',
    language: 'Markdown',
    link: 'https://vibes4.github.io/vaibhav-engineering-life/',
  },
];

export const skills = [
  { category: 'Backend', items: ['Node.js', 'NestJS', 'Express.js', 'TypeScript', 'REST APIs'] },
  { category: 'Frontend', items: ['Angular', 'JavaScript', 'HTML', 'CSS', 'RxJS'] },
  { category: 'Databases', items: ['PostgreSQL', 'MySQL', 'MongoDB', 'Redis', 'TypeORM'] },
  { category: 'Messaging', items: ['RabbitMQ', 'Kafka', 'Event-Driven Architecture'] },
  { category: 'Cloud', items: ['Azure', 'AWS', 'Cloud-Native'] },
  { category: 'DevOps', items: ['Docker', 'Kubernetes', 'Helm', 'CI/CD', 'Nx Monorepo'] },
  { category: 'Architecture', items: ['Microservices', 'Distributed Systems', 'System Design', 'SDK Design', 'Multi-Tenancy'] },
];

export const nav = [
  { label: 'About', href: '#about' },
  { label: 'Impact', href: '#impact' },
  { label: 'Experience', href: '#experience' },
  { label: 'Projects', href: '#projects' },
  { label: 'Skills', href: '#skills' },
  { label: 'GitHub', href: '#github' },
  { label: 'Contact', href: '#contact' },
];
