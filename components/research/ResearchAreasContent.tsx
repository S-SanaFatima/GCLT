import Link from 'next/link';
import { ArrowRight, CheckCircle2 } from 'lucide-react';
import AnimatedSection from '@/components/shared/AnimatedSection';
import { researchAreas } from '@/lib/data/researchAreas';
import { objectives } from '@/lib/data/institution';

const accentStyles = {
  primary: {
    card: 'border-primary/15 hover:border-primary/35',
    icon: 'bg-gradient-to-br from-primary to-primary-dark text-white',
    orb: 'bg-primary/8 group-hover:bg-primary/12',
    num: 'text-primary/[0.07] group-hover:text-primary/10',
    tag: 'bg-primary/10 text-primary',
  },
  accent: {
    card: 'border-accent/20 hover:border-accent/45',
    icon: 'bg-gradient-to-br from-accent to-accent-dark text-white',
    orb: 'bg-accent/10 group-hover:bg-accent/15',
    num: 'text-accent/[0.12] group-hover:text-accent/18',
    tag: 'bg-accent/15 text-accent-dark',
  },
};

export default function ResearchAreasContent() {
  return (
    <>
      <section className="section-padding relative overflow-hidden bg-[#f4f7fc]">
        <div className="pattern-grid pointer-events-none absolute inset-0 opacity-40" />
        <div className="pointer-events-none absolute -right-24 top-0 h-80 w-80 rounded-full bg-primary/8 blur-3xl" />
        <div className="pointer-events-none absolute -left-20 bottom-0 h-72 w-72 rounded-full bg-accent/10 blur-3xl" />

        <div className="container-gclt relative">
          <AnimatedSection className="mx-auto max-w-3xl text-center">
            <span className="section-label mx-auto">Interdisciplinary Inquiry</span>
            <h2 className="mt-4 text-3xl font-bold text-primary md:text-4xl">
              Five interconnected focus areas
            </h2>
            <p className="mt-4 text-lg leading-relaxed text-[var(--color-text-light)]">
              GCLT research spans law, society, ethics, technology, and leadership — connecting
              traditional scholarship with contemporary global challenges.
            </p>
            <div className="mt-6 flex items-center justify-center gap-3">
              <div className="h-px w-12 bg-accent" />
              <div className="h-2 w-2 rotate-45 bg-accent" />
              <div className="h-px w-12 bg-accent" />
            </div>
          </AnimatedSection>

          <div className="mt-14 flex flex-wrap justify-center gap-6">
            {researchAreas.map((area, i) => {
              const Icon = area.icon;
              const styles = accentStyles[area.accent];
              const num = String(i + 1).padStart(2, '0');

              return (
                <AnimatedSection
                  key={area.slug}
                  delay={i * 0.08}
                  className="w-full md:w-[calc(50%-12px)] lg:w-[calc(33.333%-16px)] flex"
                >
                  <article
                    className={`group relative flex h-full flex-col overflow-hidden rounded-3xl border bg-white p-7 shadow-card transition-all duration-300 hover:-translate-y-1.5 hover:shadow-elevated sm:p-8 ${styles.card}`}
                  >
                    <span
                      className={`absolute right-5 top-4 font-heading text-6xl font-bold transition-colors duration-300 ${styles.num}`}
                    >
                      {num}
                    </span>
                    <div
                      className={`pointer-events-none absolute -right-10 -top-10 h-36 w-36 rounded-full transition-transform duration-500 group-hover:scale-110 ${styles.orb}`}
                    />

                    <div
                      className={`relative mb-5 flex h-14 w-14 items-center justify-center rounded-2xl shadow-soft transition-transform duration-300 group-hover:scale-105 ${styles.icon}`}
                    >
                      <Icon className="h-7 w-7" strokeWidth={1.75} />
                    </div>

                    <h3 className="relative pr-12 text-lg font-bold leading-snug text-primary transition-colors group-hover:text-accent sm:text-xl">
                      {area.title}
                    </h3>
                    <p className="relative mt-3 flex-1 text-sm leading-relaxed text-[var(--color-text-light)]">
                      {area.description}
                    </p>

                    <div className="relative mt-5 flex flex-wrap gap-2">
                      {area.topics.map((topic) => (
                        <span
                          key={topic}
                          className={`rounded-full px-3 py-1 text-[11px] font-semibold uppercase tracking-wide ${styles.tag}`}
                        >
                          {topic}
                        </span>
                      ))}
                    </div>
                  </article>
                </AnimatedSection>
              );
            })}
          </div>
        </div>
      </section>

      <section className="section-padding bg-white">
        <div className="container-gclt">
          <div className="grid gap-10 lg:grid-cols-2 lg:items-center">
            <AnimatedSection>
              <span className="section-label">Research Mission</span>
              <h2 className="mt-4 text-2xl font-bold text-primary md:text-3xl">
                Objectives driving our work
              </h2>
              <p className="mt-4 text-[var(--color-text-light)]">
                Across every focus area, GCLT is committed to rigorous inquiry, collaborative
                engagement, and outputs that serve scholars, institutions, and wider society.
              </p>
              <ul className="mt-8 space-y-4">
                {objectives.map((obj) => (
                  <li key={obj} className="flex gap-3">
                    <CheckCircle2 className="mt-0.5 h-5 w-5 shrink-0 text-accent" />
                    <p className="text-sm leading-relaxed text-[var(--color-text-light)]">{obj}</p>
                  </li>
                ))}
              </ul>
            </AnimatedSection>

            <AnimatedSection delay={0.1}>
              <div className="rounded-3xl border border-primary/10 bg-gradient-to-br from-primary to-primary-dark p-8 text-white shadow-elevated md:p-10">
                <p className="text-sm font-semibold uppercase tracking-[0.18em] text-accent">
                  Explore further
                </p>
                <h3 className="mt-3 text-2xl font-bold text-white">
                  Turn research into publication and dialogue
                </h3>
                <p className="mt-4 text-sm leading-relaxed text-gray-200">
                  Browse our journals, publications, and call for papers to engage with GCLT&apos;s
                  growing research community.
                </p>
                <div className="mt-8 flex flex-col gap-3 sm:flex-row">
                  <Link href="/research/journals" className="btn-accent">
                    View Journals
                  </Link>
                  <Link
                    href="/research/call-for-papers"
                    className="inline-flex items-center justify-center gap-2 rounded-xl border border-white/25 px-7 py-3.5 text-sm font-semibold text-white transition-all hover:bg-white/10"
                  >
                    Call for Papers
                    <ArrowRight className="h-4 w-4" />
                  </Link>
                </div>
              </div>
            </AnimatedSection>
          </div>
        </div>
      </section>
    </>
  );
}
