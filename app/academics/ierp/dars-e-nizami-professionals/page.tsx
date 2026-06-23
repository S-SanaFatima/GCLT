import { Metadata } from 'next';
import IERPProgrammePageContent from '@/components/academics/IERPProgrammePageContent';
import { darsENizamiProfessionalsProgramme } from '@/lib/data/ierpProgrammes';

export const metadata: Metadata = {
  title: 'Dars-e-Niẓāmī Class for Professionals',
  description:
    'Traditional Islamic sciences for working professionals — flexible evening and weekend Dars-e-Niẓāmī classes at GCLT.',
};

export default function DarsENizamiProfessionalsPage() {
  return (
    <IERPProgrammePageContent
      programme={darsENizamiProfessionalsProgramme}
      breadcrumbs={[
        { label: 'Home', href: '/' },
        { label: 'Academics', href: '/academics' },
        { label: 'IERP', href: '/academics/ierp' },
        { label: 'Dars-e-Niẓāmī for Professionals' },
      ]}
      catalogHref="/academics/programmes/dars-e-nizami"
    />
  );
}
