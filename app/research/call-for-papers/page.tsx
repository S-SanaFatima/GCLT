import { Metadata } from 'next';
import PageHero from '@/components/shared/PageHero';
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
            <li>Submit via email with journal/conference name in subject line</li>
          </ul>
          <h3 className="mb-3 text-primary">Our Journals</h3>
          <ul className="mb-8 list-disc space-y-1 pl-5 text-[var(--color-text-light)]">
            <li>Al Kashaf</li>
            <li>Al Salihat</li>
            <li>Al Haqeeqah</li>
          </ul>
          <a href={`mailto:${SITE.emails.research}?subject=Paper Submission`} className="btn-primary inline-flex">
            Submit Your Paper
          </a>
        </div>
      </section>
    </>
  );
}
