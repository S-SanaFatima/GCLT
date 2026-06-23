'use client';

import { useEffect, useRef, useState } from 'react';
import CountUp from 'react-countup';
import TiltCard from '@/components/shared/TiltCard';

const stats = [
  { value: 10, suffix: '+', label: 'Years of Excellence' },
  { value: 500, suffix: '+', label: 'Graduates & Participants' },
  { value: 3, suffix: '', label: 'Research Journals' },
  { value: 2, suffix: '', label: 'International Conferences' },
];

export default function StatsBar() {
  const ref = useRef<HTMLDivElement>(null);
  const [inView, setInView] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => { if (entry.isIntersecting) setInView(true); },
      { threshold: 0.3 }
    );
    if (ref.current) observer.observe(ref.current);
    return () => observer.disconnect();
  }, []);

  return (
    <section ref={ref} className="relative -mt-10 z-20 pb-4">
      <div className="container-gclt">
        <div className="grid grid-cols-2 gap-4 lg:grid-cols-4">
          {stats.map((stat) => (
            <TiltCard
              key={stat.label}
              className="h-full"
            >
              <div
                className="group relative overflow-hidden h-full rounded-2xl border border-white/10 bg-gradient-to-br from-slate-900 via-slate-950 to-primary-dark/80 p-6 text-center text-white shadow-elevated"
              >
                {/* Glowing decorative ambient corner circles */}
                <div className="absolute -right-4 -top-4 h-16 w-16 rounded-full bg-accent/10 blur-xl transition-all duration-500 group-hover:bg-accent/20" />
                <div className="absolute -left-4 -bottom-4 h-16 w-16 rounded-full bg-primary/10 blur-xl transition-all duration-500 group-hover:bg-primary/20" />
                
                <p className="relative text-3xl font-extrabold text-accent md:text-4xl lg:text-5xl drop-shadow-[0_3px_10px_rgba(245,166,35,0.25)]">
                  {inView ? (
                    <CountUp end={stat.value} duration={2.5} suffix={stat.suffix} />
                  ) : (
                    `0${stat.suffix}`
                  )}
                </p>
                <p className="relative mt-2 text-xs font-bold uppercase tracking-[0.1em] text-slate-300 group-hover:text-white transition-colors duration-300">
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
