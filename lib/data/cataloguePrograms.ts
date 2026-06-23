import { ALL_DELIVERY_MODES, type DeliveryMode } from '@/lib/deliveryMode';

export type ProgramStatus = 'live' | 'launching-soon' | 'future';
export type CatalogueCategory =
  | 'professional-diploma'
  | 'professional-certificate'
  | 'executive-diploma'
  | 'executive-certificate'
  | 'traditional'
  | 'bridge';
export type ProgramVariant = 'default' | 'traditional' | 'bridge';
export type ProgramType =
  | 'diploma'
  | 'short-course'
  | 'traditional'
  | 'bridge'
  | 'training'
  | 'internship';

export interface ProgramFeeTier {
  pkr: number;
  usd: number;
  instalment?: string;
  label?: string;
}

export interface ProgramFees {
  onsite: ProgramFeeTier;
  online: ProgramFeeTier;
  subsidised?: boolean;
  note?: string;
}

export interface ProgramModule {
  title: string;
  topics: string[];
}

export interface Program {
  slug: string;
  catchyTitle: string;
  academicName: string;
  slogan: string;
  title: string;
  type: ProgramType;
  catalogueCategory: CatalogueCategory;
  status: ProgramStatus;
  variant: ProgramVariant;
  deliveryOptions: DeliveryMode[];
  overview: string;
  whoItsFor: string;
  keyModules: string[];
  aims: string[];
  modules: ProgramModule[];
  faculty: string[];
  eligibility: string[];
  howToApply: string[];
  schedule: string;
  durationOnsite: string;
  durationOnline: string;
  fees: ProgramFees;
  deadline?: string;
  brochureUrl?: string;
  contactEmail?: string;
  quickFacts: {
    qualification: string;
    yearOfEntry: string;
    modeOfDelivery: string;
    duration: string;
    certificateBy: string;
    location: string;
    fee: string;
  };
}

const CATEGORY_LABELS: Record<CatalogueCategory, string> = {
  'professional-diploma': 'Professional Diploma',
  'professional-certificate': 'Professional Certificate',
  'executive-diploma': 'Executive Diploma',
  'executive-certificate': 'Executive Certificate',
  traditional: 'Traditional Programme',
  bridge: 'Bridge Diploma',
};

const DEFAULT_HOW_TO_APPLY = [
  'Review programme details and choose your preferred delivery mode',
  'Prepare required documents (CV, academic transcripts where applicable)',
  'Email admissions@gclt.com.pk with the programme name and delivery mode in the subject line',
  'Attend an interview or orientation if shortlisted',
];

export function formatFeeTier(tier: ProgramFeeTier): string {
  const base = `PKR ${tier.pkr.toLocaleString('en-PK')} (~$${tier.usd})`;
  return tier.instalment ? `${base} (${tier.instalment})` : base;
}

export function getFeeForDelivery(program: Program, delivery: DeliveryMode): string {
  if (delivery === 'online') return formatFeeTier(program.fees.online);
  return formatFeeTier(program.fees.onsite);
}

export function getStatusLabel(status: ProgramStatus): string {
  if (status === 'live') return 'Enrolling now';
  if (status === 'launching-soon') return 'Opening soon';
  return 'Coming soon';
}

function listingType(category: CatalogueCategory): ProgramType {
  if (category === 'professional-diploma' || category === 'executive-diploma') return 'diploma';
  if (category === 'professional-certificate' || category === 'executive-certificate') {
    return 'short-course';
  }
  if (category === 'traditional') return 'traditional';
  return 'bridge';
}

