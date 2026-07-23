import { Metadata } from 'next';
import PageHero from '@/components/shared/PageHero';
import Link from 'next/link';

interface Props {
  params: { slug: string };
}

const conferences: Record<string, { title: string; subtitle: string; description: string }> = {
  'ai-society-conference': {
    title: '1st International Conference on AI & Society',
    subtitle: 'Bridging Islam, Pakistan, and Global Perspectives',
    description:
      'GCLT hosted its 1st International Conference on Artificial Intelligence & Society on 30–31 December at the Pakistan Academy of Letters, Islamabad. The two-day gathering brought together scholars, researchers, and policymakers to examine how AI is reshaping society — from religion, law, and ethics to culture, security, and public discourse. View the full recap, team details, and photo gallery on our events page.',
  },
  'global-summit-shariah-law': {
    title: 'Global Summit on Harmonisation of Shari\'ah and Law',
    subtitle: 'Society, Policy and Progress',
    description:
      'The first global summit addressing the harmonisation of Shari\'ah and law across society, policy, and progress. Archive materials and proceedings will be published on our research page.',
  },
};

export function generateStaticParams() {
  return Object.keys(conferences).map((slug) => ({ slug }));
}

export function generateMetadata({ params }: Props): Metadata {
  const conf = conferences[params.slug];
  if (!conf) return { title: 'Conference' };
  return { title: conf.title, description: conf.description.slice(0, 160) };
}

export default function ConferencePage({ params }: Props) {
  const conf = conferences[params.slug];
  if (!conf) {
    return (
      <>
        <PageHero title="Conference" breadcrumbs={[{ label: 'Home', href: '/' }, { label: 'Research', href: '/research' }, { label: 'Conferences', href: '/research/conferences' }, { label: 'Conference' }]} />
        <section className="section-padding bg-white">
          <div className="container-gclt">
            <p className="text-[var(--color-text-light)]">Conference details coming soon.</p>
            <Link href="/research/conferences" className="btn-outline mt-6 inline-flex">← Back to Conferences</Link>
          </div>
        </section>
      </>
    );
  }

  return (
    <>
      <PageHero
        title={conf.title}
        subtitle={conf.subtitle}
        breadcrumbs={[
          { label: 'Home', href: '/' },
          { label: 'Research', href: '/research' },
          { label: 'Conferences', href: '/research/conferences' },
          { label: conf.title },
        ]}
      />
      <section className="section-padding bg-white">
        <div className="container-gclt max-w-3xl">
          <p className="mb-8 text-[var(--color-text-light)]">{conf.description}</p>
          <div className="flex flex-wrap gap-4">
            {params.slug === 'ai-society-conference' && (
              <Link
                href="/updates/events/1st-international-conference-ai-society"
                className="btn-primary inline-flex"
              >
                View Event Recap &amp; Gallery
              </Link>
            )}
            <Link href="/research/conferences" className="btn-outline inline-flex">
              ← Back to Conferences
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}
