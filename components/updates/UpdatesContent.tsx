'use client';

import { useState } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import {
  ArrowRight,
  Calendar,
  ChevronLeft,
  ChevronRight,
  Mail,
  Megaphone,
  Newspaper,
  Sparkles,
} from 'lucide-react';
import PageHero from '@/components/shared/PageHero';
import NewsCard from '@/components/shared/NewsCard';
import AnimatedSection from '@/components/shared/AnimatedSection';
import {
  getNewsByCategory,
  getNewsCategoryCounts,
  type NewsCategory,
  type NewsPost,
} from '@/lib/data/news';
import { getEventBySlug, getUpcomingGCLTEvents } from '@/lib/data/events';
import EventCard from '@/components/updates/EventCard';
import { formatDate } from '@/lib/utils';

const categories: (NewsCategory | 'All')[] = [
  'All',
  'News & Announcements',
  'Events',
  'Press Releases',
];

const categoryIcons: Record<NewsCategory | 'All', typeof Newspaper> = {
  All: Sparkles,
  'News & Announcements': Newspaper,
  Events: Calendar,
  'Press Releases': Megaphone,
};

const POSTS_PER_PAGE = 6;

const hubLinks = [
  {
    href: '/updates/events',
    label: 'Events Calendar',
    desc: 'Upcoming workshops & conferences',
    icon: Calendar,
    accent: 'from-primary to-primary-dark',
  },
  {
    href: '/updates/press-releases',
    label: 'Press Releases',
    desc: 'Official statements & media',
    icon: Megaphone,
    accent: 'from-[#1e4a9e] to-primary-dark',
  },
  {
    href: '/updates/newsletter',
    label: 'Newsletter',
    desc: 'Get updates in your inbox',
    icon: Mail,
    accent: 'from-accent to-accent-dark',
  },
];

function FeaturedStory({ post }: { post: NewsPost }) {
  return (
    <Link
      href={`/updates/${post.slug}`}
      className="group relative grid overflow-hidden rounded-3xl border border-border/60 bg-white shadow-elevated transition-all duration-300 hover:-translate-y-1 lg:grid-cols-2"
    >
      <div className="relative aspect-[16/10] overflow-hidden bg-light-gray lg:aspect-auto lg:min-h-[320px]">
        <Image
          src={post.image}
          alt={post.title}
          fill
          className="object-cover transition-transform duration-700 group-hover:scale-[1.04]"
          sizes="(max-width: 1024px) 100vw, 50vw"
          priority
        />
        <div className="absolute inset-0 bg-gradient-to-t from-primary-dark/50 via-transparent to-transparent lg:bg-gradient-to-r lg:from-transparent lg:via-transparent lg:to-primary-dark/20" />
        <span className="absolute left-5 top-5 rounded-full bg-accent px-3 py-1 text-[11px] font-bold uppercase tracking-wider text-white shadow-sm">
          Featured
        </span>
      </div>

      <div className="flex flex-col justify-center bg-gradient-to-br from-primary to-primary-dark p-7 text-white sm:p-9">
        <div className="flex flex-wrap items-center gap-3 text-xs font-medium">
          <span className="rounded-full border border-white/20 bg-white/10 px-3 py-1">
            {post.category}
          </span>
          <time className="text-white/70">{formatDate(post.date)}</time>
        </div>
        <h2 className="mt-4 text-2xl font-bold leading-snug text-white transition-colors group-hover:text-accent-light sm:text-3xl">
          {post.title}
        </h2>
        <p className="mt-4 line-clamp-3 text-sm leading-relaxed text-gray-200/90 sm:text-base">
          {post.excerpt}
        </p>
        <div className="mt-6 flex flex-wrap gap-2">
          {post.tags.slice(0, 3).map((tag) => (
            <span
              key={tag}
              className="rounded-md bg-white/10 px-2.5 py-1 text-[11px] font-medium text-white/80"
            >
              {tag}
            </span>
          ))}
        </div>
        <span className="mt-8 inline-flex items-center gap-2 text-sm font-semibold text-accent">
          Read full story
          <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
        </span>
      </div>
    </Link>
  );
}