function buildProgram(
  input: Omit<Program, 'title' | 'type' | 'aims' | 'modules' | 'eligibility' | 'howToApply' | 'quickFacts'> & {
    howToApply?: string[];
  },
): Program {
  const type = listingType(input.catalogueCategory);
  const qualification = CATEGORY_LABELS[input.catalogueCategory];

  return {
    ...input,
    title: input.catchyTitle,
    type,
    aims: [],
    modules: [{ title: 'Key Modules', topics: input.keyModules }],
    eligibility: [input.whoItsFor],
    howToApply: input.howToApply ?? DEFAULT_HOW_TO_APPLY,
    quickFacts: {
      qualification,
      yearOfEntry: '2026',
      modeOfDelivery: 'Online, In-Person, or Hybrid',
      duration: input.durationOnsite,
      certificateBy: 'Global Centre for Learning & Training',
      location: 'Islamabad, Pakistan or Online',
      fee: `Onsite: ${formatFeeTier(input.fees.onsite)} · Online: ${formatFeeTier(input.fees.online)}`,
    },
  };
}

export const cataloguePrograms: Program[] = [
  buildProgram({
    slug: 'islamic-banking-finance',
    catchyTitle: 'Money, Faith & Markets',
    academicName: 'Professional Diploma in Islamic Banking & Finance',
    slogan: 'Where ethical finance meets real-world opportunity.',
    catalogueCategory: 'professional-diploma',
    status: 'live',
    variant: 'default',
    deliveryOptions: ALL_DELIVERY_MODES,
    overview:
      "A comprehensive programme covering the principles, products, and practice of Islamic banking, takaful, and Sharī'ah-compliant investment. Combines classical fiqh of transactions (muʿāmalāt) with modern financial systems and regulatory frameworks.",
    whoItsFor:
      'Bank staff, finance graduates, accountants, entrepreneurs, and anyone seeking a career in Islamic finance across Pakistan and the Gulf.',
    keyModules: [
      'Foundations of Islamic Economics & Fiqh al-Muʿāmalāt',
      'Islamic Banking Products & Operations',
      'Takaful (Islamic Insurance) & Sukuk',
      "Sharī'ah Audit, Governance & Compliance",
      'Islamic Capital Markets & Fintech',
      'Case Studies & Industry Practice',
    ],
    faculty: ['Dr. Bilal Hussain', 'Dr. Hafiz Muhammad Siddique'],
    schedule: 'Weekend',
    durationOnsite: '6 Months',
    durationOnline: '6 Months',
    fees: {
      onsite: { pkr: 55000, usd: 195, instalment: 'or 2 × PKR 30,000' },
      online: { pkr: 40000, usd: 140, instalment: 'or 2 × PKR 22,000' },
    },
    contactEmail: 'admissions@gclt.com.pk',
  }),
  buildProgram({
    slug: 'healthcare-ethics-bioethics',
    catchyTitle: 'The Ethics of Life & Healing',
    academicName: 'Professional Diploma in Healthcare Ethics & Bioethics',
    slogan: 'Navigating the hardest decisions in medicine with wisdom.',
    catalogueCategory: 'professional-diploma',
    status: 'launching-soon',
    variant: 'default',
    deliveryOptions: ALL_DELIVERY_MODES,
    overview:
      'A structured programme exploring the moral, legal, and humane dimensions of modern healthcare — from clinical decision-making to research ethics — integrating global bioethics frameworks with Islamic and cultural perspectives relevant to Pakistan.',
    whoItsFor:
      'Doctors, nurses, medical students, hospital administrators, researchers, and members of ethics review boards.',
    keyModules: [
      'Principles of Biomedical Ethics',
      'Clinical Ethics & End-of-Life Care',
      'Research Ethics & Informed Consent',
      'Islamic Bioethics & Fiqh of Medicine',
      'Public Health Ethics & Policy',
      'Ethics Committees & Case Deliberation',
    ],
    faculty: ['Dr. Bilal Hussain'],
    schedule: 'Evening',
    durationOnsite: '4 Months',
    durationOnline: '4 Months',
    fees: {
      onsite: { pkr: 45000, usd: 160, instalment: 'or 2 × PKR 25,000' },
      online: { pkr: 32000, usd: 115, instalment: 'or 2 × PKR 18,000' },
    },
    contactEmail: 'admissions@gclt.com.pk',
  }),
  buildProgram({
    slug: 'ai-society',
    catchyTitle: 'AI & the Human Future',
    academicName: 'Certificate Program in Artificial Intelligence & Society',
    slogan: 'Understand the technology reshaping our world.',
    catalogueCategory: 'professional-certificate',
    status: 'live',
    variant: 'default',
    deliveryOptions: ALL_DELIVERY_MODES,
    overview:
      "A non-technical, big-picture programme on how artificial intelligence is transforming work, ethics, law, and society — and how professionals can engage with it responsibly. Focuses on understanding, judgement, and practical tools rather than coding.",
    whoItsFor:
      'Professionals, educators, researchers, policymakers, students, and anyone wanting to understand and use AI responsibly.',
    keyModules: [
      "What AI Is — and Isn't",
      'AI Tools for Everyday Professional Work',
      'Ethics, Bias & Accountability in AI',
      'AI, Law & Policy',
      'AI and the Future of Work',
      'Responsible Adoption — Practical Project',
    ],
    faculty: [],
    schedule: 'Evening / Weekend',
    durationOnsite: '8 Weeks',
    durationOnline: '8 Weeks',
    fees: {
      onsite: { pkr: 25000, usd: 90 },
      online: { pkr: 18000, usd: 65 },
    },
    contactEmail: 'admissions@gclt.com.pk',
  }),
  buildProgram({
    slug: 'leadership-strategic-management',
    catchyTitle: 'Lead Like a Visionary',
    academicName: 'Executive Diploma in Leadership & Strategic Management',
    slogan: 'Become the leader people choose to follow.',
    catalogueCategory: 'executive-diploma',
    status: 'launching-soon',
    variant: 'default',
    deliveryOptions: ALL_DELIVERY_MODES,
    overview:
      'A practical leadership programme that develops strategic thinking, team management, decision-making, and organisational skills. Designed around real cases and applicable across corporate, public-sector, academic, and non-profit settings.',
    whoItsFor:
      'Managers, team leads, entrepreneurs, public-sector officers, and professionals preparing for senior roles.',
    keyModules: [
      'Foundations of Leadership',
      'Strategic Thinking & Decision-Making',
      'Team Building & People Management',
      'Communication & Negotiation',
      'Change & Crisis Management',
      'Capstone Leadership Project',
    ],
    faculty: [],
    schedule: 'Weekend',
    durationOnsite: '5 Months',
    durationOnline: '5 Months',
    fees: {
      onsite: { pkr: 50000, usd: 177, instalment: 'or 2 × PKR 28,000' },
      online: { pkr: 35000, usd: 124, instalment: 'or 2 × PKR 20,000' },
    },
    contactEmail: 'admissions@gclt.com.pk',
  }),
  buildProgram({
    slug: 'research-methods-academic-writing',
    catchyTitle: 'Crack the Code of Research',
    academicName: 'Professional Certificate in Research Methods & Academic Writing',
    slogan: 'From confused to published — master the craft of research.',
    catalogueCategory: 'professional-certificate',
    status: 'live',
    variant: 'default',
    deliveryOptions: ALL_DELIVERY_MODES,
    overview:
      "GCLT's flagship research programme (evolved from the Technical Approaches to Research course). Takes participants from research design through data handling to writing and publishing work that meets international academic standards.",
    whoItsFor:
      'MPhil and PhD students, early-career researchers, university faculty, and professionals writing reports or papers.',
    keyModules: [
      'Designing a Research Project',
      'Qualitative & Quantitative Methods',
      'Literature Review & Referencing Tools',
      'Data Analysis Essentials',
      'Academic Writing & Structure',
      'Getting Published — Journals & Ethics',
    ],
    faculty: ['Dr. Kulsoom Fatima', 'Dr. Muhammad Nadir'],
    schedule: 'Weekend',
    durationOnsite: '10 Weeks',
    durationOnline: '10 Weeks',
    fees: {
      onsite: { pkr: 30000, usd: 106 },
      online: { pkr: 20000, usd: 71 },
    },
    deadline: 'Rolling admissions',
    contactEmail: 'admissions@gclt.com.pk',
  }),
  buildProgram({
    slug: 'psychology-counselling-practice',
    catchyTitle: 'The Science of the Self',
    academicName: 'Professional Diploma in Psychology & Counselling Practice',
    slogan: 'Understand the mind. Guide people. Change lives.',
    catalogueCategory: 'professional-diploma',
    status: 'launching-soon',
    variant: 'default',
    deliveryOptions: ALL_DELIVERY_MODES,
    overview:
      'An applied programme covering the foundations of psychology and practical counselling skills across career, family, and wellbeing contexts — integrating modern psychological practice with culturally and ethically grounded approaches.',
    whoItsFor:
      'Teachers, social workers, HR staff, parents, religious counsellors, and anyone pursuing a counselling-related path.',
    keyModules: [
      'Foundations of Psychology',
      'Counselling Skills & Ethics',
      'Career Counselling & Guidance',
      'Family & Marriage Counselling',
      'Stress, Anxiety & Wellbeing',
      'Supervised Practice & Case Work',
    ],
    faculty: [],
    schedule: 'Evening',
    durationOnsite: '6 Months',
    durationOnline: '6 Months',
    fees: {
      onsite: { pkr: 48000, usd: 170, instalment: 'or 2 × PKR 26,000' },
      online: { pkr: 34000, usd: 120, instalment: 'or 2 × PKR 19,000' },
    },
    contactEmail: 'admissions@gclt.com.pk',
  }),
  buildProgram({
    slug: 'digital-communication-media',
    catchyTitle: 'Own Your Voice',
    academicName: 'Professional Certificate in Digital Communication & Media Strategy',
    slogan: 'Build your brand. Command your audience.',
    catalogueCategory: 'professional-certificate',
    status: 'future',
    variant: 'default',
    deliveryOptions: ALL_DELIVERY_MODES,
    overview:
      'A modern, hands-on programme covering social media management, content creation, personal branding, and professional communication — turning everyday digital skills into a marketable professional discipline.',
    whoItsFor:
      'Students, freelancers, entrepreneurs, professionals, and organisations managing their public presence.',
    keyModules: [
      'Digital Communication Foundations',
      'Social Media Management & Strategy',
      'Content Creation & Storytelling',
      'Personal Branding & Professional Image',
      'Public Speaking & On-Camera Presence',
      'Campaign Project & Analytics',
    ],
    faculty: [],
    schedule: 'Evening / Weekend',
    durationOnsite: '8 Weeks',
    durationOnline: '8 Weeks',
    fees: {
      onsite: { pkr: 22000, usd: 78 },
      online: { pkr: 15000, usd: 53 },
    },
    contactEmail: 'admissions@gclt.com.pk',
  }),
  buildProgram({
    slug: 'public-policy-governance',
    catchyTitle: 'Shaping Nations',
    academicName: 'Executive Certificate in Public Policy & Governance',
    slogan: 'Turn ideas into impact at the national level.',
    catalogueCategory: 'executive-certificate',
    status: 'future',
    variant: 'default',
    deliveryOptions: ALL_DELIVERY_MODES,
    overview:
      'A programme on how policy is made, analysed, and implemented — equipping participants to engage with governance, public administration, and policy dialogue at national and international levels.',
    whoItsFor:
      'Civil servants, NGO professionals, researchers, journalists, and aspiring policymakers.',
    keyModules: [
      'Foundations of Public Policy',
      'Policy Analysis & Evidence',
      'Governance & Institutions',
      'Public Administration & Service Delivery',
      'Policy Communication & Advocacy',
      'Policy Brief — Capstone',
    ],
    faculty: [],
    schedule: 'Weekend',
    durationOnsite: '10 Weeks',
    durationOnline: '10 Weeks',
    fees: {
      onsite: { pkr: 28000, usd: 99 },
      online: { pkr: 20000, usd: 71 },
    },
    contactEmail: 'admissions@gclt.com.pk',
  }),
  buildProgram({
    slug: 'contemporary-islamic-studies',
    catchyTitle: 'Timeless Wisdom, Modern World',
    academicName: 'Professional Diploma in Contemporary Islamic Studies',
    slogan: "Classical scholarship for today's questions.",
    catalogueCategory: 'professional-diploma',
    status: 'future',
    variant: 'default',
    deliveryOptions: ALL_DELIVERY_MODES,
    overview:
      "GCLT's intellectual anchor — engaging the classical Islamic disciplines with the issues of the modern age: finance, bioethics, technology, governance, and society.",
    whoItsFor:
      'Graduates, professionals, educators, and anyone seeking a serious, modern engagement with the Islamic intellectual tradition.',
    keyModules: [
      'Foundations of the Islamic Sciences',
      'Qurʾān & Hadīth Studies in Context',
      'Fiqh of Contemporary Issues',
      'Islamic Thought & Modern Challenges',
      'Ethics, Society & Technology',
      'Research Essay',
    ],
    faculty: ['Dr. Falak Shair Faizi'],
    schedule: 'Weekend',
    durationOnsite: '6 Months',
    durationOnline: '6 Months',
    fees: {
      onsite: { pkr: 45000, usd: 160, instalment: 'or 2 × PKR 25,000' },
      online: { pkr: 32000, usd: 115, instalment: 'or 2 × PKR 18,000' },
    },
    contactEmail: 'admissions@gclt.com.pk',
  }),
  buildProgram({
    slug: 'dars-e-nizami',
    catchyTitle: "The Scholars' Path",
    academicName: 'Dars-e-Niẓāmī — Traditional Islamic Sciences Programme',
    slogan: 'The timeless curriculum of the great scholars — for a new generation.',
    catalogueCategory: 'traditional',
    status: 'launching-soon',
    variant: 'traditional',
    deliveryOptions: ALL_DELIVERY_MODES,
    overview:
      'A faithful rendering of the classical Dars-e-Niẓāmī curriculum, covering the core traditional sciences in a graded, multi-year structure. Taught by qualified scholars with flexible weekend and evening options for those balancing study with work.',
    whoItsFor:
      'Madrasah graduates seeking structure, working professionals, university students, and committed learners wanting authentic traditional knowledge alongside modern life.',
    keyModules: [
      'Arabic Grammar (Naḥw) & Morphology (Ṣarf)',
      "Qurʾān & ʿUlūm al-Qurʾān (Tafsīr)",
      'Hadīth & Mustalah al-Hadīth',
      'Fiqh & Usūl al-Fiqh',
      'Logic (Mantiq) & Islamic Belief (ʿAqīdah)',
      'Rhetoric (Balāghah) & Advanced Texts',
    ],
    faculty: ['Dr. Hafiz Muhammad Siddique', 'Dr. Imtiaz Ahmed'],
    schedule: 'Weekend & Evening',
    durationOnsite: 'Multi-Year (Staged)',
    durationOnline: 'Multi-Year (Staged)',
    fees: {
      onsite: { pkr: 20000, usd: 71, instalment: 'or monthly PKR 2,000', label: 'per stage/year' },
      online: { pkr: 15000, usd: 53, instalment: 'or monthly PKR 1,500', label: 'per stage/year' },
      note: 'Multi-year staged programme — fees quoted per stage.',
    },
    contactEmail: 'admissions@gclt.com.pk',
  }),
  buildProgram({
    slug: 'bridge-madrasah-graduates',
    catchyTitle: 'Looking Back to Looking Ahead',
    academicName: 'Bridge Diploma for Madrasah Graduates — Skills, Mentoring & Career Pathways',
    slogan: 'Honouring your foundation. Opening your future.',
    catalogueCategory: 'bridge',
    status: 'launching-soon',
    variant: 'bridge',
    deliveryOptions: ALL_DELIVERY_MODES,
    overview:
      "A structured transition programme for madrasah graduates (fāḍil / dars-e-niẓāmī). It builds contemporary skills, language, and professional confidence needed to enter universities, organisations, and industry — while honouring traditional scholarship. Includes mentoring and career matching.",
    whoItsFor:
      'Graduates of madāris (Dars-e-Niẓāmī, Shahādah al-ʿĀlamiyyah) seeking universities, the professional job market, teaching, media, research, or further study.',
    keyModules: [
      'Academic English & Communication Skills',
      'Digital Literacy & Essential Computer Skills',
      'Academic Bridging — Research, Writing & Study Skills',
      'Professional Readiness — CV, Interviews, Workplace Culture',
      'Understanding Modern Industries & Career Options',
      'One-to-One Mentoring & Personal Development Plan',
      'Career & Higher-Study Matching',
    ],
    faculty: [],
    schedule: 'Weekend & Evening',
    durationOnsite: '4–6 Months (Modular)',
    durationOnline: '4–6 Months (Modular)',
    fees: {
      onsite: { pkr: 30000, usd: 106, instalment: 'or 3 × PKR 11,000' },
      online: { pkr: 22000, usd: 78, instalment: 'or 3 × PKR 8,000' },
      subsidised: true,
      note: 'Subsidised, mission-driven pricing for madrasah graduates.',
    },
    contactEmail: 'admissions@gclt.com.pk',
  }),
];

