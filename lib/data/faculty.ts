export type PeopleDirectory =
  | 'executive-leadership'
  | 'academic-administration'
  | 'professional-support'
  | 'academic-faculty';

export type AcademicCluster =
  | 'Law, Sharīʿah & Governance'
  | 'Islam, Religion, West & Society'
  | 'Islamic Thought & Civilisation'
  | 'Society, Gender & Public Policy'
  | 'Research Methods & Academic Development'
  | 'Technology, AI & Emerging Studies'
  | 'Islamic Education & Arabic Studies';

export interface FacultyMember {
  slug: string;
  name: string;
  /** Primary GCLT role shown on cards */
  designation?: string;
  /** Extra GCLT roles for leadership page when dual-listed */
  leadershipDesignation?: string;
  researchUnit?: string;
  /** External university/institution post — labelled as affiliation, not GCLT title */
  affiliation?: string;
  country?: string;
  bio?: string;
  researchInterests?: string[];
  qualifications?: string[];
  publications?: string[];
  coursesTaught?: string[];
  linkedin?: string;
  orcid?: string;
  googleScholar?: string;
  photo?: string;
  /** Where this person appears under /people/ */
  directories: PeopleDirectory[];
  academicCluster?: AcademicCluster;
  appointmentPeriod?: string;
}

