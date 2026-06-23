'use client';

import Link from 'next/link';
import { useEffect, useState } from 'react';
import { ArrowRight } from 'lucide-react';
import Logo from '@/components/shared/Logo';
import NavMenu from './NavMenu';
import MobileMenu, { MobileMenuButton } from './MobileMenu';

export default function Header() {
  const [mobileOpen, setMobileOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40);
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  return (
    <header className={`sticky z-50 transition-all duration-500 ${
      scrolled 
        ? 'top-4 mx-auto w-[92%] max-w-7xl rounded-2xl border border-white/30 bg-white/80 backdrop-blur-xl shadow-elevated' 
        : 'top-0 w-full bg-white border-b border-border/40'
    }`}>
      <div className={`transition-all duration-500 ${scrolled ? 'py-1 px-4 sm:px-6' : 'py-3'}`}>
        <div className="container-gclt flex items-center justify-between gap-4 px-0">
          <Link href="/" className="group relative flex shrink-0 items-center">
            <div className="absolute -left-2 h-full w-1 rounded-full bg-accent opacity-0 transition-opacity group-hover:opacity-100" />
            <Logo priority className={`transition-transform duration-300 ${scrolled ? 'scale-90' : 'scale-100'}`} />
          </Link>

          <div className="hidden flex-1 items-center justify-center xl:flex">
            <NavMenu />
          </div>

          <div className="flex items-center gap-3">
            <Link
              href="/academics/admissions"
              className="btn-accent hidden items-center gap-2 px-5 py-2.5 text-sm shadow-none sm:inline-flex rounded-xl"
            >
              Apply Now
              <ArrowRight className="h-4 w-4" />
            </Link>
            <MobileMenuButton onClick={() => setMobileOpen(true)} />
          </div>
        </div>
      </div>
      {!scrolled && (
        <div className="h-0.5 bg-gradient-to-r from-transparent via-accent to-transparent opacity-60" />
      )}
      <MobileMenu open={mobileOpen} onClose={() => setMobileOpen(false)} />
    </header>
  );
}
