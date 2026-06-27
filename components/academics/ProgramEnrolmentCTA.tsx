'use client';

import {
  buildProgramApplyGoogleFormUrl,
  buildProgramApplyUrl,
  buildProgramInterestGoogleFormUrl,
  deliveryModeLabels,
} from '@/lib/deliveryMode';
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
    const interestUrl = buildProgramInterestGoogleFormUrl(program.academicName, selectedDelivery);
    const mailto = `mailto:${contactEmail}?subject=${encodeURIComponent(`Interest: ${program.academicName}`)}&body=${encodeURIComponent(`Preferred delivery: ${deliveryModeLabels[selectedDelivery]}\n\n`)}`;

    return (
      <div className={`space-y-3 ${className}`}>
        <a
          href={interestUrl ?? mailto}
          target={interestUrl ? '_blank' : undefined}
          rel={interestUrl ? 'noopener noreferrer' : undefined}
          className="btn-accent w-full"
        >
          Register Interest
        </a>
        <p className={`text-center text-xs ${tone === 'dark' ? 'text-gray-300' : 'text-[var(--color-text-light)]'}`}>
          Launching soon — join the waitlist ({fee})
        </p>
      </div>
    );
  }

  const googleFormUrl = buildProgramApplyGoogleFormUrl(program.academicName, selectedDelivery);
  const applyUrl = buildProgramApplyUrl(program.slug, selectedDelivery);

  if (googleFormUrl) {
    return (
      <div className={`space-y-3 ${className}`}>
        <a
          href={googleFormUrl}
          target="_blank"
          rel="noopener noreferrer"
          className="btn-accent w-full"
        >
          Apply Now
        </a>
        <p className={`text-center text-xs ${tone === 'dark' ? 'text-gray-300' : 'text-[var(--color-text-light)]'}`}>
          {deliveryModeLabels[selectedDelivery]} · {fee}
        </p>
      </div>
    );
  }

  return (
    <div className={`space-y-3 ${className}`}>
      <a href={applyUrl} className="btn-accent w-full">
        Apply Now
      </a>
      <p className={`text-center text-xs ${tone === 'dark' ? 'text-gray-300' : 'text-[var(--color-text-light)]'}`}>
        {deliveryModeLabels[selectedDelivery]} · {fee}
      </p>
    </div>
  );
}
