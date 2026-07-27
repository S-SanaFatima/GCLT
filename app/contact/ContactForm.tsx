'use client';

import { useState } from 'react';
import Link from 'next/link';
import Breadcrumb from '@/components/shared/Breadcrumb';
import AnimatedSection from '@/components/shared/AnimatedSection';
import { SITE } from '@/lib/utils';
import {
  MapPin,
  Phone,
  Send,
  Globe,
  User,
  Mail,
  MessageSquare,
  ChevronDown,
  ArrowRight,
  Clock,
} from 'lucide-react';

const departments = [
  'General Inquiry',
  'Admissions',
  'Careers',
  'Research',
  'Academy',
  'Events',
] as const;

const emailMap: Record<string, string> = {
  'General Inquiry': SITE.emails.general,
  Admissions: SITE.emails.admissions,
  Careers: SITE.emails.careers,
  Research: SITE.emails.research,
  Academy: SITE.emails.academy,
  Events: SITE.emails.events,
};

const departmentPills = [
  { label: 'Admissions', email: SITE.emails.admissions },
  { label: 'Careers', email: SITE.emails.careers },
  { label: 'Research', email: SITE.emails.research },
  { label: 'Academy', email: SITE.emails.academy },
  { label: 'Events', email: SITE.emails.events },
];

const contactInfo = [
  {
    icon: MapPin,
    title: 'Visit Us',
    lines: [
      { prefix: 'Address:', text: 'Behind National Press Club, St#39, F-6/1, Islamabad, Pakistan', href: undefined },
    ],
  },
  {
    icon: Phone,
    title: 'Call Us',
    lines: [{ prefix: 'Phone:', text: SITE.phone, href: `tel:${SITE.phoneRaw}` }],
  },
  {
    icon: Send,
    title: 'Email Us',
    lines: [{ prefix: 'Email:', text: SITE.emails.general, href: `mailto:${SITE.emails.general}` }],
  },
  {
    icon: Globe,
    title: 'Website',
    lines: [{ prefix: '', text: 'www.gclt.com.pk', href: SITE.url }],
  },
];

const labelClass =
  'mb-2 block text-[11px] font-bold uppercase tracking-[0.14em] text-primary/80';

function FieldWrap({
  icon: Icon,
  children,
}: {
  icon: typeof User;
  children: React.ReactNode;
}) {
  return (
    <div className="relative">
      <Icon className="pointer-events-none absolute left-4 top-1/2 h-4 w-4 -translate-y-1/2 text-mid-gray/80" />
      {children}
    </div>
  );
}

