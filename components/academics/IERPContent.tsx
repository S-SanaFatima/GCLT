import Link from 'next/link';
import { ArrowRight, Target, Eye } from 'lucide-react';
import AnimatedSection from '@/components/shared/AnimatedSection';
import { institutionIntro, institutionMotto } from '@/lib/data/institution';
import {
  ierpFocusAreas,
  ierpFullName,
  ierpIntro,
  ierpMission,
  ierpProgrammes,
  ierpVision,
} from '@/lib/data/ierp';
import { SITE } from '@/lib/utils';

const accentBar = {
  primary: 'bg-primary',
};

export default function IERPContent() {
  return (
    <>
      <section className="section-padding relative overflow-hidden bg-white">
        <div className="pointer-events-none absolute -right-24 top-0 h-80 w-80 rounded-full bg-primary/6 blur-3xl" />
        <div className="container-gclt relative">
          <div className="grid gap-12 lg:grid-cols-[1.15fr_0.85fr] lg:items-start">
            <AnimatedSection>
              <span className="section-label">Crown Research Initiative</span>
              <h2 className="mt-4 text-3xl font-bold text-primary md:text-4xl">
                {ierpFullName} (IERP)
              </h2>
              <p className="mt-5 text-lg leading-relaxed text-[var(--color-text-light)]">
                {ierpIntro}
              </p>

              <div className="mt-8 flex flex-wrap gap-2">
                {ierpFocusAreas.map((area) => (
                  <span
                    key={area}
                    className="rounded-full border border-primary/15 bg-primary/5 px-3 py-1.5 text-xs font-medium text-primary"
                  >
                    {area}
                  </span>
                ))}
              </div>
            </AnimatedSection>

            <AnimatedSection delay={0.1} className="space-y-4">
              <div className="rounded-2xl border border-primary/15 bg-gradient-to-br from-primary to-primary-dark p-6 text-white shadow-elevated">
                <div className="mb-3 flex h-10 w-10 items-center justify-center rounded-xl bg-white/15">
                  <Eye className="h-5 w-5" />
                </div>
                <h3 className="font-bold text-white">Vision</h3>
                <p className="mt-2 text-sm leading-relaxed text-gray-200">{ierpVision}</p>
              </div>
              <div className="rounded-2xl border border-accent/25 bg-white p-6 shadow-card">
                <div className="mb-3 flex h-10 w-10 items-center justify-center rounded-xl bg-accent/15 text-accent">
                  <Target className="h-5 w-5" />
                </div>
                <h3 className="font-bold text-primary">Mission</h3>
                <p className="mt-2 text-sm leading-relaxed text-[var(--color-text-light)] line-clamp-4">
                  {ierpMission}
                </p>
              </div>
            </AnimatedSection>
          </div>
        </div>
      </section>

      <section className="section-padding relative bg-[#f4f7fc]">
        <div className="pattern-grid pointer-events-none absolute inset-0 opacity-40" />
        <div className="container-gclt relative">
          <AnimatedSection className="mb-10 flex flex-wrap items-end justify-between gap-4">
            <div>
              <span className="section-label">IERP Programmes</span>
              <h2 className="mt-3 text-2xl font-bold text-primary md:text-3xl">
                Learning pathways
              </h2>
            </div>
            <p className="max-w-md text-sm text-[var(--color-text-light)]">
              Full programme details, eligibility, and enrolment on each page.
            </p>
          </AnimatedSection>

          <div className="grid gap-6 lg:grid-cols-2">
            {ierpProgrammes.map((programme, i) => {
              const accent = programme.accent;

              return (
                <AnimatedSection key={programme.slug} delay={i * 0.08}>
                  <article className="group flex h-full flex-col overflow-hidden rounded-2xl border border-border/70 bg-white shadow-card transition-all hover:-translate-y-1 hover:shadow-elevated">
                    <div className={`h-1 w-full ${accentBar[accent]}`} />

                    <div className="flex flex-1 flex-col p-6 sm:p-7">
                      <div>
                        <p className="text-[11px] font-semibold uppercase tracking-wide text-accent">
                          {programme.subtitle}
                        </p>
                        <h3 className="mt-1 text-lg font-bold leading-snug text-primary group-hover:text-accent">
                          {programme.title}
                        </h3>
                      </div>

                      <p className="mt-4 text-sm leading-relaxed text-[var(--color-text-light)]">
                        {programme.summary}
                      </p>

                      <div className="mt-4 flex flex-wrap gap-1.5">
                        {programme.highlights.map((tag) => (
                          <span
                            key={tag}
                            className="rounded-md bg-[#f4f7fc] px-2.5 py-1 text-[11px] font-medium text-primary"
                          >
                            {tag}
                          </span>
                        ))}
                      </div>

                      <div className="mt-5 flex flex-wrap gap-x-4 gap-y-1 border-t border-border/50 pt-4 text-xs text-[var(--color-text-light)]">
                        <span>{programme.duration}</span>
                        <span>{programme.format}</span>
                      </div>

                      <Link
                        href={programme.href}
                        className={`mt-5 inline-flex w-full items-center justify-center gap-2 rounded-xl py-3 text-sm font-semibold transition-all ${
                          programme.cta === 'Enroll Now'
                            ? 'bg-accent text-white hover:bg-accent-dark'
                            : 'border border-primary/20 bg-white text-primary hover:border-primary/40 hover:bg-primary/[0.03]'
                        }`}
                      >
                        {programme.cta}
                        <ArrowRight className="h-4 w-4" />
                      </Link>
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
              <span className="section-label">About GCLT</span>
              <h2 className="mt-4 text-2xl font-bold text-primary md:text-3xl">
                Global Centre for Learning &amp; Training
              </h2>
              <p className="mt-4 text-sm leading-relaxed text-[var(--color-text-light)] line-clamp-5">
                {institutionIntro}
              </p>
              <p className="mt-4 font-heading text-sm font-semibold italic text-accent">
                ({institutionMotto})
              </p>
            </AnimatedSection>

            <AnimatedSection delay={0.1}>
              <div className="rounded-2xl border border-primary/10 bg-[#f8fafc] p-7">
                <h3 className="text-lg font-bold text-primary">IERP enquiries</h3>
                <p className="mt-2 text-sm text-[var(--color-text-light)]">
                  Research collaboration, programme information, or policy dialogue.
                </p>
                <div className="mt-5 flex flex-col gap-3 sm:flex-row">
                  <a href={`mailto:${SITE.emails.research}`} className="btn-primary">
                    Email us
                  </a>
                  <Link href="/academics/admissions" className="btn-outline">
                    Apply Now
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
