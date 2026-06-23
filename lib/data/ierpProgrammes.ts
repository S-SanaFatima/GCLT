export interface IERPProgrammeSection {
  title: string;
  content?: string;
  items?: string[];
  bullets?: { title: string; body: string }[];
}

export interface IERPProgrammePage {
  slug: string;
  title: string;
  arabicTitle?: string;
  subtitle: string;
  theme: 'financial' | 'traditional';
  highlights: string[];
  facts: { label: string; value: string }[];
  intro: string[];
  whyChoose?: IERPProgrammeSection;
  eligibility?: IERPProgrammeSection;
  teachingFormat?: IERPProgrammeSection;
  assessment?: IERPProgrammeSection;
  extraSections?: IERPProgrammeSection[];
  closing?: string;
  enrollSubject: string;
  primaryCta?: string;
}

export const financialJurisprudenceProgramme: IERPProgrammePage = {
  slug: 'financial-jurisprudence',
  title: 'Specialization in the Jurisprudence of Financial Transactions',
  arabicTitle: 'التخصص فی فقہ المعاملات المالیہ',
  subtitle: 'Postgraduate Certificate Programme · 2 Years',
  theme: 'financial',
  highlights: ['Islamic Finance', 'Fintech & AI', 'Sharīʿah Compliance', 'Evening Onsite'],
  facts: [
    { label: 'Duration', value: '2 Years' },
    { label: 'Schedule', value: 'Evening · Onsite' },
    { label: 'Certificate', value: 'Postgraduate Certificate' },
    { label: 'Focus', value: 'Muʿāmalāt Māliyyah' },
  ],
  intro: [
    'A two-year Postgraduate Certificate for professionals seeking deep expertise in the Islamic legal and regulatory framework for financial transactions — from classical muʿāmalāt to modern banking, takaful, and capital markets.',
    'The curriculum integrates academic rigour with practical application, including blockchain and artificial intelligence, so graduates can navigate contemporary finance with ethical and Sharīʿah-compliant judgement.',
  ],
  whyChoose: {
    title: 'Why Choose Our Programme?',
    bullets: [
      {
        title: 'Comprehensive Curriculum',
        body: 'Our curriculum covers Islamic finance principles, contract law, banking and investment, risk management, fintech, blockchain, artificial intelligence, and legal ethics — providing a thorough understanding of the Islamic jurisprudence surrounding financial transactions.',
      },
      {
        title: 'Ethical and Sustainable Finance',
        body: 'Islamic finance is built on fairness, transparency, and social responsibility. Students learn to evaluate investment opportunities, mitigate risk, and promote social welfare within the framework of Islamic finance.',
      },
      {
        title: 'Cutting-edge Technologies',
        body: 'The programme incorporates blockchain and artificial intelligence, enabling students to explore their applications within Islamic finance while ensuring compliance with Islamic principles.',
      },
      {
        title: 'Expert Faculty and Industry Collaboration',
        body: 'Renowned scholars and industry experts combine theoretical knowledge with real-world perspectives. Collaboration with industry partners provides networking opportunities, guest lectures, and internships.',
      },
      {
        title: 'Holistic Skill Development',
        body: 'Beyond specialized jurisprudential knowledge, students develop critical thinking, analytical reasoning, research, communication, and problem-solving skills through discussions, case studies, and simulations.',
      },
    ],
  },
  eligibility: {
    title: 'Eligibility Criteria',
    content:
      'To be eligible for our Postgraduate Certificate in Specialization in the Islamic Jurisprudence of Financial Transactions, applicants should meet the following criteria:',
    bullets: [
      {
        title: 'Academic Qualifications',
        body: 'A Bachelor\'s degree in Islamic Studies with a minimum GPA of 3.0 or equivalent. Alternatively, applicants with a Shahādat al-ʿĀlamiyyah and a minimum of 70% marks will also be considered.',
      },
      {
        title: 'Language Proficiency',
        body: 'Proficiency in both English and Arabic is essential, as the programme involves studying and analysing Islamic financial texts in their original language.',
      },
      {
        title: 'Basic Computer Knowledge',
        body: 'Applicants should possess basic computer skills to effectively engage with digital resources and tools used throughout the programme.',
      },
      {
        title: 'Strong Interest in Islamic Finance',
        body: 'We seek candidates with a genuine passion for Islamic finance and a keen interest in understanding its legal and regulatory framework.',
      },
      {
        title: 'HEC-Approved University Admission',
        body: 'Prospective students should seek admission to a Higher Education Commission (HEC) approved university, ensuring education of the highest quality and recognized standards.',
      },
      {
        title: 'Regular Class Attendance',
        body: 'Successful candidates are expected to attend regular classes for both the Islamic Jurisprudence of Financial Transactions programme and accompanying courses.',
      },
    ],
  },
  teachingFormat: {
    title: 'Teaching Format',
    content: 'Our programme offers an effective and convenient teaching format:',
    bullets: [
      {
        title: 'Flexibility and Convenience',
        body: 'Classes are scheduled in the evenings, allowing students to pursue the programme without disrupting their daily routines.',
      },
      {
        title: 'Onsite Learning',
        body: 'Delivered through onsite classes on campus, providing an immersive environment to engage with faculty and peers.',
      },
      {
        title: 'Experienced Faculty',
        body: 'Faculty members are experts in Islamic finance, bringing practical experience and deep knowledge to create an interactive learning atmosphere.',
      },
      {
        title: 'Comprehensive Understanding',
        body: 'Lectures, case studies, and interactive discussions provide a holistic understanding and enable application to real-world scenarios.',
      },
    ],
  },
  assessment: {
    title: 'Assessment',
    content:
      'Our programme offers a focused learning experience over two years, tailored for working professionals. Students attend on-campus classes for a minimum of two semesters. In the final year, the programme focuses on your dissertation and regular Fatwā Nawīsī on Muʿāmalāt Māliyyah, where you will generate a minimum of 100 fatāwā. This hands-on application enhances practical skills and contributes meaningfully to the field. Upon completion, you will have undertaken a high-quality research project demonstrating your expertise — accommodating MS and PhD commitments alongside the programme.',
  },
  closing:
    'Ready to deepen your expertise in Islamic financial jurisprudence? Enroll today — our faculty are here to support your journey in this dynamic field.',
  enrollSubject: 'Enrollment: Specialization in Islamic Jurisprudence of Financial Transactions',
  primaryCta: 'Enroll Now',
};

