import Link from 'next/link';
import { ArrowRight, Handshake } from 'lucide-react';
import AnimatedSection from '@/components/shared/AnimatedSection';
import PartnerCard from '@/components/shared/PartnerCard';
import { academicPartners } from '@/lib/data/partners';

export default function AffiliationsBar() {
  return (
    <section className="section-padding relative overflow-hidden border-t border-border/50 bg-gradient-to-b from-off-white to-white">
      <div className="pattern-grid pointer-events-none absolute inset-0 opacity-50" />

      <div className="container-gclt relative">
        <div className="flex flex-col gap-8 lg:flex-row lg:items-end lg:justify-between">
          <AnimatedSection className="max-w-xl">
            <span className="section-label">Partnerships</span>
            <h2 className="mt-4 text-3xl font-bold text-primary md:text-4xl">
              Our Academic Partners & Affiliations
            </h2>
            <p className="mt-4 text-lg text-[var(--color-text-light)]">
              Collaborating with leading institutions worldwide to advance learning, research, and
              professional development.
            </p>
          </AnimatedSection>
          <AnimatedSection delay={0.1}>
            <Link
              href="/about/affiliations"
              className="btn-ghost group hidden shrink-0 lg:inline-flex"
            >
              View all affiliations
              <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
            </Link>
          </AnimatedSection>
        </div>

        <div className="mt-12 grid items-stretch gap-5 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-6">
          {academicPartners.map((partner, i) => (
            <AnimatedSection key={partner.id} delay={i * 0.05} className="h-full">
              <PartnerCard partner={partner} variant="home" />
            </AnimatedSection>
          ))}
        </div>

        <AnimatedSection delay={0.2} className="mt-10">
          <div className="flex flex-col items-center justify-between gap-4 rounded-2xl border border-primary/10 bg-primary/[0.04] px-6 py-5 sm:flex-row">
            <div className="flex items-center gap-3 text-center sm:text-left">
              <Handshake className="h-8 w-8 shrink-0 text-accent" />
              <p className="text-sm text-[var(--color-text-light)]">
                Interested in partnering with GCLT?{' '}
                <span className="font-semibold text-primary">We welcome institutional collaboration.</span>
              </p>
            </div>
            <Link href="/contact" className="btn-primary shrink-0 text-sm">
              Get in Touch
            </Link>
          </div>
        </AnimatedSection>

        <div className="mt-8 text-center lg:hidden">
          <Link href="/about/affiliations" className="btn-outline group inline-flex">
            View all affiliations
            <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
          </Link>
        </div>
      </div>
    </section>
  );
}
