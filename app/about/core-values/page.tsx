import { Metadata } from 'next';
import CoreValuesContent from '@/components/about/CoreValuesContent';

export const metadata: Metadata = {
  title: 'Core Values',
  description:
    'The core values that guide the Global Centre for Learning & Training in all its academic and research endeavours.',
};

export default function CoreValuesPage() {
  return <CoreValuesContent />;
}
