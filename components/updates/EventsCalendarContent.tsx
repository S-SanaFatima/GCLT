'use client';

import { useMemo, useState } from 'react';
import Link from 'next/link';
import { ArrowRight, Calendar, Mail } from 'lucide-react';
import PageHero from '@/components/shared/PageHero';
import AnimatedSection from '@/components/shared/AnimatedSection';
import EventCard from '@/components/updates/EventCard';
import {
  getEventYears,
  getPastGCLTEvents,
  getUpcomingGCLTEvents,
  gcltEvents,
  type EventFormat,
} from '@/lib/data/events';
import { SITE } from '@/lib/utils';

const formatFilters: (EventFormat | 'All')[] = [
  'All',
  'Conference',
  'Summit',
  'Seminar',
  'Workshop',
  'Webinar',
  'Panel',
  'Lecture',
  'Study Circle',
  'Mobility Programme',
];

export default function EventsCalendarContent() {
  const [yearFilter, setYearFilter] = useState<number | 'All'>('All');
  const [formatFilter, setFormatFilter] = useState<EventFormat | 'All'>('All');

  const upcoming = getUpcomingGCLTEvents();
  const past = getPastGCLTEvents();
  const years = getEventYears();

  const filteredPast = useMemo(() => {
    return past.filter((event) => {
      const yearMatch =
        yearFilter === 'All' || new Date(event.date).getFullYear() === yearFilter;
      const formatMatch = formatFilter === 'All' || event.format === formatFilter;
      return yearMatch && formatMatch;
    });
  }, [past, yearFilter, formatFilter]);

  const pastByYear = useMemo(() => {
    const groups: Record<number, typeof filteredPast> = {};
    for (const event of filteredPast) {
      const year = new Date(event.date).getFullYear();
      if (!groups[year]) groups[year] = [];
      groups[year].push(event);
    }
    return Object.entries(groups)
      .map(([year, events]) => ({ year: Number(year), events }))
      .sort((a, b) => b.year - a.year);
  }, [filteredPast]);

  return (
    <>
      <PageHero
        title="Events Calendar"
        subtitle="Conferences, seminars, workshops, and webinars from GCLT — past and upcoming."
        breadcrumbs={[
          { label: 'Home', href: '/' },
          { label: 'Updates', href: '/updates' },
          { label: 'Events' },
        ]}
        badge="GCLT Events"
      />

      <section className="border-b border-border/60 bg-white py-8">
        <div className="container-gclt">
          <div className="grid grid-cols-2 gap-4 sm:grid-cols-4">
            {[
              { label: 'Total Events', value: gcltEvents.length },
              { label: 'Upcoming', value: upcoming.length },
              { label: 'Archive', value: past.length },
              { label: 'Years Active', value: years.length },
            ].map((stat) => (
              <div
                key={stat.label}
                className="rounded-2xl border border-border/60 bg-[#f8fafc] p-4 text-center"
              >
                <p className="text-2xl font-bold text-primary">{stat.value}</p>
                <p className="mt-1 text-xs font-medium text-[var(--color-text-light)]">
                  {stat.label}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="section-padding relative overflow-hidden bg-[#f4f7fc]">
        <div className="pattern-grid pointer-events-none absolute inset-0 opacity-35" />
        <div className="container-gclt relative">
          <AnimatedSection>
            <div className="mb-8 flex flex-wrap items-end justify-between gap-4">
              <div>
                <span className="section-label">Coming Up</span>
                <h2 className="mt-3 text-2xl font-bold text-primary md:text-3xl">Upcoming Events</h2>
              </div>
              <a
                href={`mailto:${SITE.emails.events}?subject=Event%20Enquiry`}
                className="btn-outline text-sm"
              >
                <Mail className="h-4 w-4" />
                Register interest
              </a>
            </div>
          </AnimatedSection>

          {upcoming.length > 0 ? (
            <div className="space-y-8">
              <AnimatedSection>
                <EventCard event={upcoming[0]} variant="featured" />
              </AnimatedSection>
              {upcoming.length > 1 && (
                <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
                  {upcoming.slice(1).map((event, i) => (
                    <AnimatedSection key={event.slug} delay={i * 0.05}>
                      <EventCard event={event} />
                    </AnimatedSection>
                  ))}
                </div>
              )}
            </div>
          ) : (
            <div className="rounded-2xl border border-dashed border-border bg-white/80 px-6 py-12 text-center">
              <Calendar className="mx-auto h-10 w-10 text-primary/40" />
              <p className="mt-4 font-semibold text-primary">No upcoming events right now</p>
              <p className="mt-2 text-sm text-[var(--color-text-light)]">
                Contact us to register interest in future programmes and conferences.
              </p>
              <a href="mailto:events@gclt.com.pk" className="btn-primary mt-6 inline-flex text-sm">
                events@gclt.com.pk
              </a>
            </div>
          )}
        </div>
      </section>

      <section id="archive" className="section-padding bg-white">
        <div className="container-gclt">
          <AnimatedSection className="mb-8">
            <span className="section-label">Archive</span>
            <h2 className="mt-3 text-2xl font-bold text-primary md:text-3xl">Past Events</h2>
            <p className="mt-2 max-w-2xl text-sm text-[var(--color-text-light)]">
              Browse GCLT&apos;s full event history — lectures, panels, summits, and international
              collaborations.
            </p>
          </AnimatedSection>

          <div className="mb-8 flex flex-col gap-4 sm:flex-row sm:flex-wrap">
            <div className="flex flex-wrap gap-2">
              <span className="self-center text-xs font-semibold uppercase tracking-wide text-[var(--color-text-light)]">
                Year:
              </span>
              <button
                type="button"
                onClick={() => setYearFilter('All')}
                className={`rounded-xl px-3 py-1.5 text-sm font-medium transition-colors ${
                  yearFilter === 'All'
                    ? 'bg-primary text-white'
                    : 'bg-[#f4f7fc] text-primary hover:bg-primary/10'
                }`}
              >
                All
              </button>
              {years.map((year) => (
                <button
                  key={year}
                  type="button"
                  onClick={() => setYearFilter(year)}
                  className={`rounded-xl px-3 py-1.5 text-sm font-medium transition-colors ${
                    yearFilter === year
                      ? 'bg-primary text-white'
                      : 'bg-[#f4f7fc] text-primary hover:bg-primary/10'
                  }`}
                >
                  {year}
                </button>
              ))}
            </div>
            <div className="flex flex-wrap gap-2">
              <span className="self-center text-xs font-semibold uppercase tracking-wide text-[var(--color-text-light)]">
                Type:
              </span>
              {formatFilters.map((format) => (
                <button
                  key={format}
                  type="button"
                  onClick={() => setFormatFilter(format)}
                  className={`rounded-xl px-3 py-1.5 text-sm font-medium transition-colors ${
                    formatFilter === format
                      ? 'bg-primary text-white'
                      : 'bg-[#f4f7fc] text-primary hover:bg-primary/10'
                  }`}
                >
                  {format}
                </button>
              ))}
            </div>
          </div>

          {pastByYear.length > 0 ? (
            <div className="space-y-12">
              {pastByYear.map(({ year, events }) => (
                <div key={year}>
                  <div className="mb-6 flex items-center gap-4">
                    <h3 className="text-xl font-bold text-primary">{year}</h3>
                    <div className="h-px flex-1 bg-border" />
                    <span className="text-sm text-[var(--color-text-light)]">
                      {events.length} event{events.length !== 1 ? 's' : ''}
                    </span>
                  </div>
                  <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
                    {events.map((event, i) => (
                      <AnimatedSection key={event.slug} delay={i * 0.04}>
                        <EventCard event={event} />
                      </AnimatedSection>
                    ))}
                  </div>
                </div>
              ))}
            </div>
          ) : (
            <p className="text-center text-[var(--color-text-light)]">
              No events match the selected filters.
            </p>
          )}

          <div className="mt-14 text-center">
            <Link href="/updates" className="btn-outline group text-sm">
              ← Back to all updates
              <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}
