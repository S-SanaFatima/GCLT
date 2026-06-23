import Link from 'next/link';
import type { Program } from '@/lib/data/programs';
import { Clock, Calendar } from 'lucide-react';
import { formatDeliveryOptions } from '@/lib/deliveryMode';
import ProgramStatusBadge, { getStatusAccentBar } from './ProgramStatusBadge';

interface ProgramCardProps {
  program: Program;
  basePath?: string;
}

export default function ProgramCard({ program, basePath = '/academics/programmes' }: ProgramCardProps) {
  return (
    <article className="card-hover group relative flex h-full flex-col overflow-hidden">
      <div className={`h-1 w-full ${getStatusAccentBar(program.status)}`} />

      <div className="flex flex-1 flex-col p-7 sm:p-8">
        <div className="mb-5 flex items-center justify-between gap-3">
          <ProgramStatusBadge status={program.status} />
          <p className="text-right text-[11px] font-medium leading-snug text-[var(--color-text-light)]">
            {formatDeliveryOptions(program.deliveryOptions)}
          </p>
        </div>

        <h3 className="text-lg font-bold leading-snug text-primary transition-colors group-hover:text-accent">
          {program.catchyTitle}
        </h3>
        <p className="mt-1.5 text-sm font-semibold leading-snug text-accent">{program.academicName}</p>
        <p className="mt-3 line-clamp-2 text-sm italic text-[var(--color-text-light)]">
          &ldquo;{program.slogan}&rdquo;
        </p>
        <p className="mb-4 mt-3 line-clamp-3 flex-1 text-sm leading-relaxed text-[var(--color-text-light)]">
          {program.overview}
        </p>

        <div className="mb-5 flex flex-wrap gap-4 border-t border-border/50 pt-4 text-xs text-[var(--color-text-light)]">
          <span className="inline-flex items-center gap-1.5">
            <Clock className="h-3.5 w-3.5 text-primary/60" />
            {program.durationOnsite}
          </span>
          <span className="inline-flex items-center gap-1.5">
            <Calendar className="h-3.5 w-3.5 text-primary/60" />
            {program.schedule}
          </span>
        </div>

        <Link
          href={`${basePath}/${program.slug}`}
          className="text-sm font-semibold text-primary transition-colors hover:text-accent"
        >
          View programme →
        </Link>
      </div>
    </article>
  );
}
