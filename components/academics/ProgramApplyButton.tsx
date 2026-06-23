'use client';

import Link from 'next/link';
import { buildProgramApplyMailto, buildProgramApplyUrl } from '@/lib/deliveryMode';
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
  const contactEmail = program.contactEmail || SITE.emails.admissions;
  const applyUrl = buildProgramApplyUrl(program.slug, selectedDelivery);
  const mailtoUrl = buildProgramApplyMailto(program.title, selectedDelivery, contactEmail);
  const buttonClass = variant === 'accent' ? 'btn-accent' : 'btn-primary';

  return (
    <div className={`space-y-3 ${className}`}>
      <Link href={applyUrl} className={`${buttonClass} w-full`}>
        Apply Now
      </Link>
      <a
        href={mailtoUrl}
        className={`block text-center text-xs ${
          tone === 'dark'
            ? 'text-gray-300 hover:text-white'
            : 'text-[var(--color-text-light)] hover:text-primary'
        }`}
      >
        Or email your application directly
      </a>
    </div>
  );
}
