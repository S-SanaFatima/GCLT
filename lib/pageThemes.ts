export type PageTheme =
  | 'default'
  | 'about'
  | 'academics'
  | 'research'
  | 'updates'
  | 'careers'
  | 'contact'
  | 'faq';

export function getThemeFromPath(pathname: string): PageTheme {
  if (pathname.startsWith('/about')) return 'about';
  if (pathname.startsWith('/academics')) return 'academics';
  if (pathname.startsWith('/research')) return 'research';
  if (pathname.startsWith('/updates')) return 'updates';
  if (pathname.startsWith('/careers')) return 'careers';
  if (pathname.startsWith('/contact')) return 'contact';
  if (pathname.startsWith('/faq')) return 'faq';
  return 'default';
}

/**
 * Homepage slider backgrounds (general/institutional — no people portraits).
 * Replace JPGs in public/images/hero/ to use your own photography.
 */
export const heroSlideImages = [
  '/images/hero/slide-1.jpg', // books / study
  '/images/hero/slide-2.jpg', // library
  '/images/hero/slide-3.jpg', // technology
  '/images/hero/slide-4.jpg', // legal documents / scholarship
  '/images/hero/slide-5.jpg', // research workspace
  '/images/hero/slide-6.jpg', // modern institution interior
] as const;

export const pageThemeStyles: Record<
  PageTheme,
  { hero: string; content: string; accent: string; heroImage: string }
> = {
  default: {
    hero: 'hero-theme-default',
    content: 'page-content-default',
    accent: 'from-primary to-primary-dark',
    heroImage: heroSlideImages[0],
  },
  about: {
    hero: 'hero-theme-about',
    content: 'page-content-about',
    accent: 'from-[#1A3E8C] to-[#2B5CB8]',
    heroImage: heroSlideImages[0],
  },
  academics: {
    hero: 'hero-theme-academics',
    content: 'page-content-academics',
    accent: 'from-[#122D6B] to-[#1A3E8C]',
    heroImage: heroSlideImages[1],
  },
  research: {
    hero: 'hero-theme-research',
    content: 'page-content-research',
    accent: 'from-[#0F2347] to-[#1A3E8C]',
    heroImage: heroSlideImages[1],
  },
  updates: {
    hero: 'hero-theme-updates',
    content: 'page-content-updates',
    accent: 'from-[#1A3E8C] to-[#3D5A99]',
    heroImage: heroSlideImages[2],
  },
  careers: {
    hero: 'hero-theme-careers',
    content: 'page-content-careers',
    accent: 'from-[#1A3E8C] via-[#1A3E8C] to-[#D4891A]',
    heroImage: heroSlideImages[4],
  },
  contact: {
    hero: 'hero-theme-contact',
    content: 'page-content-contact',
    accent: 'from-primary to-accent-dark',
    heroImage: heroSlideImages[0],
  },
  faq: {
    hero: 'hero-theme-faq',
    content: 'page-content-faq',
    accent: 'from-[#1A3E8C] to-[#64748B]',
    heroImage: heroSlideImages[3],
  },
};
