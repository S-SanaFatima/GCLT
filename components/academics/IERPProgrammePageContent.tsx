'use client';

import Link from 'next/link';
import PageHero from '@/components/shared/PageHero';
import AnimatedSection from '@/components/shared/AnimatedSection';
import AccordionItem from '@/components/shared/AccordionItem';
import { institutionMotto } from '@/lib/data/institution';
import type { IERPProgrammePage, IERPProgrammeSection } from '@/lib/data/ierpProgrammes';
import { SITE } from '@/lib/utils';

interface IERPProgrammePageContentProps {
  programme: IERPProgrammePage;
  breadcrumbs: { label: string; href?: string }[];
  catalogHref?: string;
}

const theme = {
  arabic: 'border-primary/15 bg-primary/[0.04]',
  feature: 'border-primary/15 hover:border-primary/30',
  featureNum: 'text-primary/10 group-hover:text-primary/15',
  accent: 'text-primary',
  cta: 'bg-gradient-to-br from-primary to-primary-dark',
};

function SectionAccordion({
  section,
  accentClass = 'text-primary',
}: {
  section: IERPProgrammeSection;
  accentClass?: string;
}) {
  return (
    <AccordionItem title={section.title}>
      {section.content && (
        <p className="mb-4 leading-relaxed">{section.content}</p>
      )}
      {section.bullets && (
        <ul className="space-y-4">
          {section.bullets.map((item) => (
            <li key={item.title}>
              <p className={`font-semibold ${accentClass}`}>{item.title}</p>
              <p className="mt-1 text-sm leading-relaxed">{item.body}</p>
            </li>
          ))}
        </ul>
      )}
      {section.items && (
        <ul className="list-disc space-y-2 pl-5">
          {section.items.map((item) => (
            <li key={item}>{item}</li>
          ))}
        </ul>
      )}
    </AccordionItem>
  );
}

