'use client';

import Link from 'next/link';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay, EffectFade, Navigation, Pagination } from 'swiper/modules';
import { ArrowRight, Sparkles } from 'lucide-react';
import 'swiper/css';
import 'swiper/css/effect-fade';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import { heroSlideImages } from '@/lib/pageThemes';

const slides = [
  {
    title: 'Global Centre for Learning & Training',
    subtitle: 'Bridging Tradition, Technology & Leadership',
    cta: 'Explore Our Programmes',
    href: '/academics',
    image: heroSlideImages[0],
    num: '01',
    badge: 'Academics & Leadership',
  },
  {
    title: 'Committed to Academic Excellence',
    subtitle: 'Advancing Critical Inquiry, Research, Knowledge & Scholarship',
    cta: 'Our Research',
    href: '/research',
    image: heroSlideImages[1],
    num: '02',
    badge: 'Scholarly Research',
  },
  {
    title: '1st International Conference on AI & Society',
    subtitle: "Highlights from GCLT's inaugural conference at the Pakistan Academy of Letters",
    cta: 'View Recap & Gallery',
    href: '/updates/events/1st-international-conference-ai-society',
    image: heroSlideImages[2],
    num: '03',
    badge: 'Past Conference',
  },
  {
    title: "Global Summit on Harmonisation of Shari'ah and Law",
    subtitle: 'Reflecting on the harmonisation of Shari\'ah and Law across policy and society',
    cta: 'View Proceedings',
    href: '/research/conferences',
    image: heroSlideImages[3],
    num: '04',
    badge: 'International Summit',
  },
  {
    title: 'Technical Approaches to Research (TAR)',
    subtitle: 'Professional training programme for advanced research methodologies',
    cta: 'Apply Now',
    href: '/academics/short-courses',
    image: heroSlideImages[4],
    num: '05',
    badge: 'TAR Special Programme',
  },
  {
    title: 'A New Chapter for GCLT',
    subtitle: 'Officially transitioning to the Global Centre for Learning & Training',
    cta: 'Read the Announcement',
    href: '/updates/gclt-transition-global-centre-learning-training',
    image: heroSlideImages[5],
    num: '06',
    badge: 'Institutional Update',
  },
];

export default function HeroSlider() {
  return (
    <section className="relative h-[85vh] min-h-[540px] overflow-hidden bg-slate-950">
      <Swiper
        modules={[Autoplay, EffectFade, Navigation, Pagination]}
        effect="fade"
        fadeEffect={{ crossFade: true }}
        autoplay={{ delay: 7000, disableOnInteraction: false }}
        loop
        navigation
        pagination={{ clickable: true }}
        className="hero-swiper h-full w-full"
      >
        {slides.map((slide, index) => (
          <SwiperSlide
            key={slide.title}
            className="relative h-full w-full overflow-hidden bg-slate-950"
          >
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img
              src={slide.image}
              alt=""
              className="absolute inset-0 z-[1] h-full w-full object-cover"
              loading={index === 0 ? 'eager' : 'lazy'}
              fetchPriority={index === 0 ? 'high' : 'auto'}
            />

            <div className="absolute inset-0 z-[2] bg-gradient-to-r from-slate-950/75 via-slate-950/45 to-slate-900/20" />
            <div className="absolute inset-0 z-[2] bg-gradient-to-t from-slate-950/60 via-transparent to-slate-950/20" />

            <div className="absolute top-1/4 right-1/4 z-[2] h-96 w-96 rounded-full bg-primary/10 blur-[120px] animate-pulse-glow pointer-events-none" />
            <div className="absolute bottom-1/4 left-1/3 z-[2] h-80 w-80 rounded-full bg-accent/5 blur-[100px] animate-pulse-glow pointer-events-none" />

            <div className="relative z-10 flex h-full items-center py-16 md:py-20">
              <div className="container-gclt grid w-full items-center gap-10 lg:grid-cols-[1fr_auto]">
                <div className="max-w-3xl">
                  <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full border border-white/10 bg-white/5 backdrop-blur-md mb-4 sm:mb-6">
                    <Sparkles className="h-3.5 w-3.5 text-accent animate-pulse" />
                    <span className="hero-badge">
                      {slide.badge}
                    </span>
                  </div>

                  <h1 className="hero-title mb-4 sm:mb-6">
                    {slide.title.split(' ').map((word, idx) => {
                      if (
                        word.toLowerCase() === 'learning' ||
                        word.toLowerCase() === 'excellence' ||
                        word.toLowerCase() === 'ai' ||
                        word.toLowerCase() === 'shari\'ah' ||
                        word.toLowerCase() === 'research' ||
                        word.toLowerCase() === 'training' ||
                        word.toLowerCase() === 'gclt'
                      ) {
                        return (
                          <span key={idx} className="text-accent">
                            {word}{' '}
                          </span>
                        );
                      }
                      return `${word} `;
                    })}
                  </h1>

                  <p className="hero-subtitle mb-6 sm:mb-8 max-w-xl">
                    {slide.subtitle}
                  </p>

                  <div className="flex flex-wrap gap-4">
                    <Link href={slide.href} className="btn-accent group rounded-xl px-6 py-3.5 text-sm">
                      {slide.cta}
                      <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
                    </Link>
                    <Link href="/about" className="btn-outline-white rounded-xl px-6 py-3.5 text-sm">
                      Learn More
                    </Link>
                  </div>
                </div>

                <div className="hidden lg:block relative select-none">
                  <span className="hero-slide-number relative z-10 drop-shadow-[0_15px_30px_rgba(26,62,140,0.3)]">
                    {slide.num}
                  </span>
                  <div className="absolute inset-0 bg-gradient-to-tr from-accent/20 to-transparent blur-md -z-10 rounded-full scale-75" />
                </div>
              </div>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>

      <div className="pointer-events-none absolute bottom-0 left-0 right-0 z-10">
        <svg viewBox="0 0 1440 40" fill="none" className="w-full text-off-white" preserveAspectRatio="none">
          <path d="M0,40 C320,10 640,0 960,15 C1180,25 1320,35 1440,30 L1440,40 L0,40 Z" fill="currentColor" />
        </svg>
      </div>
    </section>
  );
}
