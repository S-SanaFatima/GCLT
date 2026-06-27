import { Metadata } from 'next';
import PageHero from '@/components/shared/PageHero';
import Link from 'next/link';
import ApplyNowButton from '@/components/shared/ApplyNowButton';
import EmbeddedGoogleForm from '@/components/shared/GoogleFormSection';
import { SITE } from '@/lib/utils';

export const metadata: Metadata = {
  title: 'Internships',
  description: 'Research and editorial internship programmes at the Global Centre for Learning & Training.',
};

const programmes = [
  {
    title: 'Research Internship Program',
    description:
      'Work alongside GCLT faculty on active research projects, publications, and conference preparation across law, Islamic studies, and public policy.',
    duration: '3–6 months',
    stipend: 'Subject to availability — enquire for details',
  },
  {
    title: 'Editorial Internship (Journals)',
    description:
      'Support editorial processes for Al Kashaf, Al Salihat, and Al Haqeeqah — including manuscript review, formatting, and publication coordination.',
    duration: '3 months minimum',
    stipend: 'Unpaid / certificate provided',
  },
];

export default function InternshipsPage() {
  return (
    <>
      <PageHero
        title="Internships"
        subtitle="Gain hands-on research and professional experience at GCLT."
        breadcrumbs={[
          { label: 'Home', href: '/' },
          { label: 'Academics', href: '/academics' },
          { label: 'Internships' },
        ]}
      />
      <section className="section-padding bg-white">
        <div className="container-gclt max-w-3xl">
          <div className="mb-10 space-y-6">
            {programmes.map((p) => (
              <div key={p.title} className="card p-6">
                <h3 className="mb-2 text-primary">{p.title}</h3>
                <p className="mb-4 text-sm text-[var(--color-text-light)]">{p.description}</p>
                <dl className="grid gap-2 text-sm sm:grid-cols-2">
                  <div>
                    <dt className="font-medium text-primary">Duration</dt>
                    <dd className="text-[var(--color-text-light)]">{p.duration}</dd>
                  </div>
                  <div>
                    <dt className="font-medium text-primary">Stipend</dt>
                    <dd className="text-[var(--color-text-light)]">{p.stipend}</dd>
                  </div>
                </dl>
              </div>
            ))}
          </div>

          <h3 className="mb-3 text-primary">Eligibility</h3>
          <ul className="mb-6 list-disc space-y-2 pl-5 text-[var(--color-text-light)]">
            <li>Currently enrolled in or recently graduated from a recognised university programme</li>
            <li>Strong academic record and demonstrated research or writing interest</li>
            <li>Commitment of at least 3 months (full-time or part-time)</li>
          </ul>

          <h3 className="mb-3 text-primary">How to Apply</h3>
          <ol className="mb-6 list-decimal space-y-2 pl-5 text-[var(--color-text-light)]">
            <li>Prepare your CV and a brief statement of interest (300–500 words)</li>
            <li>Complete the online application form below and upload your CV</li>
            <li>Shortlisted candidates will be invited for an interview</li>
          </ol>

          <p className="mb-6 text-sm text-[var(--color-text-light)]">
            <strong>Application deadline:</strong> Rolling admissions — apply anytime. Priority given to applications received before 31 August 2026.
          </p>

          <div className="flex flex-wrap gap-4">
            <ApplyNowButton
              formKey="internship"
              className="btn-primary inline-flex items-center gap-2"
              fallbackHref={`mailto:${SITE.emails.admissions}?subject=Internship Application`}
            >
              Apply Now
            </ApplyNowButton>
            <Link href="/careers/internship-opportunities" className="btn-outline inline-flex">
              Careers: Internship Opportunities
            </Link>
          </div>

          <div className="mt-12">
            <EmbeddedGoogleForm
              formKey="internship"
              title="Internship application form"
              description="Submit your application and upload your CV below. Files are stored securely in Google Drive."
              height={1800}
              sectionId="internship-form"
              fallbackHref={`mailto:${SITE.emails.admissions}?subject=Internship Application`}
            />
          </div>
        </div>
      </section>
    </>
  );
}
