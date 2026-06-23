'use client';

import { useState, useEffect } from 'react';
import { ChevronLeft, ChevronRight, Quote } from 'lucide-react';
import AnimatedSection from '@/components/shared/AnimatedSection';
import { testimonials } from '@/lib/data/testimonials';

export default function TestimonialsSection() {
  const [current, setCurrent] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrent((prev) => (prev + 1) % testimonials.length);
    }, 6500);
    return () => clearInterval(timer);
  }, []);

  const t = testimonials[current];

  return (
    <section className="relative overflow-hidden py-12 md:py-16">
      <div className="absolute inset-0 bg-gradient-to-br from-primary-dark via-primary to-[#0f2347]" />
      <div className="pattern-dots absolute inset-0 opacity-[0.12]" />
      <div className="pointer-events-none absolute -left-24 top-1/4 h-48 w-48 rounded-full bg-accent/15 blur-3xl" />

      <div className="container-gclt relative">
        <AnimatedSection className="mx-auto max-w-2xl text-center">
          <span className="section-label section-label-light mx-auto">Community</span>
          <h2 className="mt-3 text-2xl font-bold text-white md:text-3xl">
            What Our Community Says
          </h2>
        </AnimatedSection>

        <AnimatedSection delay={0.08} className="relative mx-auto mt-8 max-w-3xl">
          <div className="relative rounded-2xl border border-white/15 bg-white shadow-elevated">
            <div className="absolute -top-4 left-6 flex h-10 w-10 items-center justify-center rounded-xl bg-accent shadow-md md:left-8">
              <Quote className="h-5 w-5 text-white" fill="currentColor" />
            </div>

            <div className="px-6 pb-5 pt-8 md:px-8 md:pb-6 md:pt-9">
              <blockquote className="text-center text-base font-medium leading-relaxed text-dark md:text-lg">
                &ldquo;{t.quote}&rdquo;
              </blockquote>

              <div className="mt-5 flex items-center justify-center gap-3 border-t border-border/50 pt-5">
                <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-gradient-to-br from-primary to-primary-dark text-sm font-bold text-white">
                  {t.name.charAt(0)}
                </div>
                <div className="min-w-0 text-left">
                  <p className="truncate font-heading text-sm font-bold text-primary">{t.name}</p>
                  <p className="truncate text-xs text-[var(--color-text-light)]">{t.designation}</p>
                </div>
              </div>
            </div>

            <div className="flex items-center justify-between gap-3 border-t border-border/40 bg-off-white/80 px-4 py-3 md:px-6">
              <button
                type="button"
                onClick={() => setCurrent((c) => (c - 1 + testimonials.length) % testimonials.length)}
                aria-label="Previous testimonial"
                className="rounded-full border border-primary/15 bg-white p-2 text-primary transition-colors hover:bg-primary hover:text-white"
              >
                <ChevronLeft className="h-4 w-4" />
              </button>
              <div className="flex gap-1.5">
                {testimonials.map((_, i) => (
                  <button
                    key={i}
                    type="button"
                    onClick={() => setCurrent(i)}
                    aria-label={`Testimonial ${i + 1}`}
                    className={`h-1.5 rounded-full transition-all duration-300 ${
                      i === current ? 'w-7 bg-accent' : 'w-1.5 bg-primary/25 hover:bg-primary/40'
                    }`}
                  />
                ))}
              </div>
              <button
                type="button"
                onClick={() => setCurrent((c) => (c + 1) % testimonials.length)}
                aria-label="Next testimonial"
                className="rounded-full border border-primary/15 bg-white p-2 text-primary transition-colors hover:bg-primary hover:text-white"
              >
                <ChevronRight className="h-4 w-4" />
              </button>
            </div>
          </div>
        </AnimatedSection>
      </div>
    </section>
  );
}
