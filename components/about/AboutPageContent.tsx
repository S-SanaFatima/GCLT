import Link from 'next/link';
import {
  ArrowRight,
  Users,
  Heart,
  Handshake,
  Target,
  Eye,
  CheckCircle2,
  BookOpen,
  Globe2,
  GraduationCap,
  Microscope,
} from 'lucide-react';
import PageHero from '@/components/shared/PageHero';
import AnimatedSection from '@/components/shared/AnimatedSection';
import AboutIntroAnimated from '@/components/about/AboutIntroAnimated';
import {
  institutionFramework,
  institutionHeroSubtitle,
  visionStatement,
  missionStatement,
  focusAreas,
  objectives,
  institutionalPillars,
} from '@/lib/data/institution';
import { gcltJournals } from '@/lib/data/journals';

const stats = [
  { value: '3', label: 'HEC-approved research journals' },
  { value: '5+', label: 'Interdisciplinary focus areas' },
  { value: '6+', label: 'Global academic partners' },
  { value: '∞', label: 'Commitment to lifelong learning' },
];

const pillarIcons = [GraduationCap, Users, BookOpen, Globe2];
const pillars = institutionalPillars.map((p, i) => ({
  icon: pillarIcons[i] ?? BookOpen,
  title: p.title,
  desc: p.desc,
}));

const exploreLinks = [
  {
    num: '01',
    icon: Users,
    title: 'Our Team & Faculty',
    desc: 'Explore profiles of scholars, researchers, and professionals at GCLT.',
    href: '/about/team',
    iconBg: 'bg-gradient-to-br from-primary to-primary-dark text-white',
    accent: 'border-primary/20 hover:border-primary/40',
  },
  {
    num: '02',
    icon: Heart,
    title: 'Core Values',
    desc: 'The principles of excellence, integrity, and global engagement that define us.',
    href: '/about/core-values',
    iconBg: 'bg-accent text-white',
    accent: 'border-accent/25 hover:border-accent/50',
  },
  {
    num: '03',
    icon: Handshake,
    title: 'Affiliations & Partnerships',
    desc: 'Our network of universities and research institutions worldwide.',
    href: '/about/affiliations',
    iconBg: 'bg-gradient-to-br from-accent to-accent-dark text-white',
    accent: 'border-accent/20 hover:border-accent/45',
  },
];

