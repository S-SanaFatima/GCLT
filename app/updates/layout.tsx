import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'News & Updates',
  description: 'Latest news, announcements, events, and press releases from the Global Centre for Learning & Training.',
};

export default function UpdatesLayout({ children }: { children: React.ReactNode }) {
  return children;
}
