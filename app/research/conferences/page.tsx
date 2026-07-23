import { Metadata } from 'next';
import Link from 'next/link';
import PageHero from '@/components/shared/PageHero';

export const metadata: Metadata = {
  title: 'Conferences & Summits',
  description: 'International conferences and summits hosted by the Global Centre for Learning & Training.',
};

const upcoming: { slug: string; title: string; subtitle: string; date: string }[] = [];

const past = [
  {
    slug: 'ai-society-conference',
    title: '1st International Conference on AI & Society',
    subtitle: 'Bridging Islam, Pakistan, and Global Perspectives',
    date: '30–31 December 2025',
  },
  {
    slug: 'global-summit-shariah-law',
    title: 'First Global Summit on Harmonisation of Shari\'ah and Law (GSHSL)',
    subtitle: 'Society, Policy and Progress',
    date: '2024',
  },
];

export default function ConferencesPage() {
  return (
    <>
      <PageHero
        title="Conferences & Summits"
        subtitle="International gatherings advancing scholarship and dialogue."
        breadcrumbs={[
          { label: 'Home', href: '/' },
          { label: 'Research', href: '/research' },
          { label: 'Conferences' },
        ]}
      />
      <section className="section-padding bg-white">
        <div className="container-gclt">
          <h2 className="mb-6 text-primary">Upcoming Conferences</h2>
          <div className="mb-12 space-y-6">
            {upcoming.length === 0 ? (
              <p className="text-[var(--color-text-light)]">
                No upcoming conferences at this time. Explore our past conferences below.
              </p>
            ) : (
              upcoming.map((conf) => (
                <Link
                  key={conf.slug}
                  href={`/research/conferences/${conf.slug}`}
                  className="card block p-6 transition-shadow hover:shadow-lg"
                >
                  <div className="flex items-start justify-between gap-4">
                    <div>
                      <h3 className="text-lg font-semibold text-primary">{conf.title}</h3>
                      <p className="mt-1 text-sm text-[var(--color-text-light)]">{conf.subtitle}</p>
                      <p className="mt-2 text-sm text-mid-gray">{conf.date}</p>
                    </div>
                    <span className="shrink-0 rounded-full bg-accent/20 px-3 py-1 text-xs font-medium text-accent-dark">
                      Upcoming
                    </span>
                  </div>
                </Link>
              ))
            )}
          </div>

          <h2 id="past" className="mb-6 text-primary">
            Past Conferences
          </h2>
          <div className="space-y-6">
            {past.map((conf) => (
              <Link
                key={conf.slug}
                href={`/research/conferences/${conf.slug}`}
                className="card block p-6 transition-shadow hover:shadow-lg"
              >
                <div className="flex items-start justify-between gap-4">
                  <div>
                    <h3 className="text-lg font-semibold text-primary">{conf.title}</h3>
                    <p className="mt-1 text-sm text-[var(--color-text-light)]">{conf.subtitle}</p>
                    <p className="mt-2 text-sm text-mid-gray">{conf.date}</p>
                  </div>
                  <span className="shrink-0 rounded-full bg-light-gray px-3 py-1 text-xs font-medium text-mid-gray">
                    Past
                  </span>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
