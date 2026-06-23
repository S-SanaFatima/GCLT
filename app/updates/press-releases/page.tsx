import { Metadata } from 'next';
import PageHero from '@/components/shared/PageHero';
import { getNewsByCategory } from '@/lib/data/news';
import NewsCard from '@/components/shared/NewsCard';

export const metadata: Metadata = {
  title: 'Press Releases',
  description: 'Official press releases from the Global Centre for Learning & Training.',
};

export default function PressReleasesPage() {
  const releases = getNewsByCategory('Press Releases');

  return (
    <>
      <PageHero
        title="Press Releases"
        breadcrumbs={[
          { label: 'Home', href: '/' },
          { label: 'Updates', href: '/updates' },
          { label: 'Press Releases' },
        ]}
      />
      <section className="section-padding bg-white">
        <div className="container-gclt">
          <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
            {releases.map((post) => (
              <NewsCard key={post.slug} post={post} />
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
