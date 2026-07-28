export type EventFormat =
  | 'Conference'
  | 'Summit'
  | 'Seminar'
  | 'Workshop'
  | 'Webinar'
  | 'Study Circle'
  | 'Panel'
  | 'Lecture'
  | 'Mobility Programme';

export interface EventOrganizer {
  name: string;
  role: string;
  affiliation?: string;
  photo?: string;
  href?: string;
}

export interface GCLTEvent {
  slug: string;
  title: string;
  excerpt: string;
  content: string;
  date: string;
  endDate?: string;
  location?: string;
  format: EventFormat;
  speakers?: string[];
  organizers?: EventOrganizer[];
  tags: string[];
  /** Set when cover.jpg is uploaded; null shows placeholder */
  coverImage: string | null;
  /** Set per gallery slot when images are uploaded; null shows placeholder */
  galleryImages: (string | null)[];
  /** Target paths under public/ for your image files */
  imagePaths: { cover: string; gallery: string[] };
  /** Use contain for portrait posters; cover for landscape photos */
  coverFit?: 'contain' | 'cover';
  coverWidth?: number;
  coverHeight?: number;
  featured?: boolean;
}

const GALLERY_COUNT = 6;

export function eventImagePaths(slug: string, galleryCount = GALLERY_COUNT) {
  return {
    cover: `/images/events/${slug}/cover.jpg`,
    gallery: Array.from(
      { length: galleryCount },
      (_, i) => `/images/events/${slug}/gallery-${i + 1}.jpg`,
    ),
  };
}

function eventImages(slug: string, galleryCount = GALLERY_COUNT) {
  const paths = eventImagePaths(slug, galleryCount);
  return {
    coverImage: null as string | null,
    galleryImages: Array.from({ length: galleryCount }, () => null as string | null),
    imagePaths: paths,
  };
}

export function getEventCoverSrc(event: GCLTEvent): string | null {
  return event.coverImage;
}

export function getEventGalleryItems(event: GCLTEvent) {
  return event.imagePaths.gallery.map((path, i) => ({
    path,
    src: event.galleryImages[i] ?? null,
  }));
}

