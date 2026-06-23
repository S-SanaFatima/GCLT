import { Metadata } from 'next';
import JournalProfile from '@/components/research/JournalProfile';
import { getJournalBySlug } from '@/lib/data/journals';

const journal = getJournalBySlug('al-kashaf')!;

export const metadata: Metadata = {
  title: 'Al-Kashaf Journal',
  description: journal.subtitle,
};

export default function AlKashafPage() {
  return <JournalProfile journal={journal} />;
}
