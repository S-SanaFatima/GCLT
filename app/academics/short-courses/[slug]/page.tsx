import { redirect } from 'next/navigation';
import { legacyProgramSlugs } from '@/lib/data/programs';

interface Props {
  params: { slug: string };
}

export default function ShortCourseRedirect({ params }: Props) {
  const slug = legacyProgramSlugs[params.slug] ?? params.slug;
  redirect(`/academics/programmes/${slug}`);
}