export const gcltEvents: GCLTEvent[] = [
  {
    slug: 'gen-z-and-family-relationships',
    title: 'Gen-Z and Family Relationships: Islamic Ethics — Bridging the Gap',
    excerpt:
      'An evening Zoom session with Dr. Hafiz Muhammad Siddique on Gen-Z and family relationships in the light of Islamic ethics — bridging the gap between generations.',
    content: `
      <p>The <strong>Global Centre for Learning &amp; Training (GCLT)</strong>, Islamabad, invites you to a webinar on <strong>Gen-Z and Family Relationships: Islamic Ethics — Bridging the Gap</strong>.</p>
      <p dir="rtl" lang="ur" class="text-right text-lg leading-relaxed">جنریشن زی اور خاندانی تعلقات<br />اسلامی اخلاقیات کی روشنی میں۔</p>
      <p>The session explores how Islamic ethical teachings can help bridge gaps between Generation Z and the family — strengthening understanding, responsibility, and care across generations.</p>
      <h3>Speaker</h3>
      <ul>
        <li><strong>Dr. Hafiz Muhammad Siddique</strong> — Post Doc: Faculty of Law, University of Oxford, UK</li>
      </ul>
      <h3>Event details</h3>
      <ul>
        <li><strong>Date:</strong> Friday, July 24, 2026</li>
        <li><strong>Time:</strong> 9:00 PM</li>
        <li><strong>Platform:</strong> Zoom</li>
        <li><strong>Meeting ID:</strong> 387 961 7241</li>
      </ul>
      <p>Contact: <a href="tel:+923339381201">+92 333 9381201</a> | <a href="https://www.gclt.com.pk">www.gclt.com.pk</a></p>
    `,
    date: '2026-07-24',
    location: 'Zoom (Online)',
    format: 'Webinar',
    speakers: ['Dr. Hafiz Muhammad Siddique'],
    organizers: [
      {
        name: 'Dr. Hafiz Muhammad Siddique',
        role: 'Speaker',
        affiliation: 'Post Doc: Faculty of Law, University of Oxford, UK',
        photo: '/images/faculty/dr-hafiz-muhammad-siddique.png',
        href: '/people/dr-hafiz-muhammad-siddique',
      },
    ],
    tags: ['Gen-Z', 'Family', 'Islamic Ethics', 'Webinar'],
    featured: true,
    coverImage: '/images/events/gen-z-and-family-relationships/cover.png',
    coverFit: 'contain',
    galleryImages: [
      '/images/events/gen-z-and-family-relationships/gallery-1.png',
      '/images/events/gen-z-and-family-relationships/gallery-2.png',
    ],
    imagePaths: {
      cover: '/images/events/gen-z-and-family-relationships/cover.png',
      gallery: [
        '/images/events/gen-z-and-family-relationships/gallery-1.png',
        '/images/events/gen-z-and-family-relationships/gallery-2.png',
      ],
    },
  },
  {
    slug: 'ai-ulama-one-day-workshop',
    title: 'One-Day Workshop: AI & Ulama',
    excerpt:
      "Understanding the changing scholarly and da'wah demands of artificial intelligence for scholars and graduates.",
    content: `
      <p>The <strong>Global Centre for Learning &amp; Training (GCLT)</strong>, Islamabad, organised a one-day workshop titled <strong>AI &amp; Ulama</strong>.</p>
      <p><strong>Understanding the changing scholarly and da'wah demands of artificial intelligence for scholars and graduates.</strong></p>
      <p>As AI reshapes every field, the scholarly and religious community cannot stand apart. This workshop equips ulama and graduates to understand this technology, benefit from its opportunities, and engage its challenges with insight and confidence.</p>
      <p>Contact: <a href="tel:+923339381201">0333 9381201</a> | <a href="https://www.gclt.com.pk">www.gclt.com.pk</a></p>
    `,
    date: '2026-07-26',
    location: 'GCLT Islamabad',
    format: 'Workshop',
    speakers: ['Dr. Imtiaz Ahmad'],
    tags: ['AI', 'Ulama', 'Workshop', "Da'wah", 'Training'],
    featured: true,
    coverImage: '/images/events/ai-ulama-one-day-workshop/cover.png',
    coverFit: 'contain',
    galleryImages: [
      '/images/events/ai-ulama-one-day-workshop/gallery-1.png',
      '/images/events/ai-ulama-one-day-workshop/gallery-2.png',
      '/images/events/ai-ulama-one-day-workshop/gallery-3.png',
      '/images/events/ai-ulama-one-day-workshop/gallery-4.png',
      '/images/events/ai-ulama-one-day-workshop/gallery-5.png',
      '/images/events/ai-ulama-one-day-workshop/gallery-6.png',
      '/images/events/ai-ulama-one-day-workshop/gallery-7.png',
      '/images/events/ai-ulama-one-day-workshop/gallery-8.png',
    ],
    imagePaths: {
      cover: '/images/events/ai-ulama-one-day-workshop/cover.png',
      gallery: [
        '/images/events/ai-ulama-one-day-workshop/gallery-1.png',
        '/images/events/ai-ulama-one-day-workshop/gallery-2.png',
        '/images/events/ai-ulama-one-day-workshop/gallery-3.png',
        '/images/events/ai-ulama-one-day-workshop/gallery-4.png',
        '/images/events/ai-ulama-one-day-workshop/gallery-5.png',
        '/images/events/ai-ulama-one-day-workshop/gallery-6.png',
        '/images/events/ai-ulama-one-day-workshop/gallery-7.png',
        '/images/events/ai-ulama-one-day-workshop/gallery-8.png',
      ],
    },
  },
  {
    slug: '1st-international-conference-ai-society',
    title: '1st International Conference on AI & Society',
    excerpt:
      'GCLT hosted its inaugural international conference at the Pakistan Academy of Letters, examining how artificial intelligence is reshaping society — from religion, law, and ethics to culture, security, and public discourse.',
    content: `
      <p>The <strong>Global Centre for Learning &amp; Training (GCLT)</strong> hosted its <strong>1st International Conference on Artificial Intelligence &amp; Society</strong>, a two-day academic gathering held at the <strong>Pakistan Academy of Letters, Islamabad</strong> (30–31 December, 9:00 AM – 4:00 PM).</p>
      <p>The conference brought together scholars, researchers, policymakers, and practitioners to examine how artificial intelligence is reshaping society — from religion, law, and ethics to culture, security, and public discourse.</p>
      <p>A key dimension of the conference was the engagement of religious scholarship with emerging AI technologies — examining questions of ethics, moral responsibility, and how classical intellectual traditions can respond to the challenges posed by intelligent machines.</p>
      <h3>Conference Themes</h3>
      <p>The conference was structured around four thematic tracks, with Theme 4 focusing on <strong>Artificial Intelligence: Religion, Literature, Security, and Journalism</strong> — exploring AI&rsquo;s implications for religious scholarship and ethics, its impact on creative writing and literary production, national and information security, and the future of journalism in an age of automated content.</p>
      <h3>Conference Team</h3>
      <ul>
        <li><strong>Dr. Bilal Hussain</strong> — Head, Legal Research, GCLT; Assistant Professor, Faculty of Law, University of Sialkot; Postdoctoral Fellow, International Islamic University, Malaysia</li>
        <li><strong>Dr. Imtiaz Ahmed</strong> — Head, IRWS Research Unit (Islam, Religion, West and Society), GCLT; Associate Professor, Grand Asian University, Sialkot</li>
        <li><strong>Dr. Hafiz Muhammad Siddique</strong> — Head, HSL Research Unit (Harmonization of Sharīʿah and Law), GCLT; Assistant Professor, Faculty of Sharīʿah &amp; Law, International Islamic University, Islamabad; Editor-in-Chief, Al-Kashaf Research Journal</li>
        <li><strong>Dr. Kulsoom Fatima</strong> — Head, Gender and Women&rsquo;s Studies, GCLT; Assistant Professor, Jinnah School of Public Policy and Leadership, NUST, Islamabad</li>
        <li><strong>Dr. Muhammad Nadir</strong> — In-Charge, Research &amp; Publication, GCLT; International Islamic University, Malaysia</li>
      </ul>
      <h3>Collaborating Partners</h3>
      <p>The conference was held in collaboration with the Islamabad Capital Territory Administration (ICTA), Pakistan Academy of Letters, Bahria University, the International Quran Research Association (IQRA), CarboX, and other academic and institutional partners.</p>
      <p>Contact: <a href="tel:+923339381201">+92 333 9381201</a> | <a href="https://www.gclt.com.pk">www.gclt.com.pk</a> | @gclt.official</p>
    `,
    date: '2025-12-30',
    endDate: '2025-12-31',
    location: 'Pakistan Academy of Letters, Islamabad',
    format: 'Conference',
    speakers: [
      'Dr. Bilal Hussain',
      'Dr. Imtiaz Ahmed',
      'Dr. Hafiz Muhammad Siddique',
      'Dr. Kulsoom Fatima',
      'Dr. Muhammad Nadir',
    ],
    organizers: [
      {
        name: 'Dr. Kulsoom Fatima',
        role: 'Head, Gender and Women\'s Studies',
        affiliation:
          'Assistant Professor, Jinnah School of Public Policy and Leadership, National University of Sciences and Technology (NUST), Islamabad',
        photo: '/images/events/1st-international-conference-ai-society/organizer-kulsoom.png',
        href: '/people/dr-kulsoom-fatima',
      },
      {
        name: 'Dr. Hafiz Muhammad Siddique',
        role: 'Head, HSL Research Unit — Harmonization of Sharīʿah and Law (HSL)',
        affiliation:
          'Assistant Professor, Faculty of Sharīʿah & Law, International Islamic University, Islamabad, Pakistan · Editor-in-Chief, Al-Kashaf Research Journal',
        photo: '/images/events/1st-international-conference-ai-society/organizer-siddique.png',
        href: '/people/dr-hafiz-muhammad-siddique',
      },
      {
        name: 'Mr. Gohar Ali Goharvi',
        role: 'Head, Strategic Partnerships and External Engagement, GCLT',
        photo: '/images/events/1st-international-conference-ai-society/organizer-gohar.png',
        href: '/people/mr-gohar-ali-goharvi',
      },
    ],
    tags: ['AI', 'Conference', 'Research', 'Technology', 'Society'],
    coverImage: '/images/events/1st-international-conference-ai-society/cover.png',
    coverFit: 'contain',
    coverWidth: 300,
    coverHeight: 300,
    galleryImages: Array.from(
      { length: 11 },
      (_, i) => `/images/events/1st-international-conference-ai-society/gallery-${i + 1}.png`,
    ),
    imagePaths: {
      cover: '/images/events/1st-international-conference-ai-society/cover.png',
      gallery: Array.from(
        { length: 11 },
        (_, i) => `/images/events/1st-international-conference-ai-society/gallery-${i + 1}.png`,
      ),
    },
  },
  {
    slug: 'sacred-scientific-perspectives-human-intrinsic-worth',
    title: 'Sacred and Scientific Perspectives: A Modern Dialogue on Human Life\'s Intrinsic Worth',
    excerpt:
      'GCLT hosted Dr. Tariq Mustafa for an inspiring session on how sacred wisdom and scientific understanding intersect to redefine the true essence of human life.',
    content: `
      <p>We were honored to host <strong>Dr. Tariq Mustafa</strong>, a visionary thinker and futurist, at the <strong>Global Centre for Learning &amp; Training (GCLT)</strong> for an inspiring session titled &ldquo;Sacred and Scientific Perspectives: A Modern Dialogue on Human Life&rsquo;s Intrinsic Worth.&rdquo;</p>
      <p>The evening was filled with enlightening discussions on how sacred wisdom and scientific understanding intersect to redefine the <strong>true essence of human life</strong>. Thought-provoking, engaging, and transformative — this session left us with new perspectives on the intrinsic value of humanity.</p>
      <p>Here&rsquo;s a glimpse of the memorable moments captured during the event.</p>
      <p class="text-sm text-[var(--color-text-light)]">#GCLT #InspiringDiscussion #SacredandScientific #HumanIntrinsicWorth #ThoughtLeadership #InspiringLecture</p>
    `,
    date: '2024-08-20',
    location: 'GCLT, Islamabad',
    format: 'Lecture',
    speakers: ['Dr. Tariq Mustafa'],
    tags: ['GCLT', 'Inspiring Discussion', 'Sacred and Scientific', 'Human Intrinsic Worth', 'Thought Leadership'],
    coverImage: '/images/events/sacred-scientific-perspectives-human-intrinsic-worth/cover.png',
    coverFit: 'contain',
    coverWidth: 300,
    coverHeight: 300,
    galleryImages: [
      '/images/events/sacred-scientific-perspectives-human-intrinsic-worth/gallery-1.jpg',
      '/images/events/sacred-scientific-perspectives-human-intrinsic-worth/gallery-2.png',
      '/images/events/sacred-scientific-perspectives-human-intrinsic-worth/gallery-3.png',
      '/images/events/sacred-scientific-perspectives-human-intrinsic-worth/gallery-4.jpg',
      '/images/events/sacred-scientific-perspectives-human-intrinsic-worth/gallery-5.png',
      '/images/events/sacred-scientific-perspectives-human-intrinsic-worth/gallery-6.png',
      '/images/events/sacred-scientific-perspectives-human-intrinsic-worth/gallery-7.png',
      '/images/events/sacred-scientific-perspectives-human-intrinsic-worth/gallery-8.png',
      '/images/events/sacred-scientific-perspectives-human-intrinsic-worth/gallery-9.png',
    ],
    imagePaths: {
      cover: '/images/events/sacred-scientific-perspectives-human-intrinsic-worth/cover.png',
      gallery: [
        '/images/events/sacred-scientific-perspectives-human-intrinsic-worth/gallery-1.jpg',
        '/images/events/sacred-scientific-perspectives-human-intrinsic-worth/gallery-2.png',
        '/images/events/sacred-scientific-perspectives-human-intrinsic-worth/gallery-3.png',
        '/images/events/sacred-scientific-perspectives-human-intrinsic-worth/gallery-4.jpg',
        '/images/events/sacred-scientific-perspectives-human-intrinsic-worth/gallery-5.png',
        '/images/events/sacred-scientific-perspectives-human-intrinsic-worth/gallery-6.png',
        '/images/events/sacred-scientific-perspectives-human-intrinsic-worth/gallery-7.png',
        '/images/events/sacred-scientific-perspectives-human-intrinsic-worth/gallery-8.png',
        '/images/events/sacred-scientific-perspectives-human-intrinsic-worth/gallery-9.png',
      ],
    },
  },
  {
    slug: 'isipam-2024',
    title: 'International Seminar and Exchange Student Mobility Programme 2024 (ISIPAM 2024)',
    excerpt:
      'A prestigious collaboration between Universiti Malaya, Muslim Youth University, and GCLT fostering global academic dialogue and student mobility.',
    content: `
      <p><strong>ISIPAM 2024</strong>, a prestigious collaboration between the Academy of Islamic Studies, <strong>Universiti Malaya (UM)</strong> and the Institute of Islamic Studies and Sharia, <strong>Muslim Youth University (MY)</strong>.</p>
      <p>GCLT proudly plays a pivotal role in facilitating this landmark event, fostering global academic dialogue and strengthening ties between renowned institutions.</p>
      <h3>A Warm Welcome to the Esteemed Delegation of Universiti Malaya</h3>
      <ul>
        <li><strong>Professor Dr. Mohd Fauzi Bin Hamat</strong> – Dean</li>
        <li><strong>Assoc. Prof. Dr. Khadher Bin Ahmad</strong> – Deputy Dean (Student Affairs)</li>
        <li><strong>Dr. Mohammad Azrien Bin Mohamed Adnan</strong> – Deputy Dean (Undergraduate Studies)</li>
        <li><strong>Mrs. Maimunah Binti Kamaruddin</strong> – Senior Assistant Registrar</li>
        <li><strong>Mrs. Nur Jannah Binti Md Akhir</strong> – Project Officer</li>
      </ul>
      <p>Hosted by <strong>Muslim Youth University (MY)</strong> and facilitated by the <strong>Global Centre for Learning &amp; Training (GCLT)</strong>, this initiative reflects our commitment to knowledge exchange, academic collaboration, and student mobility.</p>
    `,
    date: '2024-09-10',
    endDate: '2024-09-14',
    location: 'Islamabad, Pakistan',
    format: 'Mobility Programme',
    tags: ['ISIPAM', 'Malaysia', 'Student Mobility', 'Academic Exchange', 'GCLT'],
    coverImage: '/images/events/isipam-2024/cover.jpg',
    galleryImages: [
      '/images/events/isipam-2024/gallery-1.jpg',
      '/images/events/isipam-2024/gallery-2.jpg',
      '/images/events/isipam-2024/gallery-3.jpg',
      '/images/events/isipam-2024/gallery-4.jpg',
      '/images/events/isipam-2024/gallery-5.jpg',
      '/images/events/isipam-2024/gallery-6.jpg',
      '/images/events/isipam-2024/gallery-7.jpg',
      '/images/events/isipam-2024/gallery-8.jpg',
      '/images/events/isipam-2024/gallery-9.jpg',
      '/images/events/isipam-2024/gallery-10.jpg',
      '/images/events/isipam-2024/gallery-11.jpg',
      '/images/events/isipam-2024/gallery-12.jpg',
      '/images/events/isipam-2024/gallery-13.jpg',
      '/images/events/isipam-2024/gallery-14.jpg',
      '/images/events/isipam-2024/gallery-15.jpg',
      '/images/events/isipam-2024/gallery-16.jpg',
    ],
    imagePaths: {
      cover: '/images/events/isipam-2024/cover.jpg',
      gallery: [
        '/images/events/isipam-2024/gallery-1.jpg',
        '/images/events/isipam-2024/gallery-2.jpg',
        '/images/events/isipam-2024/gallery-3.jpg',
        '/images/events/isipam-2024/gallery-4.jpg',
        '/images/events/isipam-2024/gallery-5.jpg',
        '/images/events/isipam-2024/gallery-6.jpg',
        '/images/events/isipam-2024/gallery-7.jpg',
        '/images/events/isipam-2024/gallery-8.jpg',
        '/images/events/isipam-2024/gallery-9.jpg',
        '/images/events/isipam-2024/gallery-10.jpg',
        '/images/events/isipam-2024/gallery-11.jpg',
        '/images/events/isipam-2024/gallery-12.jpg',
        '/images/events/isipam-2024/gallery-13.jpg',
        '/images/events/isipam-2024/gallery-14.jpg',
        '/images/events/isipam-2024/gallery-15.jpg',
        '/images/events/isipam-2024/gallery-16.jpg',
      ],
    },
  },
  {
    slug: 'pink-salt-room-holistic-wellness',
    title: 'Exploring Holistic Wellness at the Pink Salt Room',
    excerpt:
      'During the Malaysian delegation\'s visit, guests explored the serene Pink Salt Room — blending traditional knowledge with modern functional medicine.',
    content: `
      <p>During the <strong>Malaysian delegation&rsquo;s visit</strong>, we had the privilege of exploring the serene and rejuvenating <strong>Pink Salt Room</strong>. This unique experience offered insights into the science of wellness, including the seven chakras and the map of consciousness, blending traditional knowledge with modern functional medicine.</p>
      <p>Moments like these deepen our understanding of holistic health practices while fostering stronger bonds between our guests and hosts.</p>
      <p class="text-sm text-[var(--color-text-light)]">#HolisticWellness #PinkSaltRoom #CulturalExchange #GlobalFriendship #GCLT #MalaysianDelegation #WellnessJourney</p>
    `,
    date: '2024-09-12',
    location: 'Islamabad, Pakistan',
    format: 'Seminar',
    tags: ['Holistic Wellness', 'Pink Salt Room', 'Cultural Exchange', 'Malaysian Delegation'],
    coverImage: '/images/events/pink-salt-room-holistic-wellness/cover.png',
    galleryImages: [
      '/images/events/pink-salt-room-holistic-wellness/gallery-1.jpg',
      '/images/events/pink-salt-room-holistic-wellness/gallery-2.jpg',
      '/images/events/pink-salt-room-holistic-wellness/gallery-3.jpg',
      '/images/events/pink-salt-room-holistic-wellness/gallery-4.jpg',
      '/images/events/pink-salt-room-holistic-wellness/gallery-5.jpg',
      '/images/events/pink-salt-room-holistic-wellness/gallery-6.jpg',
      '/images/events/pink-salt-room-holistic-wellness/gallery-7.jpg',
      '/images/events/pink-salt-room-holistic-wellness/gallery-8.jpg',
      '/images/events/pink-salt-room-holistic-wellness/gallery-9.jpg',
      '/images/events/pink-salt-room-holistic-wellness/gallery-10.jpg',
      '/images/events/pink-salt-room-holistic-wellness/gallery-11.jpg',
    ],
    imagePaths: {
      cover: '/images/events/pink-salt-room-holistic-wellness/cover.png',
      gallery: [
        '/images/events/pink-salt-room-holistic-wellness/gallery-1.jpg',
        '/images/events/pink-salt-room-holistic-wellness/gallery-2.jpg',
        '/images/events/pink-salt-room-holistic-wellness/gallery-3.jpg',
        '/images/events/pink-salt-room-holistic-wellness/gallery-4.jpg',
        '/images/events/pink-salt-room-holistic-wellness/gallery-5.jpg',
        '/images/events/pink-salt-room-holistic-wellness/gallery-6.jpg',
        '/images/events/pink-salt-room-holistic-wellness/gallery-7.jpg',
        '/images/events/pink-salt-room-holistic-wellness/gallery-8.jpg',
        '/images/events/pink-salt-room-holistic-wellness/gallery-9.jpg',
        '/images/events/pink-salt-room-holistic-wellness/gallery-10.jpg',
        '/images/events/pink-salt-room-holistic-wellness/gallery-11.jpg',
      ],
    },
    coverFit: 'contain',
    coverWidth: 300,
    coverHeight: 300,
  },
  {
    slug: 'healing-the-world-building-bridges',
    title: 'Healing the World: Building Bridges Beyond Borders',
    excerpt:
      'GCLT hosted Prof. Eng. Syed Badiuddin Soharwardy for discussions on cross-cultural paradigms, interfaith dialogue, and the contemporary relevance of Islamic teachings.',
    content: `
      <p>The <strong>Global Centre for Learning &amp; Training</strong> hosted a thought-provoking event featuring <strong>Prof. Eng. Syed Badiuddin Soharwardy</strong>, Founder of the Islamic Supreme Council of Canada.</p>
      <p>Through insightful discussions on <strong>Cross-Cultural Paradigms</strong>, <strong>Interfaith Dialogue</strong>, and the <strong>Contemporary Relevance of Islamic Teachings</strong>, the event emphasized the power of dialogue in uniting hearts and minds.</p>
      <p>Swipe through the highlights of this incredible evening, where ideas crossed borders, and understanding paved the way for a brighter, more connected future.</p>
      <p>Thank you to everyone who joined us in this collective journey of learning and empathy. Together, we are building bridges for a better tomorrow.</p>
      <p class="text-sm text-[var(--color-text-light)]">#HealingTheWorld #BuildingBridges #InterfaithDialogue #GlobalCommunity #GCLTEvents</p>
    `,
    date: '2024-12-05',
    location: 'GCLT, Islamabad',
    format: 'Seminar',
    speakers: ['Prof. Eng. Syed Badiuddin Soharwardy'],
    tags: ['Healing the World', 'Building Bridges', 'Interfaith Dialogue', 'Global Community'],
    coverImage: '/images/events/healing-the-world-building-bridges/cover.png',
    galleryImages: [
      '/images/events/healing-the-world-building-bridges/gallery-1.jpg',
      '/images/events/healing-the-world-building-bridges/gallery-2.png',
      '/images/events/healing-the-world-building-bridges/gallery-3.jpg',
      '/images/events/healing-the-world-building-bridges/gallery-4.jpg',
      '/images/events/healing-the-world-building-bridges/gallery-5.png',
      '/images/events/healing-the-world-building-bridges/gallery-6.png',
      '/images/events/healing-the-world-building-bridges/gallery-7.jpg',
      '/images/events/healing-the-world-building-bridges/gallery-8.jpg',
      '/images/events/healing-the-world-building-bridges/gallery-9.jpg',
      '/images/events/healing-the-world-building-bridges/gallery-11.jpg',
      '/images/events/healing-the-world-building-bridges/gallery-12.jpg',
      '/images/events/healing-the-world-building-bridges/gallery-13.jpg',
      '/images/events/healing-the-world-building-bridges/gallery-14.png',
    ],
    imagePaths: {
      cover: '/images/events/healing-the-world-building-bridges/cover.png',
      gallery: [
        '/images/events/healing-the-world-building-bridges/gallery-1.jpg',
        '/images/events/healing-the-world-building-bridges/gallery-2.png',
        '/images/events/healing-the-world-building-bridges/gallery-3.jpg',
        '/images/events/healing-the-world-building-bridges/gallery-4.jpg',
        '/images/events/healing-the-world-building-bridges/gallery-5.png',
        '/images/events/healing-the-world-building-bridges/gallery-6.png',
        '/images/events/healing-the-world-building-bridges/gallery-7.jpg',
        '/images/events/healing-the-world-building-bridges/gallery-8.jpg',
        '/images/events/healing-the-world-building-bridges/gallery-9.jpg',
        '/images/events/healing-the-world-building-bridges/gallery-11.jpg',
        '/images/events/healing-the-world-building-bridges/gallery-12.jpg',
        '/images/events/healing-the-world-building-bridges/gallery-13.jpg',
        '/images/events/healing-the-world-building-bridges/gallery-14.png',
      ],
    },
    coverFit: 'contain',
    coverWidth: 300,
    coverHeight: 300,
  },
  {
    slug: 'transformative-leadership-islamic-finance-workshop',
    title: 'Capturing Moments from a Transformative Evening — Leadership & Interest-Free Finance',
    excerpt:
      'Highlights from GCLT\'s workshop on building a transformative leadership mindset as Pakistan transitions to an interest-free financial system.',
    content: `
      <p>We are honored to share highlights from the recent <strong>workshop on building a transformative leadership mindset</strong> as Pakistan transitions to an <strong>interest-free financial system</strong>!</p>
      <p>From exploring <strong>change management</strong> to developing <strong>resilience strategies</strong>, participants gained invaluable insights to shape the future of Pakistan&rsquo;s Islamic finance.</p>
      <p>Thank you to everyone who attended, especially our featured speaker, <strong>Ubaid Ur Rehman Shafique</strong>, for his expertise and dedication to empowering future leaders!</p>
      <p>Swipe through for moments from this inspiring event!</p>
      <p class="text-sm text-[var(--color-text-light)]">#IslamicFinance #Leadership #PakistanFinance #RibaFree #FinancialTransformation</p>
    `,
    date: '2024-11-11',
    location: 'GCLT, Islamabad',
    format: 'Workshop',
    speakers: ['Ubaid Ur Rehman Shafique'],
    tags: ['Islamic Finance', 'Leadership', 'Pakistan Finance', 'Riba Free'],
    coverImage: '/images/events/transformative-leadership-islamic-finance-workshop/cover.png',
    galleryImages: [
      '/images/events/transformative-leadership-islamic-finance-workshop/gallery-1.jpg',
      '/images/events/transformative-leadership-islamic-finance-workshop/gallery-2.png',
      '/images/events/transformative-leadership-islamic-finance-workshop/gallery-3.png',
      '/images/events/transformative-leadership-islamic-finance-workshop/gallery-4.png',
      '/images/events/transformative-leadership-islamic-finance-workshop/gallery-5.jpg',
      '/images/events/transformative-leadership-islamic-finance-workshop/gallery-6.jpg',
      '/images/events/transformative-leadership-islamic-finance-workshop/gallery-7.jpg',
      '/images/events/transformative-leadership-islamic-finance-workshop/gallery-8.png',
      '/images/events/transformative-leadership-islamic-finance-workshop/gallery-9.png',
    ],
    imagePaths: {
      cover: '/images/events/transformative-leadership-islamic-finance-workshop/cover.png',
      gallery: [
        '/images/events/transformative-leadership-islamic-finance-workshop/gallery-1.jpg',
        '/images/events/transformative-leadership-islamic-finance-workshop/gallery-2.png',
        '/images/events/transformative-leadership-islamic-finance-workshop/gallery-3.png',
        '/images/events/transformative-leadership-islamic-finance-workshop/gallery-4.png',
        '/images/events/transformative-leadership-islamic-finance-workshop/gallery-5.jpg',
        '/images/events/transformative-leadership-islamic-finance-workshop/gallery-6.jpg',
        '/images/events/transformative-leadership-islamic-finance-workshop/gallery-7.jpg',
        '/images/events/transformative-leadership-islamic-finance-workshop/gallery-8.png',
        '/images/events/transformative-leadership-islamic-finance-workshop/gallery-9.png',
      ],
    },
    coverFit: 'contain',
    coverWidth: 300,
    coverHeight: 300,
  },
  {
    slug: 'gshsl-2024',
    title: 'Global Summit on Harmonisation of Shari\'ah and Law (GSHSL 2024)',
    excerpt:
      'The inaugural Global Summit on Harmonisation of Shari\'ah and Law — a premier academic forum on Islamic jurisprudence and contemporary legal frameworks.',
    content: `
      <p>The Global Centre for Learning &amp; Training proudly presents the inaugural <strong>Global Summit on Harmonisation of Shari&rsquo;ah and Law (GSHSL 2024)</strong> – a premier academic forum addressing the critical nexus of Islamic jurisprudence and contemporary legal frameworks in an era of increasing global interconnectedness.</p>
      <h3>Summit Overview</h3>
      <p>In our rapidly globalizing world, the harmonization of Shari&rsquo;ah and modern law is not just an academic exercise—it&rsquo;s a necessity. At GSHSL 2024, we examined the complex challenges and opportunities presented by legal convergence in Muslim-majority nations. Our distinguished speakers and panelists explored innovative strategies for fostering cohesive legal systems that balance religious precepts with modern governance requirements.</p>
      <h3>Key Focus Areas</h3>
      <ol>
        <li><strong>Comparative Analysis:</strong> In-depth case studies from Pakistan, Malaysia, and Nigeria, offering insights into practical harmonization efforts.</li>
        <li><strong>Theoretical Frameworks:</strong> Examination of new paradigms for integrating Islamic and secular legal principles.</li>
        <li><strong>Interdisciplinary Approach:</strong> Incorporating perspectives from law, sociology, anthropology, and related fields to enrich the discourse.</li>
      </ol>
    `,
    date: '2024-11-15',
    location: 'Islamabad, Pakistan',
    format: 'Summit',
    tags: ['Shari\'ah', 'Law', 'Summit', 'GSHSL 2024'],
    featured: true,
    coverImage: '/images/events/gshsl-2024/cover.jpg',
    galleryImages: Array.from({ length: 22 }, (_, i) => `/images/events/gshsl-2024/gallery-${i + 1}.jpg`),
    imagePaths: {
      cover: '/images/events/gshsl-2024/cover.jpg',
      gallery: Array.from({ length: 22 }, (_, i) => `/images/events/gshsl-2024/gallery-${i + 1}.jpg`),
    },
  },
  {
    slug: 'climate-finance-islamic-principles',
    title: 'Climate Finance Through Islamic Principles',
    excerpt:
      'A study circle exploring how Islamic finance can contribute to environmentally conscious practices and sustainable development.',
    content: `
      <p>In the realm of environmental sustainability, the concept of &ldquo;Climate Finance Through Islamic Principles&rdquo; emerges as a compelling avenue for addressing global ecological challenges. This approach navigates the intersection of Islamic ethics and financial systems, aiming to forge solutions that align with the principles of Islam and Shariah. Grounded in the understanding that responsible stewardship of the Earth is a shared duty, this exploration seeks to uncover how Islamic finance can contribute to environmentally conscious practices and sustainable development. As we navigate the complexities of climate finance, this examination offers insights into how Islamic principles can guide financial strategies that are not only economically sound but also environmentally responsible.</p>
      <h3>Key Questions</h3>
      <ul>
        <li>How can Islamic principles be effectively integrated into climate finance mechanisms to foster environmentally sustainable practices while adhering to Shariah compliance?</li>
        <li>In what ways does climate finance through Islamic principles contribute to addressing pressing environmental challenges, and what specific financial instruments align with both ethical considerations and ecological sustainability?</li>
        <li>What lessons can be drawn from the study circle discussions regarding the potential impact of Islamic climate finance on promoting global environmental awareness and sustainable development practices?</li>
      </ul>
      <p>The study circle on &ldquo;Climate Finance Through Islamic Principles&rdquo; stands as a beacon illuminating the profound intersection of environmental responsibility and Islamic finance. Through thoughtful deliberations, it has not only unveiled potential strategies for aligning financial mechanisms with Shariah principles but also underscored the importance of incorporating ethical considerations in the pursuit of climate solutions. It serves as a catalyst for fostering a more harmonious relationship between finance and environmental stewardship, demonstrating the impactful role Islamic principles can play in shaping a sustainable and conscientious global financial landscape.</p>
    `,
    date: '2024-04-18',
    location: 'GCLT, Islamabad',
    format: 'Study Circle',
    tags: ['Climate Finance', 'Islamic Finance', 'Sustainability', 'Environment'],
    coverImage: '/images/events/climate-finance-islamic-principles/cover.jpeg',
    coverFit: 'contain',
    coverWidth: 300,
    coverHeight: 251,
    galleryImages: [],
    imagePaths: {
      cover: '/images/events/climate-finance-islamic-principles/cover.jpeg',
      gallery: [],
    },
  },
  {
    slug: 'women-safeguarding-religion-karbala',
    title: 'The Role and Responsibilities of Women in the Safeguarding of Religion (in the context of the Battle of Karbala)',
    excerpt:
      'A symposium on the pivotal contributions of women during the Battle of Karbala and their enduring lessons for religious preservation.',
    content: `
      <p>In the profound historical context of the Battle of Karbala, the role and responsibilities of women in safeguarding religion emerge as a compelling and significant narrative. This pivotal event in Islamic history, marked by the tragic martyrdom of Imam Hussain, unfolds a unique perspective on the contributions of women in preserving the essence of faith. Beyond conventional roles, the women of Karbala exhibited unwavering strength, resilience, and a profound commitment to upholding the values inherent in their religious beliefs. Exploring the multifaceted responsibilities shouldered by these women provides valuable insights into the broader discourse surrounding the intertwining of gender, spirituality, and societal resilience within the fabric of religious history.</p>
      <h3>Key Questions</h3>
      <ul>
        <li>How did the women of Karbala shape and redefine traditional gender roles during the Battle, illustrating their pivotal role in safeguarding religious values?</li>
        <li>What enduring lessons can be extracted from the experiences of these women, and how do these lessons resonate with contemporary discussions on women&rsquo;s roles in religious preservation?</li>
        <li>In what ways did the contributions of women in Karbala influence societal perceptions of gender roles, and how can these insights inform broader conversations on the intersection of faith and gender in diverse cultural contexts?</li>
      </ul>
      <p>The symposium titled &ldquo;The Role and Responsibilities of Women in the Safeguarding of Religion (in the context of the Battle of Karbala)&rdquo; served as a profound exploration into the intricate dynamics of women&rsquo;s contributions during this historical event. It addressed key questions surrounding the transformative role of women, challenging and redefining traditional gender roles within the context of religious preservation. It provided a comprehensive understanding of the women of Karbala but also illuminated enduring lessons applicable to contemporary dialogues on gender, faith, and societal resilience.</p>
    `,
    date: '2024-03-28',
    location: 'GCLT, Islamabad',
    format: 'Seminar',
    tags: ['Women', 'Karbala', 'Religious Preservation', 'Gender'],
    coverImage: '/images/events/women-safeguarding-religion-karbala/cover.jpeg',
    coverFit: 'contain',
    coverWidth: 300,
    coverHeight: 300,
    galleryImages: [],
    imagePaths: {
      cover: '/images/events/women-safeguarding-religion-karbala/cover.jpeg',
      gallery: [],
    },
  },
  {
    slug: 'exodus-to-coexistence-palestinian-politics',
    title: 'From Exodus to Coexistence: Tracing the Historical Roots of Palestinian Politics & the Quest for a Two-State Solution',
    excerpt:
      'A webinar tracing the historical roots of Palestinian politics and examining pathways toward coexistence and a two-state solution.',
    content: `
      <p>In the ongoing discourse surrounding the Israeli-Palestinian conflict, recent actions in the Gaza Strip and broader Israeli policies have become focal points, inviting a comprehensive exploration of their impact on the Palestinian people and their quest for a sovereign state. The humanitarian crisis unfolding in the region and the systemic challenges faced by Palestinians is one that needs immediate attention. The discourse also addresses the crucial role of the international community in mitigating these challenges and contributing to a resolution. Simultaneously, the discussion extends to an analysis of the potential of the international legal framework and global institutions in facilitating peace negotiations and safeguarding the rights and security of all involved parties. By situating the conversation within a global context, this framework underscores the importance of diplomatic and legal mechanisms in navigating the complexities of the conflict. Furthermore, the exploration of the historical context of Palestinian politics forms an integral part of the theoretical background, emphasizing the significance of historical awareness in shaping strategies for a peaceful resolution. This context underscores the need for a comprehensive approach that acknowledges past injustices, fostering a nuanced understanding that can pave the way for sustainable and just solutions in the pursuit of coexistence and peace.</p>
      <h3>Key Questions</h3>
      <ul>
        <li>What historical events have defined the Palestinian quest for nationhood and identity?</li>
        <li>How have recent actions in the Gaza strip and the broader Israeli policies affected the Palestinian people and their hopes for a sovereign state?</li>
        <li>In what ways can the international legal framework and global institutions contribute to resolving the conflict and supporting a two-state solution?</li>
      </ul>
      <p>To answer these questions, the webinar titled &ldquo;From Exodus to Coexistence: Tracing the Historical Roots of Palestinian Politics &amp; the Quest for a Two-State Solution&rdquo; offered a profound exploration of the historical and contemporary dynamics at play. The event provided a critical platform for examining the intertwined narratives of nationhood, identity, and the relentless pursuit of a peaceful resolution to the long-standing conflict, against the backdrop of a global push for a two-state solution and improved relations between Israel and the Arab world.</p>
    `,
    date: '2024-02-14',
    format: 'Webinar',
    tags: ['Palestine', 'Two-State Solution', 'International Law', 'Politics'],
    coverImage: '/images/events/exodus-to-coexistence-palestinian-politics/cover.jpeg',
    coverFit: 'contain',
    coverWidth: 300,
    coverHeight: 176,
    galleryImages: [],
    imagePaths: {
      cover: '/images/events/exodus-to-coexistence-palestinian-politics/cover.jpeg',
      gallery: [],
    },
  },
  {
    slug: 'ai-ethico-philosophical-islamic-thought',
    title: 'Envisioning the Future with Ethico-Philosophical Dimensions of Artificial Intelligence in Islamic Thought',
    excerpt:
      'A webinar on how Islamic ethical principles can inform the development, deployment, and governance of artificial intelligence.',
    content: `
      <p>In the contemporary intersection of technology and ethics, the incorporation of Islamic philosophical principles into discussions surrounding artificial intelligence (AI) has emerged as a critical and timely inquiry. The question of how ethical principles from Islamic philosophy can inform the development and utilization of AI technologies has opened avenues for nuanced explorations into justice, beneficence, and the sanctity of human life, as imparted by Islamic ethics. Participants engaging in these discussions have delved into the ways in which these principles can guide the ethical deployment of AI, emphasizing considerations of justice and human well-being throughout the technology&rsquo;s lifecycle. Moreover, the dialogue extends to the pivotal question of ensuring harmony between AI technologies and Islamic ethical values, sparking conversations on embedding these values at every stage, from conception to deployment. The societal impacts of AI, viewed through an Islamic ethical lens, have prompted reflections on issues such as privacy, autonomy, and social equity, leading to a comprehensive exploration of potential mitigation strategies. As the discourse unfolds, the examination of how Islamic thought can contribute to the global discourse on AI ethics has underscored the potential of Islamic ethical principles to enrich and diversify conversations on the ethical implications of AI, advocating for a universally inclusive approach to ethical governance in technology.</p>
      <h3>Key Questions</h3>
      <ol>
        <li>What ethical principles from Islamic philosophy can inform the development and utilization of artificial intelligence?</li>
        <li>How can the development and application of AI technologies ensure harmony with Islamic ethical values?</li>
        <li>What are the societal impacts of AI from an Islamic ethical viewpoint, and how can these be mitigated?</li>
      </ol>
      <p>In providing answers to these questions, the webinar titled &ldquo;Envisioning the Future with Ethico-Philosophical Dimensions of Artificial Intelligence in Islamic Thought&rdquo; emerged as a critical juncture in the discourse on technology&rsquo;s moral compass, attracting a diverse audience eager to explore the integration of AI with the profound ethical teachings of Islamic philosophy. It underscored the indispensable role of Islamic ethical wisdom in shaping a tech-driven future that upholds humanity&rsquo;s highest moral standards. The event stands as a testament to the urgent need for a harmonious coexistence between technological advancement and ethical stewardship, guided by the rich traditions of Islamic thought.</p>
    `,
    date: '2024-05-22',
    format: 'Webinar',
    tags: ['AI', 'Islamic Thought', 'Ethics', 'Technology'],
    coverImage: '/images/events/ai-ethico-philosophical-islamic-thought/cover.jpeg',
    coverFit: 'contain',
    coverWidth: 300,
    coverHeight: 212,
    galleryImages: [],
    imagePaths: {
      cover: '/images/events/ai-ethico-philosophical-islamic-thought/cover.jpeg',
      gallery: [],
    },
  },
  {
    slug: 'discovering-new-horizons-madrassa-university',
    title: 'Discovering New Horizons: Lessons from Madrassa to University Experience',
    excerpt:
      'Dr. Falak Sher Faizi shared his personal journey and the transformative power of education transitioning from madrassa to university.',
    content: `
      <p>On <strong>May 6th, 2023</strong>, the Global Centre for Learning &amp; Training (GCLT) hosted an extraordinary evening that left attendees inspired and enlightened. The event, entitled &ldquo;Discovering New Horizons: Lessons from Madrassa to University Experience,&rdquo; featured <strong>Dr. Falak Sher Faizi</strong>, Assistant Professor at Lahore Leads University, who shared his personal journey of growth and the transformative power of education.</p>
      <p>Dr. Faizi effortlessly captivated the audience with his unique perspective on the transition from Madrassa to university. Drawing upon his own experiences, he delved into profound insights and invaluable lessons, illuminating how education can shape an individual&rsquo;s life and pave the way for new opportunities.</p>
      <p>The event drew a diverse audience, including students, educators, and individuals with a passion for lifelong learning. Attendees were treated to an engaging discourse on navigating different educational phases and optimizing their academic journey. Dr. Faizi&rsquo;s words resonated deeply with the audience, providing them with guidance and motivation to strive for excellence in their educational pursuits.</p>
      <p>The lecture proved to be an enriching experience for all who attended, as they left the event feeling inspired and equipped with practical strategies for personal growth. Dr. Faizi&rsquo;s expertise and storytelling prowess ensured that each participant gained a profound understanding of the transformative potential of education.</p>
      <p>On behalf of the Global Centre for Learning &amp; Training (GCLT), <strong>Dr. Abu Bakar Siddique</strong> expressed heartfelt gratitude to Dr. Falak Sher Faizi for generously sharing his time, knowledge, and experiences with us. His contribution served as a testament to GCLT&rsquo;s unwavering commitment to fostering a culture of continuous learning and personal development.</p>
    `,
    date: '2023-05-06',
    location: 'GCLT, Islamabad',
    format: 'Lecture',
    speakers: ['Dr. Falak Sher Faizi'],
    tags: ['Education', 'Madrassa', 'University', 'Personal Growth'],
    coverImage: '/images/events/discovering-new-horizons-madrassa-university/cover.png',
    coverFit: 'contain',
    galleryImages: [],
    imagePaths: {
      cover: '/images/events/discovering-new-horizons-madrassa-university/cover.png',
      gallery: [],
    },
  },
  {
    slug: 'empowering-women-ramadan-spirituality',
    title: 'Empowering Women in Ramadan: Exploring the Intersection of Culture, Religion, and Women\'s Spirituality',
    excerpt:
      'A panel discussion at Kitchen Cuisine, Islamabad, on the multifaceted roles of women during the holy month of Ramadan.',
    content: `
      <p>On <strong>April 11, 2023</strong>, the Global Centre for Learning &amp; Training (GCLT) organized an engaging panel discussion under the title &ldquo;Empowering Women in Ramadan: Exploring the Intersection of Culture, Religion, and Women&rsquo;s Spirituality.&rdquo; This enlightening event took place at <strong>Kitchen Cuisine in F-8/1, Islamabad</strong>, drawing a diverse audience eager to delve into the multifaceted roles of women during the holy month of Ramadan.</p>
      <p>The discussion was skillfully moderated by <strong>Dr. Kulsoom</strong>, an Assistant Professor at the National University of Science and Technology (NUST), who expertly guided the conversation towards a deeper understanding of the topic.</p>
      <p>The panel comprised two distinguished speakers from NUST, who offered valuable insights and perspectives. <strong>Dr. Ayesha Jadoon</strong>, an Assistant Professor at NUST, shed light on the often overlooked impact of women&rsquo;s narratives in uncovering the true essence of Ramadan and the diverse experiences within the Muslim community. <strong>Dr. Wajiha Haq</strong>, also an Assistant Professor at NUST, shared inspiring stories of women who have shattered stereotypes and assumed leadership roles in Islamic communities. Her focus was on their transformative journeys from fasting to taking on prominent positions of leadership.</p>
      <p>The primary objective of the panel discussion was to explore the intricate interplay between culture, religion, and spirituality, and their influence on the experiences of women during the sacred month of Ramadan. Attendees had the opportunity to glean valuable knowledge from esteemed experts in the field and engage in discussions centered around strategies for empowering women to fully participate in the spiritual and communal aspects of Ramadan.</p>
    `,
    date: '2023-04-11',
    location: 'Kitchen Cuisine, F-8/1, Islamabad',
    format: 'Panel',
    speakers: ['Dr. Kulsoom', 'Dr. Ayesha Jadoon', 'Dr. Wajiha Haq'],
    tags: ['Women', 'Ramadan', 'Spirituality', 'Panel Discussion'],
    coverImage: '/images/events/empowering-women-ramadan-spirituality/cover.png',
    coverFit: 'contain',
    galleryImages: [],
    imagePaths: {
      cover: '/images/events/empowering-women-ramadan-spirituality/cover.png',
      gallery: [],
    },
  },
  {
    slug: 'maqasid-shariah-islamic-banking',
    title: 'Navigating the Intersection of Maqasid e Shariah and Islamic Banking',
    excerpt:
      'Dr. Muhammad Tahir Mansoori led a session on integrating Maqasid e Shariah principles into Islamic banking practice.',
    content: `
      <p>Islamic banking holds significant global importance due to its unwavering commitment to Shariah principles. Yet, the practical implementation of these principles presents a labyrinth of challenges. In a quest to navigate these complexities and unlock the potential for aligning banking practices with the broader objectives of Shariah, the Global Centre for Learning &amp; Training (GCLT) organized a thought-provoking session on <strong>February 16, 2023</strong>.</p>
      <p>Stepping into the spotlight as the distinguished keynote speaker was none other than <strong>Dr. Muhammad Tahir Mansoori</strong>. With an illustrious background as a former Vice President (HSR) at IIUI and a Resident Shariah Advisor Board Member at SECP, Dr. Mansoori graced the event with his invaluable expertise, unfurling insights and perspectives that set minds ablaze.</p>
      <p>At the heart of the session lay the captivating concept of Maqasid e Shariah and its profound significance in the realm of Islamic banking. The atmosphere crackled with intellectual fervor as participants delved into thoughtful discussions, ardently exploring the contours of effective strategies for seamlessly integrating these principles into the tapestry of banking practices. The event&rsquo;s primary mission was to build sturdy bridges that spanned the chasm between theoretical concepts and their gritty, real-world implementation, endowing attendees with a newfound depth of understanding regarding the challenges and prospects that lay within this domain&rsquo;s intricate tapestry.</p>
      <p>As the clock ticked away, the session reverberated with energy, kindling a vibrant response from a diverse and engaged audience. Scholars, banking virtuosos, students, and the curious minds who yearned for an intricate interplay between Shariah principles and the realm of finance all found solace within the event&rsquo;s resplendent discourse.</p>
      <p>On behalf of the Global Centre for Learning &amp; Training (GCLT), <strong>Dr. Abu Bakar Siddique</strong> extended heartfelt gratitude to Dr. Muhammad Tahir Mansoori, whose incandescent contribution to the event will forever be etched in the annals of this remarkable gathering. Moreover, the reverberating appreciation extends to every soul who graced the occasion with their active participation, for they, in essence, forged a platform for conversations of immense consequence. Through this session, the seeds of comprehension sprouted, unfurling a comprehensive tapestry of knowledge that unraveled the intricacies entwined with Islamic banking and the ethereal framework of Maqasid e Shariah.</p>
    `,
    date: '2023-02-16',
    location: 'GCLT, Islamabad',
    format: 'Seminar',
    speakers: ['Dr. Muhammad Tahir Mansoori'],
    tags: ['Maqasid e Shariah', 'Islamic Banking', 'Finance'],
    coverImage: '/images/events/maqasid-shariah-islamic-banking/cover.png',
    coverFit: 'contain',
    galleryImages: [],
    imagePaths: {
      cover: '/images/events/maqasid-shariah-islamic-banking/cover.png',
      gallery: [],
    },
  },
  {
    slug: 'prohibition-riba-legal-journey-pakistan',
    title: 'Prohibition of Riba: A Legal Journey in Pakistan',
    excerpt:
      'Mr. Qaisar Imam, Advocate at Islamabad High Court, spoke on the legal journey of prohibiting Riba in Pakistan.',
    content: `
      <p>On <strong>Thursday, November 10th, 2022</strong>, the Global Centre for Learning &amp; Training (GCLT) hosted a thought-provoking seminar titled &ldquo;Prohibition of Riba: A Legal Journey in Pakistan.&rdquo;</p>
      <p>This event was held at GCLT&rsquo;s premises in Islamabad and featured <strong>Mr. Qaisar Imam</strong>, an esteemed Advocate at Islamabad High Court, as the guest speaker. With his profound expertise in the legal domain, Mr. Imam provided valuable insights and shed light on the legal journey of prohibiting Riba (interest) in Pakistan. His extensive knowledge and experiences added depth to the discussions, making it a truly enriching experience for the attendees.</p>
      <p>The primary aim of the seminar was to explore the legal aspects surrounding the prohibition of Riba in the Pakistani context. Riba holds significant importance within Islamic finance, and this seminar offered attendees a deeper understanding of its legal implications and its impact on financial transactions in Pakistan.</p>
      <p>The participants had the opportunity to engage in meaningful discussions, ask questions, and exchange ideas with Mr. Qaisar Imam and fellow attendees who shared a common interest in the subject matter. The seminar provided a platform for legal professionals, scholars, and enthusiasts to come together and explore the complexities and nuances of the Prohibition of Riba in Pakistan.</p>
      <p>The seminar ended with a Q&amp;A session, where attendees had the opportunity to ask questions and share their perspectives on the topic. The discussion was lively and informative, and it provided a platform for legal professionals, scholars, and enthusiasts to come together and explore the complexities and nuances of the Prohibition of Riba in Pakistan.</p>
    `,
    date: '2022-11-10',
    location: 'GCLT, Islamabad',
    format: 'Seminar',
    speakers: ['Mr. Qaisar Imam'],
    tags: ['Riba', 'Islamic Law', 'Pakistan', 'Legal Journey'],
    coverImage: '/images/events/prohibition-riba-legal-journey-pakistan/cover.png',
    coverFit: 'contain',
    galleryImages: [],
    imagePaths: {
      cover: '/images/events/prohibition-riba-legal-journey-pakistan/cover.png',
      gallery: [],
    },
  },
];

