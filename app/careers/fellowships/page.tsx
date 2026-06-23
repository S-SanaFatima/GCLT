import { Metadata } from 'next';
import PageHero from '@/components/shared/PageHero';
import { SITE } from '@/lib/utils';

export const metadata: Metadata = {
  title: 'Fellowships',
  description: 'Postdoctoral and research fellowship opportunities at the Global Centre for Learning & Training.',
};

export default function FellowshipsPage() {
  return (
    <>
      <PageHero
        title="Fellowships"
        breadcrumbs={[
          { label: 'Home', href: '/' },
          { label: 'Careers', href: '/careers' },
          { label: 'Fellowships' },
        ]}
      />
      <section className="section-padding bg-white">
        <div className="container-gclt max-w-3xl">
          <p className="mb-6 text-[var(--color-text-light)]">
            GCLT offers postdoctoral and research fellowships for scholars working in Islamic law,
            finance, governance, and related interdisciplinary fields. Fellows engage in active
            research, publication, and teaching at the Centre.
          </p>
          <p className="text-[var(--color-text-light)]">
            For fellowship enquiries, contact{' '}
            <a href={`mailto:${SITE.emails.research}`} className="text-primary hover:underline">
              {SITE.emails.research}
            </a>
          </p>
        </div>
      </section>
    </>
  );
}
