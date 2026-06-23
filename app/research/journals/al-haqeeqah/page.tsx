import { Metadata } from 'next';
import JournalProfile from '@/components/research/JournalProfile';
import { getJournalBySlug } from '@/lib/data/journals';

const journal = getJournalBySlug('al-haqeeqah')!;

export const metadata: Metadata = {
  title: 'Al-Haqeeqah Journal',
  description: journal.subtitle,
};

export default function AlHaqeeqahPage() {
  return <JournalProfile journal={journal} />;
}
