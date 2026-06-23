'use client';

import Link from 'next/link';
import Logo from '@/components/shared/Logo';
import { usePathname } from 'next/navigation';
import { Dialog, DialogPanel, Disclosure, DisclosureButton, DisclosurePanel } from '@headlessui/react';
import { Menu, X, ChevronDown, ArrowRight, Phone, Mail } from 'lucide-react';
import { navItems } from '@/lib/data/navigation';
import { SITE } from '@/lib/utils';

interface MobileMenuProps {
  open: boolean;
  onClose: () => void;
}

export default function MobileMenu({ open, onClose }: MobileMenuProps) {
  const pathname = usePathname();

  const isActive = (href: string) => {
    if (href === '/') return pathname === '/';
    return pathname.startsWith(href);
  };

  return (
    <Dialog open={open} onClose={onClose} className="lg:hidden">
      <div className="fixed inset-0 z-50 bg-primary-dark/60 backdrop-blur-sm" aria-hidden="true" />
      <DialogPanel className="fixed inset-y-0 right-0 z-50 w-full max-w-sm overflow-y-auto bg-white shadow-2xl">
        <div className="bg-gradient-to-r from-primary to-primary-dark p-5 text-white">
          <div className="flex items-center justify-between">
            <Logo variant="footer" className="max-w-[180px]" />
            <button onClick={onClose} aria-label="Close menu" className="rounded-lg bg-white/10 p-2">
              <X className="h-5 w-5" />
            </button>
          </div>
          <div className="mt-4 flex flex-col gap-2 text-sm text-gray-200">
            <a href={`tel:${SITE.phoneRaw}`} className="flex items-center gap-2">
              <Phone className="h-4 w-4 text-accent" /> {SITE.phone}
            </a>
            <a href={`mailto:${SITE.emails.general}`} className="flex items-center gap-2">
              <Mail className="h-4 w-4 text-accent" /> {SITE.emails.general}
            </a>
          </div>
        </div>

        <nav className="p-4">
          {navItems.map((item) =>
            item.children ? (
              <Disclosure key={item.label} as="div" className="border-b border-border/60">
                {({ open: expanded }) => (
                  <>
                    <DisclosureButton className="flex w-full items-center justify-between py-4 text-left font-semibold text-dark">
                      <span className={isActive(item.href) ? 'text-primary' : ''}>{item.label}</span>
                      <ChevronDown className={`h-5 w-5 text-primary transition-transform ${expanded ? 'rotate-180' : ''}`} />
                    </DisclosureButton>
                    <DisclosurePanel className="space-y-1 pb-4 pl-2">
                      {item.children!.map((child) => (
                        <Link
                          key={child.href}
                          href={child.href}
                          onClick={onClose}
                          className="block rounded-lg px-3 py-2.5 text-sm text-[var(--color-text-light)] transition-colors hover:bg-primary/5 hover:text-primary"
                        >
                          {child.label}
                        </Link>
                      ))}
                    </DisclosurePanel>
                  </>
                )}
              </Disclosure>
            ) : (
              <Link
                key={item.label}
                href={item.href}
                onClick={onClose}
                className={`block border-b border-border/60 py-4 font-semibold ${
                  isActive(item.href) ? 'text-primary' : 'text-dark'
                }`}
              >
                {item.label}
              </Link>
            )
          )}
          <Link href="/academics/admissions" onClick={onClose} className="btn-accent mt-6 w-full gap-2">
            Apply Now <ArrowRight className="h-4 w-4" />
          </Link>
        </nav>
      </DialogPanel>
    </Dialog>
  );
}

export function MobileMenuButton({ onClick }: { onClick: () => void }) {
  return (
    <button
      onClick={onClick}
      className="rounded-xl border border-primary/10 bg-primary/5 p-2.5 text-primary transition-all hover:bg-primary hover:text-white lg:hidden"
      aria-label="Open menu"
    >
      <Menu className="h-5 w-5" />
    </button>
  );
}
