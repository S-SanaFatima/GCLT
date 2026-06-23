import { Metadata } from 'next';
import Link from 'next/link';
import PageHero from '@/components/shared/PageHero';
import { BookOpen, FileText, Calendar, Mic } from 'lucide-react';
export const metadata: Metadata = {
  title: 'Research',
  description: 'GCLT research areas, publications, journals, conferences, and call for papers.',
};

const sections = [
  { icon: BookOpen, title: 'Research Areas', href: '/research/areas', desc: 'Our interdisciplinary research focus areas.' },
  { icon: FileText, title: 'Publications', href: '/research/publications', desc: 'Books, papers, and research outputs.' },
  { icon: BookOpen, title: 'Journals', href: '/research/journals', desc: 'Al-Kashaf, Al-Salihat, and Al-Haqeeqah.' },
  { icon: Calendar, title: 'Conferences & Summits', href: '/research/conferences', desc: 'International conferences and events.' },
  { icon: Mic, title: 'Call for Papers', href: '/research/call-for-papers', desc: 'Submit your research for publication.' },
];

export default function ResearchPage() {
  return (
    <>
      <PageHero
        title="Research"
        subtitle="Advancing rigorous, interdisciplinary scholarship at national and international levels."
        breadcrumbs={[{ label: 'Home', href: '/' }, { label: 'Research' }]}
      />
      <section className="section-padding bg-white">
        <div className="container-gclt">
          <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
            {sections.map(({ icon: Icon, title, href, desc }) => (
              <Link key={href} href={href} className="card group p-6 transition-shadow hover:shadow-lg">
                <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-card bg-primary/10">
                  <Icon className="h-6 w-6 text-primary" />
                </div>
                <h3 className="mb-2 text-primary">{title}</h3>
                <p className="text-sm text-[var(--color-text-light)]">{desc}</p>
              </Link>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
