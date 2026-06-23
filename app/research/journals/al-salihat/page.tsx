import { Metadata } from 'next';
import JournalProfile from '@/components/research/JournalProfile';
import { getJournalBySlug } from '@/lib/data/journals';

const journal = getJournalBySlug('al-salihat')!;

export const metadata: Metadata = {
  title: 'Al-Salihat Journal',
  description: journal.subtitle,
};

export default function AlSalihatPage() {
  return <JournalProfile journal={journal} />;
}
