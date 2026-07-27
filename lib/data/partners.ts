export type PartnerCategory = 'strategic' | 'international';

export type PartnerBadge =
  | 'Strategic Academic Partner'
  | 'Policy & Research Partner'
  | 'International Academic Partner'
  | 'Islamic Education Partner'
  | 'MoU Partner'
  | 'Academic Partner'
  | 'Research Collaboration'
  | 'Project-Based Collaboration'
  | 'International Academic Linkage';

export interface AcademicPartner {
  id: string;
  slug: string;
  short: string;
  name: string;
  country: string;
  /** @deprecated use country */
  location?: string;
  logo?: string;
  category: PartnerCategory;
  badge: PartnerBadge;
  collaborationSince?: string;
  focus: string;
  website?: string;
  logoBg?: string;
  logoWide?: boolean;
  logoTall?: boolean;
  logoScale?: number;
  /** Official mark uses light artwork on dark — keep a black logo stage (not blue) */
  logoOnDark?: boolean;
}

/** Confirmed institutions only (designer brief §4.2). Do not add logos without written authorisation. */
export const academicPartners: AcademicPartner[] = [
  {
    id: 'gcwus',
    slug: 'gcwus',
    short: 'GCWUS',
    name: 'Government College Women University Sialkot (GCWUS)',
    country: 'Pakistan',
    logo: '/images/partners/gcwus.png',
    logoTall: true,
    category: 'strategic',
    badge: 'Strategic Academic Partner',
    collaborationSince: '2024',
    focus: 'Academic development, research training, capacity-building, conferences, and women’s academic and leadership development',
    website: 'https://gcwus.edu.pk',
  },
  {
    id: 'cii',
    slug: 'council-of-islamic-ideology',
    short: 'CII',
    name: 'Council of Islamic Ideology (CII)',
    country: 'Islamabad, Pakistan',
    logo: '/images/partners/cii.png',
    logoTall: true,
    category: 'strategic',
    badge: 'Policy & Research Partner',
    collaborationSince: '2024',
    focus: 'Sharīʿah and law harmonisation, legislative policy, family law, bioethics, policy dialogues, and scholarly consultation',
    website: 'https://cii.gov.pk',
  },
  {
    id: 'um',
    slug: 'universiti-malaya',
    short: 'UM',
    name: 'Universiti Malaya',
    country: 'Kuala Lumpur, Malaysia',
    logo: '/images/partners/um.png',
    logoWide: true,
    category: 'international',
    badge: 'International Academic Partner',
    collaborationSince: '2024',
    focus: 'International research collaboration, academic exchange, joint seminars, law, Islamic studies, ethics and society',
    website: 'https://www.um.edu.my',
  },
  {
    id: 'iium',
    slug: 'iium',
    short: 'IIUM',
    name: 'International Islamic University Malaysia (IIUM)',
    country: 'Kuala Lumpur, Malaysia',
    logo: '/images/partners/iium-malaysia.png',
    logoWide: true,
    category: 'international',
    badge: 'International Academic Partner',
    collaborationSince: '2024',
    focus: 'Sharīʿah and comparative legal studies, Islamic thought, research methodology, ethics and emerging technologies, mentoring and publications',
    website: 'https://www.iium.edu.my',
  },
  {
    id: 'guidance-college',
    slug: 'guidance-college',
    short: 'Guidance',
    name: 'Guidance College',
    country: 'United States',
    logo: '/images/partners/guidance-college.png',
    logoWide: true,
    category: 'international',
    badge: 'Islamic Education Partner',
    collaborationSince: '2025',
    focus: 'Islamic education and international learning: curriculum development, online learning, teacher development, education for children, families and new Muslims',
    website: 'https://guidancecollege.org',
  },
];

export const strategicPartners = academicPartners.filter((p) => p.category === 'strategic');
export const internationalPartners = academicPartners.filter((p) => p.category === 'international');

export function getPartnerBySlug(slug: string): AcademicPartner | undefined {
  return academicPartners.find((p) => p.slug === slug || p.id === slug);
}

export const partnershipsNotice =
  'Institutional names and logos displayed on this page represent the nature of collaboration approved between GCLT and the respective organisation. The scope of each relationship is limited to the activities, programmes, or arrangements mutually agreed by the concerned institutions. The listing of an institution does not imply sponsorship, accreditation, endorsement, or authority beyond the documented scope of collaboration.';
