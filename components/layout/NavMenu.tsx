'use client';

import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { useState } from 'react';
import { ChevronDown, ArrowRight } from 'lucide-react';
import { navItems } from '@/lib/data/navigation';

export default function NavMenu() {
  const pathname = usePathname();
  const [openMenu, setOpenMenu] = useState<string | null>(null);

  const isActive = (href: string) => {
    if (href === '/') return pathname === '/';
    return pathname.startsWith(href);
  };

  return (
    <nav className="hidden items-center gap-0.5 lg:flex" aria-label="Main navigation">
      {navItems.map((item) => {
        const Icon = item.icon;
        const active = isActive(item.href);

        return (
          <div
            key={item.label}
            className="relative"
            onMouseEnter={() => item.children && setOpenMenu(item.label)}
            onMouseLeave={() => setOpenMenu(null)}
          >
            <Link
              href={item.href}
              className={`nav-link ${active ? 'nav-link-active' : ''}`}
            >
              {Icon && <Icon className="h-4 w-4 opacity-70" />}
              {item.label}
              {item.children && (
                <ChevronDown
                  className={`h-3.5 w-3.5 transition-transform duration-200 ${
                    openMenu === item.label ? 'rotate-180' : ''
                  }`}
                />
              )}
            </Link>

            {item.children && openMenu === item.label && (
              <div className="absolute left-1/2 top-full z-50 w-[min(720px,calc(100vw-2rem))] -translate-x-1/2 pt-3">
                <div className="mega-panel animate-in fade-in slide-in-from-top-2 duration-200">
                  <div className="grid md:grid-cols-[1fr_240px]">
                    <div className="grid gap-0.5 p-3 sm:grid-cols-2">
                      {item.children.map((child) => (
                        <Link
                          key={child.href}
                          href={child.href}
                          className="group rounded-xl p-3.5 transition-all hover:bg-primary/5"
                        >
                          <p className="flex items-center gap-1 text-sm font-semibold text-primary group-hover:text-primary-dark">
                            {child.label}
                            <ArrowRight className="h-3.5 w-3.5 -translate-x-1 opacity-0 transition-all group-hover:translate-x-0 group-hover:opacity-100" />
                          </p>
                          {child.description && (
                            <p className="mt-1 text-xs leading-relaxed text-[var(--color-text-light)]">
                              {child.description}
                            </p>
                          )}
                        </Link>
                      ))}
                    </div>

                    {item.featured && (
                      <div className="relative overflow-hidden border-t border-border/60 bg-gradient-to-br from-primary to-primary-dark p-6 text-white md:border-l md:border-t-0">
                        <div className="absolute -right-6 -top-6 h-24 w-24 rounded-full bg-accent/20 blur-2xl" />
                        <p className="section-label section-label-light mb-3">Featured</p>
                        <h4 className="mb-2 text-lg font-bold text-white">{item.featured.title}</h4>
                        <p className="mb-5 text-sm leading-relaxed text-gray-200">
                          {item.featured.description}
                        </p>
                        <Link
                          href={item.featured.href}
                          className="inline-flex items-center gap-2 rounded-lg bg-accent px-4 py-2.5 text-sm font-semibold text-white transition-all hover:bg-accent-dark"
                        >
                          {item.featured.cta}
                          <ArrowRight className="h-4 w-4" />
                        </Link>
                      </div>
                    )}
                  </div>
                </div>
              </div>
            )}
          </div>
        );
      })}
    </nav>
  );
}
