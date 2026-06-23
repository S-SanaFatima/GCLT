import { Metadata } from 'next';
import PageHero from '@/components/shared/PageHero';
import ResearchAreasContent from '@/components/research/ResearchAreasContent';

export const metadata: Metadata = {
  title: 'Research Areas',
  description: 'Explore the interdisciplinary research areas at the Global Centre for Learning & Training.',
};

export default function ResearchAreasPage() {
  return (
    <>
      <PageHero
        title="Research Areas"
        subtitle="GCLT pursues its objectives across a broad, interconnected set of disciplines — from law and governance to technology, ethics, and leadership."
        breadcrumbs={[
          { label: 'Home', href: '/' },
          { label: 'Research', href: '/research' },
          { label: 'Research Areas' },
        ]}
      />
      <ResearchAreasContent />
    </>
  );
}
