'use client';

import { useEffect } from 'react';

interface ClientRedirectProps {
  to: string;
}

export default function ClientRedirect({ to }: ClientRedirectProps) {
  useEffect(() => {
    window.location.replace(to);
  }, [to]);

  return (
    <p className="py-20 text-center text-[var(--color-text-light)]">
      Redirecting…
    </p>
  );
}
