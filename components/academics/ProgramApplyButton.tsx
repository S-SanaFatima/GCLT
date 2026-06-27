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

interface ProgramApplyButtonProps {
  className?: string;
  variant?: 'accent' | 'primary';
  tone?: 'light' | 'dark';
}

export default function ProgramApplyButton({
  className = '',
  variant = 'accent',
  tone = 'dark',
}: ProgramApplyButtonProps) {
  const { program, selectedDelivery } = useProgramEnrollment();
  const buttonClass = variant === 'accent' ? 'btn-accent' : 'btn-primary';
  const googleFormUrl = buildProgramApplyGoogleFormUrl(program.academicName, selectedDelivery);

  if (program.status === 'future') {
    return (
      <button type="button" disabled className={`${buttonClass} w-full cursor-not-allowed opacity-60 ${className}`}>
        Coming Soon
      </button>
    );
  }

  if (program.status === 'launching-soon') {
    const interestUrl = buildProgramInterestGoogleFormUrl(program.academicName, selectedDelivery);
    const mailto = `mailto:${program.contactEmail || SITE.emails.admissions}?subject=${encodeURIComponent(`Interest: ${program.academicName}`)}`;

    return (
      <div className={`space-y-3 ${className}`}>
        <a
          href={interestUrl ?? mailto}
          target={interestUrl ? '_blank' : undefined}
          rel={interestUrl ? 'noopener noreferrer' : undefined}
          className={`${buttonClass} w-full`}
        >
          Register Interest
        </a>
      </div>
    );
  }

  if (googleFormUrl) {
    return (
      <div className={`space-y-3 ${className}`}>
        <a
          href={googleFormUrl}
          target="_blank"
          rel="noopener noreferrer"
          className={`${buttonClass} w-full`}
        >
          Apply Now
        </a>
        <p className={`text-center text-xs ${tone === 'dark' ? 'text-gray-300' : 'text-[var(--color-text-light)]'}`}>
          {deliveryModeLabels[selectedDelivery]} · Opens secure application form
        </p>
      </div>
    );
  }

  const applyUrl = buildProgramApplyUrl(program.slug, selectedDelivery);

  return (
    <div className={`space-y-3 ${className}`}>
      <a href={applyUrl} className={`${buttonClass} w-full`}>
        Apply Now
      </a>
      <p className={`text-center text-xs ${tone === 'dark' ? 'text-gray-300' : 'text-[var(--color-text-light)]'}`}>
        Complete the application form on the admissions page
      </p>
    </div>
  );
}
