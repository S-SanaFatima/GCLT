import { Metadata } from 'next';
import AboutPageContent from '@/components/about/AboutPageContent';

export const metadata: Metadata = {
  title: 'About',
  description:
    'Institutional profile of the Global Centre for Learning & Training — mission, vision, focus areas, objectives, publications, and faculty in Islamabad, Pakistan.',
};

export default function AboutPage() {
  return <AboutPageContent />;
}
