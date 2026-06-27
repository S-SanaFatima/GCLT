import { Metadata } from 'next';
import PageHero from '@/components/shared/PageHero';
import EmbeddedGoogleForm from '@/components/shared/GoogleFormSection';
import ApplyNowButton from '@/components/shared/ApplyNowButton';
import { isGoogleFormConfigured } from '@/lib/googleForms';
import { SITE } from '@/lib/utils';

export const metadata: Metadata = {
  title: 'Call for Papers',
  description: 'Submit your research to GCLT journals and conferences. Call for papers guidelines and submission information.',
};

export default function CallForPapersPage() {
  return (
    <>
      <PageHero
        title="Call for Papers"
        subtitle="We invite scholars to submit original research for our journals and conferences."
        breadcrumbs={[
          { label: 'Home', href: '/' },
          { label: 'Research', href: '/research' },
          { label: 'Call for Papers' },
        ]}
      />
      <section className="section-padding bg-white">
        <div className="container-gclt max-w-3xl">
          <h2 className="mb-4 text-primary">Submission Guidelines</h2>
          <ul className="mb-8 list-disc space-y-2 pl-5 text-[var(--color-text-light)]">
            <li>Original, unpublished research in English or Urdu</li>
            <li>Abstract: 250–300 words; Full paper: 5,000–8,000 words</li>
            <li>Follow APA or Chicago citation style</li>
            <li>Submit via the online form below and upload your manuscript</li>
          </ul>
          <h3 className="mb-3 text-primary">Our Journals</h3>
          <ul className="mb-8 list-disc space-y-1 pl-5 text-[var(--color-text-light)]">
            <li>Al Kashaf</li>
            <li>Al Salihat</li>
            <li>Al Haqeeqah</li>
          </ul>
          <ApplyNowButton
            formKey="research"
            className="btn-primary mb-10 inline-flex items-center gap-2"
            fallbackHref={`mailto:${SITE.emails.research}?subject=Paper Submission`}
          >
            Submit Your Paper
          </ApplyNowButton>

          <EmbeddedGoogleForm
            formKey="research"
            title="Paper submission form"
            description="Upload your manuscript and abstract using the form below. Submissions are stored securely in Google Drive."
            height={2000}
            sectionId="paper-submission-form"
            fallbackHref={`mailto:${SITE.emails.research}?subject=Paper Submission`}
            fallbackLabel="Submit via email"
          />

          {!isGoogleFormConfigured('research') && (
            <p className="mt-4 text-xs text-[var(--color-text-light)]">
              Configure NEXT_PUBLIC_GF_RESEARCH_ID in .env.local to enable the embedded submission
              form.
            </p>
          )}
        </div>
      </section>
    </>
  );
}
