import { Metadata } from 'next';
import PageHero from '@/components/shared/PageHero';

export const metadata: Metadata = {
  title: 'International Adjunct Faculty',
  description:
    'GCLT International Adjunct Faculty programme — connecting distinguished scholars across regions and disciplines.',
};

const DISCLAIMER =
  'International adjunct faculty appointments are made in the scholar’s personal academic capacity. Institutional affiliations are listed for professional identification only and do not imply partnership with, endorsement by, or representation of the scholar’s home institution unless expressly stated.';

export default function InternationalAdjunctFacultyPage() {
  return (
    <>
      <PageHero
        title="International Adjunct Faculty"
        subtitle="Connecting distinguished scholars across regions and disciplines to support teaching, research, and mentoring at GCLT."
        breadcrumbs={[
          { label: 'Home', href: '/' },
          { label: 'People', href: '/people' },
          { label: 'International Adjunct Faculty' },
        ]}
      />
      <section className="section-padding bg-white">
        <div className="container-gclt max-w-3xl">
          <p className="text-lg leading-relaxed text-[var(--color-text-light)]">
            Confirmed profiles will be published here after signed consent and formal appointment letters
            (term 2026–2028). Appointments are honorary, non-resident, and personal — not institutional
            partnerships with scholars’ home universities.
          </p>
          <div className="mt-8 rounded-2xl border border-dashed border-border bg-off-white/70 px-6 py-10 text-center">
            <p className="font-semibold text-primary">Profiles under appointment</p>
            <p className="mt-2 text-sm text-[var(--color-text-light)]">
              The first cohort of international adjunct faculty will appear here as appointments are
              confirmed.
            </p>
          </div>
          <p className="mt-10 text-sm leading-relaxed text-[var(--color-text-light)]">{DISCLAIMER}</p>
          <p className="mt-4 text-xs text-mid-gray">Last updated: July 2026</p>
        </div>
      </section>
    </>
  );
}
