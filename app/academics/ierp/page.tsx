import { Metadata } from 'next';
import PageHero from '@/components/shared/PageHero';
import IERPContent from '@/components/academics/IERPContent';

export const metadata: Metadata = {
  title: 'IERP — Islamic Education Revitalization Program',
  description:
    'GCLT\'s crown research initiative revitalizing Islamic education through curriculum, pedagogy, leadership, policy, and evaluation.',
};

export default function IERPPage() {
  return (
    <>
      <PageHero
        title="Islamic Education Revitalization Program"
        subtitle="GCLT's flagship initiative in Islamic education research, policy, and professional learning pathways."
        breadcrumbs={[
          { label: 'Home', href: '/' },
          { label: 'Academics', href: '/academics' },
          { label: 'IERP' },
        ]}
      />
      <IERPContent />
    </>
  );
}
