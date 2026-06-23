import { Metadata } from 'next';
import PageHero from '@/components/shared/PageHero';
import CVForm from '@/components/shared/CVForm';
import { SITE } from '@/lib/utils';

export const metadata: Metadata = {
  title: 'Job Openings',
  description: 'Current job openings at the Global Centre for Learning & Training.',
};

export default function JobOpeningsPage() {
  return (
    <>
      <PageHero
        title="Job Openings"
        breadcrumbs={[
          { label: 'Home', href: '/' },
          { label: 'Careers', href: '/careers' },
          { label: 'Job Openings' },
        ]}
      />
      <section className="section-padding bg-white">
        <div className="container-gclt max-w-2xl">
          <div className="mb-10 text-center">
            <p className="mb-6 text-[var(--color-text-light)]">
              There are currently no open positions. Please check back soon or send your CV to{' '}
              <a href={`mailto:${SITE.emails.careers}`} className="text-primary hover:underline">
                {SITE.emails.careers}
              </a>
            </p>
          </div>
          <CVForm />
        </div>
      </section>
    </>
  );
}
