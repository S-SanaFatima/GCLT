'use client';

import Link from 'next/link';
import { motion } from 'framer-motion';
import {
  ArrowRight,
  BookMarked,
  Layers,
  Rocket,
  MapPin,
  Network,
  Building2,
} from 'lucide-react';
import AnimatedSection from '@/components/shared/AnimatedSection';
import {
  institutionIntro,
  institutionFramework,
  institutionMotto,
  transitionAnnouncement,
} from '@/lib/data/institution';

const milestones = [
  {
    year: 'Legal Thought',
    icon: BookMarked,
    title: transitionAnnouncement.from,
    desc: transitionAnnouncement.summary,
    color: 'from-primary/20 to-primary/5',
    iconBg: 'bg-primary text-white',
  },
  {
    year: 'Renewed Framework',
    icon: Layers,
    title: 'Academic & professional advancement',
    desc: transitionAnnouncement.commitment,
    color: 'from-accent/20 to-accent/5',
    iconBg: 'bg-accent text-white',
  },
  {
    year: 'Today',
    icon: Rocket,
    title: transitionAnnouncement.to,
    desc: `Under its renewed framework, GCLT promotes research initiatives, academic programmes, publications, conferences, training platforms, policy dialogue, and institutional collaboration. ${institutionMotto}.`,
    color: 'from-primary/15 to-accent/10',
    iconBg: 'bg-gradient-to-br from-primary to-accent text-white',
  },
];

const identityPills = [
  { icon: MapPin, label: 'Islamabad, Pakistan' },
  { icon: Building2, label: 'Independent institution' },
  { icon: Network, label: 'International collaborations' },
];

const container = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    transition: { staggerChildren: 0.14, delayChildren: 0.1 },
  },
};

const item = {
  hidden: { opacity: 0, x: -24 },
  show: {
    opacity: 1,
    x: 0,
    transition: { duration: 0.55, ease: [0.22, 1, 0.36, 1] },
  },
};

