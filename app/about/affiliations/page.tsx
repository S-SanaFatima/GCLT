import { Metadata } from 'next';
import PageHero from '@/components/shared/PageHero';
import PartnerCard from '@/components/shared/PartnerCard';
import AnimatedSection from '@/components/shared/AnimatedSection';
import { academicPartners } from '@/lib/data/partners';

export const metadata: Metadata = {
  title: 'Affiliations & Partnerships',
  description:
    'Explore GCLT\'s academic affiliations and partnerships with leading universities and institutions worldwide.',
};

export default function AffiliationsPage() {
  return (
    <>
      <PageHero
        title="Affiliations & Partnerships"
        subtitle="Collaborating with leading institutions to advance scholarship and training."
        breadcrumbs={[
          { label: 'Home', href: '/' },
          { label: 'About', href: '/about' },
          { label: 'Affiliations' },
        ]}
      />
      <section className="section-padding bg-white">
        <div className="container-gclt">
          <div className="grid items-stretch gap-6 md:grid-cols-2 lg:grid-cols-3">
            {academicPartners.map((partner, i) => (
              <AnimatedSection key={partner.id} delay={i * 0.06} className="h-full">
                <PartnerCard partner={partner} variant="page" />
              </AnimatedSection>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
