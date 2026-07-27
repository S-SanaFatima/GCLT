import { redirect } from 'next/navigation';
import { facultyMembers, legacyFacultySlugs } from '@/lib/data/faculty';

interface Props {
  params: { slug: string };
}

export function generateStaticParams() {
  const legacy = Object.keys(legacyFacultySlugs).map((slug) => ({ slug }));
  return [...facultyMembers.map((m) => ({ slug: m.slug })), ...legacy];
}

export default function TeamSlugRedirectPage({ params }: Props) {
  redirect(`/people/${params.slug}`);
}