export default function AboutIntroAnimated() {
  return (
    <section className="section-padding relative overflow-hidden">
      <div className="pattern-grid pointer-events-none absolute inset-0 opacity-40" />
      <motion.div
        className="pointer-events-none absolute left-1/2 top-20 h-64 w-64 -translate-x-1/2 rounded-full bg-primary/10 blur-3xl"
        animate={{ scale: [1, 1.15, 1], opacity: [0.5, 0.75, 0.5] }}
        transition={{ duration: 8, repeat: Infinity, ease: 'easeInOut' }}
      />
      <motion.div
        className="pointer-events-none absolute bottom-10 right-10 h-48 w-48 rounded-full bg-accent/15 blur-3xl"
        animate={{ scale: [1.1, 1, 1.1], opacity: [0.4, 0.7, 0.4] }}
        transition={{ duration: 6, repeat: Infinity, ease: 'easeInOut', delay: 1 }}
      />

      <div className="container-gclt relative">
        <AnimatedSection className="mx-auto max-w-4xl text-center">
          <span className="section-label mx-auto">Institutional Profile</span>
          <h2 className="mt-4 text-3xl font-bold leading-tight text-primary md:text-4xl">
            Global Centre for Learning & Training
          </h2>
          <p className="mt-5 text-lg leading-relaxed text-[var(--color-text-light)]">
            {institutionIntro}
          </p>
        </AnimatedSection>

        <div className="mt-14 lg:mt-16">
          <div className="grid gap-12 lg:grid-cols-[1fr_340px] lg:gap-16 xl:grid-cols-[1fr_380px]">
            <motion.ul
              variants={container}
              initial="hidden"
              whileInView="show"
              viewport={{ once: true, margin: '-80px' }}
              className="relative space-y-8"
            >
              <motion.div
                className="absolute bottom-4 left-[1.65rem] top-4 hidden w-0.5 origin-top bg-gradient-to-b from-primary via-accent to-primary/30 md:block"
                initial={{ scaleY: 0 }}
                whileInView={{ scaleY: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 1.1, ease: [0.22, 1, 0.36, 1], delay: 0.2 }}
              />

              {milestones.map((m, i) => (
                <motion.li key={m.year} variants={item} className="relative flex gap-6 md:gap-8">
                  <div className="relative z-10 flex flex-col items-center">
                    <motion.div
                      className={`flex h-14 w-14 shrink-0 items-center justify-center rounded-2xl shadow-soft ${m.iconBg}`}
                      whileHover={{ scale: 1.08, rotate: -3 }}
                      transition={{ type: 'spring', stiffness: 400, damping: 18 }}
                    >
                      <m.icon className="h-6 w-6" strokeWidth={1.75} />
                    </motion.div>
                    {i < milestones.length - 1 && (
                      <div className="mt-2 h-full min-h-[2rem] w-px bg-primary/20 md:hidden" />
                    )}
                  </div>
                  <motion.div
                    className={`flex-1 rounded-2xl border border-border/60 bg-gradient-to-br ${m.color} p-6 shadow-card transition-shadow duration-300 hover:shadow-elevated md:p-7`}
                    whileHover={{ y: -4 }}
                    transition={{ type: 'spring', stiffness: 300, damping: 22 }}
                  >
                    <span className="text-[11px] font-bold uppercase tracking-[0.2em] text-accent">
                      {m.year}
                    </span>
                    <h3 className="mt-2 text-lg font-bold text-primary md:text-xl">{m.title}</h3>
                    <p className="mt-3 text-sm leading-relaxed text-[var(--color-text-light)]">
                      {m.desc}
                    </p>
                  </motion.div>
                </motion.li>
              ))}
            </motion.ul>

            <AnimatedSection delay={0.15} className="lg:sticky lg:top-28 lg:self-start">
              <motion.div
                className="relative overflow-hidden rounded-3xl border border-primary/15 bg-white p-8 shadow-elevated"
                initial={{ opacity: 0, y: 32 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
              >
                <motion.div
                  className="absolute -right-12 -top-12 h-40 w-40 rounded-full bg-accent/20 blur-2xl"
                  animate={{ rotate: 360 }}
                  transition={{ duration: 24, repeat: Infinity, ease: 'linear' }}
                />
                <div className="relative">
                  <p className="text-[11px] font-bold uppercase tracking-[0.18em] text-accent">
                    Official announcement
                  </p>
                  <p className="mt-4 font-heading text-xl font-bold leading-snug text-primary">
                    A new chapter for GCLT
                  </p>
                  <p className="mt-4 text-sm leading-relaxed text-[var(--color-text-light)]">
                    {institutionFramework}
                  </p>

                  <ul className="mt-8 space-y-3">
                    {identityPills.map(({ icon: Icon, label }, idx) => (
                      <motion.li
                        key={label}
                        initial={{ opacity: 0, x: 16 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ delay: 0.25 + idx * 0.1, duration: 0.45 }}
                        className="flex items-center gap-3 rounded-xl border border-slate-100 bg-slate-50/80 px-4 py-3"
                      >
                        <span className="flex h-9 w-9 items-center justify-center rounded-lg bg-primary/10 text-primary">
                          <Icon className="h-4 w-4" />
                        </span>
                        <span className="text-sm font-semibold text-primary">{label}</span>
                      </motion.li>
                    ))}
                  </ul>

                  <motion.div
                    className="mt-8 rounded-2xl border border-accent/25 bg-gradient-to-r from-accent/10 to-primary/5 px-5 py-4"
                    animate={{
                      boxShadow: [
                        '0 0 0 0 rgba(245, 166, 35, 0)',
                        '0 0 24px 0 rgba(245, 166, 35, 0.12)',
                        '0 0 0 0 rgba(245, 166, 35, 0)',
                      ],
                    }}
                    transition={{ duration: 3.5, repeat: Infinity, ease: 'easeInOut' }}
                  >
                    <p className="text-xs font-bold uppercase tracking-widest text-accent">
                      Our guiding line
                    </p>
                    <p className="mt-1.5 text-sm font-semibold text-primary">{institutionMotto}</p>
                  </motion.div>

                  <Link
                    href="/updates/gclt-transition-global-centre-learning-training"
                    className="btn-ghost group mt-6 text-sm"
                  >
                    Read full announcement
                    <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
                  </Link>
                </div>
              </motion.div>
            </AnimatedSection>
          </div>
        </div>
      </div>
    </section>
  );
}
