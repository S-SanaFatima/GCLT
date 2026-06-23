import { Metadata } from 'next';
import Link from 'next/link';
import PageHero from '@/components/shared/PageHero';
import AnimatedSection from '@/components/shared/AnimatedSection';
import {
  GraduationCap,
  BookOpen,
  Users,
  Briefcase,
  Globe,
  FileText,
  ArrowRight,
  LayoutGrid,
} from 'lucide-react';

export const metadata: Metadata = {
  title: 'Academics',
  description: 'Explore GCLT\'s diploma programmes, short courses, trainings, internships, and admissions information.',
};

const sections = [
  { icon: LayoutGrid, title: 'Programme Catalogue', href: '/academics/programme-catalogue', desc: '11 programmes across diplomas, certificates, traditional & bridge pathways.', tag: 'Catalogue' },
  { icon: GraduationCap, title: 'Diploma Programs', href: '/academics/diploma-programs', desc: 'Professional and executive diploma programmes.', tag: 'Diploma' },
  { icon: BookOpen, title: 'Short Courses', href: '/academics/short-courses', desc: 'Professional certificates including research & AI.', tag: 'Certificate' },
  { icon: Users, title: 'Trainings & Workshops', href: '/academics/trainings-workshops', desc: 'Hands-on workshops for professionals.', tag: 'Workshop' },
  { icon: Briefcase, title: 'Internships', href: '/academics/internships', desc: 'Research and editorial internship opportunities.', tag: 'Internship' },
  { icon: Globe, title: 'IERP', href: '/academics/ierp', desc: 'Islamic Education Revitalization Program — GCLT\'s crown research initiative.', tag: 'IERP' },
  { icon: FileText, title: 'Admissions', href: '/academics/admissions', desc: 'Apply now for GCLT programmes.', tag: 'Apply', highlight: true },
];

export default function AcademicsPage() {
  return (
    <>
      <PageHero
        title="Academics"
        subtitle="Transformative learning programmes bridging tradition, technology, and leadership."
        badge="Programmes"
        breadcrumbs={[{ label: 'Home', href: '/' }, { label: 'Academics' }]}
      />
      <section className="section-padding">
        <div className="container-gclt">
          <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
            {sections.map(({ icon: Icon, title, href, desc, tag, highlight }, i) => (
              <AnimatedSection key={href} delay={i * 0.07}>
                <Link
                  href={href}
                  className={`card-hover group relative block h-full overflow-hidden p-7 ${
                    highlight ? 'ring-2 ring-accent/30' : ''
                  }`}
                >
                  {highlight && (
                    <div className="absolute right-0 top-0 rounded-bl-xl bg-accent px-3 py-1 text-xs font-bold text-white">
                      Apply Now
                    </div>
                  )}
                  <span className="mb-4 inline-block rounded-full bg-primary/10 px-3 py-1 text-xs font-semibold text-primary">
                    {tag}
                  </span>
                  <div className="feature-icon mb-5">
                    <Icon className="h-6 w-6" />
                  </div>
                  <h3 className="mb-2 text-primary group-hover:text-accent">{title}</h3>
                  <p className="mb-4 text-sm text-[var(--color-text-light)]">{desc}</p>
                  <span className="btn-ghost">
                    Learn more <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
                  </span>
                </Link>
              </AnimatedSection>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
