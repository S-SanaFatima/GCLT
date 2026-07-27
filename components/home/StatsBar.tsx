'use client';

import { useEffect, useRef, useState } from 'react';
import CountUp from 'react-countup';
import TiltCard from '@/components/shared/TiltCard';

/** Verified homepage figures only — never show zero placeholders (designer brief §1.1). */
const stats = [
  { value: 10, suffix: '+', label: 'Years of Academic Engagement' },
  { value: 500, suffix: '+', label: 'Graduates & Participants' },
  { value: 3, suffix: '', label: 'Peer-Reviewed Journals' },
  { value: 2, suffix: '', label: 'International Conferences' },
];

export default function StatsBar() {
  const ref = useRef<HTMLDivElement>(null);
  const [inView, setInView] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) setInView(true);
      },
      { threshold: 0.2 }
    );
    if (ref.current) observer.observe(ref.current);
    return () => observer.disconnect();
  }, []);

  return (
    <section ref={ref} className="relative z-20 -mt-10 pb-4">
      <div className="container-gclt">
        <div className="grid grid-cols-2 gap-4 lg:grid-cols-4">
          {stats.map((stat) => (
            <TiltCard key={stat.label} className="h-full">
              <div className="group relative h-full overflow-hidden rounded-2xl border border-white/10 bg-gradient-to-br from-slate-900 via-slate-950 to-primary-dark/80 p-6 text-center text-white shadow-elevated">
                <div className="absolute -right-4 -top-4 h-16 w-16 rounded-full bg-accent/10 blur-xl transition-all duration-500 group-hover:bg-accent/20" />
                <div className="absolute -bottom-4 -left-4 h-16 w-16 rounded-full bg-primary/10 blur-xl transition-all duration-500 group-hover:bg-primary/20" />

                <p className="relative text-3xl font-extrabold text-accent drop-shadow-[0_3px_10px_rgba(245,166,35,0.25)] md:text-4xl lg:text-5xl">
                  {inView ? (
                    <CountUp end={stat.value} duration={2.2} suffix={stat.suffix} />
                  ) : (
                    `${stat.value}${stat.suffix}`
                  )}
                </p>
                <p className="relative mt-2 text-xs font-bold uppercase tracking-[0.1em] text-slate-300 transition-colors duration-300 group-hover:text-white">
                  {stat.label}
                </p>
              </div>
            </TiltCard>
          ))}
        </div>
      </div>
    </section>
  );
}