export const facultyMembers: FacultyMember[] = [
  {
    slug: 'dr-bilal-hussain',
    name: 'Dr. Bilal Hussain',
    photo: '/images/faculty/dr-bilal-hussain.png',
    designation: 'Founding Director · Head, Legal Research Unit',
    leadershipDesignation: 'Founding Director · Head, Legal Research Unit',
    researchUnit: 'Legal Research',
    affiliation:
      'Assistant Professor, Faculty of Law, University of Sialkot · Postdoctoral Fellow, International Islamic University Malaysia (IIUM)',
    country: 'Pakistan',
    bio: 'Dr. Bilal Hussain is Founding Director of GCLT and Head of the Legal Research Unit. His scholarship spans Islamic bioethics, reproductive governance, and health law, and he leads GCLT’s institutional direction alongside teaching and research.',
    researchInterests: [
      'Reproductive Governance',
      'Islamic Bioethics',
      'Assisted Reproduction',
      'AI & Health Law',
      'Family Law',
    ],
    qualifications: [
      'PhD (Law), Ahmad Ibrahim Kulliyyah of Laws (AIKOL), International Islamic University Malaysia (IIUM)',
    ],
    directories: ['executive-leadership', 'academic-faculty'],
    academicCluster: 'Law, Sharīʿah & Governance',
  },
  {
    slug: 'dr-imtiaz-ahmed',
    name: 'Dr. Imtiaz Ahmed',
    photo: '/images/faculty/dr-imtiaz-ahmed.png',
    designation: 'Head, IRWS Research Unit',
    leadershipDesignation: 'Head, IRWS Research Unit',
    researchUnit: 'Islam, Religion, West and Society (IRWS)',
    affiliation: 'Associate Professor, Grand Asian University, Sialkot (GAUS), Punjab, Pakistan',
    country: 'Pakistan',
    bio: 'Dr. Imtiaz Ahmed leads the IRWS Research Unit at GCLT and contributes to executive leadership while continuing research and teaching in Islamic jurisprudence, comparative religion, and interfaith coexistence.',
    researchInterests: [
      'Islamic Jurisprudence (Fiqh & Usul al-Fiqh)',
      'Constitutional Rights',
      'Comparative Religion',
      'Prophetic Studies (Sīrah)',
      'Minority Rights & Citizenship',
      'Interfaith Dialogue & Coexistence',
    ],
    qualifications: [
      'PhD, NUML University, Islamabad, Pakistan',
      'Dars-i-Niẓāmī (Traditional Islamic and Sharīʿah Studies)',
    ],
    directories: ['executive-leadership', 'academic-faculty'],
    academicCluster: 'Islam, Religion, West & Society',
  },
  {
    slug: 'dr-hafiz-muhammad-siddique',
    name: 'Dr. Hafiz Muhammad Siddique',
    photo: '/images/faculty/dr-hafiz-muhammad-siddique.png',
    designation: 'Head, HSL Research Unit · Editor-in-Chief, Al-Kashaf',
    leadershipDesignation: 'Head, HSL Research Unit · Editor-in-Chief, Al-Kashaf',
    researchUnit: 'Harmonization of Sharīʿah and Law (HSL)',
    affiliation:
      'Assistant Professor, Faculty of Sharīʿah & Law, International Islamic University, Islamabad, Pakistan',
    country: 'Pakistan',
    bio: 'Dr. Hafiz Muhammad Siddique heads the HSL Research Unit and serves as Editor-in-Chief of Al-Kashaf Research Journal, supporting academic administration across research and editorial leadership.',
    researchInterests: [
      'Islamic Jurisprudence (Fiqh & Usul al-Fiqh)',
      'Islamic Law (Sharīʿah)',
      'Islamic Criminal Law',
      'Law of Evidence',
      'Family Law',
      "Women's & Children's Rights Law",
    ],
    qualifications: [
      'Post Doctorate, University of Oxford, England',
      'PhD Sharīʿah & Law, International Islamic University, Islamabad',
    ],
    directories: ['academic-administration'],
  },
  {
    slug: 'dr-kulsoom-fatima',
    name: 'Dr. Kulsoom Fatima',
    photo: '/images/faculty/dr-kulsoom-fatima.png',
    designation: "Head, Gender & Women's Studies Unit",
    leadershipDesignation: "Head, Gender & Women's Studies Unit",
    researchUnit: "Gender and Women's Studies",
    affiliation:
      'Assistant Professor, Jinnah School of Public Policy and Leadership, National University of Sciences and Technology (NUST), Islamabad',
    country: 'Pakistan',
    bio: "Dr. Kulsoom Fatima heads Gender and Women's Studies at GCLT and contributes to academic administration spanning research leadership, admissions support, and quality assurance.",
    researchInterests: [
      'Family and Gender Studies',
      'Religious Studies',
      'Prophetic Studies (Sīrah)',
      "Women's and Children's Rights",
      'Interfaith Dialogue',
      'Social Cohesion and Peaceful Coexistence',
    ],
    qualifications: [
      'PhD (Law), University of Karachi, Pakistan',
      'Dars-i-Niẓāmī (Traditional Islamic and Sharīʿah Studies)',
    ],
    coursesTaught: ['Technical Approaches to Research (TAR)'],
    directories: ['academic-administration'],
  },
  {
    slug: 'mr-awais-ali',
    name: 'Mr. Awais Ali',
    photo: '/images/faculty/mr-awais-ali.png',
    designation: 'Head, Research Management Centre (RMC)',
    leadershipDesignation: 'Head, Research Management Centre (RMC)',
    affiliation: 'Global Centre for Learning & Training',
    country: 'Pakistan',
    bio: 'Mr. Awais Ali leads the Research Management Centre, coordinating research planning, quality assurance, and institutional research support at GCLT.',
    researchInterests: [
      'Research Planning and Coordination',
      'Project Management',
      'Research Quality Assurance',
      'Academic Publications',
      'Grant Development',
      'Institutional Research Support',
    ],
    qualifications: ['MS (Islamic Thought & Civilisation), University of Management and Technology (UMT)'],
    directories: ['academic-administration'],
  },
  {
    slug: 'mr-gohar-ali-goharvi',
    name: 'Mr. Gohar Ali Goharvi',
    photo: '/images/faculty/mr-gohar-ali-goharvi.png',
    designation: 'Office Associate',
    leadershipDesignation: 'Office Associate',
    country: 'Pakistan',
    bio: 'Mr. Gohar Ali Goharvi supports GCLT office operations, communications, and day-to-day institutional coordination.',
    directories: ['professional-support'],
  },
  {
    slug: 'dr-muhammad-nadir',
    name: 'Dr. Muhammad Nadir',
    photo: '/images/faculty/dr-muhammad-nadir.png',
    designation: 'In-Charge, Research & Publication',
    affiliation: 'International Islamic University Malaysia (IIUM)',
    country: 'Malaysia',
    bio: 'Dr. Muhammad Nadir oversees research and publication activities at GCLT within the Research Methods & Academic Development cluster.',
    researchInterests: [
      'Islamic Thought & Civilization',
      'Islamophobia',
      'Human Rights',
      'Comparative Religion',
      'Prophetic Studies (Sīrah)',
      'Interfaith Dialogue & Coexistence',
    ],
    qualifications: [
      'PhD, International Islamic University Malaysia',
      'Dars-i-Niẓāmī (Traditional Sharīʿah Studies)',
    ],
    coursesTaught: ['Technical Approaches to Research (TAR)'],
    directories: ['academic-faculty'],
    academicCluster: 'Research Methods & Academic Development',
  },
  {
    slug: 'dr-falak-shair-faizi',
    name: 'Dr. Falak Shair Faizi',
    photo: '/images/faculty/dr-falak-shair-faizi.png',
    designation: 'Head, ITCS Unit · Editor, Al-Haqeeqah',
    researchUnit: 'Islamic Thought and Civilisational Studies (ITCS)',
    affiliation:
      'Assistant Professor, University of Management and Technology (UMT), Sialkot · Editor, Al-Haqeeqah Research Journal',
    country: 'Pakistan',
    bio: 'Dr. Falak Shair Faizi leads Islamic Thought and Civilisational Studies at GCLT and serves as Editor of Al-Haqeeqah Research Journal.',
    researchInterests: [
      'Islamic Thought and Civilisation',
      'Qurʾānic Studies (Tafsīr)',
      'Ḥadīth Studies',
      'Islamic Family Law',
      'Islamic Jurisprudence (Fiqh)',
      'Sufism (Taṣawwuf)',
      'Sharīʿah and Society',
      'Social Development',
    ],
    qualifications: ['Dars-i-Niẓāmī (Traditional Islamic and Sharīʿah Studies)'],
    directories: ['academic-faculty'],
    academicCluster: 'Islamic Thought & Civilisation',
  },
];

