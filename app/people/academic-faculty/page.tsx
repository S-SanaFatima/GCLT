import { Metadata } from 'next';
import PageHero from '@/components/shared/PageHero';
import FacultyCard from '@/components/shared/FacultyCard';
import { academicClusters, getFacultyByDirectory } from '@/lib/data/faculty';

export const metadata: Metadata = {
  title: 'Academic Faculty',
  description:
    'GCLT academic faculty across law, Sharīʿah, Islamic thought, and research methods — with external affiliations clearly labelled.',
};

const FACULTY_ORDER = [
  'dr-bilal-hussain',
  'dr-imtiaz-ahmed',
  'dr-falak-shair-faizi',
  'dr-muhammad-nadir',
];

export default function AcademicFacultyPage() {
  const members = getFacultyByDirectory('academic-faculty').sort(
    (a, b) => FACULTY_ORDER.indexOf(a.slug) - FACULTY_ORDER.indexOf(b.slug)
  );

  return (
    <>
      <PageHero
        title="Academic Faculty"
        subtitle="Teaching and research faculty at GCLT. Each card shows the GCLT role first; university posts are labelled as external affiliations."
        breadcrumbs={[
          { label: 'Home', href: '/' },
          { label: 'People', href: '/people' },
          { label: 'Academic Faculty' },
        ]}
      />
      <section className="section-padding bg-white">
        <div className="container-gclt max-w-5xl">
          <div className="space-y-12">
            {academicClusters.map((cluster) => {
              const clusterMembers = members.filter((m) => m.academicCluster === cluster);
              return (
                <div key={cluster} id={cluster.toLowerCase().replace(/[^a-z0-9]+/g, '-')}>
                  <div className="flex flex-wrap items-end justify-between gap-3 border-b border-border/60 pb-4">
                    <h2 className="text-xl font-bold text-primary">{cluster}</h2>
                    <span className="text-xs font-semibold uppercase tracking-wider text-mid-gray">
                      {clusterMembers.length > 0
                        ? `${clusterMembers.length} ${clusterMembers.length === 1 ? 'member' : 'members'}`
                        : 'Open'}
                    </span>
                  </div>

                  {clusterMembers.length > 0 && (
                    <ul className="mt-5 grid list-none gap-3 sm:grid-cols-2 sm:gap-4">
                      {clusterMembers.map((member) => (
                        <li key={member.slug}>
                          <FacultyCard member={member} context="academic" />
                        </li>
                      ))}
                    </ul>
                  )}
                </div>
              );
            })}
          </div>
        </div>
      </section>
    </>
  );
}
