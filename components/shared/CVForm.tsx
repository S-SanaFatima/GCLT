'use client';

import { useState } from 'react';
import { SITE } from '@/lib/utils';

interface CVFormProps {
  title?: string;
  description?: string;
}

export default function CVForm({
  title = 'Send Us Your CV',
  description = 'No suitable opening right now? Submit your CV for future opportunities.',
}: CVFormProps) {
  const [form, setForm] = useState({ name: '', email: '', phone: '', message: '' });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const body = [
      `Name: ${form.name}`,
      `Email: ${form.email}`,
      `Phone: ${form.phone}`,
      '',
      form.message,
      '',
      '(Please attach your CV to this email before sending.)',
    ].join('\n');
    window.location.href = `mailto:${SITE.emails.careers}?subject=${encodeURIComponent('Speculative CV Submission — ' + form.name)}&body=${encodeURIComponent(body)}`;
  };

  return (
    <form onSubmit={handleSubmit} className="card p-6 md:p-8">
      <h3 className="mb-2 text-primary">{title}</h3>
      <p className="mb-6 text-sm text-[var(--color-text-light)]">{description}</p>
      <div className="grid gap-4 sm:grid-cols-2">
        <div>
          <label htmlFor="cv-name" className="mb-1 block text-sm font-medium">Full Name</label>
          <input
            id="cv-name"
            type="text"
            required
            value={form.name}
            onChange={(e) => setForm({ ...form, name: e.target.value })}
            className="w-full rounded-input border border-border px-4 py-3 text-sm focus:border-primary focus:outline-none"
          />
        </div>
        <div>
          <label htmlFor="cv-email" className="mb-1 block text-sm font-medium">Email</label>
          <input
            id="cv-email"
            type="email"
            required
            value={form.email}
            onChange={(e) => setForm({ ...form, email: e.target.value })}
            className="w-full rounded-input border border-border px-4 py-3 text-sm focus:border-primary focus:outline-none"
          />
        </div>
        <div className="sm:col-span-2">
          <label htmlFor="cv-phone" className="mb-1 block text-sm font-medium">Phone / WhatsApp</label>
          <input
            id="cv-phone"
            type="tel"
            value={form.phone}
            onChange={(e) => setForm({ ...form, phone: e.target.value })}
            className="w-full rounded-input border border-border px-4 py-3 text-sm focus:border-primary focus:outline-none"
          />
        </div>
        <div className="sm:col-span-2">
          <label htmlFor="cv-message" className="mb-1 block text-sm font-medium">Cover Note</label>
          <textarea
            id="cv-message"
            rows={4}
            value={form.message}
            onChange={(e) => setForm({ ...form, message: e.target.value })}
            placeholder="Brief summary of your experience and areas of interest..."
            className="w-full rounded-input border border-border px-4 py-3 text-sm focus:border-primary focus:outline-none"
          />
        </div>
      </div>
      <p className="mt-3 text-xs text-[var(--color-text-light)]">
        Submitting opens your email client — please attach your CV (PDF) before sending to {SITE.emails.careers}.
      </p>
      <button type="submit" className="btn-primary mt-4">Send Your CV</button>
    </form>
  );
}
