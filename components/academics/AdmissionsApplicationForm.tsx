import GoogleFormEmbed from '@/components/shared/GoogleFormEmbed';
import ApplyNowButton from '@/components/shared/ApplyNowButton';
import { buildGoogleFormEmbedUrl, buildGoogleFormUrl, isGoogleFormConfigured } from '@/lib/googleForms';
import { deliveryModeLabels, isDeliveryMode } from '@/lib/deliveryMode';

interface AdmissionsApplicationFormProps {
  programTitle?: string;
  delivery?: string;
}

export default function AdmissionsApplicationForm({
  programTitle,
  delivery,
}: AdmissionsApplicationFormProps) {
  const prefill: Record<string, string> = {};
  if (programTitle) prefill.program = programTitle;
  if (delivery && isDeliveryMode(delivery)) {
    prefill.delivery = deliveryModeLabels[delivery];
  }

  const embedUrl = buildGoogleFormEmbedUrl('admissions', prefill);
  const formUrl = buildGoogleFormUrl('admissions', prefill);
  const ready = isGoogleFormConfigured('admissions');

  if (!ready) {
    return (
      <ApplyNowButton
        formKey="admissions"
        prefill={prefill}
        className="btn-accent"
        fallbackHref="mailto:admissions@gclt.com.pk?subject=Programme%20Application"
      >
        Apply via online form
      </ApplyNowButton>
    );
  }

  return (
    <div id="application-form">
      <h3 className="mb-2 text-xl font-bold text-primary">Online application form</h3>
      <p className="mb-4 text-sm text-[var(--color-text-light)]">
        Complete the form below and upload your documents. Files are stored securely in Google
        Drive.
      </p>
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
      {embedUrl && (
        <GoogleFormEmbed src={embedUrl} title="GCLT admissions application" height={2000} />
      )}
    </div>
  );
}
