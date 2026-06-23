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
      'GCLT\'s inaugural international conference explores artificial intelligence through Islamic, Pakistani, and global perspectives. Register your interest at events@gclt.com.pk.',
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
          <Link href="/research/conferences" className="btn-outline inline-flex">
            ← Back to Conferences
          </Link>
        </div>
      </section>
    </>
  );
}
