import { Metadata } from 'next';
import Link from 'next/link';
import PageHero from '@/components/shared/PageHero';
import ProgramCard from '@/components/academics/ProgramCard';
import AnimatedSection from '@/components/shared/AnimatedSection';
import {
  cataloguePrograms,
  getFeaturedProgrammes,
  getStatusLabel,
  programmePolicies,
} from '@/lib/data/programs';
import { institutionMotto } from '@/lib/data/institution';
import { ArrowRight, BookOpen } from 'lucide-react';

export const metadata: Metadata = {
  title: 'Programme Catalogue',
  description:
    'Explore 11 GCLT programmes across diplomas, certificates, executive pathways, traditional studies, and bridge programmes.',
};

export default function ProgrammeCataloguePage() {
  const { traditional, bridge } = getFeaturedProgrammes();
  const professional = cataloguePrograms.filter(
    (p) => p.variant === 'default' && p.type !== 'traditional' && p.type !== 'bridge',
  );

  return (
    <>
      <PageHero
        title="Programme Catalogue"
        subtitle="Diplomas · Professional Certificates · Executive Programmes · Traditional Studies — weekend & evening schedules, onsite & online."
        breadcrumbs={[
          { label: 'Home', href: '/' },
          { label: 'Academics', href: '/academics' },
          { label: 'Programme Catalogue' },
        ]}
      />

      <section className="border-b border-border bg-[#f4f7fc] py-8">
        <div className="container-gclt text-center">
          <p className="text-sm font-semibold uppercase tracking-[0.18em] text-accent">
            Global Centre for Learning &amp; Training
          </p>
          <p className="mt-2 text-lg font-bold text-primary">{institutionMotto}</p>
          <p className="mx-auto mt-3 max-w-2xl text-sm text-[var(--color-text-light)]">
            11 programmes across tradition, technology, leadership, research &amp; bridge pathways.
            Fees shown in PKR &amp; USD · instalment options available.
          </p>
        </div>
      </section>

      <section className="section-padding bg-white">
        <div className="container-gclt">
          <h2 className="mb-8 text-2xl font-bold text-primary">Signature Programmes</h2>
          <div className="mb-14 grid gap-8 lg:grid-cols-2">
            {[traditional, bridge].map((program) => (
              <Link
                key={program.slug}
                href={`/academics/programmes/${program.slug}`}
                className={`group overflow-hidden rounded-3xl border p-8 shadow-card transition-all hover:-translate-y-1 hover:shadow-elevated ${
                  program.variant === 'traditional'
                    ? 'border-amber-200/60 bg-gradient-to-br from-amber-50/80 to-white'
                    : 'border-primary/15 bg-gradient-to-br from-primary/[0.04] to-accent/[0.06]'
                }`}
              >
                <span className="text-xs font-bold uppercase tracking-wider text-accent">
                  {program.variant === 'traditional' ? 'Traditional Programme' : 'Bridge Programme'}
                </span>
                <h3 className="mt-3 text-2xl font-bold text-primary group-hover:text-accent">
                  {program.catchyTitle}
                </h3>
                <p className="mt-1 text-sm font-semibold text-primary/80">{program.academicName}</p>
                <p className="mt-4 text-sm italic text-[var(--color-text-light)]">
                  &ldquo;{program.slogan}&rdquo;
                </p>
                <span className="mt-6 inline-flex items-center gap-2 text-sm font-semibold text-primary">
                  Explore programme <ArrowRight className="h-4 w-4" />
                </span>
              </Link>
            ))}
          </div>

          <h2 className="mb-8 text-2xl font-bold text-primary">All Programmes</h2>
          <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
            {professional.map((program) => (
              <ProgramCard key={program.slug} program={program} />
            ))}
          </div>
        </div>
      </section>

      <section className="section-padding bg-[#f4f7fc]">
        <div className="container-gclt">
          <AnimatedSection className="mx-auto mb-12 max-w-3xl text-center">
            <span className="section-label mx-auto">Quick Summary</span>
            <h2 className="mt-4 text-2xl font-bold text-primary">All programmes at a glance</h2>
          </AnimatedSection>
          <div className="overflow-x-auto rounded-2xl border border-border/70 bg-white shadow-card">
            <table className="w-full min-w-[720px] text-left text-sm">
              <thead className="bg-primary text-white">
                <tr>
                  <th className="px-4 py-3 font-semibold">Programme</th>
                  <th className="px-4 py-3 font-semibold">Type</th>
                  <th className="px-4 py-3 font-semibold">Duration</th>
                  <th className="px-4 py-3 font-semibold">Schedule</th>
                  <th className="px-4 py-3 font-semibold">PKR (Onsite)</th>
                  <th className="px-4 py-3 font-semibold">Status</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-border/60">
                {cataloguePrograms.map((p) => (
                  <tr key={p.slug} className="hover:bg-primary/[0.03]">
                    <td className="px-4 py-3">
                      <Link
                        href={`/academics/programmes/${p.slug}`}
                        className="font-semibold text-primary hover:text-accent"
                      >
                        {p.catchyTitle}
                      </Link>
                      <p className="mt-0.5 text-xs text-[var(--color-text-light)]">{p.academicName}</p>
                    </td>
                    <td className="px-4 py-3 text-[var(--color-text-light)]">
                      {p.quickFacts.qualification}
                    </td>
                    <td className="px-4 py-3 text-[var(--color-text-light)]">{p.durationOnsite}</td>
                    <td className="px-4 py-3 text-[var(--color-text-light)]">{p.schedule}</td>
                    <td className="px-4 py-3 font-medium text-primary">
                      {p.fees.onsite.pkr.toLocaleString('en-PK')}
                      <span className="text-xs text-[var(--color-text-light)]"> (~${p.fees.onsite.usd})</span>
                    </td>
                    <td className="px-4 py-3 text-[var(--color-text-light)]">
                      {getStatusLabel(p.status)}
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </section>

      <section className="section-padding bg-white">
        <div className="container-gclt grid gap-10 lg:grid-cols-2">
          <div>
            <h2 className="mb-6 flex items-center gap-2 text-xl font-bold text-primary">
              <BookOpen className="h-5 w-5 text-accent" />
              Scheduling Options
            </h2>
            <div className="space-y-6">
              {programmePolicies.scheduling.map((block) => (
                <div key={block.title} className="rounded-2xl border border-border/70 p-5">
                  <h3 className="font-semibold text-primary">{block.title}</h3>
                  <ul className="mt-3 list-disc space-y-1 pl-5 text-sm text-[var(--color-text-light)]">
                    {block.points.map((point) => (
                      <li key={point}>{point}</li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
          </div>
          <div>
            <h2 className="mb-6 text-xl font-bold text-primary">Fees, Discounts &amp; Policies</h2>
            <ul className="space-y-3">
              {programmePolicies.fees.map((item) => (
                <li key={item} className="flex gap-3 text-sm text-[var(--color-text-light)]">
                  <span className="mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full bg-accent" />
                  {item}
                </li>
              ))}
            </ul>
            <Link href="/academics/admissions" className="btn-primary mt-8 inline-flex">
              Apply Now
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}
