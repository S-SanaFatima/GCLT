import Link from 'next/link';
import { ExternalLink } from 'lucide-react';
import PageHero from '@/components/shared/PageHero';
import type { GCLTJournal } from '@/lib/data/journals';
import { SITE } from '@/lib/utils';

interface JournalProfileProps {
  journal: GCLTJournal;
}

export default function JournalProfile({ journal }: JournalProfileProps) {
  const meta = [
    { label: 'Status', value: journal.hecStatus },
    { label: 'Frequency', value: journal.frequency },
    { label: 'Review', value: journal.peerReview },
    { label: 'Languages', value: journal.languages },
  ];

  return (
    <>
      <PageHero
        title={journal.name}
        subtitle={journal.subtitle}
        breadcrumbs={[
          { label: 'Home', href: '/' },
          { label: 'Research', href: '/research' },
          { label: 'Journals', href: '/research/journals' },
          { label: journal.name },
        ]}
      />
      <section className="section-padding bg-white">
        <div className="container-gclt max-w-3xl">
          <p className="text-lg leading-relaxed text-[var(--color-text-light)]">{journal.description}</p>
          <p className="mt-4 text-[var(--color-text-light)]">
            <span className="font-semibold text-primary">Disciplines: </span>
            {journal.disciplines}
          </p>
          {journal.extra && (
            <p className="mt-4 text-sm leading-relaxed text-[var(--color-text-light)]">{journal.extra}</p>
          )}

          <dl className="mt-10 grid gap-4 sm:grid-cols-2">
            {meta.map(({ label, value }) => (
              <div key={label} className="rounded-xl border border-border/60 bg-off-white/50 px-5 py-4">
                <dt className="text-[11px] font-bold uppercase tracking-wider text-accent">{label}</dt>
                <dd className="mt-1 text-sm font-medium text-primary">{value}</dd>
              </div>
            ))}
          </dl>

          <div className="mt-10 flex flex-wrap gap-4">
            <a
              href={journal.externalUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="btn-primary inline-flex items-center gap-2"
            >
              Visit journal website
              <ExternalLink className="h-4 w-4" />
            </a>
            <Link href="/research/call-for-papers" className="btn-outline inline-flex">
              Call for Papers
            </Link>
            <a href={`mailto:${SITE.emails.research}`} className="btn-outline inline-flex">
              Submit Enquiry
            </a>
          </div>
        </div>
      </section>
    </>
  );
}
