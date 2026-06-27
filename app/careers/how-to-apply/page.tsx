import { Metadata } from 'next';
import PageHero from '@/components/shared/PageHero';
import CVForm from '@/components/shared/CVForm';
import Link from 'next/link';

export const metadata: Metadata = {
  title: 'How to Apply',
  description: 'Application process for careers, internships, fellowships, and visiting scholar programmes at GCLT.',
};

export default function HowToApplyPage() {
  return (
    <>
      <PageHero
        title="How to Apply"
        breadcrumbs={[
          { label: 'Home', href: '/' },
          { label: 'Careers', href: '/careers' },
          { label: 'How to Apply' },
        ]}
      />
      <section className="section-padding bg-white">
        <div className="container-gclt max-w-2xl">
          <h2 className="mb-4 text-primary">Application Process</h2>
          <ol className="mb-10 list-decimal space-y-3 pl-5 text-[var(--color-text-light)]">
            <li>Review available opportunities on our Careers pages</li>
            <li>Prepare your CV, cover letter, and any required documents</li>
            <li>Complete the online application form below and upload your CV</li>
            <li>Shortlisted candidates will be contacted for an interview</li>
          </ol>
          <Link href="/careers/job-openings" className="btn-outline mb-10 inline-flex">
            View Job Openings
          </Link>
          <CVForm description="Submit your CV for speculative applications and future opportunities." />
        </div>
      </section>
    </>
  );
}
