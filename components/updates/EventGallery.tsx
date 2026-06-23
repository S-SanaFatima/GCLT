'use client';

import { ChevronLeft, ChevronRight, ImageIcon, X } from 'lucide-react';
import { useCallback, useEffect, useRef, useState } from 'react';
import { createPortal } from 'react-dom';
import type { Swiper as SwiperType } from 'swiper';
import { Keyboard, Navigation, Pagination } from 'swiper/modules';
import { Swiper, SwiperSlide } from 'swiper/react';
import type { GCLTEvent } from '@/lib/data/events';
import { getEventGalleryItems } from '@/lib/data/events';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';

interface EventGalleryProps {
  event: GCLTEvent;
}

export default function EventGallery({ event }: EventGalleryProps) {
  const items = getEventGalleryItems(event);
  const hasPhotos = items.some((item) => item.src);
  const photoItems = items
    .map((item, index) => ({ ...item, index }))
    .filter((item): item is typeof item & { src: string } => Boolean(item.src));

  const [activeIndex, setActiveIndex] = useState(0);
  const [lightboxOpen, setLightboxOpen] = useState(false);
  const [mounted, setMounted] = useState(false);
  const mainSwiperRef = useRef<SwiperType | null>(null);
  const thumbStripRef = useRef<HTMLDivElement | null>(null);

  useEffect(() => setMounted(true), []);

  const closeLightbox = useCallback(() => {
    setLightboxOpen(false);
    mainSwiperRef.current?.slideTo(activeIndex);
  }, [activeIndex]);

  const goToSlide = useCallback((index: number) => {
    mainSwiperRef.current?.slideTo(index);
    setActiveIndex(index);
    const thumb = thumbStripRef.current?.children[index] as HTMLElement | undefined;
    thumb?.scrollIntoView({ behavior: 'smooth', block: 'nearest', inline: 'center' });
  }, []);

  const goNext = useCallback(() => {
    if (photoItems.length === 0) return;
    const next = (activeIndex + 1) % photoItems.length;
    if (lightboxOpen) {
      setActiveIndex(next);
    } else {
      goToSlide(next);
    }
  }, [activeIndex, goToSlide, lightboxOpen, photoItems.length]);

  const goPrev = useCallback(() => {
    if (photoItems.length === 0) return;
    const prev = (activeIndex - 1 + photoItems.length) % photoItems.length;
    if (lightboxOpen) {
      setActiveIndex(prev);
    } else {
      goToSlide(prev);
    }
  }, [activeIndex, goToSlide, lightboxOpen, photoItems.length]);

  useEffect(() => {
    if (!lightboxOpen) return;

    const onKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') closeLightbox();
      if (e.key === 'ArrowRight') goNext();
      if (e.key === 'ArrowLeft') goPrev();
    };

    document.body.style.overflow = 'hidden';
    window.addEventListener('keydown', onKeyDown);
    return () => {
      document.body.style.overflow = '';
      window.removeEventListener('keydown', onKeyDown);
    };
  }, [lightboxOpen, closeLightbox, goNext, goPrev]);

  if (items.length === 0) return null;

  const activePhoto = photoItems[activeIndex];

  const lightbox =
    mounted && lightboxOpen && activePhoto?.src
      ? createPortal(
          <div
            className="fixed inset-0 z-[200] flex items-center justify-center bg-black"
            onClick={closeLightbox}
            role="dialog"
            aria-modal="true"
            aria-label={`${event.title} photo ${activeIndex + 1}`}
          >
            <button
              type="button"
              onClick={closeLightbox}
              className="absolute right-4 top-4 z-10 rounded-full bg-white/15 p-2.5 text-white transition-colors hover:bg-white/25"
              aria-label="Close"
            >
              <X className="h-6 w-6" />
            </button>

            {photoItems.length > 1 && (
              <>
                <button
                  type="button"
                  onClick={(e) => {
                    e.stopPropagation();
                    goPrev();
                  }}
                  className="absolute left-3 top-1/2 z-10 -translate-y-1/2 rounded-full bg-white/15 p-3 text-white transition-colors hover:bg-white/25 sm:left-5"
                  aria-label="Previous photo"
                >
                  <ChevronLeft className="h-6 w-6" />
                </button>
                <button
                  type="button"
                  onClick={(e) => {
                    e.stopPropagation();
                    goNext();
                  }}
                  className="absolute right-3 top-1/2 z-10 -translate-y-1/2 rounded-full bg-white/15 p-3 text-white transition-colors hover:bg-white/25 sm:right-5"
                  aria-label="Next photo"
                >
                  <ChevronRight className="h-6 w-6" />
                </button>
              </>
            )}

            <div
              className="flex max-h-[92vh] max-w-[min(96vw,1200px)] items-center justify-center px-4 py-10 sm:px-12"
              onClick={(e) => e.stopPropagation()}
            >
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img
                src={activePhoto.src}
                alt={`${event.title} — photo ${activeIndex + 1}`}
                className="max-h-[85vh] max-w-full object-contain"
              />
            </div>

            <p className="absolute bottom-4 left-1/2 -translate-x-1/2 rounded-full bg-white/15 px-4 py-1.5 text-sm font-medium text-white">
              {activeIndex + 1} / {photoItems.length}
            </p>
          </div>,
          document.body,
        )
      : null;

  return (
    <section className="mt-12 border-t border-border/60 pt-10">
      <h2 className="text-xl font-bold text-primary">Event Gallery</h2>
      {!hasPhotos && (
        <p className="mt-1 text-sm text-[var(--color-text-light)]">
          Photo placeholders for this event. Upload images to{' '}
          <code className="rounded bg-[#f4f7fc] px-1.5 py-0.5 text-xs text-primary">
            public/images/events/{event.slug}/
          </code>
        </p>
      )}
      {hasPhotos && (
        <p className="mt-1 text-sm text-[var(--color-text-light)]">
          Swipe or use arrows to browse photos. Tap any image to view full size.
        </p>
      )}

      {hasPhotos && photoItems.length > 0 && (
        <div className="mt-6">
          <div className="relative overflow-hidden rounded-2xl border border-border/60 bg-neutral-100 shadow-card">
            <Swiper
              modules={[Navigation, Pagination, Keyboard]}
              onSwiper={(swiper) => {
                mainSwiperRef.current = swiper;
              }}
              onSlideChange={(swiper) => {
                setActiveIndex(swiper.activeIndex);
                const thumb = thumbStripRef.current?.children[swiper.activeIndex] as
                  | HTMLElement
                  | undefined;
                thumb?.scrollIntoView({ behavior: 'smooth', block: 'nearest', inline: 'center' });
              }}
              navigation
              pagination={{ type: 'fraction' }}
              keyboard={{ enabled: true }}
              className="event-gallery-swiper"
            >
              {photoItems.map((item) => (
                <SwiperSlide key={item.path}>
                  <button
                    type="button"
                    onClick={() => setLightboxOpen(true)}
                    className="flex h-[min(440px,58vw)] w-full cursor-zoom-in items-center justify-center bg-neutral-100 p-3 sm:p-5"
                  >
                    {/* eslint-disable-next-line @next/next/no-img-element */}
                    <img
                      src={item.src}
                      alt={`${event.title} — photo ${item.index + 1}`}
                      className="max-h-full max-w-full object-contain"
                      loading="lazy"
                    />
                  </button>
                </SwiperSlide>
              ))}
            </Swiper>
          </div>

          {photoItems.length > 1 && (
            <div
              ref={thumbStripRef}
              className="mt-3 flex gap-2 overflow-x-auto pb-1 [-ms-overflow-style:none] [scrollbar-width:thin]"
            >
              {photoItems.map((item, index) => (
                <button
                  key={item.path}
                  type="button"
                  onClick={() => goToSlide(index)}
                  className={`h-16 w-24 shrink-0 overflow-hidden rounded-lg border-2 transition-all ${
                    index === activeIndex
                      ? 'border-primary ring-2 ring-primary/20'
                      : 'border-transparent opacity-70 hover:opacity-100'
                  }`}
                  aria-label={`Go to photo ${index + 1}`}
                >
                  {/* eslint-disable-next-line @next/next/no-img-element */}
                  <img
                    src={item.src}
                    alt=""
                    className="h-full w-full object-cover"
                    loading="lazy"
                  />
                </button>
              ))}
            </div>
          )}
        </div>
      )}

      {!hasPhotos && (
        <div className="mt-6 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {items.map((item, index) => (
            <div
              key={item.path}
              className="flex aspect-[4/3] flex-col items-center justify-center rounded-xl border-2 border-dashed border-border bg-[#f8fafc] p-4"
            >
              <ImageIcon className="h-8 w-8 text-primary/25" />
              <p className="mt-2 text-xs font-medium text-primary">Photo {index + 1}</p>
              <p className="mt-1 text-center text-[10px] leading-snug text-[var(--color-text-light)]">
                public{item.path}
              </p>
            </div>
          ))}
        </div>
      )}

      {lightbox}
    </section>
  );
}
