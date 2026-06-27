'use client';

import GoogleFormEmbed from '@/components/shared/GoogleFormEmbed';
import ApplyNowButton from '@/components/shared/ApplyNowButton';
import { buildGoogleFormEmbedUrl, isGoogleFormConfigured } from '@/lib/googleForms';
import { SITE } from '@/lib/utils';

interface CVFormProps {
  title?: string;
  description?: string;
}

export default function CVForm({
  title = 'Send Us Your CV',
  description = 'No suitable opening right now? Submit your CV for future opportunities.',
}: CVFormProps) {
  const embedUrl = buildGoogleFormEmbedUrl('cv');
  const formReady = isGoogleFormConfigured('cv');

  if (formReady && embedUrl) {
    return (
      <div className="card p-6 md:p-8">
        <h3 className="mb-2 text-primary">{title}</h3>
        <p className="mb-2 text-sm text-[var(--color-text-light)]">{description}</p>
        <p className="mb-4 text-xs text-[var(--color-text-light)]">
          Complete the form below and upload your CV (PDF). Files are stored securely in Google
          Drive.
        </p>
        <GoogleFormEmbed src={embedUrl} title="CV submission form" height={1600} />
        <p className="mt-3 text-center text-xs text-[var(--color-text-light)]">
          Prefer email?{' '}
          <a href={`mailto:${SITE.emails.careers}`} className="font-medium text-primary hover:text-accent">
            {SITE.emails.careers}
          </a>
        </p>
      </div>
    );
  }

  return (
    <div className="card p-6 md:p-8">
      <h3 className="mb-2 text-primary">{title}</h3>
      <p className="mb-6 text-sm text-[var(--color-text-light)]">{description}</p>
      <p className="mb-4 text-sm text-[var(--color-text-light)]">
        Submit your application using our online form (CV upload supported).
      </p>
      <ApplyNowButton
        formKey="cv"
        className="btn-primary"
        fallbackHref={`mailto:${SITE.emails.careers}?subject=${encodeURIComponent('CV Submission')}`}
      >
        Open application form
      </ApplyNowButton>
    </div>
  );
}
