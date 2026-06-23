export interface AcademicPartner {
  id: string;
  short: string;
  name: string;
  location: string;
  logo: string;
  /** Optional focus line for affiliations page */
  focus?: string;
  /** Logo area background */
  logoBg?: string;
  /** Wide horizontal logo */
  logoWide?: boolean;
  /** Taller logo area (stacked / vertical marks) */
  logoTall?: boolean;
  /** Visual scale when logo file has extra padding (home + page) */
  logoScale?: number;
}

export const academicPartners: AcademicPartner[] = [
  {
    id: 'gau',
    short: 'GAU',
    name: 'Grand Asian University',
    location: 'Sialkot',
    logo: '/images/partners/gau.png',
    focus: 'Academic collaboration & faculty exchange',
  },
  {
    id: 'iium',
    short: 'IIUM',
    name: 'IIUM Malaysia',
    location: 'Malaysia',
    logo: '/images/partners/iium-malaysia.png',
    logoTall: true,
    focus: 'Research & postdoctoral fellowships',
  },
  {
    id: 'nust',
    short: 'NUST',
    name: 'NUST Islamabad',
    location: 'Islamabad',
    logo: '/images/partners/nust.png',
    logoTall: true,
    focus: 'Interdisciplinary research',
  },
  {
    id: 'bls',
    short: 'BLS',
    name: 'Birmingham Law School',
    location: 'UK',
    logo: '/images/partners/bls.png',
    logoTall: true,
    focus: 'Legal research & scholarship',
  },
  {
    id: 'um',
    short: 'UM',
    name: 'Universiti Malaya',
    location: 'Malaysia',
    logo: '/images/partners/um.png',
    logoTall: true,
    focus: 'Islamic studies & contemporary society',
  },
  {
    id: 'istac',
    short: 'ISTAC',
    name: 'ISTAC IIUM',
    location: 'IIUM',
    logo: '/images/partners/istac.png',
    logoTall: true,
    logoScale: 1.85,
    focus: 'Islamic civilization & thought',
  },
];
