import Link from 'next/link';
import type { Job } from '@/lib/data/jobs';

interface JobCardProps {
  job: Job;
}

export default function JobCard({ job }: JobCardProps) {
  return (
    <article className="card p-6 transition-shadow hover:shadow-lg">
      <div className="mb-3 flex flex-wrap items-center gap-2">
        <span className="rounded-full bg-primary/10 px-3 py-0.5 text-xs font-medium text-primary">
          {job.type}
        </span>
        <span className="text-sm text-[var(--color-text-light)]">{job.location}</span>
      </div>
      <h3 className="mb-1 text-lg font-semibold text-primary">{job.title}</h3>
      <p className="mb-4 text-sm text-[var(--color-text-light)]">{job.department}</p>
      <p className="mb-4 line-clamp-2 text-sm">{job.description}</p>
      <Link href={`/careers/job-openings/${job.slug}`} className="text-sm font-semibold text-accent hover:text-accent-dark">
        View Details →
      </Link>
    </article>
  );
}
