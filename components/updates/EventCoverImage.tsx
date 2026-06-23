import Image from 'next/image';
import { ImageIcon } from 'lucide-react';
import type { GCLTEvent } from '@/lib/data/events';
import { getEventCoverSrc } from '@/lib/data/events';

interface EventCoverImageProps {
  event: GCLTEvent;
  className?: string;
  priority?: boolean;
  sizes?: string;
}

export default function EventCoverImage({
  event,
  className,
  priority = false,
  sizes = '(max-width: 1024px) 100vw, 400px',
}: EventCoverImageProps) {
  const src = getEventCoverSrc(event);
  const isPoster = event.coverFit === 'contain';
  const coverW = event.coverWidth ?? 267;
  const coverH = event.coverHeight ?? 300;
  const wrapperClass =
    className ??
    (isPoster
      ? `relative mx-auto w-full ${coverW > coverH ? 'max-w-[420px]' : 'max-w-[320px]'} overflow-hidden rounded-2xl bg-[#1c1c1c] shadow-elevated`
      : 'relative aspect-video overflow-hidden rounded-2xl shadow-card');

  if (!src) {
    return (
      <div
        className={`flex flex-col items-center justify-center border-2 border-dashed border-primary/20 bg-gradient-to-br from-[#f4f7fc] to-primary/[0.04] ${wrapperClass}`}
      >
        <ImageIcon className="h-10 w-10 text-primary/30" strokeWidth={1.5} />
        <p className="mt-3 text-sm font-semibold text-primary">Event cover photo</p>
        <p className="mt-1 max-w-xs px-4 text-center text-xs text-[var(--color-text-light)]">
          Image placeholder — add file at{' '}
          <code className="rounded bg-white px-1 py-0.5 text-[10px] text-primary">
            {event.imagePaths.cover}
          </code>
        </p>
      </div>
    );
  }

  if (isPoster) {
    return (
      <div className={wrapperClass}>
        <Image
          src={src}
          alt={event.title}
          width={coverW}
          height={coverH}
          className="h-auto w-full"
          sizes={sizes}
          priority={priority}
          quality={95}
        />
      </div>
    );
  }

  return (
    <div className={wrapperClass}>
      <Image
        src={src}
        alt={event.title}
        fill
        className="object-cover"
        sizes={sizes}
        priority={priority}
      />
    </div>
  );
}