export const darsENizamiProfessionalsProgramme: IERPProgrammePage = {
  slug: 'dars-e-nizami-professionals',
  title: 'Dars-e-Niẓāmī Class for Professionals',
  subtitle: 'Traditional Islamic Sciences · Flexible Schedule',
  theme: 'financial',
  highlights: ['Tafsīr & Hadīth', 'Fiqh & ʿAqīdah', 'Weekend & Evening', 'Working Professionals'],
  facts: [
    { label: 'Duration', value: 'Multi-Year (Staged)' },
    { label: 'Schedule', value: 'Weekend & Evening' },
    { label: 'Format', value: 'Onsite & Online options' },
    { label: 'Pathway', value: 'Classical Dars-e-Niẓāmī' },
  ],
  intro: [
    'Structured Dars-e-Niẓāmī study for professionals who want authentic traditional knowledge without leaving work and family commitments behind.',
    'Cover the foundational sciences — Tafsīr, Hadīth, Fiqh, ʿAqīdah, and more — with qualified scholars, flexible sessions, and teaching designed for the modern learner.',
  ],
  whyChoose: {
    title: 'Course Overview',
    content:
      'A structured curriculum covering Tafsīr, Hadīth, Fiqh, ʿAqīdah, and the essential Islamic sciences — building a strong foundation for personal and professional life.',
    bullets: [
      {
        title: 'Traditional Wisdom, Modern Delivery',
        body: 'Classical scholarship delivered through contemporary methods — multimedia, interactive platforms, and flexible access for today\'s professionals.',
      },
      {
        title: 'Built for Busy Professionals',
        body: 'Evening and weekend sessions, with virtual and on-demand options, so study fits around work and family.',
      },
      {
        title: 'Guided by Qualified Scholars',
        body: 'Instructors with deep expertise in the Islamic sciences who understand the realities of professional life today.',
      },
      {
        title: 'Faith in Professional Life',
        body: 'Apply Islamic teachings to ethics, finance, and relationships — leading with integrity in your career.',
      },
    ],
  },
  extraSections: [
    {
      title: 'Learning Experience',
      bullets: [
        {
          title: 'Flexible Schedule',
          body: 'Evening and weekend sessions so you can learn at your own pace — whether you are a full-time employee, entrepreneur, or parent.',
        },
        {
          title: 'Experienced Instructors',
          body: 'Highly qualified scholars skilled in modern teaching techniques, combining traditional teachings with engaging instructional methods.',
        },
        {
          title: 'Practical Relevance',
          body: 'Emphasis on applying Islamic teachings to everyday challenges in ethics, finance, and relationships for a purposeful life.',
        },
      ],
    },
    {
      title: 'Community & Resources',
      content:
        'Join a community of like-minded learners for intellectual discussion and networking. Beyond the classroom, we provide course handouts, recommended readings, and online resources to support continued learning long after the class concludes.',
    },
  ],
  closing:
    'Take the next step in your Islamic education journey. Explore the full Dars-e-Niẓāmī programme structure or register your interest to learn more.',
  enrollSubject: 'Interest: Dars-e-Nizami Class for Professionals',
  primaryCta: 'Register Interest',
};

export function getIERPProgrammeBySlug(slug: string): IERPProgrammePage | undefined {
  const programmes = [financialJurisprudenceProgramme, darsENizamiProfessionalsProgramme];
  return programmes.find((p) => p.slug === slug);
}
