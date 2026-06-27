import { Metadata } from 'next';
import { notFound } from 'next/navigation';
import PageHero from '@/components/shared/PageHero';
import ApplyNowButton from '@/components/shared/ApplyNowButton';
import { jobs, getJobBySlug } from '@/lib/data/jobs';
import Link from 'next/link';
import { SITE } from '@/lib/utils';

interface Props {
  params: { slug: string };
}

export function generateStaticParams() {
  if (jobs.length === 0) {
    return [{ slug: '_' }];
  }
  return jobs.map((j) => ({ slug: j.slug }));
}

export function generateMetadata({ params }: Props): Metadata {
  const job = getJobBySlug(params.slug);
  if (!job) return { title: 'Job Opening' };
  return { title: job.title, description: job.description.slice(0, 160) };
}

export default function JobDetailPage({ params }: Props) {
  if (params.slug === '_') notFound();

  const job = getJobBySlug(params.slug);
  if (!job) notFound();

  return (
    <>
      <PageHero
        title={job.title}
        breadcrumbs={[
          { label: 'Home', href: '/' },
          { label: 'Careers', href: '/careers' },
          { label: 'Job Openings', href: '/careers/job-openings' },
          { label: job.title },
        ]}
      />
      <section className="section-padding bg-white">
        <div className="container-gclt max-w-3xl">
          <div className="mb-6 flex flex-wrap gap-3">
            <span className="rounded-full bg-primary/10 px-3 py-1 text-xs font-medium text-primary">{job.type}</span>
            <span className="text-sm text-[var(--color-text-light)]">{job.department}</span>
            <span className="text-sm text-[var(--color-text-light)]">{job.location}</span>
          </div>
          <p className="mb-8 text-[var(--color-text-light)]">{job.description}</p>
          <h3 className="mb-3 text-primary">Responsibilities</h3>
          <ul className="mb-6 list-disc space-y-2 pl-5 text-[var(--color-text-light)]">
            {job.responsibilities.map((r) => <li key={r}>{r}</li>)}
          </ul>
          <h3 className="mb-3 text-primary">Requirements</h3>
          <ul className="mb-6 list-disc space-y-2 pl-5 text-[var(--color-text-light)]">
            {job.requirements.map((r) => <li key={r}>{r}</li>)}
          </ul>
          <h3 className="mb-3 text-primary">How to Apply</h3>
          <ol className="mb-6 list-decimal space-y-2 pl-5 text-[var(--color-text-light)]">
            {job.howToApply.map((step) => <li key={step}>{step}</li>)}
          </ol>
          {job.deadline && <p className="mb-6 text-sm text-[var(--color-text-light)]">Deadline: {job.deadline}</p>}
          <ApplyNowButton
            formKey="careers"
            prefill={{ position: job.title }}
            className="btn-primary inline-flex items-center gap-2"
            fallbackHref={`mailto:${SITE.emails.careers}?subject=${encodeURIComponent(`Application: ${job.title}`)}`}
          >
            Apply Now
          </ApplyNowButton>
          <Link href="/careers/job-openings" className="btn-outline ml-4 inline-flex">
            ← Back
          </Link>
        </div>
      </section>
    </>
  );
}