export default function UpdatesContent() {
  const [category, setCategory] = useState<NewsCategory | 'All'>('All');
  const [page, setPage] = useState(1);

  const counts = getNewsCategoryCounts();
  const filtered = getNewsByCategory(category);
  const showFeatured = category === 'All' && page === 1 && filtered.length > 0;
  const listPosts = showFeatured ? filtered.slice(1) : filtered;
  const totalPages = Math.max(1, Math.ceil(listPosts.length / POSTS_PER_PAGE));
  const paginated = listPosts.slice((page - 1) * POSTS_PER_PAGE, page * POSTS_PER_PAGE);
  const upcoming = getUpcomingGCLTEvents().slice(0, 3);

  return (
    <>
      <PageHero
        title="News & Updates"
        subtitle="Stories, announcements, and events from the Global Centre for Learning & Training."
        breadcrumbs={[{ label: 'Home', href: '/' }, { label: 'Updates' }]}
        badge="GCLT Newsroom"
      />

      <section className="relative border-b border-border/60 bg-white py-10 lg:py-12">
        <div className="container-gclt">
          <div className="grid gap-4 sm:grid-cols-3">
            {hubLinks.map((link, i) => {
              const Icon = link.icon;
              return (
                <AnimatedSection key={link.href} delay={i * 0.06}>
                  <Link
                    href={link.href}
                    className="group flex items-center gap-4 rounded-2xl border border-border/70 bg-[#f8fafc] p-5 transition-all hover:-translate-y-0.5 hover:border-primary/20 hover:bg-white hover:shadow-card"
                  >
                    <div
                      className={`flex h-12 w-12 shrink-0 items-center justify-center rounded-xl bg-gradient-to-br text-white shadow-soft ${link.accent}`}
                    >
                      <Icon className="h-5 w-5" strokeWidth={1.75} />
                    </div>
                    <div className="min-w-0 flex-1">
                      <p className="font-bold text-primary group-hover:text-accent">{link.label}</p>
                      <p className="text-xs text-[var(--color-text-light)]">{link.desc}</p>
                    </div>
                    <ArrowRight className="h-4 w-4 shrink-0 text-primary/40 transition-transform group-hover:translate-x-0.5 group-hover:text-primary" />
                  </Link>
                </AnimatedSection>
              );
            })}
          </div>
        </div>
      </section>

      <section className="section-padding relative overflow-hidden bg-[#f4f7fc]">
        <div className="pattern-grid pointer-events-none absolute inset-0 opacity-35" />
        <div className="pointer-events-none absolute -right-32 top-0 h-96 w-96 rounded-full bg-primary/6 blur-3xl" />

        <div className="container-gclt relative">
          <div className="grid gap-10 lg:grid-cols-[1fr_300px] lg:gap-12 xl:grid-cols-[1fr_320px]">
            <div>
              {showFeatured && (
                <AnimatedSection className="mb-10">
                  <div className="mb-4 flex items-center gap-2">
                    <span className="section-label">Spotlight</span>
                  </div>
                  <FeaturedStory post={filtered[0]} />
                </AnimatedSection>
              )}

              <div className="sticky top-24 z-10 -mx-4 mb-8 border-b border-border/50 bg-[#f4f7fc]/95 px-4 py-4 backdrop-blur-md sm:-mx-0 sm:rounded-2xl sm:border sm:px-5">
                <div className="flex flex-wrap gap-2">
                  {categories.map((cat) => {
                    const Icon = categoryIcons[cat];
                    const active = category === cat;
                    return (
                      <button
                        key={cat}
                        type="button"
                        onClick={() => {
                          setCategory(cat);
                          setPage(1);
                        }}
                        className={`inline-flex items-center gap-2 rounded-xl px-3.5 py-2 text-sm font-medium transition-all ${
                          active
                            ? 'bg-primary text-white shadow-soft'
                            : 'bg-white text-[var(--color-text)] hover:border-primary/20 hover:bg-primary/[0.04]'
                        }`}
                      >
                        <Icon className="h-3.5 w-3.5" strokeWidth={2} />
                        <span className="hidden sm:inline">{cat}</span>
                        <span className="sm:hidden">{cat === 'All' ? 'All' : cat.split(' ')[0]}</span>
                        <span
                          className={`rounded-full px-1.5 py-0.5 text-[10px] font-bold ${
                            active ? 'bg-white/20 text-white' : 'bg-primary/10 text-primary'
                          }`}
                        >
                          {counts[cat]}
                        </span>
                      </button>
                    );
                  })}
                </div>
              </div>

              {paginated.length > 0 ? (
                <div className="grid gap-6 sm:grid-cols-2">
                  {paginated.map((post, i) => {
                    const event = post.category === 'Events' ? getEventBySlug(post.slug) : undefined;
                    return (
                      <AnimatedSection key={post.slug} delay={i * 0.05}>
                        {event ? <EventCard event={event} /> : <NewsCard post={post} />}
                      </AnimatedSection>
                    );
                  })}
                </div>
              ) : (
                <div className="rounded-2xl border border-dashed border-border bg-white/80 px-6 py-16 text-center">
                  <p className="text-lg font-semibold text-primary">No updates in this category yet</p>
                  <p className="mt-2 text-sm text-[var(--color-text-light)]">
                    Check back soon or browse another section.
                  </p>
                  <button
                    type="button"
                    onClick={() => {
                      setCategory('All');
                      setPage(1);
                    }}
                    className="btn-outline mt-6 text-sm"
                  >
                    View all updates
                  </button>
                </div>
              )}

              {totalPages > 1 && (
                <div className="mt-10 flex items-center justify-center gap-3">
                  <button
                    type="button"
                    onClick={() => setPage((p) => Math.max(1, p - 1))}
                    disabled={page === 1}
                    className="flex h-10 w-10 items-center justify-center rounded-xl border border-border bg-white text-primary transition-colors hover:border-primary/30 disabled:opacity-40"
                    aria-label="Previous page"
                  >
                    <ChevronLeft className="h-4 w-4" />
                  </button>
                  <div className="flex gap-1.5">
                    {Array.from({ length: totalPages }, (_, i) => i + 1).map((p) => (
                      <button
                        key={p}
                        type="button"
                        onClick={() => setPage(p)}
                        className={`h-10 min-w-[2.5rem] rounded-xl px-3 text-sm font-semibold transition-colors ${
                          page === p
                            ? 'bg-primary text-white shadow-soft'
                            : 'bg-white text-primary hover:bg-primary/10'
                        }`}
                      >
                        {p}
                      </button>
                    ))}
                  </div>
                  <button
                    type="button"
                    onClick={() => setPage((p) => Math.min(totalPages, p + 1))}
                    disabled={page === totalPages}
                    className="flex h-10 w-10 items-center justify-center rounded-xl border border-border bg-white text-primary transition-colors hover:border-primary/30 disabled:opacity-40"
                    aria-label="Next page"
                  >
                    <ChevronRight className="h-4 w-4" />
                  </button>
                </div>
              )}
            </div>

            <aside className="space-y-6 lg:sticky lg:top-28 lg:self-start">
              <AnimatedSection delay={0.08}>
                <div className="overflow-hidden rounded-2xl border border-border/70 bg-white shadow-card">
                  <div className="border-b border-border/60 bg-gradient-to-r from-primary to-primary-dark px-5 py-4">
                    <h3 className="flex items-center gap-2 text-sm font-bold text-white">
                      <Calendar className="h-4 w-4" />
                      Upcoming Events
                    </h3>
                  </div>
                  <div className="divide-y divide-border/60 p-2">
                    {upcoming.length > 0 ? (
                      upcoming.map((event) => (
                        <Link
                          key={event.slug}
                          href={`/updates/events/${event.slug}`}
                          className="block rounded-xl p-3 transition-colors hover:bg-primary/[0.04]"
                        >
                          <time className="text-[11px] font-semibold uppercase tracking-wide text-accent-dark">
                            {formatDate(event.date)}
                          </time>
                          <p className="mt-1 text-sm font-semibold leading-snug text-primary">
                            {event.title}
                          </p>
                        </Link>
                      ))
                    ) : (
                      <p className="p-4 text-sm text-[var(--color-text-light)]">
                        No upcoming events scheduled.{' '}
                        <Link href="/updates/events" className="font-medium text-primary hover:text-accent">
                          View calendar
                        </Link>
                      </p>
                    )}
                  </div>
                  <div className="border-t border-border/60 p-3">
                    <Link
                      href="/updates/events"
                      className="flex items-center justify-center gap-1.5 text-xs font-semibold text-primary hover:text-accent"
                    >
                      Full events calendar
                      <ArrowRight className="h-3.5 w-3.5" />
                    </Link>
                  </div>
                </div>
              </AnimatedSection>

              <AnimatedSection delay={0.12}>
                <div className="overflow-hidden rounded-2xl bg-gradient-to-br from-primary to-primary-dark p-6 text-white shadow-elevated">
                  <Mail className="h-8 w-8 text-accent" strokeWidth={1.5} />
                  <h3 className="mt-4 text-lg font-bold">Stay in the loop</h3>
                  <p className="mt-2 text-sm leading-relaxed text-gray-200/90">
                    Programmes, research, events, and announcements — delivered to your inbox.
                  </p>
                  <Link href="/updates/newsletter" className="btn-accent mt-5 w-full text-sm">
                    Subscribe to newsletter
                  </Link>
                </div>
              </AnimatedSection>

              <AnimatedSection delay={0.16}>
                <div className="rounded-2xl border border-border/70 bg-white p-5 shadow-card">
                  <h3 className="text-xs font-bold uppercase tracking-wider text-[var(--color-text-light)]">
                    Browse by topic
                  </h3>
                  <div className="mt-3 flex flex-wrap gap-2">
                    {Array.from(new Set(filtered.flatMap((p) => p.tags)))
                      .slice(0, 10)
                      .map((tag) => (
                        <span
                          key={tag}
                          className="rounded-full border border-primary/15 bg-primary/[0.04] px-2.5 py-1 text-[11px] font-medium text-primary"
                        >
                          {tag}
                        </span>
                      ))}
                  </div>
                </div>
              </AnimatedSection>
            </aside>
          </div>
        </div>
      </section>
    </>
  );
}