export function sortEventsByDate(events: GCLTEvent[]): GCLTEvent[] {
  return [...events].sort((a, b) => new Date(b.date).getTime() - new Date(a.date).getTime());
}

export function getEventBySlug(slug: string): GCLTEvent | undefined {
  return gcltEvents.find((e) => e.slug === slug);
}

export function getUpcomingGCLTEvents(): GCLTEvent[] {
  const today = new Date();
  today.setHours(0, 0, 0, 0);
  return sortEventsByDate(gcltEvents.filter((e) => new Date(e.date) >= today));
}

export function getPastGCLTEvents(): GCLTEvent[] {
  const today = new Date();
  today.setHours(0, 0, 0, 0);
  return sortEventsByDate(gcltEvents.filter((e) => new Date(e.date) < today));
}

export function getEventsByYear(year: number): GCLTEvent[] {
  return sortEventsByDate(
    gcltEvents.filter((e) => new Date(e.date).getFullYear() === year),
  );
}

export function getEventYears(): number[] {
  const years = new Set(gcltEvents.map((e) => new Date(e.date).getFullYear()));
  return Array.from(years).sort((a, b) => b - a);
}

export function getEventFormatCounts(): Record<EventFormat, number> {
  const counts = {} as Record<EventFormat, number>;
  for (const event of gcltEvents) {
    counts[event.format] = (counts[event.format] ?? 0) + 1;
  }
  return counts;
}
