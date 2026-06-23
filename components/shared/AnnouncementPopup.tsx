'use client';

import { useCallback, useEffect, useState } from 'react';
import Link from 'next/link';
import { X } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';

const POPUP_KEY = 'gclt_popup_seen';
const EXPIRY_DAYS = 7;
const NEWS_SLUG = '/updates/gclt-transition-global-centre-learning-training';

export default function AnnouncementPopup() {
  const [visible, setVisible] = useState(false);

  const close = useCallback(() => {
    setVisible(false);
    const expiry = Date.now() + EXPIRY_DAYS * 24 * 60 * 60 * 1000;
    localStorage.setItem(POPUP_KEY, expiry.toString());
  }, []);

  useEffect(() => {
    const stored = localStorage.getItem(POPUP_KEY);
    if (stored) {
      const expiry = parseInt(stored, 10);
      if (Date.now() < expiry) return;
    }

    const timer = setTimeout(() => setVisible(true), 2000);
    return () => clearTimeout(timer);
  }, []);

  useEffect(() => {
    if (!visible) return;

    const onKeyDown = (event: KeyboardEvent) => {
      if (event.key === 'Escape') close();
    };

    document.body.style.overflow = 'hidden';
    window.addEventListener('keydown', onKeyDown);

    return () => {
      document.body.style.overflow = '';
      window.removeEventListener('keydown', onKeyDown);
    };
  }, [visible, close]);

  return (
    <AnimatePresence>
      {visible && (
        <div className="fixed inset-0 z-[10000] flex items-center justify-center p-4">
          <motion.button
            type="button"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.2 }}
            className="absolute inset-0 bg-black/40 backdrop-blur-[2px]"
            onClick={close}
            aria-label="Dismiss announcement"
          />

          <motion.div
            role="dialog"
            aria-modal="true"
            aria-labelledby="announcement-title"
            initial={{ opacity: 0, scale: 0.96, y: 8 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.98, y: 4 }}
            transition={{ duration: 0.25 }}
            className="relative w-full max-w-sm rounded-2xl border border-border/80 bg-white p-6 text-center shadow-elevated"
          >
            <button
              type="button"
              onClick={close}
              className="absolute right-3 top-3 text-[var(--color-text-light)] transition-colors hover:text-primary"
              aria-label="Close announcement"
            >
              <X className="h-4 w-4" />
            </button>

            <p className="text-[11px] font-semibold uppercase tracking-[0.16em] text-accent">
              Notice
            </p>
            <p
              id="announcement-title"
              className="mt-3 text-base font-semibold leading-snug text-primary"
            >
              GCLT is now the Global Centre for Learning &amp; Training.
            </p>

            <div className="mt-5 flex items-center justify-center gap-4 text-sm">
              <Link
                href={NEWS_SLUG}
                onClick={close}
                className="font-semibold text-accent hover:text-accent-dark"
              >
                Read more
              </Link>
              <span className="text-border">|</span>
              <button
                type="button"
                onClick={close}
                className="font-medium text-[var(--color-text-light)] hover:text-primary"
              >
                Close
              </button>
            </div>
          </motion.div>
        </div>
      )}
    </AnimatePresence>
  );
}
