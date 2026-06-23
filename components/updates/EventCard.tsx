import Link from 'next/link';
import Image from 'next/image';
import { ArrowRight, Calendar, ImageIcon, MapPin } from 'lucide-react';
import { formatDate } from '@/lib/utils';
import type { GCLTEvent } from '@/lib/data/events';
import { getEventCoverSrc } from '@/lib/data/events';

const formatColors: Record<string, string> = {
  Conference: 'bg-primary/10 text-primary',
  Summit: 'bg-primary/15 text-primary-dark',
  Seminar: 'bg-[#e8eef8] text-primary',
  Workshop: 'bg-accent/15 text-accent-dark',
  Webinar: 'bg-[#edf7f0] text-[#1a6b3c]',
  'Study Circle': 'bg-[#f3eef8] text-[#5b3d8a]',
  Panel: 'bg-[#fdf0f5] text-[#8a3d5b]',
  Lecture: 'bg-[#eef6fd] text-[#1a5c8a]',
  'Mobility Programme': 'bg-[#fff8ed] text-accent-dark',
};

function CardThumbnail({
  event,
  className,
  sizes,
}: {
  event: GCLTEvent;
  className: string;
  sizes: string;
}) {
  const src = getEventCoverSrc(event);

  if (!src) {
    return (
      <div
        className={`flex flex-col items-center justify-center border-b border-dashed border-primary/15 bg-gradient-to-br from-[#f4f7fc] to-primary/[0.05] ${className}`}
      >
        <ImageIcon className="h-8 w-8 text-primary/25" strokeWidth={1.5} />
        <p className="mt-2 px-3 text-center text-[10px] font-medium text-primary/60">Photo coming soon</p>
      </div>
    );
  }

  return (
    <div
      className={`relative overflow-hidden ${event.coverFit === 'contain' ? 'bg-[#1c1c1c]' : 'bg-light-gray'} ${className}`}
    >
      {event.coverFit === 'contain' ? (
        <Image
          src={src}
          alt={event.title}
          width={event.coverWidth ?? 267}
          height={event.coverHeight ?? 300}
          className="h-full w-full object-contain"
          sizes={sizes}
          quality={95}
        />
      ) : (
        <Image
          src={src}
          alt={event.title}
          fill
          className="object-cover transition-transform duration-500 group-hover:scale-[1.03]"
          sizes={sizes}
        />
      )}
    </div>
  );
}

interface EventCardProps {
  event: GCLTEvent;
  variant?: 'default' | 'compact' | 'featured';
}

export default function EventCard({ event, variant = 'default' }: EventCardProps) {
  const formatClass = formatColors[event.format] ?? 'bg-primary/10 text-primary';
  const href = `/updates/events/${event.slug}`;

  if (variant === 'featured') {
    return (
      <Link
        href={href}
        className="group grid overflow-hidden rounded-3xl border border-border/60 bg-white shadow-elevated transition-all duration-300 hover:-translate-y-1 lg:grid-cols-2"
      >
        <CardThumbnail
          event={event}
          className="aspect-[16/10] lg:aspect-auto lg:min-h-[300px]"
          sizes="(max-width: 1024px) 100vw, 50vw"
        />
        <div className="relative flex flex-col justify-center bg-gradient-to-br from-primary to-primary-dark p-7 text-white sm:p-9">
          <span className="absolute left-5 top-5 rounded-full bg-accent px-3 py-1 text-[11px] font-bold uppercase tracking-wider text-white lg:left-auto lg:right-5">
            Upcoming
          </span>
          <span className={`inline-flex w-fit rounded-full px-3 py-1 text-[11px] font-bold ${formatClass}`}>
            {event.format}
          </span>
          <h2 className="mt-4 text-2xl font-bold leading-snug text-white sm:text-3xl">{event.title}</h2>
          <p className="mt-3 line-clamp-3 text-sm leading-relaxed text-gray-200/90">{event.excerpt}</p>
          <div className="mt-5 flex flex-wrap gap-4 text-xs text-white/80">
            <span className="inline-flex items-center gap-1.5">
              <Calendar className="h-3.5 w-3.5" />
              {formatDate(event.date)}
            </span>
            {event.location && (
              <span className="inline-flex items-center gap-1.5">
                <MapPin className="h-3.5 w-3.5" />
                {event.location}
              </span>
            )}
          </div>
          <span className="mt-6 inline-flex items-center gap-2 text-sm font-semibold text-accent">
            View event details
            <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
          </span>
        </div>
      </Link>
    );
  }

  if (variant === 'compact') {
    return (
      <Link
        href={href}
        className="group flex gap-4 rounded-xl border border-border/60 bg-white p-4 transition-all hover:border-primary/20 hover:shadow-card"
      >
        <CardThumbnail event={event} className="h-20 w-24 shrink-0 rounded-lg" sizes="96px" />
        <div className="min-w-0 flex-1">
          <span className={`rounded-md px-2 py-0.5 text-[10px] font-bold uppercase ${formatClass}`}>
            {event.format}
          </span>
          <h3 className="mt-1 line-clamp-2 text-sm font-bold text-primary group-hover:text-accent">
            {event.title}
          </h3>
          <time className="mt-1 block text-xs text-[var(--color-text-light)]">
            {formatDate(event.date)}
          </time>
        </div>
      </Link>
    );
  }

  return (
    <article className="group flex h-full flex-col overflow-hidden rounded-2xl border border-border/70 bg-white transition-all duration-300 hover:-translate-y-1 hover:border-primary/20 hover:shadow-elevated">
      <Link href={href} className="flex h-full flex-col">
        <div className="relative">
          <CardThumbnail event={event} className="aspect-[3/2]" sizes="(max-width: 768px) 100vw, 33vw" />
          <span
            className={`absolute left-4 top-4 rounded-full px-2.5 py-1 text-[10px] font-bold uppercase tracking-wide ${formatClass}`}
          >
            {event.format}
          </span>
        </div>
        <div className="flex flex-1 flex-col p-5">
          <div className="mb-2 flex flex-wrap items-center gap-x-3 gap-y-1 text-xs text-[var(--color-text-light)]">
            <span className="inline-flex items-center gap-1">
              <Calendar className="h-3 w-3" />
              {formatDate(event.date)}
            </span>
            {event.location && (
              <span className="inline-flex items-center gap-1">
                <MapPin className="h-3 w-3" />
                <span className="line-clamp-1">{event.location}</span>
              </span>
            )}
          </div>
          <h3 className="mb-2 line-clamp-2 text-base font-bold leading-snug text-primary transition-colors group-hover:text-accent">
            {event.title}
          </h3>
          <p className="line-clamp-2 flex-1 text-sm leading-relaxed text-[var(--color-text-light)]">
            {event.excerpt}
          </p>
          {event.speakers && event.speakers.length > 0 && (
            <p className="mt-3 text-xs text-[var(--color-text-light)]">
              <span className="font-semibold text-primary">Speaker:</span> {event.speakers[0]}
              {event.speakers.length > 1 ? ` +${event.speakers.length - 1} more` : ''}
            </p>
          )}
          <span className="mt-4 inline-flex items-center gap-1.5 text-sm font-semibold text-primary group-hover:text-accent">
            View details
            <ArrowRight className="h-3.5 w-3.5 transition-transform group-hover:translate-x-0.5" />
          </span>
        </div>
      </Link>
    </article>
  );
}
