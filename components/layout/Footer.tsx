'use client';

import { useState } from 'react';
import Link from 'next/link';
import Logo from '@/components/shared/Logo';
import { Facebook, Twitter, Instagram, Linkedin, Youtube, ArrowRight, Send } from 'lucide-react';
import { SITE } from '@/lib/utils';

const quickLinks = [
  { label: 'About', href: '/about' },
  { label: 'Updates', href: '/updates' },
  { label: 'Careers', href: '/careers' },
  { label: 'Research', href: '/research' },
  { label: 'Contact', href: '/contact' },
];

const academicLinks = [
  { label: 'Diploma Programs', href: '/academics/diploma-programs' },
  { label: 'Short Courses', href: '/academics/short-courses' },
  { label: 'Trainings', href: '/academics/trainings-workshops' },
  { label: 'Internships', href: '/academics/internships' },
  { label: 'Admissions', href: '/academics/admissions' },
];

const socialLinks = [
  { icon: Facebook, href: 'https://facebook.com', label: 'Facebook' },
  { icon: Twitter, href: 'https://twitter.com', label: 'X / Twitter' },
  { icon: Instagram, href: 'https://instagram.com', label: 'Instagram' },
  { icon: Linkedin, href: 'https://linkedin.com', label: 'LinkedIn' },
  { icon: Youtube, href: 'https://youtube.com', label: 'YouTube' },
];

export default function Footer() {
  const [email, setEmail] = useState('');

  const handleSubscribe = (e: React.FormEvent) => {
    e.preventDefault();
    if (email) {
      window.location.href = `mailto:${SITE.emails.general}?subject=Newsletter Subscription&body=Please subscribe ${email} to the GCLT newsletter.`;
    }
  };

  return (
    <footer className="relative bg-gradient-to-b from-primary-dark to-[#0a1628] text-white">
      <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-accent to-transparent" />

      <div className="container-gclt section-padding pb-12">
        <div className="grid gap-12 lg:grid-cols-12">
          <div className="lg:col-span-4">
            <Link href="/" className="mb-6 inline-block">
              <Logo variant="footer" />
            </Link>
            <p className="mb-6 max-w-sm text-sm leading-relaxed text-gray-300">
              The Global Centre for Learning & Training is an international institution offering
              academic programmes, professional training, research, and conferences.
            </p>
            <div className="flex gap-2">
              {socialLinks.map(({ icon: Icon, href, label }) => (
                <a
                  key={label}
                  href={href}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={label}
                  className="rounded-xl bg-white/10 p-2.5 transition-all hover:-translate-y-0.5 hover:bg-accent"
                >
                  <Icon className="h-4 w-4" />
                </a>
              ))}
            </div>
          </div>

          <div className="grid gap-8 sm:grid-cols-2 lg:col-span-5">
            <div>
              <h4 className="mb-5 flex items-center gap-2 font-semibold text-white">
                <span className="h-1 w-4 rounded-full bg-accent" />
                Quick Links
              </h4>
              <ul className="space-y-3">
                {quickLinks.map((link) => (
                  <li key={link.href}>
                    <Link
                      href={link.href}
                      className="group flex items-center gap-1 text-sm text-gray-300 transition-colors hover:text-accent"
                    >
                      <ArrowRight className="h-3 w-3 opacity-0 transition-all group-hover:opacity-100" />
                      {link.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
            <div>
              <h4 className="mb-5 flex items-center gap-2 font-semibold text-white">
                <span className="h-1 w-4 rounded-full bg-accent" />
                Academics
              </h4>
              <ul className="space-y-3">
                {academicLinks.map((link) => (
                  <li key={link.href}>
                    <Link
                      href={link.href}
                      className="group flex items-center gap-1 text-sm text-gray-300 transition-colors hover:text-accent"
                    >
                      <ArrowRight className="h-3 w-3 opacity-0 transition-all group-hover:opacity-100" />
                      {link.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          </div>

          <div className="lg:col-span-3">
            <h4 className="mb-5 flex items-center gap-2 font-semibold text-white">
              <span className="h-1 w-4 rounded-full bg-accent" />
              Contact Us
            </h4>
            <ul className="space-y-3 text-sm text-gray-300">
              <li>
                <a href={`mailto:${SITE.emails.general}`} className="transition-colors hover:text-accent">
                  {SITE.emails.general}
                </a>
              </li>
              <li>
                <a href={`tel:${SITE.phoneRaw}`} className="transition-colors hover:text-accent">
                  {SITE.phone}
                </a>
              </li>
              <li className="leading-relaxed">{SITE.address}</li>
            </ul>
          </div>
        </div>

        <div className="mt-14 rounded-2xl border border-white/10 bg-white/5 p-6 backdrop-blur-sm md:p-8">
          <h4 className="mb-2 font-semibold text-white">Subscribe to our newsletter</h4>
          <p className="mb-4 text-sm text-gray-400">Get updates on programmes, events, and research.</p>
          <form onSubmit={handleSubscribe} className="flex flex-col gap-3 sm:flex-row">
            <input
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              placeholder="Your email address"
              required
              className="flex-1 rounded-xl border border-white/15 bg-white/10 px-4 py-3 text-sm text-white placeholder:text-gray-500 focus:border-accent focus:outline-none focus:ring-1 focus:ring-accent"
            />
            <button type="submit" className="btn-accent shrink-0 gap-2">
              <Send className="h-4 w-4" />
              Subscribe
            </button>
          </form>
        </div>
      </div>

      <div className="border-t border-white/10 py-6">
        <div className="container-gclt flex flex-col items-center justify-between gap-4 text-sm text-gray-400 md:flex-row">
          <p>© 2026 Global Centre for Learning & Training. All rights reserved.</p>
          <div className="flex gap-6">
            <Link href="/privacy" className="transition-colors hover:text-white">Privacy Policy</Link>
            <Link href="/terms" className="transition-colors hover:text-white">Terms</Link>
            <Link href="/faq" className="transition-colors hover:text-white">FAQ</Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
