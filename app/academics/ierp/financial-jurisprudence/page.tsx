import { Metadata } from 'next';
import IERPProgrammePageContent from '@/components/academics/IERPProgrammePageContent';
import { financialJurisprudenceProgramme } from '@/lib/data/ierpProgrammes';

export const metadata: Metadata = {
  title: 'Specialization in Islamic Jurisprudence of Financial Transactions',
  description:
    'Two-year Postgraduate Certificate in the Islamic Jurisprudence of Financial Transactions at GCLT — Islamic finance, fintech, blockchain, and Sharīʿah-compliant practice.',
};

export default function FinancialJurisprudencePage() {
  return (
    <IERPProgrammePageContent
      programme={financialJurisprudenceProgramme}
      breadcrumbs={[
        { label: 'Home', href: '/' },
        { label: 'Academics', href: '/academics' },
        { label: 'IERP', href: '/academics/ierp' },
        { label: 'Financial Jurisprudence' },
      ]}
      catalogHref="/academics/programmes/islamic-banking-finance"
    />
  );
}
