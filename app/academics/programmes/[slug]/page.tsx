import { Metadata } from 'next';
import { notFound, redirect } from 'next/navigation';
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
  return cataloguePrograms.map((p) => ({ slug: p.slug }));
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
    redirect(`/academics/programmes/${legacyProgramSlugs[params.slug]}`);
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