export const legacyProgramSlugs: Record<string, string> = {
  'diploma-in-financial-jurisprudence': 'islamic-banking-finance',
  'technical-approaches-to-research': 'research-methods-academic-writing',
};

export const programmePolicies = {
  scheduling: [
    {
      title: 'Weekend Plan',
      points: [
        'Saturday & Sunday classes — ideal for working professionals',
        'Typically 2 sessions per day, 2–3 hours each',
        'Most diplomas run one full weekend day per week',
      ],
    },
    {
      title: 'Evening Plan',
      points: [
        'Weekday evening classes (after 6:00 PM)',
        '2–3 sessions per week, 1.5–2 hours each',
        'Suited to students and those near the Centre',
      ],
    },
    {
      title: 'Online & Hybrid',
      points: [
        'Live online classes for all major programmes (lower fee)',
        'Hybrid option: attend onsite or online, session by session',
        'Recorded sessions available to enrolled students',
      ],
    },
  ],
  fees: [
    'All fees are in Pakistani Rupees (PKR) and exclude external examination or certification charges.',
    'Instalment plans available on most diplomas (as shown per programme).',
    'Early-bird discount: 10% for enrolment before the deadline.',
    'Group/organisational discount: 15% for 3 or more enrolments together.',
    'Alumni discount: 10% for returning GCLT students.',
    'Need-based partial scholarships available for deserving students (application required).',
    'A certificate of completion is issued by GCLT on successful assessment.',
    'Fees are subject to revision; published figures on the website are final at time of enrolment.',
  ],
};

export function getProgramBySlug(slug: string): Program | undefined {
  const resolved = legacyProgramSlugs[slug] ?? slug;
  return cataloguePrograms.find((p) => p.slug === resolved);
}

export function getProgramsByType(type: ProgramType): Program[] {
  return cataloguePrograms.filter((p) => p.type === type);
}

export function getProgramsByStatus(status: ProgramStatus): Program[] {
  return cataloguePrograms.filter((p) => p.status === status);
}

export function getFeaturedProgrammes() {
  return {
    traditional: cataloguePrograms.find((p) => p.slug === 'dars-e-nizami')!,
    bridge: cataloguePrograms.find((p) => p.slug === 'bridge-madrasah-graduates')!,
  };
}

/** @deprecated Use cataloguePrograms */
export const programs = cataloguePrograms;
