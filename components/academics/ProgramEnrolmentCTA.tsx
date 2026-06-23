'use client';

import Link from 'next/link';
import { buildProgramApplyMailto, buildProgramApplyUrl } from '@/lib/deliveryMode';
import { getFeeForDelivery } from '@/lib/data/programs';
import { SITE } from '@/lib/utils';
import { useProgramEnrollment } from './ProgramEnrollmentContext';

interface ProgramEnrolmentCTAProps {
  className?: string;
  tone?: 'light' | 'dark';
}

export default function ProgramEnrolmentCTA({ className = '', tone = 'dark' }: ProgramEnrolmentCTAProps) {
  const { program, selectedDelivery } = useProgramEnrollment();
  const contactEmail = program.contactEmail || SITE.emails.admissions;
  const fee = getFeeForDelivery(program, selectedDelivery);

  if (program.status === 'future') {
    return (
      <div className={className}>
        <button type="button" disabled className="btn-accent w-full cursor-not-allowed opacity-60">
          Coming Soon
        </button>
        <p className="mt-3 text-center text-xs text-[var(--color-text-light)]">
          This programme is not yet open for enrolment.
        </p>
      </div>
    );
  }

  if (program.status === 'launching-soon') {
    const subject = encodeURIComponent(`Interest: ${program.academicName}`);
    const body = encodeURIComponent(
      `I would like to register my interest in ${program.academicName}.\n\nPreferred delivery: ${selectedDelivery}\n\n`,
    );

    return (
      <div className={`space-y-3 ${className}`}>
        <a href={`mailto:${contactEmail}?subject=${subject}&body=${body}`} className="btn-accent w-full">
          Register Interest
        </a>
        <p className={`text-center text-xs ${tone === 'dark' ? 'text-gray-300' : 'text-[var(--color-text-light)]'}`}>
          Launching soon — join the waitlist ({fee})
        </p>
      </div>
    );
  }

  const applyUrl = buildProgramApplyUrl(program.slug, selectedDelivery);
  const mailtoUrl = buildProgramApplyMailto(program.academicName, selectedDelivery, contactEmail);

  return (
    <div className={`space-y-3 ${className}`}>
      <Link href={applyUrl} className="btn-accent w-full">
        Apply Now
      </Link>
      <a
        href={mailtoUrl}
        className={`block text-center text-xs ${
          tone === 'dark' ? 'text-gray-300 hover:text-white' : 'text-[var(--color-text-light)] hover:text-primary'
        }`}
      >
        Or email your application directly
      </a>
    </div>
  );
}