export default function ContactPage() {
  const [form, setForm] = useState<{
    name: string;
    email: string;
    subject: typeof departments[number];
    message: string;
  }>({
    name: '',
    email: '',
    subject: departments[0],
    message: '',
  });
  const [focused, setFocused] = useState<string | null>(null);

  const fieldClass = (id: string) =>
    `w-full rounded-xl border bg-white pl-11 pr-4 py-3.5 text-sm text-dark shadow-[0_1px_2px_rgba(26,62,140,0.04)] transition-all duration-200 placeholder:text-mid-gray/60 ${
      focused === id
        ? 'border-primary ring-2 ring-primary/15 shadow-[0_4px_20px_rgba(26,62,140,0.1)]'
        : 'border-border/90 hover:border-primary/30'
    }`;

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const to = emailMap[form.subject] || SITE.emails.general;
    window.location.href = `mailto:${to}?subject=${encodeURIComponent(
      form.subject + ' - ' + form.name
    )}&body=${encodeURIComponent(
      form.message + '\n\nFrom: ' + form.name + ' (' + form.email + ')'
    )}`;
  };

  return (
    <div className="relative overflow-hidden">
      {/* Page backdrop */}
      <div className="pointer-events-none absolute inset-0 bg-gradient-to-b from-primary/[0.03] via-white to-off-white" />
      <div className="pattern-dots pointer-events-none absolute inset-0 opacity-[0.35]" />
      <div className="pointer-events-none absolute -right-32 top-20 h-96 w-96 rounded-full bg-accent/10 blur-3xl" />
      <div className="pointer-events-none absolute -left-24 bottom-40 h-80 w-80 rounded-full bg-primary/8 blur-3xl" />

      <section className="relative py-10 lg:py-14">
        <div className="container-gclt max-w-6xl">
          <AnimatedSection>
            <Breadcrumb onLight items={[{ label: 'Home', href: '/' }, { label: 'Contact' }]} />

            <div className="mt-6 flex flex-col gap-6 lg:flex-row lg:items-end lg:justify-between">
              <div className="max-w-2xl">
                <h1 className="font-heading text-3xl font-bold tracking-tight text-primary md:text-4xl lg:text-[2.5rem]">
                  Contact Us
                </h1>
                <p className="mt-4 text-lg leading-relaxed text-[var(--color-text-light)]">
                  Questions about programmes, research, careers, or events? Send a message — we
                  typically reply within one business day.
                </p>
              </div>
              <div className="flex shrink-0 items-center gap-3 rounded-2xl border border-primary/10 bg-white/80 px-5 py-4 shadow-card backdrop-blur-sm">
                <Clock className="h-5 w-5 text-accent" />
                <div className="text-sm">
                  <p className="font-semibold text-primary">Office Hours</p>
                  <p className="text-[var(--color-text-light)]">Mon – Fri, 9:00 AM – 5:00 PM PKT</p>
                </div>
              </div>
            </div>
          </AnimatedSection>

          {/* Split card */}
          <AnimatedSection delay={0.08} className="mt-10 lg:mt-12">
            <div className="overflow-hidden rounded-3xl border border-border/60 bg-white shadow-elevated ring-1 ring-black/[0.04]">
              <div className="grid lg:grid-cols-2">
                {/* Form */}
                <form
                  onSubmit={handleSubmit}
                  className="relative flex flex-col overflow-hidden px-8 py-10 sm:px-10 sm:py-12 lg:px-12 lg:py-14"
                >
                  <div className="pointer-events-none absolute inset-0 bg-gradient-to-br from-[#eef2f8] via-[#f4f6f9] to-[#e8edf5]" />
                  <div className="pattern-dots pointer-events-none absolute inset-0 opacity-25" />
                  <div className="pointer-events-none absolute -right-16 top-0 h-48 w-48 rounded-full bg-primary/5 blur-2xl" />

                  <div className="relative">
                    <div className="mb-1 h-1 w-16 rounded-full bg-gradient-to-r from-accent to-primary" />
                    <h2 className="font-heading text-xl font-bold text-dark sm:text-2xl">
                      Send a Message
                    </h2>
                    <p className="mt-2 text-sm text-[var(--color-text-light)]">
                      Routed to{' '}
                      <span className="font-semibold text-primary">{emailMap[form.subject]}</span>
                    </p>
                  </div>

                  <div className="relative mt-8 flex flex-1 flex-col gap-5">
                    <div className="grid gap-5 sm:grid-cols-2">
                      <div>
                        <label htmlFor="name" className={labelClass}>
                          Full Name
                        </label>
                        <FieldWrap icon={User}>
                          <input
                            id="name"
                            type="text"
                            required
                            value={form.name}
                            onFocus={() => setFocused('name')}
                            onBlur={() => setFocused(null)}
                            onChange={(e) => setForm({ ...form, name: e.target.value })}
                            className={fieldClass('name')}
                          />
                        </FieldWrap>
                      </div>
                      <div>
                        <label htmlFor="email" className={labelClass}>
                          Email Address
                        </label>
                        <FieldWrap icon={Mail}>
                          <input
                            id="email"
                            type="email"
                            required
                            value={form.email}
                            onFocus={() => setFocused('email')}
                            onBlur={() => setFocused(null)}
                            onChange={(e) => setForm({ ...form, email: e.target.value })}
                            className={fieldClass('email')}
                          />
                        </FieldWrap>
                      </div>
                    </div>

                    <div>
                      <label htmlFor="subject" className={labelClass}>
                        Subject
                      </label>
                      <div className="relative">
                        <MessageSquare className="pointer-events-none absolute left-4 top-1/2 h-4 w-4 -translate-y-1/2 text-mid-gray/80" />
                        <ChevronDown className="pointer-events-none absolute right-4 top-1/2 h-4 w-4 -translate-y-1/2 text-mid-gray" />
                        <select
                          id="subject"
                          value={form.subject}
                          onFocus={() => setFocused('subject')}
                          onBlur={() => setFocused(null)}
                          onChange={(e) => setForm({ ...form, subject: e.target.value as typeof departments[number] })}
                          className={`${fieldClass('subject')} appearance-none pr-10`}
                        >
                          {departments.map((d) => (
                            <option key={d} value={d}>
                              {d}
                            </option>
                          ))}
                        </select>
                      </div>
                    </div>

                    <div className="flex flex-1 flex-col">
                      <label htmlFor="message" className={labelClass}>
                        Message
                      </label>
                      <textarea
                        id="message"
                        required
                        value={form.message}
                        onFocus={() => setFocused('message')}
                        onBlur={() => setFocused(null)}
                        onChange={(e) => setForm({ ...form, message: e.target.value })}
                        className={`${fieldClass('message')} min-h-[160px] resize-y pl-4 lg:min-h-[180px]`}
                      />
                    </div>

                    <div className="pt-1">
                      <button
                        type="submit"
                        className="group inline-flex items-center gap-2 rounded-xl bg-gradient-to-r from-primary to-primary-dark px-10 py-4 text-sm font-bold uppercase tracking-wider text-white shadow-soft transition-all duration-300 hover:-translate-y-0.5 hover:shadow-elevated"
                      >
                        Send Message
                        <Send className="h-4 w-4 transition-transform group-hover:translate-x-1" />
                      </button>
                    </div>
                  </div>
                </form>

                {/* Map */}
                <div className="relative min-h-[340px] lg:min-h-[600px]">
                  <iframe
                    title="GCLT Location Map"
                    src="https://maps.google.com/maps?q=F-6/1+Islamabad+Pakistan&output=embed"
                    className="absolute inset-0 h-full w-full border-0"
                    allowFullScreen
                    loading="lazy"
                    referrerPolicy="no-referrer-when-downgrade"
                  />
                  <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-primary-dark/50 via-transparent to-primary/10" />

                  <div className="absolute bottom-4 left-4 right-4 z-10 sm:bottom-6 sm:left-6 sm:right-6 sm:max-w-sm">
                    <div className="rounded-2xl border border-white/20 bg-primary-dark/90 p-5 text-white shadow-elevated backdrop-blur-md">
                      <p className="font-heading font-bold">{SITE.shortName}</p>
                      <p className="mt-1 text-sm leading-relaxed text-white/85">
                        F-6/1, Islamabad — Behind National Press Club
                      </p>
                      <a
                        href="https://maps.google.com/?q=F-6/1+Islamabad+Pakistan"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="mt-4 inline-flex items-center gap-2 rounded-lg bg-accent px-4 py-2 text-xs font-bold uppercase tracking-wide text-white transition-colors hover:bg-accent-dark"
                      >
                        Get Directions
                        <ArrowRight className="h-3.5 w-3.5" />
                      </a>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </AnimatedSection>

          {/* Contact info cards */}
          <div className="mt-14 grid gap-6 sm:grid-cols-2 lg:mt-16 lg:grid-cols-4 lg:gap-5">
            {contactInfo.map((item, i) => (
              <AnimatedSection key={item.title} delay={0.1 + i * 0.05}>
                <div className="group h-full rounded-2xl border border-border/60 bg-white p-6 text-center shadow-card transition-all duration-300 hover:-translate-y-1 hover:border-primary/20 hover:shadow-elevated">
                  <div className="relative mx-auto w-fit">
                    <div className="absolute inset-0 scale-110 rounded-full bg-primary/20 opacity-0 blur-md transition-opacity group-hover:opacity-100" />
                    <div className="relative flex h-16 w-16 items-center justify-center rounded-full bg-gradient-to-br from-primary to-primary-dark text-white shadow-soft ring-4 ring-primary/10 transition-transform duration-300 group-hover:scale-105">
                      <item.icon className="h-7 w-7" strokeWidth={1.6} />
                    </div>
                  </div>
                  <h3 className="mt-5 font-heading text-sm font-bold uppercase tracking-wider text-primary">
                    {item.title}
                  </h3>
                  <div className="mt-3 space-y-1.5 text-sm leading-relaxed text-[var(--color-text-light)]">
                    {item.lines.map((line) => (
                      <p key={line.text}>
                        {line.href ? (
                          <a
                            href={line.href}
                            target={line.href.startsWith('http') ? '_blank' : undefined}
                            rel={line.href.startsWith('http') ? 'noopener noreferrer' : undefined}
                            className="transition-colors hover:text-primary"
                          >
                            {line.prefix && (
                              <span className="font-semibold text-dark/75">{line.prefix} </span>
                            )}
                            {line.text}
                          </a>
                        ) : (
                          <>
                            <span className="font-semibold text-dark/75">{line.prefix}</span>
                            {line.text}
                          </>
                        )}
                      </p>
                    ))}
                  </div>
                </div>
              </AnimatedSection>
            ))}
          </div>

          {/* Department quick links + WhatsApp */}
          <AnimatedSection delay={0.2} className="mt-10">
            <div className="rounded-2xl border border-border/60 bg-gradient-to-r from-primary/[0.04] via-white to-accent/[0.06] p-6 sm:p-8">
              <p className="text-center text-sm font-semibold uppercase tracking-wider text-mid-gray">
                Direct department lines
              </p>
              <div className="mt-4 flex flex-wrap items-center justify-center gap-3">
                {departmentPills.map((pill) => (
                  <a
                    key={pill.label}
                    href={`mailto:${pill.email}`}
                    className="rounded-full border border-primary/15 bg-white px-5 py-2.5 text-sm font-semibold text-primary shadow-sm transition-all hover:border-primary hover:bg-primary hover:text-white hover:shadow-soft"
                  >
                    {pill.label}
                  </a>
                ))}
              </div>
              <div className="mt-6 flex flex-col items-center justify-center gap-4 border-t border-border/60 pt-6 sm:flex-row sm:gap-8">
                <a
                  href={`https://wa.me/${SITE.phoneRaw}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 rounded-xl bg-[#25D366] px-6 py-3 text-sm font-bold text-white shadow-soft transition-all hover:-translate-y-0.5 hover:bg-[#1da851]"
                >
                  <MessageSquare className="h-4 w-4" />
                  Chat on WhatsApp
                </a>
                <p className="text-center text-sm text-[var(--color-text-light)]">
                  Or browse the{' '}
                  <Link href="/faq" className="font-semibold text-primary hover:text-accent">
                    FAQ
                  </Link>{' '}
                  for admissions, fees & programmes.
                </p>
              </div>
            </div>
          </AnimatedSection>
        </div>
      </section>
    </div>
  );
}
