import { Metadata } from 'next';
import { notFound } from 'next/navigation';
import ClientRedirect from '@/components/shared/ClientRedirect';
import ProgramPageTemplate from '@/components/academics/ProgramPageTemplate';
import {
  cataloguePrograms,
  getProgramBySlug,
  legacyProgramSlugs,
} from '@/lib/data/programs';
import { buildCourseJsonLd } from '@/lib/seo/courseJsonLd';

interface Props {
  params: { slug: string };
}

export function generateStaticParams() {
  const legacy = Object.keys(legacyProgramSlugs).map((slug) => ({ slug }));
  return [...cataloguePrograms.map((p) => ({ slug: p.slug })), ...legacy];
}

export function generateMetadata({ params }: Props): Metadata {
  const program = getProgramBySlug(params.slug);
  if (!program) return { title: 'Programme' };
  return {
    title: `${program.catchyTitle} | ${program.academicName}`,
    description: program.overview.slice(0, 160),
  };
}

export default function ProgrammePage({ params }: Props) {
  if (legacyProgramSlugs[params.slug]) {
    return (
      <ClientRedirect to={`/academics/programmes/${legacyProgramSlugs[params.slug]}/`} />
    );
  }

  const program = getProgramBySlug(params.slug);
  if (!program) notFound();

  return (
    <ProgramPageTemplate
      program={program}
      courseJsonLd={buildCourseJsonLd(program)}
      breadcrumbs={[
        { label: 'Home', href: '/' },
        { label: 'Academics', href: '/academics' },
        { label: 'Programme Catalogue', href: '/academics/programme-catalogue' },
        { label: program.catchyTitle },
      ]}
    />
  );
}
