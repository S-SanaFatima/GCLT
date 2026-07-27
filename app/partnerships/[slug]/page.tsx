import { Metadata } from 'next';
import Link from 'next/link';
import PageHero from '@/components/shared/PageHero';
import { getPartnerBySlug, partnershipsNotice } from '@/lib/data/partners';
import { notFound } from 'next/navigation';

interface PageProps {
  params: { slug: string };
}

export function generateStaticParams() {
  return [
    { slug: 'gcwus' },
    { slug: 'council-of-islamic-ideology' },
    { slug: 'universiti-malaya' },
    { slug: 'iium' },
    { slug: 'guidance-college' },
  ];
}

export function generateMetadata({ params }: PageProps): Metadata {
  const partner = getPartnerBySlug(params.slug);
  if (!partner) return { title: 'Partnership' };
  return {
    title: partner.name,
    description: `GCLT collaboration with ${partner.name}: ${partner.focus}`,
  };
}

export default function PartnershipDetailPage({ params }: PageProps) {
  const partner = getPartnerBySlug(params.slug);
  if (!partner) notFound();

  return (
    <>
      <PageHero
        title={partner.name}
        subtitle={`${partner.badge} · ${partner.country}`}
        breadcrumbs={[
          { label: 'Home', href: '/' },
          { label: 'About', href: '/about' },
          { label: 'Collaborations & Partnerships', href: '/about/collaborations-partnerships' },
          { label: partner.short },
        ]}
      />
      <section className="section-padding bg-white">
        <div className="container-gclt max-w-3xl">
          <p className="text-lg leading-relaxed text-[var(--color-text-light)]">{partner.focus}</p>

          <dl className="mt-10 grid gap-4 sm:grid-cols-2">
            <div className="rounded-xl border border-border/60 bg-off-white/50 px-5 py-4">
              <dt className="text-[11px] font-bold uppercase tracking-wider text-accent">Status</dt>
              <dd className="mt-1 text-sm font-medium text-primary">{partner.badge}</dd>
            </div>
            <div className="rounded-xl border border-border/60 bg-off-white/50 px-5 py-4">
              <dt className="text-[11px] font-bold uppercase tracking-wider text-accent">Location</dt>
              <dd className="mt-1 text-sm font-medium text-primary">{partner.country}</dd>
            </div>
            {partner.collaborationSince && (
              <div className="rounded-xl border border-border/60 bg-off-white/50 px-5 py-4">
                <dt className="text-[11px] font-bold uppercase tracking-wider text-accent">
                  Collaboration since
                </dt>
                <dd className="mt-1 text-sm font-medium text-primary">{partner.collaborationSince}</dd>
              </div>
            )}
            <div className="rounded-xl border border-border/60 bg-off-white/50 px-5 py-4">
              <dt className="text-[11px] font-bold uppercase tracking-wider text-accent">Category</dt>
              <dd className="mt-1 text-sm font-medium text-primary">
                {partner.category === 'strategic'
                  ? 'Strategic & Institutional Partners'
                  : 'International Academic Partners & Linkages'}
              </dd>
            </div>
          </dl>

          {partner.website && (
            <p className="mt-8">
              <a
                href={partner.website}
                target="_blank"
                rel="noopener noreferrer"
                className="font-semibold text-primary hover:text-accent"
              >
                Visit official website →
              </a>
            </p>
          )}

          <div className="mt-10 rounded-2xl border border-border/70 bg-off-white/80 p-5">
            <p className="text-sm leading-relaxed text-[var(--color-text-light)]">{partnershipsNotice}</p>
            <p className="mt-3 text-xs text-mid-gray">Last updated: July 2026</p>
          </div>

          <div className="mt-8">
            <Link href="/about/collaborations-partnerships" className="btn-outline inline-flex">
              All Collaborations
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}
