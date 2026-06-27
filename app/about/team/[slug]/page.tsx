import { Metadata } from 'next';
import Image from 'next/image';
import Link from 'next/link';
import { notFound } from 'next/navigation';
import ClientRedirect from '@/components/shared/ClientRedirect';
import PageHero from '@/components/shared/PageHero';
import { getFacultyBySlug, legacyFacultySlugs, facultyMembers } from '@/lib/data/faculty';
import { Linkedin, ExternalLink } from 'lucide-react';

interface Props {
  params: { slug: string };
}

export function generateStaticParams() {
  const legacy = Object.keys(legacyFacultySlugs).map((slug) => ({ slug }));
  return [...facultyMembers.map((m) => ({ slug: m.slug })), ...legacy];
}

export function generateMetadata({ params }: Props): Metadata {
  const member = getFacultyBySlug(params.slug);
  if (!member) return { title: 'Faculty Member' };
  return {
    title: member.name,
    description: `${member.name} — ${member.designation || 'Faculty'} at the Global Centre for Learning & Training.`,
  };
}

export default function FacultyProfilePage({ params }: Props) {
  if (legacyFacultySlugs[params.slug]) {
    return (
      <ClientRedirect to={`/about/team/${legacyFacultySlugs[params.slug]}/`} />
    );
  }

  const member = getFacultyBySlug(params.slug);
  if (!member) notFound();

  return (
    <>
      <PageHero
        title={member.name}
        subtitle={member.designation}
        breadcrumbs={[
          { label: 'Home', href: '/' },
          { label: 'About', href: '/about' },
          { label: 'Team', href: '/about/team' },
          { label: member.name },
        ]}
      />
      <section className="section-padding bg-white">
        <div className="container-gclt max-w-5xl">
          <div className="grid gap-10 md:grid-cols-[200px_1fr] md:gap-10">
            <div>
              <div className="relative mx-auto h-60 w-48 overflow-hidden rounded-lg bg-[#e8ecf2] md:mx-0">
                <Image
                  src={member.photo || '/images/faculty/placeholder.svg'}
                  alt={member.name}
                  fill
                  unoptimized={!!member.photo?.endsWith('.png')}
                  className="object-cover object-[center_12%]"
                  sizes="192px"
                  priority
                />
              </div>
            </div>

            <div>
              {member.researchUnit && (
                <p className="mb-1 text-sm font-medium text-primary">{member.researchUnit}</p>
              )}
              {member.affiliation && (
                <p className="mb-8 text-sm leading-relaxed text-[var(--color-text-light)]">
                  {member.affiliation}
                </p>
              )}

              {member.bio && (
                <div className="mb-8">
                  <h2 className="mb-3 text-lg font-bold text-primary">Profile</h2>
                  <p className="leading-relaxed text-[var(--color-text-light)]">{member.bio}</p>
                </div>
              )}

              {member.qualifications && member.qualifications.length > 0 && (
                <div className="mb-8">
                  <h2 className="mb-3 text-lg font-bold text-primary">Qualifications</h2>
                  <ul className="list-disc space-y-2 pl-5 text-[var(--color-text-light)]">
                    {member.qualifications.map((q) => (
                      <li key={q}>{q}</li>
                    ))}
                  </ul>
                </div>
              )}

              {member.researchInterests && member.researchInterests.length > 0 && (
                <div className="mb-8">
                  <h2 className="mb-3 text-lg font-bold text-primary">Research Interests</h2>
                  <ul className="space-y-2 text-[var(--color-text-light)]">
                    {member.researchInterests.map((interest) => (
                      <li key={interest} className="flex gap-2 text-sm">
                        <span className="text-accent">·</span>
                        {interest}
                      </li>
                    ))}
                  </ul>
                </div>
              )}

              {member.coursesTaught && member.coursesTaught.length > 0 && (
                <div className="mb-8">
                  <h2 className="mb-3 text-lg font-bold text-primary">Courses at GCLT</h2>
                  <ul className="list-disc space-y-1 pl-5 text-[var(--color-text-light)]">
                    {member.coursesTaught.map((course) => (
                      <li key={course}>{course}</li>
                    ))}
                  </ul>
                </div>
              )}

              <div className="flex flex-wrap gap-4 border-t border-border/60 pt-8">
                {member.linkedin && (
                  <a
                    href={member.linkedin}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-sm font-medium text-primary hover:text-accent"
                  >
                    LinkedIn
                  </a>
                )}
                {member.orcid && (
                  <a
                    href={member.orcid}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-1 text-sm font-medium text-primary hover:text-accent"
                  >
                    <ExternalLink className="h-4 w-4" /> ORCID
                  </a>
                )}
                {member.googleScholar && (
                  <a
                    href={member.googleScholar}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-1 text-sm font-medium text-primary hover:text-accent"
                  >
                    <ExternalLink className="h-4 w-4" /> Google Scholar
                  </a>
                )}
              </div>

              <Link href="/about/team" className="btn-outline mt-8 inline-flex">
                ← Back to Team
              </Link>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
