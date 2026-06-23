import {
  BookOpen,
  Briefcase,
  Building2,
  FileText,
  GraduationCap,
  Home,
  Mail,
  Megaphone,
  Microscope,
  Users,
  type LucideIcon,
} from 'lucide-react';

export interface NavChild {
  label: string;
  href: string;
  description?: string;
}

export interface NavItem {
  label: string;
  href: string;
  icon?: LucideIcon;
  description?: string;
  featured?: { title: string; description: string; href: string; cta: string };
  children?: NavChild[];
}

export const navItems: NavItem[] = [
  { label: 'Home', href: '/', icon: Home },
  {
    label: 'About',
    href: '/about',
    icon: Building2,
    description: 'Our mission, people, and partnerships',
    featured: {
      title: 'Meet Our Faculty',
      description: 'Scholars and professionals from leading institutions worldwide.',
      href: '/about/team',
      cta: 'View Team',
    },
    children: [
      { label: 'Introduction', href: '/about', description: 'Who we are and what we stand for' },
      { label: 'Our Team & Faculty', href: '/about/team', description: 'Profiles of our academic community' },
      { label: 'Core Values', href: '/about/core-values', description: 'Principles guiding GCLT' },
      { label: 'Affiliations & Partnerships', href: '/about/affiliations', description: 'Global academic network' },
    ],
  },
  {
    label: 'Academics',
    href: '/academics',
    icon: GraduationCap,
    description: 'Programmes, courses, and admissions',
    featured: {
      title: 'Apply for 2026 Intake',
      description: 'Diploma programmes and short courses now accepting applications.',
      href: '/academics/admissions',
      cta: 'Apply Now',
    },
    children: [
      { label: 'Programme Catalogue', href: '/academics/programme-catalogue', description: 'All 11 GCLT programmes' },
      { label: 'Diploma Programs', href: '/academics/diploma-programs', description: 'Professional & executive diplomas' },
      { label: 'Short Courses', href: '/academics/short-courses', description: 'Certificates & professional courses' },
      { label: 'Trainings & Workshops', href: '/academics/trainings-workshops', description: 'Professional development' },
      { label: 'Internships', href: '/academics/internships', description: 'Research & editorial roles' },
      { label: 'IERP', href: '/academics/ierp', description: 'Islamic Education Revitalization Program' },
      { label: 'Admissions / Apply Now', href: '/academics/admissions', description: 'Start your application' },
    ],
  },
  {
    label: 'Research',
    href: '/research',
    icon: Microscope,
    description: 'Publications, journals, and conferences',
    featured: {
      title: 'Call for Papers',
      description: 'Submit to Al Kashaf, Al Salihat, or Al Haqeeqah journals.',
      href: '/research/call-for-papers',
      cta: 'Submit Paper',
    },
    children: [
      { label: 'Research Areas', href: '/research/areas', description: 'Interdisciplinary focus areas' },
      { label: 'Publications', href: '/research/publications', description: 'Books and research outputs' },
      { label: 'Journals', href: '/research/journals', description: 'Al-Kashaf, Al-Salihat & Al-Haqeeqah' },
      { label: 'Call for Papers', href: '/research/call-for-papers', description: 'Submission guidelines' },
    ],
  },
  {
    label: 'Updates',
    href: '/updates',
    icon: Megaphone,
    description: 'News, events, and announcements',
    featured: {
      title: 'Latest Announcement',
      description: 'GCLT transitions to Global Centre for Learning & Training.',
      href: '/updates/gclt-transition-global-centre-learning-training',
      cta: 'Read More',
    },
    children: [
      { label: 'News & Announcements', href: '/updates', description: 'Latest from GCLT' },
      { label: 'Events Calendar', href: '/updates/events', description: 'Upcoming & past events' },
      { label: 'Press Releases', href: '/updates/press-releases', description: 'Official statements' },
      { label: 'Newsletter Signup', href: '/updates/newsletter', description: 'Stay informed' },
    ],
  },
  {
    label: 'Careers',
    href: '/careers',
    icon: Briefcase,
    description: 'Jobs, fellowships, and opportunities',
    featured: {
      title: 'Join Our Team',
      description: 'Faculty, research, and administrative opportunities.',
      href: '/careers/job-openings',
      cta: 'View Openings',
    },
    children: [
      { label: 'Job Openings', href: '/careers/job-openings', description: 'Current vacancies' },
      { label: 'Internship Opportunities', href: '/careers/internship-opportunities', description: 'Early career roles' },
      { label: 'Visiting Scholars', href: '/careers/visiting-scholars', description: 'Short-term visits' },
      { label: 'Fellowships', href: '/careers/fellowships', description: 'Postdoctoral fellowships' },
      { label: 'How to Apply', href: '/careers/how-to-apply', description: 'Application process' },
    ],
  },
  { label: 'Contact', href: '/contact', icon: Mail },
];
