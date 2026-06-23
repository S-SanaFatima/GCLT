import Image from 'next/image';
import type { AcademicPartner } from '@/lib/data/partners';

interface PartnerCardProps {
  partner: AcademicPartner;
  variant?: 'home' | 'page';
}

const HOME_LOGO_BOX = 'h-32';
const HOME_LOGO_MAX = '5rem';
const HOME_LOGO_MAX_W = '10.5rem';

export default function PartnerCard({ partner, variant = 'home' }: PartnerCardProps) {
  const isHome = variant === 'home';
  const logoScale = partner.logoScale ?? 1;

  const logoBoxHeight = isHome
    ? HOME_LOGO_BOX
    : partner.logoWide
      ? 'h-28'
      : 'h-32';

  const logoMaxHeight = isHome ? HOME_LOGO_MAX : partner.logoWide ? '4.5rem' : '5.5rem';
  const logoMaxWidth = isHome ? HOME_LOGO_MAX_W : '12rem';

  return (
    <div
      className={`group flex h-full flex-col items-center text-center transition-all duration-300 ${
        isHome
          ? 'rounded-2xl border border-border/60 bg-white px-4 py-8 shadow-card hover:-translate-y-1 hover:border-primary/25 hover:shadow-elevated'
          : 'card p-6 hover:border-primary/20'
      }`}
    >
      <div
        className={`flex w-full shrink-0 items-center justify-center overflow-hidden rounded-xl border border-border/40 px-3 py-3 ${
          partner.logoBg ?? 'bg-off-white'
        } ${logoBoxHeight}`}
      >
        <Image
          src={partner.logo}
          alt={`${partner.name} logo`}
          width={220}
          height={120}
          unoptimized
          className="object-contain object-center transition-transform duration-300 group-hover:scale-[1.02]"
          style={{
            maxHeight: logoMaxHeight,
            maxWidth: logoMaxWidth,
            width: 'auto',
            height: 'auto',
            transform: logoScale !== 1 ? `scale(${logoScale})` : undefined,
          }}
        />
      </div>

      <div
        className={`mt-5 flex w-full flex-col items-center text-center ${
          isHome ? 'min-h-[3.5rem]' : 'mt-5'
        }`}
      >
        <p
          className={`w-full font-bold leading-snug text-primary ${
            isHome ? 'text-sm' : 'text-base'
          }`}
        >
          {partner.name}
        </p>
        <p className="mt-1.5 text-[11px] font-semibold uppercase tracking-wider text-mid-gray">
          {partner.location}
        </p>
      </div>

      {!isHome && partner.focus && (
        <p className="mt-4 text-sm leading-relaxed text-[var(--color-text-light)]">{partner.focus}</p>
      )}
    </div>
  );
}
