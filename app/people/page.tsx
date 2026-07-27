import { Metadata } from 'next';
import Link from 'next/link';
import PageHero from '@/components/shared/PageHero';

export const metadata: Metadata = {
  title: 'People',
  description:
    'GCLT leadership, academic faculty, and international adjunct faculty — organised by role and responsibility.',
};

const links = [
  {
    href: '/people/leadership-administration',
    title: 'Leadership & Administration',
    desc: 'Executive leadership, academic administration, and professional support.',
  },
  {
    href: '/people/academic-faculty',
    title: 'Academic Faculty',
    desc: 'Teaching and research faculty, grouped by discipline cluster.',
  },
  {
    href: '/people/international-adjunct-faculty',
    title: 'International Adjunct Faculty',
    desc: 'Directory for confirmed international appointments (rolling publication).',
  },
];

export default function PeopleIndexPage() {
  return (
    <>
      <PageHero
        title="People"
        subtitle="Leadership, academic faculty, and international scholars — presented in clear, role-based directories."
        breadcrumbs={[{ label: 'Home', href: '/' }, { label: 'People' }]}
      />
      <section className="section-padding bg-white">
        <div className="container-gclt grid gap-6 md:grid-cols-3">
          {links.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              className="card group flex h-full flex-col p-7 transition-all hover:-translate-y-1 hover:shadow-elevated"
            >
              <h2 className="text-xl font-bold text-primary group-hover:text-accent">{item.title}</h2>
              <p className="mt-3 flex-1 text-sm leading-relaxed text-[var(--color-text-light)]">
                {item.desc}
              </p>
              <span className="mt-5 text-sm font-semibold text-accent">View →</span>
            </Link>
          ))}
        </div>
      </section>
    </>
  );
}
