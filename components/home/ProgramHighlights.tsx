import Link from 'next/link';
import { GraduationCap, BookOpen, Users, ArrowRight, Sparkles } from 'lucide-react';
import AnimatedSection from '@/components/shared/AnimatedSection';

const programs = [
  {
    num: '01',
    icon: GraduationCap,
    title: 'Diploma Programs',
    description:
      'Comprehensive diploma programmes in Islamic law, finance, and interdisciplinary studies.',
    href: '/academics/diploma-programs',
    accent: 'border-primary/20 hover:border-primary/40',
    iconBg: 'bg-primary text-white',
  },
  {
    num: '02',
    icon: BookOpen,
    title: 'Short Courses',
    description:
      'Focused short courses including TAR and specialised professional development modules.',
    href: '/academics/short-courses',
    accent: 'border-accent/25 hover:border-accent/50',
    iconBg: 'bg-accent text-white',
  },
  {
    num: '03',
    icon: Users,
    title: 'Trainings & Workshops',
    description:
      'Hands-on training workshops and seminars for professionals and researchers.',
    href: '/academics/trainings-workshops',
    accent: 'border-primary/15 hover:border-primary/35',
    iconBg: 'bg-gradient-to-br from-primary to-primary-dark text-white',
  },
];

export default function ProgramHighlights() {
  return (
    <section className="section-padding relative overflow-hidden bg-[#f4f7fc]">
      <div className="pattern-dots pointer-events-none absolute inset-0 opacity-40" />
      <div className="pointer-events-none absolute -right-20 top-0 h-80 w-80 rounded-full bg-primary/8 blur-3xl" />

      <div className="container-gclt relative">
        <AnimatedSection className="mx-auto max-w-3xl text-center">
          <span className="section-label mx-auto">Academics</span>
          <h2 className="mt-4 text-3xl font-bold text-primary md:text-4xl">
            Our Academic Offerings
          </h2>
          <p className="mt-4 text-lg leading-relaxed text-[var(--color-text-light)]">
            Explore programmes designed for scholars, professionals, and lifelong learners.
          </p>
          <div className="mt-6 flex items-center justify-center gap-3">
            <div className="h-px w-12 bg-accent" />
            <div className="h-2 w-2 rotate-45 bg-accent" />
            <div className="h-px w-12 bg-accent" />
          </div>
        </AnimatedSection>

        <div className="mt-14 grid gap-6 md:grid-cols-2 lg:grid-cols-3 lg:gap-8">
          {programs.map(({ num, icon: Icon, title, description, href, accent, iconBg }, i) => (
            <AnimatedSection key={title} delay={i * 0.08}>
              <Link
                href={href}
                className={`group relative flex h-full flex-col overflow-hidden rounded-3xl border bg-white p-8 shadow-card transition-all duration-300 hover:-translate-y-1 hover:shadow-elevated ${accent}`}
              >
                <span className="absolute right-6 top-6 font-heading text-5xl font-bold text-primary/[0.06] transition-colors group-hover:text-primary/10">
                  {num}
                </span>
                <div
                  className={`mb-6 flex h-14 w-14 items-center justify-center rounded-2xl shadow-soft transition-transform duration-300 group-hover:scale-105 ${iconBg}`}
                >
                  <Icon className="h-7 w-7" strokeWidth={1.75} />
                </div>
                <h3 className="mb-3 text-xl font-bold text-primary transition-colors group-hover:text-accent">
                  {title}
                </h3>
                <p className="mb-8 flex-1 text-sm leading-relaxed text-[var(--color-text-light)]">
                  {description}
                </p>
                <span className="inline-flex items-center gap-2 text-sm font-bold uppercase tracking-wider text-primary">
                  Explore
                  <span className="flex h-8 w-8 items-center justify-center rounded-full bg-primary/10 transition-all group-hover:bg-primary group-hover:text-white">
                    <ArrowRight className="h-4 w-4" />
                  </span>
                </span>
              </Link>
            </AnimatedSection>
          ))}
        </div>

        <AnimatedSection delay={0.25} className="mt-12">
          <div className="flex flex-col items-center justify-between gap-6 rounded-3xl border border-primary/10 bg-white px-8 py-8 shadow-card sm:flex-row sm:px-10">
            <div className="flex items-center gap-4 text-center sm:text-left">
              <div className="hidden h-12 w-12 shrink-0 items-center justify-center rounded-2xl bg-accent/15 text-accent sm:flex">
                <Sparkles className="h-6 w-6" />
              </div>
              <div>
                <p className="font-heading text-lg font-bold text-primary">Ready to begin?</p>
                <p className="text-sm text-[var(--color-text-light)]">
                  Browse all pathways, admissions criteria, and application steps.
                </p>
              </div>
            </div>
            <Link href="/academics" className="btn-primary shrink-0 group">
              View all programmes
              <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
            </Link>
          </div>
        </AnimatedSection>
      </div>
    </section>
  );
}
