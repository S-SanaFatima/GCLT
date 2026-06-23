'use client';

import Image from 'next/image';
import { usePathname } from 'next/navigation';
import Breadcrumb from './Breadcrumb';
import { getThemeFromPath, pageThemeStyles, type PageTheme } from '@/lib/pageThemes';

interface PageHeroProps {
  title: string;
  subtitle?: string;
  breadcrumbs?: { label: string; href?: string }[];
  variant?: PageTheme;
  badge?: string;
}

export default function PageHero({
  title,
  subtitle,
  breadcrumbs,
  variant,
  badge,
}: PageHeroProps) {
  const pathname = usePathname();
  const theme = variant || getThemeFromPath(pathname);
  const { hero: heroClass, heroImage } = pageThemeStyles[theme];

  return (
    <section className={`${heroClass} relative overflow-hidden py-20 lg:py-28`}>
      <div className="absolute inset-0">
        <Image
          src={heroImage}
          alt=""
          fill
          priority
          sizes="100vw"
          className="object-cover"
        />
      </div>
      <div className="pointer-events-none absolute inset-0 z-[2] bg-gradient-to-r from-primary-dark/90 via-primary/75 to-primary/50" />
      <div className="pointer-events-none absolute inset-0 z-[2] bg-mesh-hero opacity-60" />
      <div className="pattern-dots pointer-events-none absolute inset-0 z-[2] opacity-20" />
      <div className="pointer-events-none absolute -right-20 top-0 z-[2] h-64 w-64 rounded-full bg-accent/10 blur-3xl" />
      <div className="pointer-events-none absolute -bottom-10 -left-10 z-[2] h-48 w-48 rounded-full bg-white/5 blur-2xl" />

      <div className="container-gclt relative z-10">
        {breadcrumbs && <Breadcrumb items={breadcrumbs} />}
        {badge && (
          <span className="section-label section-label-light mb-4">{badge}</span>
        )}
        {!badge && (
          <span className="section-label section-label-light mb-4">GCLT</span>
        )}
        <h1 className="max-w-4xl text-white">{title}</h1>
        {subtitle && (
          <p className="mt-5 max-w-2xl text-lg leading-relaxed text-gray-200/90 md:text-xl">
            {subtitle}
          </p>
        )}
        <div className="mt-8 h-1 w-20 rounded-full bg-gradient-to-r from-accent to-accent-light" />
      </div>

      <div className="absolute bottom-0 left-0 right-0 z-10">
        <svg viewBox="0 0 1440 48" fill="none" className="w-full text-off-white" preserveAspectRatio="none">
          <path
            d="M0 48L60 42C120 36 240 24 360 18C480 12 600 12 720 18C840 24 960 36 1080 39C1200 42 1320 36 1380 33L1440 30V48H0Z"
            fill="currentColor"
          />
        </svg>
      </div>
    </section>
  );
}
