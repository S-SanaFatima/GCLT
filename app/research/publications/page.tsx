import { Metadata } from 'next';
import PageHero from '@/components/shared/PageHero';
import PublicationsContent from '@/components/research/PublicationsContent';

export const metadata: Metadata = {
  title: 'Publications',
  description:
    'Research publications, peer-reviewed journals, and scholarly outputs from the Global Centre for Learning & Training.',
};

export default function PublicationsPage() {
  return (
    <>
      <PageHero
        title="Publications"
        subtitle="Promoting legal scholarship and advancing knowledge through rigorous, peer-reviewed research across Islamic law and interdisciplinary studies."
        breadcrumbs={[
          { label: 'Home', href: '/' },
          { label: 'Research', href: '/research' },
          { label: 'Publications' },
        ]}
      />
      <PublicationsContent />
    </>
  );
}
