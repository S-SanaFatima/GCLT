export function cn(...classes: (string | false | null | undefined)[]) {
  return classes.filter(Boolean).join(' ');
}

export function formatDate(dateString: string): string {
  return new Date(dateString).toLocaleDateString('en-GB', {
    day: 'numeric',
    month: 'long',
    year: 'numeric',
  });
}

export const SITE = {
  name: 'Global Centre for Learning & Training',
  shortName: 'GCLT',
  url: 'https://www.gclt.com.pk',
  phone: '+92 333 9381201',
  phoneRaw: '923339381201',
  address:
    'Global Centre for Learning & Training (GCLT), Behind National Press Club, St#39, F-6/1, Islamabad, Pakistan',
  emails: {
    general: 'info@gclt.com.pk',
    admissions: 'admissions@gclt.com.pk',
    careers: 'careers@gclt.com.pk',
    research: 'research@gclt.com.pk',
    events: 'events@gclt.com.pk',
  },
} as const;
