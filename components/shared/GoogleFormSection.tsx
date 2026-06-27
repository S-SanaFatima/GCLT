import GoogleFormEmbed from '@/components/shared/GoogleFormEmbed';
import ApplyNowButton from '@/components/shared/ApplyNowButton';
import {
  buildGoogleFormEmbedUrl,
  buildGoogleFormUrl,
  isGoogleFormConfigured,
  type GoogleFormKey,
} from '@/lib/googleForms';

interface EmbeddedGoogleFormProps {
  formKey: GoogleFormKey;
  title: string;
  description: string;
  prefill?: Record<string, string>;
  height?: number;
  fallbackHref?: string;
  fallbackLabel?: string;
  sectionId?: string;
}

export default function EmbeddedGoogleForm({
  formKey,
  title,
  description,
  prefill,
  height = 1800,
  fallbackHref,
  fallbackLabel = 'Open application form',
  sectionId,
}: EmbeddedGoogleFormProps) {
  const embedUrl = buildGoogleFormEmbedUrl(formKey, prefill);
  const formUrl = buildGoogleFormUrl(formKey, prefill);
  const ready = isGoogleFormConfigured(formKey);

  if (!ready) {
    return (
      <div id={sectionId}>
        <h3 className="mb-2 text-xl font-bold text-primary">{title}</h3>
        <p className="mb-4 text-sm text-[var(--color-text-light)]">{description}</p>
        <ApplyNowButton formKey={formKey} prefill={prefill} fallbackHref={fallbackHref}>
          {fallbackLabel}
        </ApplyNowButton>
      </div>
    );
  }

  return (
    <div id={sectionId}>
      <h3 className="mb-2 text-xl font-bold text-primary">{title}</h3>
      <p className="mb-4 text-sm text-[var(--color-text-light)]">{description}</p>
      {formUrl && (
        <p className="mb-4 text-sm">
          <a
            href={formUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="font-medium text-primary hover:text-accent"
          >
            Open form in a new tab
          </a>
        </p>
      )}
      {embedUrl && <GoogleFormEmbed src={embedUrl} title={title} height={height} />}
    </div>
  );
}
