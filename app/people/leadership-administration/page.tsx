import { Metadata } from 'next';
import PageHero from '@/components/shared/PageHero';
import FacultyCard from '@/components/shared/FacultyCard';
import { getFacultyByDirectory, type PeopleDirectory } from '@/lib/data/faculty';

export const metadata: Metadata = {
  title: 'Leadership & Administration',
  description:
    'GCLT leadership and administrative team providing institutional direction, programme management, research administration, and operational support.',
};

const sections: {
  id: PeopleDirectory;
  title: string;
  description: string;
}[] = [
  {
    id: 'executive-leadership',
    title: 'Executive Leadership',
    description: 'Institutional direction and executive oversight of research units.',
  },
  {
    id: 'academic-administration',
    title: 'Academic Administration',
    description:
      'Research administration, editorial leadership, RMC, admissions, and quality assurance.',
  },
  {
    id: 'professional-support',
    title: 'Professional & Support Services',
    description: 'Office, communications, finance, and IT/LMS support.',
  },
];

export default function LeadershipAdministrationPage() {
  return (
    <>
      <PageHero
        title="Leadership & Administration"
        subtitle="GCLT’s leadership and administrative team provides institutional direction, programme management, research administration, and operational support."
        breadcrumbs={[
          { label: 'Home', href: '/' },
          { label: 'People', href: '/people' },
          { label: 'Leadership & Administration' },
        ]}
      />
      <section className="section-padding bg-white">
        <div className="container-gclt max-w-5xl space-y-14">
          {sections.map((section) => {
            const members = getFacultyByDirectory(section.id);
            return (
              <div key={section.id} id={section.id}>
                <div className="flex flex-wrap items-end justify-between gap-3 border-b border-border/60 pb-4">
                  <div>
                    <h2 className="text-2xl font-bold text-primary">{section.title}</h2>
                    <p className="mt-1.5 max-w-2xl text-sm text-[var(--color-text-light)]">
                      {section.description}
                    </p>
                  </div>
                  <span className="text-xs font-semibold uppercase tracking-wider text-mid-gray">
                    {members.length} {members.length === 1 ? 'member' : 'members'}
                  </span>
                </div>
                <ul className="mt-6 grid list-none gap-3 sm:grid-cols-2 sm:gap-4">
                  {members.map((member) => (
                    <li key={member.slug}>
                      <FacultyCard member={member} context="leadership" />
                    </li>
                  ))}
                </ul>
              </div>
            );
          })}
        </div>
      </section>
    </>
  );
}
