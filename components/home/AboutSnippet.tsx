import Link from 'next/link';
import Image from 'next/image';
import { ArrowRight, CheckCircle2 } from 'lucide-react';
import AnimatedSection from '@/components/shared/AnimatedSection';

const pillars = [
  { title: 'Academic Programmes', desc: 'Diplomas & structured learning paths' },
  { title: 'Professional Training', desc: 'Workshops & capacity building' },
  { title: 'Research & Publications', desc: 'Three peer-reviewed journals' },
  { title: 'Conferences & Summits', desc: 'International scholarly gatherings' },
];

export default function AboutSnippet() {
  return (
    <section className="section-padding relative overflow-hidden bg-white">
      {/* Decorative grids and dots */}
      <div className="pattern-grid pointer-events-none absolute inset-0 opacity-40" />
      <div className="pointer-events-none absolute -left-10 top-1/4 h-72 w-72 rounded-full bg-primary/5 blur-3xl" />

      <div className="container-gclt relative">
        <div className="grid items-center gap-16 lg:grid-cols-2">
          <AnimatedSection>
            <span className="section-label">About GCLT</span>
            <h2 className="mb-6 mt-4 text-primary font-bold text-3xl md:text-4xl leading-tight">
              An International Institution for Learning, Research & Leadership
            </h2>
            <p className="mb-5 text-[var(--color-text-light)] leading-relaxed">
              The Global Centre for Learning & Training (GCLT) is an independent academic and
              research institution dedicated to advancing interdisciplinary scholarship, intellectual
              engagement, and professional development across law, society, governance, ethics,
              religion, technology, and public policy.
            </p>
            <p className="mb-8 text-[var(--color-text-light)] leading-relaxed">
              Guided by the integration of traditional intellectual heritage and contemporary
              thought, we serve communities nationally and internationally through research,
              academic exchange, and training initiatives.
            </p>
            
            <div className="mb-8 grid gap-4 sm:grid-cols-2">
              {pillars.map((pillar) => (
                <div 
                  key={pillar.title} 
                  className="flex gap-3.5 rounded-xl border border-slate-100 bg-slate-50/50 p-4 transition-all duration-300 hover:border-accent/30 hover:bg-slate-50"
                >
                  <CheckCircle2 className="mt-0.5 h-5 w-5 shrink-0 text-accent" />
                  <div>
                    <p className="text-sm font-bold text-primary">{pillar.title}</p>
                    <p className="text-xs text-[var(--color-text-light)] mt-0.5">{pillar.desc}</p>
                  </div>
                </div>
              ))}
            </div>
            
            <Link href="/about" className="btn-primary group rounded-xl px-7 py-4 shadow-soft">
              Learn More About Us
              <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
            </Link>
          </AnimatedSection>

          <AnimatedSection delay={0.15} className="relative">
            {/* 3D-like shadows and frame border */}
            <div className="image-frame aspect-[4/3] relative rounded-3xl overflow-hidden shadow-elevated border border-slate-100 group">
              <Image
                src="/images/valdhy-mbemba-YgQxk8nWVOc-unsplash.jpg"
                alt="GCLT learning and research environment"
                fill
                className="object-cover transition-transform duration-700 group-hover:scale-105"
                sizes="(max-width: 1024px) 100vw, 50vw"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-primary/20 to-transparent pointer-events-none" />
            </div>
            
            {/* Glassmorphic floating stat box */}
            <div className="card-glass absolute -bottom-6 -left-4 max-w-[220px] p-6 md:-left-8 border border-white/40 shadow-elevated">
              <p className="text-4xl font-extrabold text-primary drop-shadow-[0_2px_4px_rgba(26,62,140,0.1)]">10+</p>
              <p className="text-xs font-semibold text-[var(--color-text-light)] mt-1">Years of institutional excellence</p>
            </div>
            
            {/* Soft backdrop glows */}
            <div className="absolute -right-4 -top-4 h-24 w-24 rounded-2xl bg-accent/20 blur-2xl -z-10" />
            <div className="absolute -left-10 -bottom-10 h-32 w-32 rounded-full bg-primary/20 blur-3xl -z-10" />
          </AnimatedSection>
        </div>
      </div>
    </section>
  );
}
