import type { LucideIcon } from 'lucide-react';
import {
  Award,
  Shield,
  Layers,
  Users,
  Globe2,
  Lightbulb,
} from 'lucide-react';

export interface CoreValue {
  title: string;
  description: string;
  icon: LucideIcon;
}

export const coreValues: CoreValue[] = [
  {
    title: 'Academic Excellence',
    description:
      'Pursuing the highest standards in research, teaching, and intellectual inquiry across all programmes and publications.',
    icon: Award,
  },
  {
    title: 'Integrity',
    description:
      'Upholding ethical conduct, transparency, and accountability in every institutional activity and partnership.',
    icon: Shield,
  },
  {
    title: 'Interdisciplinarity',
    description:
      'Bridging traditional scholarship with contemporary thought across law, society, religion, technology, and policy.',
    icon: Layers,
  },
  {
    title: 'Inclusivity',
    description:
      'Fostering an open, diverse community of learners, scholars, and professionals at national and global levels.',
    icon: Users,
  },
  {
    title: 'Global Engagement',
    description:
      'Building meaningful partnerships and scholarly impact through collaboration with institutions worldwide.',
    icon: Globe2,
  },
  {
    title: 'Innovation',
    description:
      'Embracing technology and new methodologies while honouring intellectual heritage and rigorous standards.',
    icon: Lightbulb,
  },
];