export default function IERPProgrammePageContent({
  programme,
  breadcrumbs,
  catalogHref,
}: IERPProgrammePageContentProps) {
  const ctaLabel = programme.primaryCta ?? 'Enroll Now';
  const mailto = `mailto:${SITE.emails.admissions}?subject=${encodeURIComponent(programme.enrollSubject)}`;

  return (
    <>
      <div className="relative">
        <PageHero
          title={programme.title}
          subtitle={programme.subtitle}
          breadcrumbs={breadcrumbs}
          badge="IERP"
        />
        <div className="pointer-events-none absolute bottom-14 left-0 right-0 z-20 lg:bottom-16">
          <div className="container-gclt">
            <div className="flex flex-wrap gap-2">
              {programme.highlights.map((tag) => (
                <span
                  key={tag}
                  className="rounded-full border border-white/25 bg-white/10 px-3.5 py-1.5 text-xs font-semibold text-white backdrop-blur-sm"
                >
                  {tag}
                </span>
              ))}
            </div>
          </div>
        </div>
      </div>

      {programme.arabicTitle && (
        <div className={`border-b py-5 text-center ${theme.arabic}`}>
          <p className="font-heading text-xl text-primary md:text-2xl" dir="rtl" lang="ar">
            {programme.arabicTitle}
          </p>
        </div>
      )}

      <div className="relative z-20 -mt-2 pb-8 lg:-mt-4 lg:pb-10">
        <div className="container-gclt">
          <div className="grid grid-cols-2 gap-3 sm:grid-cols-4 lg:gap-4">
            {programme.facts.map(({ label, value }) => (
              <div
                key={label}
                className="rounded-2xl border border-border/60 bg-white p-4 text-center shadow-card transition-shadow hover:shadow-elevated sm:p-5"
              >
                <p className={`text-xs font-semibold uppercase tracking-wide ${theme.accent}`}>
                  {label}
                </p>
                <p className="mt-1.5 text-sm font-bold text-primary sm:text-base">{value}</p>
              </div>
            ))}
          </div>
        </div>
      </div>

      <section className="section-padding bg-white pb-24 lg:pb-28">
        <div className="container-gclt">
          <div className="grid gap-10 lg:grid-cols-3 lg:gap-12">
            <div className="lg:col-span-2">
              <AnimatedSection>
                <span className="section-label">Overview</span>
                <div className="mt-4 space-y-4">
                  {programme.intro.map((paragraph) => (
                    <p
                      key={paragraph.slice(0, 48)}
                      className="text-base leading-relaxed text-[var(--color-text-light)]"
                    >
                      {paragraph}
                    </p>
                  ))}
                </div>
                <div className="mt-5 hidden flex-wrap gap-2 sm:flex">
                  {programme.highlights.map((tag) => (
                    <span
                      key={tag}
                      className="rounded-full border border-primary/20 bg-primary/[0.04] px-3 py-1 text-xs font-medium text-primary"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              </AnimatedSection>

              {programme.whyChoose && (
                <AnimatedSection delay={0.05} className="mt-12">
                  <h2 className="text-2xl font-bold text-primary">{programme.whyChoose.title}</h2>
                  {programme.whyChoose.content && (
                    <p className="mt-4 leading-relaxed text-[var(--color-text-light)]">
                      {programme.whyChoose.content}
                    </p>
                  )}
                  {programme.whyChoose.bullets && (
                    <div className="mt-6 grid gap-4 sm:grid-cols-2">
                      {programme.whyChoose.bullets.map((item, i) => (
                        <div
                          key={item.title}
                          className={`group relative overflow-hidden rounded-2xl border bg-white p-5 shadow-card transition-all hover:-translate-y-0.5 hover:shadow-elevated ${theme.feature}`}
                        >
                          <span
                            className={`absolute right-3 top-2 font-heading text-4xl font-bold ${theme.featureNum}`}
                          >
                            {String(i + 1).padStart(2, '0')}
                          </span>
                          <h3 className="relative pr-10 text-base font-bold text-primary">
                            {item.title}
                          </h3>
                          <p className="relative mt-2 text-sm leading-relaxed text-[var(--color-text-light)]">
                            {item.body}
                          </p>
                        </div>
                      ))}
                    </div>
                  )}
                </AnimatedSection>
              )}

              <AnimatedSection delay={0.08} className="mt-12">
                <h2 className="mb-2 text-2xl font-bold text-primary">Programme Details</h2>
                <p className="mb-4 text-sm text-[var(--color-text-light)]">
                  Expand each section for full information.
                </p>
                <div className="rounded-2xl border border-border/70 bg-[#fafbfc] px-5 sm:px-6">
                  {programme.eligibility && <SectionAccordion section={programme.eligibility} />}
                  {programme.teachingFormat && (
                    <SectionAccordion section={programme.teachingFormat} />
                  )}
                  {programme.extraSections?.map((section) => (
                    <SectionAccordion key={section.title} section={section} />
                  ))}
                </div>
              </AnimatedSection>

              {programme.assessment && (
                <AnimatedSection delay={0.1} className="mt-12">
                  <div className="rounded-2xl border border-border/70 border-l-4 border-l-primary bg-[#f8fafc] p-6 sm:p-7">
                    <h2 className="text-xl font-bold text-primary">{programme.assessment.title}</h2>
                    <p className="mt-3 text-sm leading-relaxed text-[var(--color-text-light)]">
                      {programme.assessment.content}
                    </p>
                  </div>
                </AnimatedSection>
              )}
            </div>

            <aside className="lg:sticky lg:top-28 lg:self-start">
              <AnimatedSection delay={0.06}>
                <div className={`overflow-hidden rounded-2xl text-white shadow-elevated ${theme.cta}`}>
                  <div className="p-6">
                    <p className="text-xs font-semibold uppercase tracking-wider text-white/70">
                      IERP Programme
                    </p>
                    <h3 className="mt-2 text-lg font-bold leading-snug">{programme.title}</h3>
                    <dl className="mt-5 space-y-3 border-t border-white/15 pt-5">
                      {programme.facts.map(({ label, value }) => (
                        <div key={label}>
                          <dt className="text-xs text-white/60">{label}</dt>
                          <dd className="text-sm font-medium">{value}</dd>
                        </div>
                      ))}
                    </dl>
                    <a href={mailto} className="btn-accent mt-6 w-full">
                      {ctaLabel}
                    </a>
                    <Link
                      href="/academics/admissions"
                      className="mt-3 block text-center text-xs text-white/80 hover:text-white"
                    >
                      Admissions information →
                    </Link>
                  </div>
                </div>

                <div className="mt-4 space-y-2 rounded-2xl border border-border/70 bg-white p-5 text-sm shadow-card">
                  <Link
                    href="/academics/ierp"
                    className="block font-medium text-primary hover:text-accent"
                  >
                    ← Back to IERP
                  </Link>
                  {catalogHref && (
                    <Link
                      href={catalogHref}
                      className="block font-medium text-primary hover:text-accent"
                    >
                      View related catalogue programme →
                    </Link>
                  )}
                </div>

                <p className="mt-4 text-center text-xs italic text-accent">{institutionMotto}</p>
              </AnimatedSection>
            </aside>
          </div>
        </div>
      </section>

      {programme.closing && (
        <section className="border-t border-border bg-[#f4f7fc] py-14">
          <div className="container-gclt max-w-3xl text-center">
            <AnimatedSection>
              <p className="text-lg leading-relaxed text-[var(--color-text-light)]">
                {programme.closing}
              </p>
              <a href={mailto} className="btn-primary mt-8 inline-flex">
                {ctaLabel}
              </a>
            </AnimatedSection>
          </div>
        </section>
      )}

      <div className="fixed bottom-0 left-0 right-0 z-40 border-t border-border bg-white p-4 shadow-lg lg:hidden">
        <a href={mailto} className="btn-accent w-full">
          {ctaLabel}
        </a>
      </div>
    </>
  );
}
