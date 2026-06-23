import { Metadata } from 'next';
import Image from 'next/image';
import Link from 'next/link';
import { notFound } from 'next/navigation';
import PageHero from '@/components/shared/PageHero';
import { newsPosts, getNewsBySlug } from '@/lib/data/news';
import { formatDate } from '@/lib/utils';

interface Props {
  params: { slug: string };
}

export function generateStaticParams() {
  return newsPosts.map((p) => ({ slug: p.slug }));
}

export function generateMetadata({ params }: Props): Metadata {
  const post = getNewsBySlug(params.slug);
  if (!post) return { title: 'News' };
  return {
    title: post.title,
    description: post.excerpt,
  };
}

export default function NewsPostPage({ params }: Props) {
  const post = getNewsBySlug(params.slug);
  if (!post) notFound();

  const articleJsonLd = {
    '@context': 'https://schema.org',
    '@type': 'Article',
    headline: post.title,
    datePublished: post.date,
    author: { '@type': 'Organization', name: 'Global Centre for Learning & Training' },
    publisher: { '@type': 'Organization', name: 'Global Centre for Learning & Training' },
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(articleJsonLd) }}
      />
      <PageHero
        title={post.title}
        breadcrumbs={[
          { label: 'Home', href: '/' },
          { label: 'Updates', href: '/updates' },
          { label: post.title },
        ]}
      />
      <article className="section-padding bg-white">
        <div className="container-gclt max-w-3xl">
          <div className="mb-6 flex flex-wrap items-center gap-3">
            <time className="text-sm text-[var(--color-text-light)]">{formatDate(post.date)}</time>
            <span className="rounded-full bg-primary/10 px-3 py-0.5 text-xs font-medium text-primary">
              {post.category}
            </span>
          </div>
          <div className="relative mb-8 aspect-video overflow-hidden rounded-card">
            <Image src={post.image} alt={post.title} fill className="object-cover" sizes="800px" />
          </div>
          <div
            className="prose max-w-none text-[var(--color-text-light)]"
            dangerouslySetInnerHTML={{ __html: post.content }}
          />
          <div className="mt-8 flex flex-wrap gap-2">
            {post.tags.map((tag) => (
              <span key={tag} className="rounded-full bg-light-gray px-3 py-1 text-xs text-mid-gray">
                {tag}
              </span>
            ))}
          </div>
          <Link href="/updates" className="btn-outline mt-10 inline-flex">
            ← Back to Updates
          </Link>
        </div>
      </article>
    </>
  );
}
