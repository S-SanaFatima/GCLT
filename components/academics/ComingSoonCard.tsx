import { GraduationCap } from 'lucide-react';

interface ComingSoonCardProps {
  title: string;
  description: string;
}

export default function ComingSoonCard({ title, description }: ComingSoonCardProps) {
  return (
    <article className="card relative overflow-hidden p-6 opacity-90">
      <span className="absolute right-4 top-4 rounded-full bg-accent/20 px-3 py-1 text-xs font-semibold text-accent-dark">
        Coming Soon
      </span>
      <div className="mb-4 flex h-10 w-10 items-center justify-center rounded-card bg-primary/10">
        <GraduationCap className="h-5 w-5 text-primary" />
      </div>
      <h3 className="mb-2 pr-20 text-lg font-semibold text-primary">{title}</h3>
      <p className="text-sm text-[var(--color-text-light)]">{description}</p>
    </article>
  );
}
