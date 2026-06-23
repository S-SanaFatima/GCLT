'use client';

import { useState } from 'react';
import PageHero from '@/components/shared/PageHero';
import { SITE } from '@/lib/utils';

export default function NewsletterForm() {
  const [email, setEmail] = useState('');

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    window.location.href = `mailto:${SITE.emails.general}?subject=Newsletter Subscription&body=Please subscribe ${email} to the GCLT newsletter.`;
  };

  return (
    <>
      <PageHero
        title="Newsletter Signup"
        subtitle="Receive the latest news, events, and research from GCLT."
        breadcrumbs={[
          { label: 'Home', href: '/' },
          { label: 'Updates', href: '/updates' },
          { label: 'Newsletter' },
        ]}
      />
      <section className="section-padding bg-white">
        <div className="container-gclt max-w-md">
          <form onSubmit={handleSubmit} className="card p-8">
            <label htmlFor="email" className="mb-2 block text-sm font-medium text-primary">
              Email Address
            </label>
            <input
              id="email"
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
              placeholder="you@example.com"
              className="mb-4 w-full rounded-input border border-border px-4 py-3 text-sm focus:border-primary focus:outline-none"
            />
            <button type="submit" className="btn-primary w-full">
              Subscribe to Newsletter
            </button>
          </form>
        </div>
      </section>
    </>
  );
}
