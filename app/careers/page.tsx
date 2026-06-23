import { Metadata } from 'next';
import Link from 'next/link';
import PageHero from '@/components/shared/PageHero';
import CVForm from '@/components/shared/CVForm';
import { Briefcase, GraduationCap, Users, Award } from 'lucide-react';

export const metadata: Metadata = {
  title: 'Careers',
  description: 'Explore career opportunities, internships, visiting scholar programmes, and fellowships at GCLT.',
};

const sections = [
  { icon: Briefcase, title: 'Job Openings', href: '/careers/job-openings', desc: 'Current employment opportunities at GCLT.' },
  { icon: GraduationCap, title: 'Internship Opportunities', href: '/careers/internship-opportunities', desc: 'Research and professional internships.' },
  { icon: Users, title: 'Visiting Scholars', href: '/careers/visiting-scholars', desc: 'Short-term academic visits and collaboration.' },
  { icon: Award, title: 'Fellowships', href: '/careers/fellowships', desc: 'Postdoctoral and research fellowships.' },
];

export default function CareersPage() {
  return (
    <>
      <PageHero
        title="Careers"
        subtitle="Join our community of scholars, researchers, and professionals."
        breadcrumbs={[{ label: 'Home', href: '/' }, { label: 'Careers' }]}
      />
      <section className="section-padding bg-white">
        <div className="container-gclt">
          <div className="mb-12 grid gap-6 md:grid-cols-2">
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

          <CVForm description="Don't see a role that fits? Submit your CV and we will keep you in mind for future opportunities." />
        </div>
      </section>
    </>
  );
}
