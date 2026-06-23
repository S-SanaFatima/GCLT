import Link from 'next/link';
import { ArrowRight } from 'lucide-react';
import NewsCard from '@/components/shared/NewsCard';
import AnimatedSection from '@/components/shared/AnimatedSection';
import { newsPosts } from '@/lib/data/news';

export default function LatestNews() {
  const latest = newsPosts.slice(0, 3);

  return (
    <section className="border-y border-border/50 bg-off-white py-12 md:py-16">
      <div className="container-gclt">
        <AnimatedSection className="flex flex-col items-center text-center">
          <span className="section-label">Updates</span>
          <h2 className="mt-3 text-2xl font-bold text-primary md:text-3xl">Latest News</h2>
          <p className="mt-2 max-w-lg text-sm text-[var(--color-text-light)] md:text-base">
            News, events, and announcements from GCLT.
          </p>
        </AnimatedSection>

        <div className="mt-8 grid gap-6 md:grid-cols-3 md:gap-5">
          {latest.map((post, i) => (
            <AnimatedSection key={post.slug} delay={i * 0.06}>
              <NewsCard post={post} />
            </AnimatedSection>
          ))}
        </div>

        <AnimatedSection delay={0.15} className="mt-8 text-center">
          <Link href="/updates" className="btn-outline group text-sm">
            View all news
            <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
          </Link>
        </AnimatedSection>
      </div>
    </section>
  );
}
