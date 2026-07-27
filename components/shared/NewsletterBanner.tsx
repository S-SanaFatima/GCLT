'use client';

import { useEffect, useState } from 'react';
import { X } from 'lucide-react';
import { SITE } from '@/lib/utils';

export default function NewsletterBanner() {
  const [visible, setVisible] = useState(false);
  const [dismissed, setDismissed] = useState(false);
  const [email, setEmail] = useState('');

  useEffect(() => {
    const timer = setTimeout(() => setVisible(true), 30000);
    return () => clearTimeout(timer);
  }, []);

  if (dismissed || !visible) return null;

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    window.location.href = `mailto:${SITE.emails.general}?subject=Newsletter Subscription&body=Please subscribe ${email} to the GCLT newsletter.`;
    setDismissed(true);
  };

  return (
    <div className="newsletter-banner-enter fixed bottom-20 left-0 right-0 z-[9998] border-t border-border bg-white p-4 shadow-2xl md:bottom-6 md:left-auto md:right-24 md:max-w-sm md:rounded-card md:border">
      <button
        onClick={() => setDismissed(true)}
        className="absolute right-3 top-3 text-[var(--color-text-light)] hover:text-dark"
        aria-label="Dismiss newsletter banner"
      >
        <X className="h-4 w-4" />
      </button>
      <p className="mb-3 pr-6 text-sm font-semibold text-primary">Stay updated with GCLT</p>
      <form onSubmit={handleSubmit} className="flex gap-2">
        <input
          type="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          placeholder="Your email"
          required
          className="flex-1 rounded-input border border-border px-3 py-2 text-sm focus:border-primary focus:outline-none"
        />
        <button type="submit" className="btn-accent shrink-0 px-4 py-2 text-sm">
          Subscribe
        </button>
      </form>
    </div>
  );
}
