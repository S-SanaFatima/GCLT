import type { Program } from '@/lib/data/programs';
import { formatDeliveryOptions } from '@/lib/deliveryMode';

export function buildCourseJsonLd(program: Program) {
  return {
    '@context': 'https://schema.org',
    '@type': 'Course',
    name: program.academicName,
    alternateName: program.catchyTitle,
    description: program.overview,
    provider: {
      '@type': 'EducationalOrganization',
      name: 'Global Centre for Learning & Training',
      url: 'https://www.gclt.com.pk',
    },
    educationalCredentialAwarded: program.quickFacts.qualification,
    timeRequired: program.quickFacts.duration,
    courseMode: formatDeliveryOptions(program.deliveryOptions),
    availableLanguage: 'English',
    offers: {
      '@type': 'Offer',
      price: program.quickFacts.fee,
      url: 'https://www.gclt.com.pk/academics/admissions',
    },
  };
}
