import { Metadata } from 'next';
import PageHero from '@/components/shared/PageHero';
import ProgramCard from '@/components/academics/ProgramCard';
import Link from 'next/link';
import { getProgramsByType } from '@/lib/data/programs';

export const metadata: Metadata = {
  title: 'Diploma Programs',
  description: 'GCLT professional and executive diploma programmes in Islamic finance, ethics, psychology, and more.',
};

export default function DiplomaProgramsPage() {
  const programs = getProgramsByType('diploma');

  return (
    <>
      <PageHero
        title="Diploma Programs"
        subtitle="Professional and executive diplomas — weekend and evening schedules, onsite and online."
        breadcrumbs={[
          { label: 'Home', href: '/' },
          { label: 'Academics', href: '/academics' },
          { label: 'Diploma Programs' },
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
