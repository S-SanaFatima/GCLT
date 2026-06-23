import { Metadata } from 'next';
import Link from 'next/link';
import PageHero from '@/components/shared/PageHero';
import ProgramCard from '@/components/academics/ProgramCard';
import { getProgramsByType } from '@/lib/data/programs';

export const metadata: Metadata = {
  title: 'Short Courses',
  description: 'GCLT professional certificates including research methods, AI & society, and more.',
};

export default function ShortCoursesPage() {
  const programs = getProgramsByType('short-course');

  return (
    <>
      <PageHero
        title="Short Courses & Certificates"
        subtitle="Focused professional certificates — choose online, in-person, or hybrid delivery."
        breadcrumbs={[
          { label: 'Home', href: '/' },
          { label: 'Academics', href: '/academics' },
          { label: 'Short Courses' },
        ]}
      />
      <section className="section-padding bg-white">
        <div className="container-gclt">
          <p className="mb-8 text-center text-sm text-[var(--color-text-light)]">
            <Link href="/academics/programme-catalogue" className="font-semibold text-primary hover:text-accent">
              View full programme catalogue →
            </Link>
          </p>
          <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
            {programs.map((program) => (
              <ProgramCard key={program.slug} program={program} />
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
