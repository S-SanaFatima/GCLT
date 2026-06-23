import Link from 'next/link';
import {
  ArrowRight,
  BookOpen,
  CheckCircle2,
  ExternalLink,
  FileText,
  Microscope,
  Search,
  PenLine,
  ShieldCheck,
} from 'lucide-react';
import AnimatedSection from '@/components/shared/AnimatedSection';
import { institutionIntro, institutionMotto } from '@/lib/data/institution';
import { gcltJournals } from '@/lib/data/journals';
import {
  publicationProcessSteps,
  publicationTopics,
  publicationsClosing,
  publicationsCommitment,
  publicationsIntro,
} from '@/lib/data/publications';
import { SITE } from '@/lib/utils';

const processIcons = [Search, Microscope, PenLine, ShieldCheck];

export default function PublicationsContent() {
  return (
    <>
      <section className="section-padding relative overflow-hidden bg-white">
        <div className="pointer-events-none absolute -right-24 top-0 h-80 w-80 rounded-full bg-primary/6 blur-3xl" />
        <div className="container-gclt relative">
          <div className="grid gap-12 lg:grid-cols-[1.1fr_0.9fr] lg:items-start">
            <AnimatedSection>
              <span className="section-label">Research & Publications</span>
              <h2 className="mt-4 text-3xl font-bold text-primary md:text-4xl">
                Advancing scholarship through published research
              </h2>
              <p className="mt-5 text-lg leading-relaxed text-[var(--color-text-light)]">
                {publicationsIntro}
              </p>
              <p className="mt-4 leading-relaxed text-[var(--color-text-light)]">
                {publicationsCommitment}
              </p>
              <p className="mt-4 leading-relaxed text-[var(--color-text-light)]">
                {publicationsClosing}
              </p>
            </AnimatedSection>

            <AnimatedSection delay={0.1}>
              <div className="rounded-3xl border border-primary/10 bg-gradient-to-br from-primary to-primary-dark p-8 text-white shadow-elevated">
                <p className="text-sm font-semibold uppercase tracking-[0.18em] text-accent">
                  About GCLT
                </p>
                <p className="mt-4 text-sm leading-relaxed text-gray-200">{institutionIntro}</p>
                <p className="mt-5 border-t border-white/15 pt-5 text-center text-sm font-semibold italic text-accent">
                  ({institutionMotto})
                </p>
              </div>
            </AnimatedSection>
          </div>
        </div>
      </section>

      <section className="section-padding relative bg-[#f4f7fc]">
        <div className="pattern-grid pointer-events-none absolute inset-0 opacity-40" />
        <div className="container-gclt relative">
          <AnimatedSection className="mx-auto max-w-3xl text-center">
            <span className="section-label mx-auto">Our Process</span>
            <h2 className="mt-4 text-3xl font-bold text-primary md:text-4xl">Publication process</h2>
            <p className="mt-4 text-lg text-[var(--color-text-light)]">
              From initial inquiry to peer-reviewed publication, GCLT maintains rigorous standards
              at every stage.
            </p>
          </AnimatedSection>

          <div className="mt-14 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {publicationProcessSteps.map((step, i) => {
              const Icon = processIcons[i] ?? FileText;
              return (
                <AnimatedSection key={step.title} delay={i * 0.08}>
                  <div className="group relative h-full overflow-hidden rounded-3xl border border-white/80 bg-white p-6 shadow-card transition-all duration-300 hover:-translate-y-1 hover:shadow-elevated">
                    <span className="absolute right-4 top-3 font-heading text-4xl font-bold text-primary/[0.06]">
                      {String(i + 1).padStart(2, '0')}
                    </span>
                    <div className="relative mb-4 flex h-12 w-12 items-center justify-center rounded-2xl bg-primary/10 text-primary transition-colors group-hover:bg-primary group-hover:text-white">
                      <Icon className="h-6 w-6" strokeWidth={1.75} />
                    </div>
                    <h3 className="relative text-lg font-bold text-primary">{step.title}</h3>
                    <p className="relative mt-2 text-sm leading-relaxed text-[var(--color-text-light)]">
                      {step.description}
                    </p>
                  </div>
                </AnimatedSection>
              );
            })}
          </div>
        </div>
      </section>

      <section className="section-padding bg-white">
        <div className="container-gclt">
          <div className="grid gap-12 lg:grid-cols-2 lg:items-center">
            <AnimatedSection>
              <span className="section-label">Areas of Publication</span>
              <h2 className="mt-4 text-2xl font-bold text-primary md:text-3xl">
                Research topics we publish
              </h2>
              <p className="mt-4 text-[var(--color-text-light)]">
                GCLT has published and continues to welcome research across a wide range of legal
                and interdisciplinary topics, including:
              </p>
              <div className="mt-6 flex flex-wrap gap-2">
                {publicationTopics.map((topic) => (
                  <span
                    key={topic}
                    className="rounded-full border border-primary/15 bg-primary/5 px-4 py-2 text-sm font-medium text-primary"
                  >
                    {topic}
                  </span>
                ))}
              </div>
            </AnimatedSection>

            <AnimatedSection delay={0.1}>
              <ul className="space-y-4 rounded-3xl border border-border/70 bg-off-white/50 p-6 sm:p-8">
                {[
                  'Contributing to academic and legal communities worldwide',
                  'Building reputation through quality, peer-reviewed outputs',
                  'Advancing knowledge and best practices in Islamic law and related fields',
                  'Serving scholars, practitioners, and the wider public',
                ].map((item) => (
                  <li key={item} className="flex gap-3">
                    <CheckCircle2 className="mt-0.5 h-5 w-5 shrink-0 text-accent" />
                    <span className="text-sm leading-relaxed text-[var(--color-text-light)]">
                      {item}
                    </span>
                  </li>
                ))}
              </ul>
            </AnimatedSection>
          </div>
        </div>
      </section>

      <section className="section-padding relative bg-[#f4f7fc]">
        <div className="container-gclt">
          <AnimatedSection className="mx-auto max-w-3xl text-center">
            <span className="section-label mx-auto">Our Journals</span>
            <h2 className="mt-4 text-3xl font-bold text-primary md:text-4xl">
              Primary publication outlets
            </h2>
            <p className="mt-4 text-lg text-[var(--color-text-light)]">
              Three peer-reviewed, open-access journals serve as the main channels for GCLT
              scholarly work.
            </p>
          </AnimatedSection>

          <div className="mt-14 grid gap-8 md:grid-cols-2 lg:grid-cols-3">
            {gcltJournals.map((journal, i) => (
              <AnimatedSection key={journal.slug} delay={i * 0.08}>
                <div className="group flex h-full flex-col rounded-3xl border border-white/80 bg-white p-7 shadow-card transition-all duration-300 hover:-translate-y-1 hover:border-primary/20 hover:shadow-elevated sm:p-8">
                  <div className="mb-5 flex h-12 w-12 items-center justify-center rounded-2xl bg-gradient-to-br from-primary to-primary-dark text-white shadow-soft">
                    <BookOpen className="h-6 w-6" />
                  </div>
                  <h3 className="text-xl font-bold text-primary">{journal.name}</h3>
                  <p className="mt-2 text-sm font-semibold text-accent">{journal.subtitle}</p>
                  <p className="mt-4 flex-1 text-sm leading-relaxed text-[var(--color-text-light)] line-clamp-3">
                    {journal.description}
                  </p>
                  <div className="mt-6 flex flex-wrap items-center gap-4">
                    <Link
                      href={journal.href}
                      className="inline-flex items-center gap-2 text-sm font-semibold text-primary transition-colors hover:text-accent"
                    >
                      View journal
                      <ArrowRight className="h-4 w-4" />
                    </Link>
                    <a
                      href={journal.externalUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-2 text-sm font-semibold text-accent transition-colors hover:text-accent-dark"
                    >
                      Visit website
                      <ExternalLink className="h-4 w-4" />
                    </a>
                  </div>
                </div>
              </AnimatedSection>
            ))}
          </div>

          <AnimatedSection delay={0.2} className="mt-14 text-center">
            <div className="mx-auto max-w-2xl rounded-3xl border border-primary/10 bg-white p-8 shadow-card sm:p-10">
              <h3 className="text-xl font-bold text-primary">Submit your research</h3>
              <p className="mt-3 text-sm leading-relaxed text-[var(--color-text-light)]">
                For publication enquiries or to submit a manuscript, contact our research team or
                visit the Call for Papers page.
              </p>
              <div className="mt-6 flex flex-col items-center justify-center gap-3 sm:flex-row">
                <Link href="/research/call-for-papers" className="btn-primary">
                  Call for Papers
                </Link>
                <a href={`mailto:${SITE.emails.research}`} className="btn-outline">
                  Email {SITE.emails.research}
                </a>
              </div>
            </div>
          </AnimatedSection>
        </div>
      </section>
    </>
  );
}
