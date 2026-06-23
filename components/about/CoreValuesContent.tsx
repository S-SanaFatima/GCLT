'use client';

import Link from 'next/link';
import { motion } from 'framer-motion';
import { ArrowRight } from 'lucide-react';
import PageHero from '@/components/shared/PageHero';
import AnimatedSection from '@/components/shared/AnimatedSection';
import { coreValues } from '@/lib/data/coreValues';
import { institutionMotto } from '@/lib/data/institution';

const cardVariants = {
  hidden: { opacity: 0, y: 20 },
  show: (i: number) => ({
    opacity: 1,
    y: 0,
    transition: { duration: 0.5, delay: i * 0.08, ease: [0.22, 1, 0.36, 1] },
  }),
};

export default function CoreValuesContent() {
  return (
    <>
      <PageHero
        title="Core Values"
        subtitle="The principles that define who we are and guide our research, teaching, partnerships, and public engagement."
        badge="Our Principles"
        variant="about"
        breadcrumbs={[
          { label: 'Home', href: '/' },
          { label: 'About', href: '/about' },
          { label: 'Core Values' },
        ]}
      />

      <div className="relative overflow-hidden">
        <div className="pointer-events-none absolute inset-0 bg-gradient-to-b from-primary/[0.04] via-white to-off-white" />
        <div className="pattern-dots pointer-events-none absolute inset-0 opacity-[0.25]" />

        <section className="section-padding relative">
          <div className="container-gclt">
            <AnimatedSection className="mx-auto max-w-3xl text-center">
              <span className="section-label mx-auto">What Guides Us</span>
              <h2 className="mt-4 text-3xl font-bold text-primary md:text-4xl">
                Principles at the Heart of GCLT
              </h2>
              <p className="mt-4 text-lg leading-relaxed text-[var(--color-text-light)]">
                These values shape how we conduct research, design programmes, collaborate with
                partners, and serve our academic community — from Islamabad to the world.
              </p>
              <div className="mt-6 flex items-center justify-center gap-3">
                <div className="h-px w-12 bg-accent" />
                <div className="h-2 w-2 rotate-45 bg-accent" />
                <div className="h-px w-12 bg-accent" />
              </div>
            </AnimatedSection>

            <div className="mt-14 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
              {coreValues.map(({ title, description, icon: Icon }, i) => (
                <motion.div
                  key={title}
                  custom={i}
                  variants={cardVariants}
                  initial="hidden"
                  whileInView="show"
                  viewport={{ once: true, margin: '-40px' }}
                  whileHover={{ y: -4 }}
                  transition={{ type: 'spring', stiffness: 400, damping: 28 }}
                >
                  <div className="group relative h-full overflow-hidden rounded-2xl border border-border/70 bg-white p-6 shadow-card transition-shadow hover:border-primary/20 hover:shadow-elevated md:p-7">
                    <span className="absolute right-5 top-4 font-heading text-3xl font-bold text-primary/[0.06] transition-colors group-hover:text-primary/10">
                      {String(i + 1).padStart(2, '0')}
                    </span>
                    <div className="relative mb-5 flex h-12 w-12 items-center justify-center rounded-xl bg-primary/10 text-primary transition-colors group-hover:bg-primary group-hover:text-white">
                      <Icon className="h-6 w-6" strokeWidth={1.75} />
                    </div>
                    <h3 className="relative text-lg font-bold text-primary">{title}</h3>
                    <p className="relative mt-3 text-sm leading-relaxed text-[var(--color-text-light)]">
                      {description}
                    </p>
                  </div>
                </motion.div>
              ))}
            </div>

            <AnimatedSection delay={0.15} className="mt-14">
              <motion.div
                className="mx-auto max-w-3xl rounded-2xl border border-primary/15 bg-gradient-to-r from-primary/[0.06] via-white to-accent/[0.08] px-8 py-8 text-center shadow-card"
                initial={{ opacity: 0, scale: 0.98 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.55, ease: [0.22, 1, 0.36, 1] }}
              >
                <p className="text-[11px] font-bold uppercase tracking-[0.2em] text-accent">
                  Our guiding line
                </p>
                <p className="mt-3 text-xl font-bold text-primary md:text-2xl">{institutionMotto}</p>
                <p className="mx-auto mt-4 max-w-xl text-sm leading-relaxed text-[var(--color-text-light)]">
                  Every value above supports this commitment — connecting heritage, innovation, and
                  leadership in all that GCLT undertakes.
                </p>
              </motion.div>
            </AnimatedSection>

            <AnimatedSection delay={0.2} className="mt-12">
              <div className="flex flex-col items-center justify-between gap-5 rounded-2xl border border-border/60 bg-white px-6 py-6 shadow-card sm:flex-row sm:px-8">
                <p className="text-center text-sm text-[var(--color-text-light)] sm:text-left">
                  <span className="font-semibold text-primary">See these values in action</span> — meet
                  our faculty and explore our mission.
                </p>
                <div className="flex shrink-0 flex-wrap justify-center gap-3">
                  <Link href="/about/team" className="btn-outline group text-sm">
                    Our Team
                    <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
                  </Link>
                  <Link href="/about" className="btn-primary group text-sm">
                    About GCLT
                    <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
                  </Link>
                </div>
              </div>
            </AnimatedSection>
          </div>
        </section>
      </div>
    </>
  );
}
