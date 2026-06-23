import { Metadata } from 'next';
import EventCoverImage from '@/components/updates/EventCoverImage';
import EventGallery from '@/components/updates/EventGallery';
import Link from 'next/link';
import { notFound } from 'next/navigation';
import { Calendar, MapPin, User } from 'lucide-react';
import PageHero from '@/components/shared/PageHero';
import AnimatedSection from '@/components/shared/AnimatedSection';
import { gcltEvents, getEventBySlug, getEventCoverSrc, getEventGalleryItems } from '@/lib/data/events';
import { formatDate, SITE } from '@/lib/utils';

interface Props {
  params: { slug: string };
}

export function generateStaticParams() {
  return gcltEvents.map((e) => ({ slug: e.slug }));
}

export function generateMetadata({ params }: Props): Metadata {
  const event = getEventBySlug(params.slug);
  if (!event) return { title: 'Event' };
  return {
    title: event.title,
    description: event.excerpt,
  };
}

export default function EventDetailPage({ params }: Props) {
  const event = getEventBySlug(params.slug);
  if (!event) notFound();

  const today = new Date();
  today.setHours(0, 0, 0, 0);
  const isUpcoming = new Date(event.date) >= today;
  const hasGalleryPhotos = getEventGalleryItems(event).some((item) => item.src);
  const showCover = Boolean(getEventCoverSrc(event)) && !hasGalleryPhotos;

  const eventJsonLd = {
    '@context': 'https://schema.org',
    '@type': 'Event',
    name: event.title,
    startDate: event.date,
    endDate: event.endDate,
    description: event.excerpt,
    location: event.location
      ? { '@type': 'Place', name: event.location }
      : undefined,
    organizer: {
      '@type': 'Organization',
      name: 'Global Centre for Learning & Training',
    },
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(eventJsonLd) }}
      />
      <PageHero
        title={event.title}
        breadcrumbs={[
          { label: 'Home', href: '/' },
          { label: 'Updates', href: '/updates' },
          { label: 'Events', href: '/updates/events' },
          { label: event.format },
        ]}
        badge={isUpcoming ? 'Upcoming Event' : 'Past Event'}
      />

      <article className="section-padding bg-white">
        <div className="container-gclt">
          <div className="grid gap-10 lg:grid-cols-3 lg:gap-12">
            <div className="lg:col-span-2">
              <AnimatedSection>
                {showCover && (
                  <div className="mb-8">
                    <EventCoverImage event={event} priority />
                  </div>
                )}

                <div className={`flex flex-wrap gap-2 ${showCover ? 'mb-6' : 'mb-8'}`}>
                  <span className="rounded-full bg-primary/10 px-3 py-1 text-xs font-semibold text-primary">
                    {event.format}
                  </span>
                  {isUpcoming && (
                    <span className="rounded-full bg-accent/15 px-3 py-1 text-xs font-semibold text-accent-dark">
                      Upcoming
                    </span>
                  )}
                  {event.tags.map((tag) => (
                    <span
                      key={tag}
                      className="rounded-full border border-border bg-[#f8fafc] px-3 py-1 text-xs text-[var(--color-text-light)]"
                    >
                      {tag}
                    </span>
                  ))}
                </div>

                <p className="text-lg leading-relaxed text-[var(--color-text-light)]">
                  {event.excerpt}
                </p>

                <div
                  className="prose mt-8 max-w-none text-[var(--color-text-light)]"
                  dangerouslySetInnerHTML={{ __html: event.content }}
                />

                <EventGallery event={event} />
              </AnimatedSection>
            </div>

            <aside className="lg:sticky lg:top-28 lg:self-start">
              <AnimatedSection delay={0.06}>
                <div className="overflow-hidden rounded-2xl border border-border/70 bg-[#f8fafc] shadow-card">
                  <div className="border-b border-border/60 bg-gradient-to-r from-primary to-primary-dark px-5 py-4">
                    <h2 className="text-sm font-bold text-white">Event Details</h2>
                  </div>
                  <dl className="space-y-4 p-5 text-sm">
                    <div>
                      <dt className="flex items-center gap-2 text-xs font-semibold uppercase tracking-wide text-[var(--color-text-light)]">
                        <Calendar className="h-3.5 w-3.5" />
                        Date
                      </dt>
                      <dd className="mt-1 font-medium text-primary">
                        {formatDate(event.date)}
                        {event.endDate && ` – ${formatDate(event.endDate)}`}
                      </dd>
                    </div>
                    {event.location && (
                      <div>
                        <dt className="flex items-center gap-2 text-xs font-semibold uppercase tracking-wide text-[var(--color-text-light)]">
                          <MapPin className="h-3.5 w-3.5" />
                          Location
                        </dt>
                        <dd className="mt-1 font-medium text-primary">{event.location}</dd>
                      </div>
                    )}
                    <div>
                      <dt className="text-xs font-semibold uppercase tracking-wide text-[var(--color-text-light)]">
                        Format
                      </dt>
                      <dd className="mt-1 font-medium text-primary">{event.format}</dd>
                    </div>
                    {event.speakers && event.speakers.length > 0 && (
                      <div>
                        <dt className="flex items-center gap-2 text-xs font-semibold uppercase tracking-wide text-[var(--color-text-light)]">
                          <User className="h-3.5 w-3.5" />
                          Speaker{event.speakers.length > 1 ? 's' : ''}
                        </dt>
                        <dd className="mt-1 space-y-1">
                          {event.speakers.map((speaker) => (
                            <p key={speaker} className="font-medium text-primary">
                              {speaker}
                            </p>
                          ))}
                        </dd>
                      </div>
                    )}
                  </dl>
                  {isUpcoming && (
                    <div className="border-t border-border/60 p-5">
                      <a
                        href={`mailto:${SITE.emails.admissions}?subject=${encodeURIComponent(`Event Registration: ${event.title}`)}`}
                        className="btn-accent w-full text-sm"
                      >
                        Register interest
                      </a>
                    </div>
                  )}
                </div>

                <div className="mt-4 space-y-2 rounded-2xl border border-border/70 bg-white p-5 text-sm shadow-card">
                  <Link
                    href="/updates/events"
                    className="block font-medium text-primary hover:text-accent"
                  >
                    ← Events calendar
                  </Link>
                  <Link
                    href="/updates"
                    className="block font-medium text-primary hover:text-accent"
                  >
                    All updates
                  </Link>
                </div>
              </AnimatedSection>
            </aside>
          </div>
        </div>
      </article>
    </>
  );
}
