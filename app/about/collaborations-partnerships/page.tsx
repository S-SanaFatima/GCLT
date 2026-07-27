import { Metadata } from 'next';
import Link from 'next/link';
import PageHero from '@/components/shared/PageHero';
import PartnerCard from '@/components/shared/PartnerCard';
import AnimatedSection from '@/components/shared/AnimatedSection';
import {
  internationalPartners,
  partnershipsNotice,
  strategicPartners,
} from '@/lib/data/partners';

export const metadata: Metadata = {
  title: 'Collaborations & Partnerships',
  description:
    'GCLT collaborations and partnerships with confirmed strategic and international academic institutions.',
};

export default function CollaborationsPartnershipsPage() {
  return (
    <>
      <PageHero
        title="Collaborations & Partnerships"
        subtitle="Confirmed institutional collaborations and international academic linkages — presented with clear status and scope."
        breadcrumbs={[
          { label: 'Home', href: '/' },
          { label: 'About', href: '/about' },
          { label: 'Collaborations & Partnerships' },
        ]}
      />
      <section className="section-padding bg-white">
        <div className="container-gclt">
          <AnimatedSection className="mx-auto mb-14 max-w-3xl text-center">
            <p className="text-base leading-relaxed text-[var(--color-text)] md:text-lg">
              Partnerships are listed only where collaboration is documented. Status badges describe the
              nature of each relationship — not sponsorship, accreditation, or blanket endorsement.
            </p>
          </AnimatedSection>

          <AnimatedSection>
            <h2 className="text-2xl font-bold text-primary">Strategic & Institutional Partners</h2>
            <p className="mt-2 max-w-2xl text-sm text-[var(--color-text)]">
              Where a signed MoU, formal collaboration agreement, official consent, or continuing
              institutional arrangement exists.
            </p>
            <div className="mt-8 grid items-stretch gap-6 md:grid-cols-2">
              {strategicPartners.map((partner, i) => (
                <AnimatedSection key={partner.id} delay={i * 0.06} className="h-full">
                  <PartnerCard partner={partner} variant="page" />
                </AnimatedSection>
              ))}
            </div>
          </AnimatedSection>

          <AnimatedSection className="mt-16">
            <h2 className="text-2xl font-bold text-primary">International Academic Partners & Linkages</h2>
            <p className="mt-2 max-w-2xl text-sm text-[var(--color-text)]">
              Cooperation through research, conferences, faculty engagement, training, publications, or
              written correspondence — with or without a formal MoU.
            </p>
            <div className="mt-8 grid items-stretch gap-6 md:grid-cols-2 lg:grid-cols-3">
              {internationalPartners.map((partner, i) => (
                <AnimatedSection key={partner.id} delay={i * 0.06} className="h-full">
                  <PartnerCard partner={partner} variant="page" />
                </AnimatedSection>
              ))}
            </div>
          </AnimatedSection>

          <AnimatedSection className="mt-16 rounded-2xl border border-border/70 bg-off-white/80 p-6 sm:p-8">
            <p className="text-xs font-semibold uppercase tracking-[0.16em] text-accent">
              Institutional notice
            </p>
            <p className="mt-3 text-sm leading-relaxed text-[var(--color-text-light)]">{partnershipsNotice}</p>
            <p className="mt-4 text-xs text-mid-gray">Last updated: July 2026</p>
          </AnimatedSection>

          <div className="mt-10 text-center">
            <Link href="/contact" className="btn-primary inline-flex">
              Partnership Enquiries
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}
