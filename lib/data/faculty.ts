export interface FacultyMember {
  slug: string;
  name: string;
  designation?: string;
  researchUnit?: string;
  affiliation?: string;
  bio?: string;
  researchInterests?: string[];
  qualifications?: string[];
  publications?: string[];
  coursesTaught?: string[];
  linkedin?: string;
  orcid?: string;
  googleScholar?: string;
  photo?: string;
}

export const facultyMembers: FacultyMember[] = [
  {
    slug: 'dr-imtiaz-ahmed',
    name: 'Dr. Imtiaz Ahmed',
    photo: '/images/faculty/dr-imtiaz-ahmed.png',
    designation: 'Head, IRWS Research Unit',
    researchUnit: 'Islam, Religion, West and Society (IRWS)',
    affiliation: 'Associate Professor, Grand Asian University, Sialkot (GAUS), Punjab, Pakistan',
    bio: 'Dr. Imtiaz Ahmed leads the IRWS Research Unit at GCLT and serves as Associate Professor at Grand Asian University, Sialkot.',
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
  },
  {
    slug: 'dr-hafiz-muhammad-siddique',
    name: 'Dr. Hafiz Muhammad Siddique',
    photo: '/images/faculty/dr-hafiz-muhammad-siddique.png',
    designation: 'Head, HSL Research Unit',
    researchUnit: 'Harmonization of Sharīʿah and Law (HSL)',
    affiliation:
      'Assistant Professor, Faculty of Sharīʿah & Law, International Islamic University, Islamabad, Pakistan · Editor-in-Chief, Al-Kashaf Research Journal',
    bio: 'Dr. Hafiz Muhammad Siddique heads the HSL Research Unit and serves as Editor-in-Chief of Al-Kashaf Research Journal.',
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
  },
  {
    slug: 'dr-bilal-hussain',
    name: 'Dr. Bilal Hussain',
    photo: '/images/faculty/dr-bilal-hussain.png',
    designation: 'Head, Legal Research',
    affiliation:
      'Assistant Professor, Faculty of Law, University of Sialkot · Postdoctoral Fellow, International Islamic University, Malaysia',
    bio: 'Dr. Bilal Hussain leads legal research at GCLT with expertise spanning Islamic bioethics, reproductive governance, and health law.',
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
  },
  {
    slug: 'dr-kulsoom-fatima',
    name: 'Dr. Kulsoom Fatima',
    photo: '/images/faculty/dr-kulsoom-fatima.png',
    designation: "Head, Gender and Women's Studies",
    affiliation:
      'Assistant Professor, Jinnah School of Public Policy and Leadership, National University of Sciences and Technology (NUST), Islamabad',
    bio: 'Dr. Kulsoom Fatima heads gender and women\'s studies research at GCLT and teaches at NUST Islamabad.',
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
  },
  {
    slug: 'dr-falak-shair-faizi',
    name: 'Dr. Falak Shair Faizi',
    photo: '/images/faculty/dr-falak-shair-faizi.png',
    designation: 'Head, Islamic Thought and Civilisational Studies',
    affiliation:
      'Assistant Professor, University of Management and Technology (UMT), Sialkot · Editor, Al-Haqeeqah Research Journal',
    bio: 'Dr. Falak Shair Faizi leads Islamic thought and civilisational studies at GCLT and serves as Editor of Al-Haqeeqah Research Journal.',
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
    qualifications: [
      'PhD (Law), University of Karachi, Pakistan',
      'Dars-i-Niẓāmī (Traditional Islamic and Sharīʿah Studies)',
    ],
  },
  {
    slug: 'dr-muhammad-nadir',
    name: 'Dr. Muhammad Nadir',
    photo: '/images/faculty/dr-muhammad-nadir.png',
    designation: 'In-Charge, Research & Publication',
    affiliation: 'International Islamic University, Malaysia',
    bio: 'Dr. Muhammad Nadir oversees research and publication activities at GCLT.',
    researchInterests: [
      'Islamic Thought & Civilization',
      'Islamophobia',
      'Human Rights',
      'Comparative Religion',
      'Prophetic Studies (Sīrah)',
      'Interfaith Dialogue & Coexistence',
    ],
    qualifications: [
      'PhD, International Islamic University, Malaysia',
      'Dars-i-Niẓāmī (Traditional Sharīʿah Studies)',
    ],
    coursesTaught: ['Technical Approaches to Research (TAR)'],
  },
  {
    slug: 'mr-awais-ali',
    name: 'Mr. Awais Ali',
    photo: '/images/faculty/mr-awais-ali.png',
    designation: 'Head, Research Management Centre (RMC)',
    affiliation: 'Global Centre for Learning & Training',
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
  },
  {
    slug: 'mr-gohar-ali-goharvi',
    name: 'Mr. Gohar Ali Goharvi',
    photo: '/images/faculty/mr-gohar-ali-goharvi.png',
    designation: 'Office Associate',
    bio: 'Mr. Gohar Ali Goharvi supports GCLT administrative and office operations.',
  },
];

/** Legacy slug redirect target */
export const legacyFacultySlugs: Record<string, string> = {
  'dr-hafiz-falak-shair-faizi': 'dr-falak-shair-faizi',
};

export function getFacultyBySlug(slug: string): FacultyMember | undefined {
  const resolved = legacyFacultySlugs[slug] ?? slug;
  return facultyMembers.find((f) => f.slug === resolved);
}
