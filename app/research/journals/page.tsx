import { Metadata } from 'next';
import Link from 'next/link';
import { ArrowRight, BookOpen, ExternalLink } from 'lucide-react';
import PageHero from '@/components/shared/PageHero';
import { gcltJournals } from '@/lib/data/journals';

export const metadata: Metadata = {
  title: 'Research Journals',
  description:
    'GCLT peer-reviewed, open-access journals: Al-Kashaf, Al-Salihat, and Al-Haqeeqah.',
};

export default function JournalsPage() {
  return (
    <>
      <PageHero
        title="Research Journals"
        subtitle="Three HEC-approved, peer-reviewed journals advancing scholarship across law, society, religion, and the social sciences."
        breadcrumbs={[
          { label: 'Home', href: '/' },
          { label: 'Research', href: '/research' },
          { label: 'Journals' },
        ]}
      />
      <section className="section-padding bg-white">
        <div className="container-gclt">
          <p className="mx-auto mb-12 max-w-3xl text-center text-lg text-[var(--color-text-light)]">
            Select a journal below to view its scope, editorial standards, and submission
            information.
          </p>

          <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
            {gcltJournals.map((journal) => (
              <div
                key={journal.slug}
                className="card group flex h-full flex-col p-7 transition-all hover:-translate-y-1 hover:shadow-elevated sm:p-8"
              >
                <div className="mb-5 flex h-12 w-12 items-center justify-center rounded-card bg-primary/10">
                  <BookOpen className="h-6 w-6 text-primary" />
                </div>
                <h2 className="text-xl font-bold text-primary">{journal.name}</h2>
                <p className="mt-2 text-sm font-semibold text-accent">{journal.subtitle}</p>
                <p className="mt-4 flex-1 text-sm leading-relaxed text-[var(--color-text-light)] line-clamp-4">
                  {journal.description}
                </p>
                <div className="mt-5 flex flex-wrap gap-2">
                  <span className="rounded-full bg-primary/10 px-3 py-1 text-xs font-medium text-primary">
                    {journal.hecStatus}
                  </span>
                  <span className="rounded-full bg-accent/10 px-3 py-1 text-xs font-medium text-accent-dark">
                    {journal.frequency}
                  </span>
                </div>
                <div className="mt-6 flex flex-wrap items-center gap-4">
                  <Link
                    href={journal.href}
                    className="inline-flex items-center gap-2 text-sm font-semibold text-primary transition-colors hover:text-accent"
                  >
                    View journal
                    <ArrowRight className="h-4 w-4" />
                  </Link>
                  <a
                    href={journal.externalUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 text-sm font-semibold text-accent transition-colors hover:text-accent-dark"
                  >
                    Visit website
                    <ExternalLink className="h-4 w-4" />
                  </a>
                </div>
              </div>
            ))}
          </div>

          <div className="mt-14 text-center">
            <Link href="/research/call-for-papers" className="btn-primary inline-flex">
              Call for Papers
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}
