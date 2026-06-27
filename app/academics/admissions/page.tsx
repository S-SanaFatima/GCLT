import { Metadata } from 'next';
import PageHero from '@/components/shared/PageHero';
import Link from 'next/link';
import {
  AdmissionsProgramIntentFromQuery,
  AdmissionsApplySectionsFromQuery,
} from '@/components/academics/AdmissionsQuerySections';
import DeliveryModesList from '@/components/academics/DeliveryModesList';
import { programs } from '@/lib/data/programs';

export const metadata: Metadata = {
  title: 'Admissions',
  description: 'Apply to GCLT diploma programmes, short courses, and internships. View deadlines, fees, and required documents.',
};

const openProgrammes = programs
  .filter((p) => p.status !== 'future')
  .map((p) => ({
    title: p.catchyTitle,
    subtitle: p.academicName,
    slug: p.slug,
    status: p.status,
    deadline: p.deadline || (p.status === 'launching-soon' ? 'Launching soon' : 'Contact admissions'),
    fee: p.quickFacts.fee,
    deliveryOptions: p.deliveryOptions,
    href: `/academics/programmes/${p.slug}`,
  }));

const requiredDocuments = [
  'Completed online application form',
  'Academic transcripts and certificates (upload in form)',
  'Statement of purpose (500 words)',
  'CV / resume',
  'Two references (for diploma programmes)',
  'Passport-size photograph',
  'Your preferred delivery mode (online, in-person, or hybrid)',
];

export default function AdmissionsPage() {
  return (
    <>
      <PageHero
        title="Admissions / Apply Now"
        subtitle="Take the next step in your academic and professional journey with GCLT."
        breadcrumbs={[
          { label: 'Home', href: '/' },
          { label: 'Academics', href: '/academics' },
          { label: 'Admissions' },
        ]}
      />
      <section className="section-padding bg-white">
        <div className="container-gclt max-w-3xl">
          <AdmissionsProgramIntentFromQuery />

          <h2 className="mb-6 text-primary">Open Programmes & Deadlines</h2>
          <div className="mb-10 space-y-4">
            {openProgrammes.map((p) => (
              <Link key={p.slug} href={p.href} className="card block p-6 transition-shadow hover:shadow-lg">
                <div className="flex flex-wrap items-start justify-between gap-4">
                  <div>
                    <h3 className="font-semibold text-primary">{p.title}</h3>
                    <p className="text-sm text-accent">{p.subtitle}</p>
                    <p className="mt-1 text-sm text-[var(--color-text-light)]">
                      {p.deadline} · {p.fee}
                    </p>
                    <div className="mt-3">
                      <p className="mb-2 text-xs font-medium text-[var(--color-text-light)]">
                        Available delivery modes
                      </p>
                      <DeliveryModesList modes={p.deliveryOptions} />
                    </div>
                  </div>
                  <span
                    className={`rounded-full px-3 py-1 text-xs font-medium ${
                      p.status === 'live'
                        ? 'bg-success/20 text-success'
                        : 'bg-sky-100 text-sky-800'
                    }`}
                  >
                    {p.status === 'live' ? 'Enrolling now' : 'Opening soon'}
                  </span>
                </div>
              </Link>
            ))}
          </div>

          <h2 className="mb-4 text-primary">How to Apply</h2>
          <ol className="mb-8 list-decimal space-y-3 pl-5 text-[var(--color-text-light)]">
            <li>Review programme details and choose your preferred delivery mode on the programme page</li>
            <li>Prepare required documents (see list below)</li>
            <li>Complete the online application form below and upload your documents</li>
            <li>Attend an interview if shortlisted</li>
          </ol>

          <h3 className="mb-3 text-primary">Required Documents</h3>
          <ul className="mb-8 list-disc space-y-2 pl-5 text-[var(--color-text-light)]">
            {requiredDocuments.map((doc) => (
              <li key={doc}>{doc}</li>
            ))}
          </ul>

          <div className="grid gap-4 sm:grid-cols-2">
            <Link href="/academics/diploma-programs" className="card p-6 hover:shadow-lg">
              <h3 className="text-primary">Diploma Programs</h3>
              <p className="mt-2 text-sm text-[var(--color-text-light)]">View all diploma offerings</p>
            </Link>
            <Link href="/academics/short-courses" className="card p-6 hover:shadow-lg">
              <h3 className="text-primary">Short Courses</h3>
              <p className="mt-2 text-sm text-[var(--color-text-light)]">Including TAR programme</p>
            </Link>
          </div>

          <AdmissionsApplySectionsFromQuery />
        </div>
      </section>
    </>
  );
}
