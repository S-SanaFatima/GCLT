import { Metadata } from 'next';
import PageHero from '@/components/shared/PageHero';
import Link from 'next/link';
import { SITE } from '@/lib/utils';

export const metadata: Metadata = {
  title: 'Trainings & Workshops',
  description: 'Capacity building workshops, faculty development programmes, and custom institutional trainings at GCLT.',
};

const upcomingWorkshops = [
  { title: 'Islamic Banking in Contemporary Markets', date: 'September 2026', status: 'Upcoming' },
  { title: 'Research Methodology for Islamic Studies', date: 'November 2026', status: 'Upcoming' },
];

const categories = [
  {
    title: 'Capacity Building Workshops',
    description: 'Practical workshops for professionals, researchers, and students in Islamic law, finance, and policy.',
  },
  {
    title: 'Faculty Development Programs',
    description: 'Training for educators and academics to enhance teaching, research, and publication skills.',
  },
  {
    title: 'Custom Institutional Trainings',
    description: 'Tailored programmes for universities, organisations, and institutions upon request.',
  },
];

const pastTrainings = [
  { title: 'Legal Writing & Academic Publication', date: 'May 2025', location: 'Islamabad' },
  { title: 'Introduction to Islamic Finance', date: 'March 2025', location: 'Online' },
  { title: 'Research Ethics & Methodology', date: 'January 2025', location: 'Islamabad' },
];

export default function TrainingsWorkshopsPage() {
  return (
    <>
      <PageHero
        title="Trainings & Workshops"
        subtitle="Professional development for individuals and institutions."
        breadcrumbs={[
          { label: 'Home', href: '/' },
          { label: 'Academics', href: '/academics' },
          { label: 'Trainings & Workshops' },
        ]}
      />
      <section className="section-padding bg-white">
        <div className="container-gclt">
          <div className="mb-12 grid gap-6 md:grid-cols-3">
            {categories.map((cat) => (
              <div key={cat.title} className="card p-6">
                <h3 className="mb-2 text-primary">{cat.title}</h3>
                <p className="text-sm text-[var(--color-text-light)]">{cat.description}</p>
              </div>
            ))}
          </div>

          <h2 className="mb-6 text-primary">Upcoming Workshops</h2>
          <div className="mb-12 space-y-4">
            {upcomingWorkshops.map((w) => (
              <div key={w.title} className="card flex items-center justify-between p-6">
                <div>
                  <h3 className="font-semibold text-primary">{w.title}</h3>
                  <p className="text-sm text-[var(--color-text-light)]">{w.date}</p>
                </div>
                <span className="rounded-full bg-accent/20 px-3 py-1 text-xs font-medium text-accent-dark">
                  {w.status}
                </span>
              </div>
            ))}
          </div>

          <h2 className="mb-6 text-primary">Past Trainings Archive</h2>
          <div className="mb-8 space-y-3">
            {pastTrainings.map((t) => (
              <div key={t.title} className="flex items-center justify-between border-b border-border py-4">
                <div>
                  <p className="font-medium text-primary">{t.title}</p>
                  <p className="text-sm text-[var(--color-text-light)]">{t.location}</p>
                </div>
                <span className="text-sm text-mid-gray">{t.date}</span>
              </div>
            ))}
          </div>

          <p className="text-[var(--color-text-light)]">
            For workshop enquiries or custom training requests, contact{' '}
            <a href={`mailto:${SITE.emails.events}`} className="text-primary hover:underline">
              {SITE.emails.events}
            </a>
          </p>
          <Link href="/academics/admissions" className="btn-primary mt-6 inline-flex">
            Register Interest
          </Link>
        </div>
      </section>
    </>
  );
}
