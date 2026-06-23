import { Metadata } from 'next';
import PageHero from '@/components/shared/PageHero';
import Link from 'next/link';
import { SITE } from '@/lib/utils';

export const metadata: Metadata = {
  title: 'Internship Opportunities',
  description: 'Research and professional internship opportunities at the Global Centre for Learning & Training.',
};

export default function InternshipOpportunitiesPage() {
  return (
    <>
      <PageHero
        title="Internship Opportunities"
        breadcrumbs={[
          { label: 'Home', href: '/' },
          { label: 'Careers', href: '/careers' },
          { label: 'Internships' },
        ]}
      />
      <section className="section-padding bg-white">
        <div className="container-gclt max-w-3xl">
          <p className="mb-6 text-[var(--color-text-light)]">
            GCLT offers research internships across law, Islamic studies, public policy, and interdisciplinary fields.
            Interns work alongside faculty on active research projects and publications.
          </p>
          <Link href="/academics/internships" className="btn-primary mr-4 inline-flex">
            Learn More
          </Link>
          <a href={`mailto:${SITE.emails.careers}?subject=Internship Application`} className="btn-outline inline-flex">
            Apply Now
          </a>
        </div>
      </section>
    </>
  );
}
