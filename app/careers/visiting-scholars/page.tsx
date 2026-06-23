import { Metadata } from 'next';
import PageHero from '@/components/shared/PageHero';
import { SITE } from '@/lib/utils';

export const metadata: Metadata = {
  title: 'Visiting Scholars',
  description: 'Visiting scholar programme at the Global Centre for Learning & Training.',
};

export default function VisitingScholarsPage() {
  return (
    <>
      <PageHero
        title="Visiting Scholars"
        breadcrumbs={[
          { label: 'Home', href: '/' },
          { label: 'Careers', href: '/careers' },
          { label: 'Visiting Scholars' },
        ]}
      />
      <section className="section-padding bg-white">
        <div className="container-gclt max-w-3xl">
          <p className="mb-6 text-[var(--color-text-light)]">
            GCLT welcomes visiting scholars for short-term academic visits, collaborative research,
            and guest lectures. Visiting scholars contribute to our intellectual community while
            advancing their own research agendas.
          </p>
          <p className="text-[var(--color-text-light)]">
            To express interest, contact{' '}
            <a href={`mailto:${SITE.emails.research}`} className="text-primary hover:underline">
              {SITE.emails.research}
            </a>
          </p>
        </div>
      </section>
    </>
  );
}