export const academicClusters: AcademicCluster[] = [
  'Law, Sharīʿah & Governance',
  'Islam, Religion, West & Society',
  'Islamic Thought & Civilisation',
  'Society, Gender & Public Policy',
  'Research Methods & Academic Development',
  'Technology, AI & Emerging Studies',
  'Islamic Education & Arabic Studies',
];

/** Brief §3 roster — every current member and where they appear */
export const peopleRoster = [
  {
    slug: 'dr-bilal-hussain',
    pages: 'Leadership & Administration → Executive Leadership · Academic Faculty',
  },
  {
    slug: 'dr-imtiaz-ahmed',
    pages: 'Leadership & Administration → Executive Leadership · Academic Faculty',
  },
  {
    slug: 'dr-hafiz-muhammad-siddique',
    pages: 'Leadership & Administration → Academic Administration',
  },
  {
    slug: 'dr-kulsoom-fatima',
    pages: 'Leadership & Administration → Academic Administration',
  },
  {
    slug: 'mr-awais-ali',
    pages: 'Leadership & Administration → Academic Administration',
  },
  {
    slug: 'mr-gohar-ali-goharvi',
    pages: 'Leadership & Administration → Professional & Support Services',
  },
  {
    slug: 'dr-muhammad-nadir',
    pages: 'Academic Faculty → Research Methods & Academic Development',
  },
  {
    slug: 'dr-falak-shair-faizi',
    pages: 'Academic Faculty → Islamic Thought & Civilisation',
  },
] as const;

/** Legacy slug redirect target */
export const legacyFacultySlugs: Record<string, string> = {
  'dr-hafiz-falak-shair-faizi': 'dr-falak-shair-faizi',
};

export function getFacultyBySlug(slug: string): FacultyMember | undefined {
  const resolved = legacyFacultySlugs[slug] ?? slug;
  return facultyMembers.find((f) => f.slug === resolved);
}

export function getFacultyByDirectory(directory: PeopleDirectory): FacultyMember[] {
  const order = facultyMembers.map((f) => f.slug);
  return facultyMembers
    .filter((f) => f.directories.includes(directory))
    .sort((a, b) => order.indexOf(a.slug) - order.indexOf(b.slug));
}
