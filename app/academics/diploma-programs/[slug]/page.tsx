import ClientRedirect from '@/components/shared/ClientRedirect';
import { legacyProgramSlugs } from '@/lib/data/programs';

interface Props {
  params: { slug: string };
}

export function generateStaticParams() {
  return Object.keys(legacyProgramSlugs).map((slug) => ({ slug }));
}

export default function DiplomaProgramRedirect({ params }: Props) {
  const slug = legacyProgramSlugs[params.slug] ?? params.slug;
  return <ClientRedirect to={`/academics/programmes/${slug}/`} />;
}
