import {
  gcltEvents,
  getEventBySlug,
  getPastGCLTEvents,
  getUpcomingGCLTEvents,
  sortEventsByDate,
  type GCLTEvent,
} from './events';

export type NewsCategory = 'News & Announcements' | 'Events' | 'Press Releases';

export interface NewsPost {
  slug: string;
  title: string;
  excerpt: string;
  content: string;
  date: string;
  category: NewsCategory;
  tags: string[];
  image: string;
}

function eventToNewsPost(event: GCLTEvent): NewsPost {
  return {
    slug: event.slug,
    title: event.title,
    excerpt: event.excerpt,
    content: event.content,
    date: event.date,
    category: 'Events',
    tags: event.tags,
    image: event.coverImage ?? '',
  };
}

export const newsPosts: NewsPost[] = [
  {
    slug: 'gclt-transition-global-centre-learning-training',
    title: 'GCLT Officially Transitions to Global Centre for Learning & Training',
    excerpt:
      'We are pleased to announce that GCLT has officially transitioned to the Global Centre for Learning & Training, marking a new chapter in our institutional journey.',
    content: `
      <p>The Global Centre for Legal Thought (GCLT) is entering a new phase of institutional growth and development.</p>
      <p>As part of its evolving direction and commitment to academic and professional advancement, the Centre is officially transitioning into the <strong>Global Centre for Learning & Training (GCLT)</strong>.</p>
      <p>This transition reflects the Centre's continued commitment to academic excellence, interdisciplinary research, professional training, and leadership development.</p>
      <p>Under its renewed framework, GCLT will promote research initiatives, academic programmes, publications, conferences, training platforms, policy dialogue, and institutional collaboration at both national and international levels.</p>
      <p><strong>Bridging Tradition, Technology, and Leadership.</strong></p>
      <p>We welcome the continued support and collaboration of our academic partners, researchers, students, and the wider international community as we move forward into this new chapter.</p>
      <p>For partnerships, admissions, or collaboration inquiries, please contact us at <a href="mailto:info@gclt.com.pk">info@gclt.com.pk</a> or <a href="tel:+923339381201">+92 333 9381201</a>.</p>
    `,
    date: '2026-06-01',
    category: 'News & Announcements',
    tags: ['GCLT', 'Transition', 'Announcement', 'Rebrand', 'Learning & Training', 'Islamabad'],
    image: 'https://images.unsplash.com/photo-1541339907198-e08756dedf3f?q=80&w=600&auto=format&fit=crop',
  },
  {
    slug: 'global-summit-shariah-law',
    title: 'Global Summit on Harmonisation of Shari\'ah and Law',
    excerpt:
      'Reflecting on the first global summit addressing the harmonisation of Shari\'ah and law across society, policy, and progress.',
    content: '<p>Archive materials and proceedings will be published on our research page. See also the full <a href="/updates/events/gshsl-2024">GSHSL 2024 event page</a>.</p>',
    date: '2024-11-15',
    category: 'Press Releases',
    tags: ['Shari\'ah', 'Law', 'Summit', 'GSHSL'],
    image: '/images/events/gshsl-2024/cover.jpg',
  },
  {
    slug: 'tar-programme-enrollment-open',
    title: 'TAR Programme — Enrollment Now Open',
    excerpt:
      'Applications are open for the Technical Approaches to Research (TAR) professional training programme.',
    content: '<p>Apply via our admissions page or contact admissions@gclt.com.pk for details.</p>',
    date: '2026-04-01',
    category: 'News & Announcements',
    tags: ['TAR', 'Research', 'Training'],
    image: 'https://images.unsplash.com/photo-1506784983877-45594efa4cbe?q=80&w=600&auto=format&fit=crop',
  },
  {
    slug: 'diploma-financial-jurisprudence-2026',
    title: 'Diploma in Financial Jurisprudence — 2026 Intake',
    excerpt:
      'GCLT opens applications for the 2026 intake of its Diploma in Financial Jurisprudence programme.',
    content: '<p>Learn more on our diploma programmes page.</p>',
    date: '2026-03-15',
    category: 'News & Announcements',
    tags: ['Diploma', 'Finance', 'Islamic Law'],
    image: 'https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?q=80&w=600&auto=format&fit=crop',
  },
  {
    slug: 'al-kashaf-journal-call-papers',
    title: 'Al Kashaf Journal — Call for Papers',
    excerpt:
      'Al Kashaf, one of GCLT\'s three research journals, invites submissions for its upcoming issue.',
    content: '<p>Visit our Call for Papers page for submission guidelines.</p>',
    date: '2026-03-01',
    category: 'Press Releases',
    tags: ['Journal', 'Research', 'Publications'],
    image: 'https://images.unsplash.com/photo-1455390582262-044cdead277a?q=80&w=600&auto=format&fit=crop',
  },
  {
    slug: 'internship-opportunities-2026',
    title: 'Research Internship Opportunities for 2026',
    excerpt:
      'GCLT invites applications for research internships across law, Islamic studies, and public policy.',
    content: '<p>See our internships page for eligibility and application details.</p>',
    date: '2026-02-20',
    category: 'News & Announcements',
    tags: ['Internships', 'Research'],
    image: 'https://images.unsplash.com/photo-1522202176988-66273c2fd55f?q=80&w=600&auto=format&fit=crop',
  },
  {
    slug: 'partnership-grand-asian-university',
    title: 'GCLT Partners with Grand Asian University',
    excerpt:
      'A new academic partnership strengthens GCLT\'s faculty network and collaborative research capacity.',
    content: '<p>Read more on our affiliations page.</p>',
    date: '2026-02-01',
    category: 'Press Releases',
    tags: ['Partnership', 'Affiliation'],
    image: 'https://images.unsplash.com/photo-1551836022-d5d88e9218df?q=80&w=600&auto=format&fit=crop',
  },
];

export function sortNewsByDate(posts: NewsPost[]): NewsPost[] {
  return [...posts].sort((a, b) => new Date(b.date).getTime() - new Date(a.date).getTime());
}

export function getNewsCategoryCounts(): Record<NewsCategory | 'All', number> {
  const eventPosts = gcltEvents.map(eventToNewsPost);
  return {
    All: newsPosts.length + eventPosts.length,
    'News & Announcements': newsPosts.filter((p) => p.category === 'News & Announcements').length,
    Events: gcltEvents.length,
    'Press Releases': newsPosts.filter((p) => p.category === 'Press Releases').length,
  };
}

export function getNewsBySlug(slug: string): NewsPost | undefined {
  const post = newsPosts.find((p) => p.slug === slug);
  if (post) return post;
  const event = getEventBySlug(slug);
  return event ? eventToNewsPost(event) : undefined;
}

export function getNewsByCategory(category: NewsCategory | 'All'): NewsPost[] {
  if (category === 'Events') {
    return sortEventsByDate(gcltEvents).map(eventToNewsPost);
  }
  if (category === 'All') {
    return sortNewsByDate([...newsPosts, ...gcltEvents.map(eventToNewsPost)]);
  }
  return sortNewsByDate(newsPosts.filter((p) => p.category === category));
}

export function getUpcomingEvents(): NewsPost[] {
  return getUpcomingGCLTEvents().map(eventToNewsPost);
}

export function getPastEvents(): NewsPost[] {
  return getPastGCLTEvents().map(eventToNewsPost);
}