export default function AboutPageContent() {
  return (
    <>
      <PageHero
        title="About GCLT"
        subtitle={institutionHeroSubtitle}
        badge="About Us"
        variant="about"
        breadcrumbs={[{ label: 'Home', href: '/' }, { label: 'About' }]}
      />

      <div className="relative overflow-hidden">
        <div className="pointer-events-none absolute inset-0 bg-gradient-to-b from-primary/[0.04] via-white to-off-white" />
        <div className="pattern-dots pointer-events-none absolute inset-0 opacity-[0.3]" />
        <div className="pointer-events-none absolute -right-32 top-32 h-96 w-96 rounded-full bg-accent/10 blur-3xl" />
        <div className="pointer-events-none absolute -left-24 bottom-1/3 h-80 w-80 rounded-full bg-primary/8 blur-3xl" />

        <AboutIntroAnimated />

        {/* Stats */}
        <section className="relative border-y border-primary/10 bg-primary py-14 lg:py-16">
          <div className="pattern-dots pointer-events-none absolute inset-0 opacity-10" />
          <div className="container-gclt relative">
            <div className="grid gap-10 sm:grid-cols-2 lg:grid-cols-4 lg:gap-8">
              {stats.map(({ value, label }, i) => (
                <AnimatedSection key={label} delay={i * 0.06} className="text-center">
                  <p className="font-heading text-4xl font-bold text-white md:text-5xl">{value}</p>
                  <p className="mx-auto mt-2 max-w-[12rem] text-sm leading-relaxed text-white/75">
                    {label}
                  </p>
                </AnimatedSection>
              ))}
            </div>
          </div>
        </section>

        {/* Mission & Vision */}
        <section className="section-padding relative">
          <div className="container-gclt">
            <AnimatedSection className="mx-auto max-w-3xl text-center">
              <span className="section-label mx-auto">Purpose</span>
              <h2 className="mt-4 text-3xl font-bold text-primary md:text-4xl">Mission & Vision</h2>
              <p className="mt-4 text-lg text-[var(--color-text-light)]">
                Clear direction for every programme, partnership, and publication we pursue.
              </p>
              <div className="mt-6 flex items-center justify-center gap-3">
                <div className="h-px w-12 bg-accent" />
                <div className="h-2 w-2 rotate-45 bg-accent" />
                <div className="h-px w-12 bg-accent" />
              </div>
            </AnimatedSection>

            <div className="mt-14 grid gap-8 lg:grid-cols-2">
              <AnimatedSection delay={0.08}>
                <div className="group relative h-full overflow-hidden rounded-3xl border border-primary/15 bg-white p-8 shadow-card transition-all duration-300 hover:-translate-y-1 hover:shadow-elevated md:p-10">
                  <div className="absolute -right-8 -top-8 h-32 w-32 rounded-full bg-primary/5 transition-transform duration-500 group-hover:scale-110" />
                  <div className="relative mb-6 flex h-14 w-14 items-center justify-center rounded-2xl bg-gradient-to-br from-primary to-primary-dark text-white shadow-soft">
                    <Target className="h-7 w-7" strokeWidth={1.75} />
                  </div>
                  <h3 className="relative text-2xl font-bold text-primary">Our Mission</h3>
                  <p className="relative mt-4 leading-relaxed text-[var(--color-text-light)]">
                    {missionStatement}
                  </p>
                </div>
              </AnimatedSection>

              <AnimatedSection delay={0.14}>
                <div className="group relative h-full overflow-hidden rounded-3xl border border-accent/25 bg-gradient-to-br from-white to-accent/[0.06] p-8 shadow-card transition-all duration-300 hover:-translate-y-1 hover:shadow-elevated md:p-10">
                  <div className="absolute -right-8 -top-8 h-32 w-32 rounded-full bg-accent/10 transition-transform duration-500 group-hover:scale-110" />
                  <div className="relative mb-6 flex h-14 w-14 items-center justify-center rounded-2xl bg-gradient-to-br from-accent to-accent-dark text-white shadow-soft">
                    <Eye className="h-7 w-7" strokeWidth={1.75} />
                  </div>
                  <h3 className="relative text-2xl font-bold text-primary">Our Vision</h3>
                  <p className="relative mt-4 leading-relaxed text-[var(--color-text-light)]">
                    {visionStatement}
                  </p>
                </div>
              </AnimatedSection>
            </div>

            <AnimatedSection delay={0.2} className="mx-auto mt-12 max-w-4xl">
              <p className="text-center text-sm leading-relaxed text-[var(--color-text-light)]">
                {institutionFramework}
              </p>
            </AnimatedSection>
          </div>
        </section>

        {/* Areas of focus & objectives */}
        <section className="section-padding relative bg-[#f4f7fc]">
          <div className="pattern-grid pointer-events-none absolute inset-0 opacity-40" />
          <div className="container-gclt relative">
            <div className="grid gap-12 lg:grid-cols-2">
              <AnimatedSection>
                <span className="section-label">Areas of Focus</span>
                <h2 className="mt-4 text-2xl font-bold text-primary md:text-3xl">
                  Interconnected disciplines
                </h2>
                <p className="mt-4 text-[var(--color-text-light)]">
                  GCLT pursues its objectives across a broad, interconnected set of disciplines:
                </p>
                <ul className="mt-6 space-y-3">
                  {focusAreas.map((area) => (
                    <li
                      key={area}
                      className="flex gap-3 rounded-xl border border-white/80 bg-white px-4 py-3.5 text-sm shadow-card"
                    >
                      <CheckCircle2 className="mt-0.5 h-5 w-5 shrink-0 text-accent" />
                      <span className="font-medium text-primary">{area}</span>
                    </li>
                  ))}
                </ul>
              </AnimatedSection>

              <AnimatedSection delay={0.1}>
                <span className="section-label">Our Objectives</span>
                <h2 className="mt-4 text-2xl font-bold text-primary md:text-3xl">
                  In line with our vision & mission
                </h2>
                <p className="mt-4 text-[var(--color-text-light)]">
                  The Centre is committed to the following institutional objectives:
                </p>
                <ul className="mt-6 space-y-4">
                  {objectives.map((obj, i) => (
                    <li key={obj} className="flex gap-4">
                      <span className="flex h-8 w-8 shrink-0 items-center justify-center rounded-lg bg-primary/10 text-xs font-bold text-primary">
                        {i + 1}
                      </span>
                      <p className="text-sm leading-relaxed text-[var(--color-text-light)]">{obj}</p>
                    </li>
                  ))}
                </ul>
              </AnimatedSection>
            </div>
          </div>
        </section>

        {/* Publications */}
        <section className="section-padding relative bg-white">
          <div className="container-gclt">
            <AnimatedSection className="mx-auto max-w-3xl text-center">
              <span className="section-label mx-auto">Publications</span>
              <h2 className="mt-4 text-3xl font-bold text-primary md:text-4xl">GCLT Research Journals</h2>
              <p className="mt-4 text-lg text-[var(--color-text-light)]">
                Peer-reviewed, open-access journals promoting scholarship across the social sciences
                and interlinked disciplines.
              </p>
            </AnimatedSection>

            <div className="mt-14 grid gap-6 lg:grid-cols-3">
              {gcltJournals.map((journal, i) => (
                <AnimatedSection key={journal.slug} delay={i * 0.08}>
                  <Link
                    href={journal.href}
                    className="group flex h-full flex-col rounded-2xl border border-border/60 bg-white p-6 shadow-card transition-all hover:-translate-y-1 hover:border-primary/20 hover:shadow-elevated"
                  >
                    <h3 className="text-xl font-bold text-primary group-hover:text-accent">
                      {journal.name}
                    </h3>
                    <p className="mt-1 text-sm font-medium text-accent">{journal.subtitle}</p>
                    <p className="mt-4 flex-1 text-sm leading-relaxed text-[var(--color-text-light)] line-clamp-4">
                      {journal.description}
                    </p>
                    <span className="mt-5 inline-flex items-center gap-2 text-sm font-semibold text-primary">
                      View journal
                      <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
                    </span>
                  </Link>
                </AnimatedSection>
              ))}
            </div>
          </div>
        </section>

        {/* What we do */}
        <section className="section-padding relative bg-[#f4f7fc]">
          <div className="pattern-grid pointer-events-none absolute inset-0 opacity-50" />
          <div className="container-gclt relative">
            <AnimatedSection className="mx-auto max-w-3xl text-center">
              <span className="section-label mx-auto">What We Do</span>
              <h2 className="mt-4 text-3xl font-bold text-primary md:text-4xl">
                Four Pillars of Institutional Work
              </h2>
              <p className="mt-4 text-lg text-[var(--color-text-light)]">
                From diploma programmes to international summits — integrated pathways for scholars
                and professionals.
              </p>
            </AnimatedSection>

            <div className="mt-14 grid gap-6 sm:grid-cols-2">
              {pillars.map(({ icon: Icon, title, desc }, i) => (
                <AnimatedSection key={title} delay={i * 0.07}>
                  <div className="flex h-full gap-5 rounded-2xl border border-white/80 bg-white p-6 shadow-card transition-all duration-300 hover:border-primary/20 hover:shadow-elevated md:p-7">
                    <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-xl bg-primary/10 text-primary">
                      <Icon className="h-6 w-6" strokeWidth={1.75} />
                    </div>
                    <div>
                      <h3 className="font-bold text-primary">{title}</h3>
                      <p className="mt-2 text-sm leading-relaxed text-[var(--color-text-light)]">
                        {desc}
                      </p>
                    </div>
                  </div>
                </AnimatedSection>
              ))}
            </div>

            <AnimatedSection delay={0.2} className="mt-12">
              <div className="flex flex-col items-center justify-between gap-6 rounded-2xl border border-primary/10 bg-white px-8 py-8 shadow-card sm:flex-row">
                <div className="flex items-center gap-4 text-center sm:text-left">
                  <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-xl bg-primary/10">
                    <Microscope className="h-6 w-6 text-primary" />
                  </div>
                  <p className="text-[var(--color-text-light)]">
                    <span className="font-semibold text-primary">Research-led teaching</span> — our
                    journals, conferences, and training programmes reinforce one another.
                  </p>
                </div>
                <Link href="/research" className="btn-outline shrink-0 group">
                  Explore Research
                  <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
                </Link>
              </div>
            </AnimatedSection>
          </div>
        </section>

        {/* Explore links */}
        <section className="section-padding relative bg-white">
          <div className="container-gclt">
            <AnimatedSection className="mx-auto max-w-3xl text-center">
              <span className="section-label mx-auto">Discover More</span>
              <h2 className="mt-4 text-3xl font-bold text-primary md:text-4xl">Explore GCLT</h2>
              <p className="mt-4 text-lg text-[var(--color-text-light)]">
                Faculty, values, and global partnerships — learn more about our people and
                principles.
              </p>
            </AnimatedSection>

            <div className="mt-14 grid gap-6 md:grid-cols-2 lg:grid-cols-3">
              {exploreLinks.map(
                ({ num, icon: Icon, title, desc, href, iconBg, accent }, i) => (
                  <AnimatedSection key={href} delay={i * 0.08}>
                    <Link
                      href={href}
                      className={`group relative flex h-full gap-6 overflow-hidden rounded-3xl border bg-white p-8 shadow-card transition-all duration-300 hover:-translate-y-1 hover:shadow-elevated ${accent}`}
                    >
                      <span className="absolute right-6 top-5 font-heading text-5xl font-bold text-primary/[0.06] transition-colors group-hover:text-primary/10">
                        {num}
                      </span>
                      <div
                        className={`relative flex h-14 w-14 shrink-0 items-center justify-center rounded-2xl shadow-soft transition-transform duration-300 group-hover:scale-105 ${iconBg}`}
                      >
                        <Icon className="h-7 w-7" strokeWidth={1.75} />
                      </div>
                      <div className="relative flex flex-1 flex-col">
                        <h3 className="text-xl font-bold text-primary transition-colors group-hover:text-accent">
                          {title}
                        </h3>
                        <p className="mt-3 flex-1 text-sm leading-relaxed text-[var(--color-text-light)]">
                          {desc}
                        </p>
                        <span className="mt-6 inline-flex items-center gap-2 text-sm font-semibold text-primary transition-colors group-hover:text-accent">
                          Learn more
                          <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
                        </span>
                      </div>
                    </Link>
                  </AnimatedSection>
                )
              )}
            </div>
          </div>
        </section>

        {/* CTA */}
        <section className="section-padding relative border-t border-border/50 bg-gradient-to-br from-primary via-primary to-primary-dark pb-24 pt-20 lg:pb-28">
          <div className="pattern-dots pointer-events-none absolute inset-0 opacity-15" />
          <div className="container-gclt relative text-center">
            <AnimatedSection>
              <span className="section-label section-label-light mx-auto">Join Us</span>
              <h2 className="mx-auto mt-4 max-w-2xl text-3xl font-bold text-white md:text-4xl">
                Ready to learn, collaborate, or partner with GCLT?
              </h2>
              <p className="mx-auto mt-5 max-w-xl text-lg text-white/80">
                Whether you are a student, researcher, or institution — we welcome your inquiry.
              </p>
              <div className="mt-10 flex flex-col items-center justify-center gap-4 sm:flex-row">
                <Link href="/contact" className="btn-accent group">
                  Get in Touch
                  <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
                </Link>
                <Link href="/academics/admissions" className="btn-outline-white">
                  View Admissions
                </Link>
              </div>
              <ul className="mx-auto mt-10 flex max-w-lg flex-wrap items-center justify-center gap-x-8 gap-y-3 text-sm text-white/70">
                {[
                  'Academic integrity',
                  'Global partnerships',
                  'Interdisciplinary research',
                ].map((item) => (
                  <li key={item} className="flex items-center gap-2">
                    <CheckCircle2 className="h-4 w-4 shrink-0 text-accent" />
                    {item}
                  </li>
                ))}
              </ul>
            </AnimatedSection>
          </div>
        </section>
      </div>
    </>
  );
}
