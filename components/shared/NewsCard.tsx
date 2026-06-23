import Link from 'next/link';
import Image from 'next/image';
import { formatDate } from '@/lib/utils';
import { ArrowRight } from 'lucide-react';
import type { NewsPost } from '@/lib/data/news';

const categoryColors: Record<string, string> = {
  'News & Announcements': 'text-primary',
  Events: 'text-accent-dark',
  'Press Releases': 'text-primary-dark',
};

interface NewsCardProps {
  post: NewsPost;
}

export default function NewsCard({ post }: NewsCardProps) {
  const categoryColor = categoryColors[post.category] ?? 'text-primary';

  return (
    <article className="group flex h-full flex-col overflow-hidden rounded-2xl border border-border/70 bg-white transition-all duration-300 hover:border-primary/20 hover:shadow-soft">
      <Link href={`/updates/${post.slug}`} className="flex h-full flex-col">
        <div className="relative aspect-[3/2] overflow-hidden bg-light-gray">
          <Image
            src={post.image}
            alt={post.title}
            fill
            className="object-cover transition-transform duration-500 group-hover:scale-[1.03]"
            sizes="(max-width: 768px) 100vw, 33vw"
          />
        </div>
        <div className="flex flex-1 flex-col p-5">
          <div className="mb-2 flex items-center justify-between gap-2 text-xs">
            <span className={`font-bold uppercase tracking-wider ${categoryColor}`}>
              {post.category}
            </span>
            <time className="shrink-0 font-medium text-mid-gray">{formatDate(post.date)}</time>
          </div>
          <h3 className="mb-2 line-clamp-2 text-base font-bold leading-snug text-primary transition-colors group-hover:text-accent">
            {post.title}
          </h3>
          <p className="line-clamp-2 flex-1 text-sm leading-relaxed text-[var(--color-text-light)]">
            {post.excerpt}
          </p>
          <span className="mt-4 inline-flex items-center gap-1.5 text-sm font-semibold text-primary group-hover:text-accent">
            Read more
            <ArrowRight className="h-3.5 w-3.5 transition-transform group-hover:translate-x-0.5" />
          </span>
        </div>
      </Link>
    </article>
  );
}
