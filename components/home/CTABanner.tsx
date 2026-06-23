import Link from 'next/link';
import { ArrowRight } from 'lucide-react';
import SectionHeader from '@/components/shared/SectionHeader';
import AnimatedSection from '@/components/shared/AnimatedSection';

export default function CTABanner() {
  return (
    <section className="relative overflow-hidden py-24 lg:py-32">
      <div className="absolute inset-0 bg-gradient-to-br from-primary-dark via-primary to-[#0f2347]" />
      <div className="pattern-dots absolute inset-0 opacity-20" />
      <div className="pointer-events-none absolute left-1/2 top-0 h-64 w-64 -translate-x-1/2 rounded-full bg-accent/15 blur-3xl" />

      <div className="container-gclt relative text-center">
        <AnimatedSection>
          <SectionHeader
            label="Get Started"
            title="Ready to Join GCLT?"
            subtitle="Apply for our diploma programmes, short courses, or internships."
            light
          />
          <div className="flex flex-col items-center justify-center gap-4 sm:flex-row">
            <Link href="/academics/admissions" className="btn-accent group">
              Apply Now
              <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
            </Link>
            <Link href="/contact" className="btn-outline-white">
              Contact Us
            </Link>
          </div>
        </AnimatedSection>
      </div>
    </section>
  );
}
