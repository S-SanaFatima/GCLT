import Link from 'next/link';
import PageHero from '@/components/shared/PageHero';
import AccordionItem from '@/components/shared/AccordionItem';
import ProgramDeliverySection from './ProgramDeliverySection';
import ProgramMobileApplyBar from './ProgramMobileApplyBar';
import QuickFactsSidebar from './QuickFactsSidebar';
import ProgramStatusBadge from './ProgramStatusBadge';
import { ProgramEnrollmentProvider } from './ProgramEnrollmentContext';
import { facultyMembers } from '@/lib/data/faculty';
import { SITE } from '@/lib/utils';
import type { Program } from '@/lib/data/programs';

interface ProgramPageTemplateProps {
  program: Program;
  breadcrumbs: { label: string; href?: string }[];
  courseJsonLd?: object;
}

function facultySlug(name: string) {
  const member = facultyMembers.find((f) => f.name === name);
  return member?.slug;
}

const variantHeroClass: Record<Program['variant'], string> = {
  default: '',
  traditional:
    'border-b border-amber-200/40 bg-gradient-to-r from-amber-50 via-[#fdf8f3] to-amber-50/80',
  bridge:
    'border-b border-primary/15 bg-gradient-to-r from-primary/[0.06] via-white to-accent/[0.08]',
};

export default function ProgramPageTemplate({
  program,
  breadcrumbs,
  courseJsonLd,
}: ProgramPageTemplateProps) {
  const contactEmail = program.contactEmail || SITE.emails.admissions;

  return (
    <ProgramEnrollmentProvider program={program}>
      {courseJsonLd && (
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(courseJsonLd) }}
        />
      )}
      <PageHero title={program.catchyTitle} subtitle={program.academicName} breadcrumbs={breadcrumbs} />

      <div className={`py-5 ${variantHeroClass[program.variant]}`}>
        <div className="container-gclt flex flex-wrap items-center justify-between gap-4">
          <p className="text-base font-medium italic text-primary md:text-lg">
            &ldquo;{program.slogan}&rdquo;
          </p>
          <ProgramStatusBadge status={program.status} />
        </div>
      </div>

      <ProgramDeliverySection />
      <section className="section-padding bg-white">
        <div className="container-gclt">
          <div className="grid gap-10 lg:grid-cols-3">
            <div className="lg:col-span-2">
              <div className="prose max-w-none">
                <h2 className="text-primary">Programme Overview</h2>
                <p className="text-[var(--color-text-light)]">{program.overview}</p>

                <h2 className="mt-10 text-primary">Who It&apos;s For</h2>
                <p className="text-[var(--color-text-light)]">{program.whoItsFor}</p>

                <h2 className="mt-10 text-primary">Key Modules</h2>
                <div className="mt-4">
                  {program.modules.map((mod, i) => (
                    <AccordionItem key={mod.title} title={mod.title} defaultOpen={i === 0}>
                      <ul className="list-disc space-y-1 pl-5">
                        {mod.topics.map((topic) => (
                          <li key={topic}>{topic}</li>
                        ))}
                      </ul>
                    </AccordionItem>
                  ))}
                </div>

                {program.faculty.length > 0 && (
                  <>
                    <h2 className="mt-10 text-primary">Faculty</h2>
                    <ul className="list-disc space-y-1 pl-5 text-[var(--color-text-light)]">
                      {program.faculty.map((f) => {
                        const slug = facultySlug(f);
                        return (
                          <li key={f}>
                            {slug ? (
                              <Link href={`/about/team/${slug}`} className="text-primary hover:text-accent">
                                {f}
                              </Link>
                            ) : (
                              f
                            )}
                          </li>
                        );
                      })}
                    </ul>
                  </>
                )}

                <h2 className="mt-10 text-primary">How to Apply</h2>
                <ol className="list-decimal space-y-2 pl-5 text-[var(--color-text-light)]">
                  {program.howToApply.map((step) => (
                    <li key={step}>{step}</li>
                  ))}
                </ol>

                {program.deadline && (
                  <>
                    <h2 className="mt-10 text-primary">Application Deadline</h2>
                    <p className="text-[var(--color-text-light)]">{program.deadline}</p>
                  </>
                )}

                {program.brochureUrl && (
                  <div className="mt-8">
                    <a
                      href={program.brochureUrl}
                      className="btn-outline"
                      download
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      Download Brochure (PDF)
                    </a>
                  </div>
                )}

                <h2 className="mt-10 text-primary">Contact for this Programme</h2>
                <p className="text-[var(--color-text-light)]">
                  For enquiries about {program.academicName},{' '}
                  <a href={`mailto:${contactEmail}`} className="text-primary hover:underline">
                    {contactEmail}
                  </a>
                </p>
              </div>
            </div>
            <QuickFactsSidebar />
          </div>
        </div>
      </section>

      <ProgramMobileApplyBar />
    </ProgramEnrollmentProvider>
  );
}
