export interface GCLTJournal {
  slug: string;
  name: string;
  subtitle: string;
  href: string;
  externalUrl: string;
  hecStatus: string;
  frequency: string;
  peerReview: string;
  languages: string;
  description: string;
  disciplines: string;
  extra?: string;
}

export const gcltJournals: GCLTJournal[] = [
  {
    slug: 'al-kashaf',
    name: 'Al-Kashaf',
    subtitle: 'Research Journal for Legal and Social Studies',
    href: '/research/journals/al-kashaf',
    externalUrl: 'https://alkashaf.pk/index.php/Journal',
    hecStatus: 'HEC-approved',
    frequency: 'Quarterly',
    peerReview: 'Double-blind peer-reviewed, open-access',
    languages: 'Trilingual (Urdu, English, and Arabic)',
    description:
      'A multidisciplinary publication covering all areas of the social sciences and their interlinked disciplines — including legal studies, Islamic law, philosophy and theology, sociology, psychology, history, economics, and the social and natural sciences.',
    disciplines:
      'Legal studies, Islamic law, philosophy & theology, sociology, psychology, history, economics, and related fields.',
    extra:
      'The journal is actively working towards alignment with globally recognized indexing platforms, including Scopus and the Web of Science, and adheres to the principles of the Committee on Publication Ethics (COPE).',
  },
  {
    slug: 'al-salihat',
    name: 'Al-Salihat',
    subtitle: 'Journal of Women, Society, and Religion',
    href: '/research/journals/al-salihat',
    externalUrl: 'https://al-salihat.com/index.php/Journal',
    hecStatus: 'HEC-approved',
    frequency: 'Quarterly',
    peerReview: 'Interdisciplinary, peer-reviewed, open-access',
    languages: 'Trilingual (Urdu, English, and Arabic)',
    description:
      'Seeks to establish a scholarly relationship between academic and intellectual communities worldwide in the realm of women\'s studies and interlinked disciplines such as the humanities and social sciences.',
    disciplines:
      'Gender studies, society, religion, humanities, and social sciences.',
    extra:
      'Provides a platform for academic researchers to share their work and circulate findings, promoting scholarly research in the fields of gender studies, society, and religion.',
  },
  {
    slug: 'al-haqeeqah',
    name: 'Al-Haqeeqah',
    subtitle: 'Research Journal for Islamic Studies',
    href: '/research/journals/al-haqeeqah',
    externalUrl: 'https://alhaqeeqah.pk/index.php/Journal',
    hecStatus: 'HEC-Standard',
    frequency: 'Biannual',
    peerReview: 'Double-blind peer-reviewed, open-access',
    languages: 'Trilingual (Urdu, English, and Arabic)',
    description:
      'A multidisciplinary publication covering all areas of the social sciences and their interlinked disciplines of knowledge.',
    disciplines:
      'Legal studies, Islamic law, philosophy & theology, sociology, psychology, history, economics, and the social and natural sciences.',
  },
];

export function getJournalBySlug(slug: string): GCLTJournal | undefined {
  return gcltJournals.find((j) => j.slug === slug);
}
