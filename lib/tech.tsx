import {
  siNodedotjs, siNestjs, siExpress, siTypescript, siJavascript, siAngular,
  siHtml5, siCss, siReactivex, siPostgresql, siMysql, siMongodb, siRedis,
  siTypeorm, siRabbitmq, siApachekafka, siDocker, siKubernetes, siHelm, siNx,
} from 'simple-icons';
import {
  Cloud, Webhook, Radio, Boxes, Network, Workflow, Package, Building2, GitBranch,
  type LucideIcon,
} from 'lucide-react';

type SimpleIcon = { path: string; hex: string; title: string };
export type Tech = { label: string; si?: SimpleIcon; lucide?: LucideIcon; color?: string };

/**
 * Maps each skill string to a brand logo (simple-icons) or a concept icon
 * (lucide). `color` is the brand hover tint — omitted for near-black marks
 * (Express, Kafka) so they fall back to the site accent and stay visible in
 * both themes. A few dark-navy brand hexes are lightened for the same reason.
 */
export const TECH: Record<string, Tech> = {
  'Node.js': { label: 'Node.js', si: siNodedotjs, color: '#5FA04E' },
  'NestJS': { label: 'NestJS', si: siNestjs, color: '#E0234E' },
  'Express.js': { label: 'Express', si: siExpress },
  'TypeScript': { label: 'TypeScript', si: siTypescript, color: '#3178C6' },
  'REST APIs': { label: 'REST APIs', lucide: Webhook },
  'Angular': { label: 'Angular', si: siAngular, color: '#DD0031' },
  'JavaScript': { label: 'JavaScript', si: siJavascript, color: '#D9A400' },
  'HTML': { label: 'HTML5', si: siHtml5, color: '#E34F26' },
  'CSS': { label: 'CSS3', si: siCss, color: '#7A3FB8' },
  'RxJS': { label: 'RxJS', si: siReactivex, color: '#C2238F' },
  'PostgreSQL': { label: 'PostgreSQL', si: siPostgresql, color: '#4169E1' },
  'MySQL': { label: 'MySQL', si: siMysql, color: '#4479A1' },
  'MongoDB': { label: 'MongoDB', si: siMongodb, color: '#47A248' },
  'Redis': { label: 'Redis', si: siRedis, color: '#FF4438' },
  'TypeORM': { label: 'TypeORM', si: siTypeorm, color: '#FE3030' },
  'RabbitMQ': { label: 'RabbitMQ', si: siRabbitmq, color: '#FF6600' },
  'Kafka': { label: 'Apache Kafka', si: siApachekafka },
  'Event-Driven Architecture': { label: 'Event-Driven', lucide: Radio, color: '#A855F7' },
  'Azure': { label: 'Azure', lucide: Cloud, color: '#2C8DFF' },
  'AWS': { label: 'AWS', lucide: Cloud, color: '#FF9900' },
  'Cloud-Native': { label: 'Cloud-Native', lucide: Cloud, color: '#38BDF8' },
  'Docker': { label: 'Docker', si: siDocker, color: '#2496ED' },
  'Kubernetes': { label: 'Kubernetes', si: siKubernetes, color: '#326CE5' },
  'Helm': { label: 'Helm', si: siHelm, color: '#4B54D6' },
  'CI/CD': { label: 'CI/CD', lucide: GitBranch, color: '#22C55E' },
  'Nx Monorepo': { label: 'Nx', si: siNx, color: '#5C82C4' },
  'Microservices': { label: 'Microservices', lucide: Boxes, color: '#8B5CF6' },
  'Distributed Systems': { label: 'Distributed Systems', lucide: Network, color: '#6366F1' },
  'System Design': { label: 'System Design', lucide: Workflow, color: '#3B82F6' },
  'SDK Design': { label: 'SDK Design', lucide: Package, color: '#F59E0B' },
  'Multi-Tenancy': { label: 'Multi-Tenancy', lucide: Building2, color: '#14B8A6' },
};

export function TechIcon({ tech, className }: { tech: Tech; className?: string }) {
  if (tech.si) {
    return (
      <svg viewBox="0 0 24 24" fill="currentColor" className={className} aria-hidden>
        <path d={tech.si.path} />
      </svg>
    );
  }
  const Lucide = tech.lucide;
  if (!Lucide) return null;
  return <Lucide className={className} strokeWidth={1.75} aria-hidden />;
}
