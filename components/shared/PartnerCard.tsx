import Image from 'next/image';
import Link from 'next/link';
import type { AcademicPartner } from '@/lib/data/partners';

interface PartnerCardProps {
  partner: AcademicPartner;
  variant?: 'home' | 'page';
}

export default function PartnerCard({ partner, variant = 'home' }: PartnerCardProps) {
  const isHome = variant === 'home';
  const location = partner.country || partner.location || '';

  const content = (
    <>
      <div
        className={`relative flex w-full shrink-0 items-center justify-center ${
          isHome ? 'h-28 sm:h-32' : 'h-36'
        } px-2 py-2`}
      >
        {partner.logo ? (
          <Image
            src={`${partner.logo}?v=8`}
            alt={`${partner.name} logo`}
            width={partner.logoWide ? 640 : 320}
            height={partner.logoWide ? 200 : 320}
            unoptimized
            className={`h-full w-full object-contain object-center transition-transform duration-300 group-hover:scale-[1.03] ${
              partner.logoWide
                ? 'max-h-[3.75rem] sm:max-h-[4.75rem]'
                : 'max-h-[6.5rem] sm:max-h-[7.5rem]'
            }`}
          />
        ) : (
          <span className="px-2 text-center text-sm font-bold leading-snug text-primary">{partner.short}</span>
        )}
      </div>

      <div className={`mt-3 flex w-full flex-col items-center text-center ${isHome ? 'min-h-[3.75rem]' : ''}`}>
        {!isHome && (
          <span className="mb-2 rounded-full bg-primary/10 px-2.5 py-0.5 text-[10px] font-semibold uppercase tracking-wider text-primary">
            {partner.badge}
          </span>
        )}
        <p className={`w-full font-bold leading-snug text-primary ${isHome ? 'text-sm' : 'text-base'}`}>
          {isHome ? partner.short : partner.name}
        </p>
        <p className="mt-1.5 text-[11px] font-semibold uppercase tracking-wider text-mid-gray">{location}</p>
      </div>

      {!isHome && (
        <>
          {partner.collaborationSince && (
            <p className="mt-2 text-xs text-mid-gray">Since {partner.collaborationSince}</p>
          )}
          <p className="mt-3 text-sm leading-relaxed text-[var(--color-text)]">{partner.focus}</p>
          <span className="mt-4 inline-flex text-sm font-semibold text-accent">View Partnership →</span>
        </>
      )}
    </>
  );

  const className = `group flex h-full flex-col items-center text-center transition-all duration-300 ${
    isHome
      ? 'rounded-2xl border border-border/60 bg-white px-4 py-6 shadow-card hover:-translate-y-1 hover:border-primary/25 hover:shadow-elevated'
      : 'card p-6 hover:border-primary/20'
  }`;

  if (!isHome) {
    return (
      <Link href={`/partnerships/${partner.slug}`} className={className}>
        {content}
      </Link>
    );
  }

  return <div className={className}>{content}</div>;
}
