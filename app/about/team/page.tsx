import { Metadata } from 'next';
import PageHero from '@/components/shared/PageHero';
import FacultyCard from '@/components/shared/FacultyCard';
import { facultyMembers } from '@/lib/data/faculty';

export const metadata: Metadata = {
  title: 'Our Team & Faculty',
  description:
    'Meet the distinguished scholars, research unit heads, and team members of the Global Centre for Learning & Training.',
};

export default function TeamPage() {
  return (
    <>
      <PageHero
        title="Our Team & Faculty"
        subtitle="Distinguished scholars and researchers across GCLT research units and management."
        breadcrumbs={[
          { label: 'Home', href: '/' },
          { label: 'About', href: '/about' },
          { label: 'Team & Faculty' },
        ]}
      />
      <section className="section-padding bg-white">
        <div className="container-gclt max-w-5xl">
          <div className="mb-8 flex items-center justify-between gap-4 border-b border-border/60 pb-6">
            <p className="text-sm text-[var(--color-text-light)]">
              {facultyMembers.length} team members
            </p>
            <span className="section-label !mb-0">Faculty Directory</span>
          </div>

          <ul className="grid list-none gap-3 sm:grid-cols-2 sm:gap-4">
            {facultyMembers.map((member) => (
              <li key={member.slug}>
                <FacultyCard member={member} />
              </li>
            ))}
          </ul>
        </div>
      </section>
    </>
  );
}
