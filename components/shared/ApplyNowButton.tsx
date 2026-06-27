import Link from 'next/link';
import { ExternalLink } from 'lucide-react';
import {
  buildGoogleFormUrl,
  type GoogleFormKey,
  isGoogleFormConfigured,
} from '@/lib/googleForms';

interface ApplyNowButtonProps {
  formKey: GoogleFormKey;
  prefill?: Record<string, string>;
  className?: string;
  children?: React.ReactNode;
  /** Shown when the Google Form URL is not configured */
  fallbackHref?: string;
  fallbackClassName?: string;
  openInNewTab?: boolean;
}

export default function ApplyNowButton({
  formKey,
  prefill,
  className = 'btn-primary inline-flex items-center gap-2',
  children = 'Apply Now',
  fallbackHref,
  fallbackClassName,
  openInNewTab = true,
}: ApplyNowButtonProps) {
  const formUrl = buildGoogleFormUrl(formKey, prefill);

  if (formUrl) {
    return (
      <a
        href={formUrl}
        target={openInNewTab ? '_blank' : undefined}
        rel={openInNewTab ? 'noopener noreferrer' : undefined}
        className={className}
      >
        {children}
        {openInNewTab && <ExternalLink className="h-4 w-4 opacity-80" aria-hidden />}
      </a>
    );
  }

  if (fallbackHref) {
    const isExternal = fallbackHref.startsWith('http') || fallbackHref.startsWith('mailto:');
    if (isExternal) {
      return (
        <a href={fallbackHref} className={fallbackClassName ?? className}>
          {children}
        </a>
      );
    }
    return (
      <Link href={fallbackHref} className={fallbackClassName ?? className}>
        {children}
      </Link>
    );
  }

  return (
    <span className={`${className} cursor-not-allowed opacity-60`} title="Application form not configured">
      {children}
    </span>
  );
}

export function isApplyFormReady(key: GoogleFormKey): boolean {
  return isGoogleFormConfigured(key);
}
