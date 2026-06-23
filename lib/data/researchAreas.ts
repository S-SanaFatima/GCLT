import {
  BookOpen,
  Cpu,
  Scale,
  Sparkles,
  Users,
  type LucideIcon,
} from 'lucide-react';

export interface ResearchArea {
  slug: string;
  title: string;
  description: string;
  topics: string[];
  icon: LucideIcon;
  accent: 'primary' | 'accent';
}

export const researchAreas: ResearchArea[] = [
  {
    slug: 'law-religion-governance',
    title: 'Law, Religion, Governance, and Public Policy',
    description:
      'Examining the intersection of Sharīʿah, constitutional frameworks, and public policy to address contemporary governance challenges in diverse societies.',
    topics: ['Islamic Law', 'Public Policy', 'Governance', 'Constitutional Rights'],
    icon: Scale,
    accent: 'primary',
  },
  {
    slug: 'society-ethics-religion',
    title: 'Society, Ethics, and Religion',
    description:
      'Exploring moral frameworks, social cohesion, interfaith dialogue, and the role of religion in shaping ethical responses to modern societal issues.',
    topics: ['Ethics', 'Interfaith Dialogue', 'Social Cohesion', 'Religious Studies'],
    icon: Sparkles,
    accent: 'accent',
  },
  {
    slug: 'technology-global-challenges',
    title: 'Technology and Emerging Global Challenges',
    description:
      'Investigating how digital innovation, AI, bioethics, and globalisation reshape law, ethics, and human rights in an evolving world.',
    topics: ['AI & Ethics', 'Bioethics', 'Digital Governance', 'Global Challenges'],
    icon: Cpu,
    accent: 'primary',
  },
  {
    slug: 'research-academic-exchange',
    title: 'Research, Academic Exchange, and Training Initiatives',
    description:
      'Building platforms for scholarly collaboration, methodological training, and knowledge exchange among researchers and institutions worldwide.',
    topics: ['Research Methods', 'Academic Exchange', 'Training', 'Collaboration'],
    icon: BookOpen,
    accent: 'accent',
  },
  {
    slug: 'leadership-capacity-building',
    title: 'Leadership Development and Capacity-Building',
    description:
      'Strengthening leadership, professional skills, and institutional capacity through structured programmes for scholars, practitioners, and policymakers.',
    topics: ['Leadership', 'Professional Development', 'Capacity-Building', 'Policy Leadership'],
    icon: Users,
    accent: 'primary',
  },
];

export const researchAreaTitles = researchAreas.map((area) => area.title);
