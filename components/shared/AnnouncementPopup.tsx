'use client';

import { useCallback, useEffect, useState } from 'react';
import Link from 'next/link';
import { X } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';

const NEWS_SLUG = '/updates/gclt-transition-global-centre-learning-training';
const BANNER_SRC = '/images/announcement/official-announcement.png';

export default function AnnouncementPopup() {
  const [visible, setVisible] = useState(true);

  const close = useCallback(() => {
    setVisible(false);
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
        <div className="fixed inset-0 z-[10000] flex items-center justify-center p-3 sm:p-6">
          <motion.button
            type="button"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.2 }}
            className="absolute inset-0 bg-slate-950/70 backdrop-blur-sm"
            onClick={close}
            aria-label="Dismiss announcement"
          />

          <motion.div
            role="dialog"
            aria-modal="true"
            aria-label="Official Announcement"
            initial={{ opacity: 0, scale: 0.97, y: 12 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.98, y: 6 }}
            transition={{ duration: 0.3, ease: [0.22, 1, 0.36, 1] }}
            className="relative w-auto max-w-[min(92vw,420px)]"
          >
            <button
              type="button"
              onClick={close}
              className="absolute -right-2 -top-2 z-10 flex h-9 w-9 items-center justify-center rounded-full border border-white/20 bg-slate-900/90 text-white shadow-lg transition-colors hover:bg-primary"
              aria-label="Close announcement"
            >
              <X className="h-5 w-5" />
            </button>

            <Link href={NEWS_SLUG} onClick={close} className="block overflow-hidden rounded-xl shadow-elevated">
              {/* Native img so the original PNG is used (no Next optimizer downscale → blur on zoom) */}
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img
                src={BANNER_SRC}
                alt="Official Announcement: GCLT is transitioning to Global Centre for Learning & Training"
                width={636}
                height={900}
                className="h-auto max-h-[min(85vh,720px)] w-full object-contain"
                draggable={false}
              />
            </Link>
          </motion.div>
        </div>
      )}
    </AnimatePresence>
  );
}
