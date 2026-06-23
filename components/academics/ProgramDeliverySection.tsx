'use client';

import { Clock, MapPin } from 'lucide-react';
import DeliveryModeSelector from './DeliveryModeSelector';
import { useProgramEnrollment } from './ProgramEnrollmentContext';

export default function ProgramDeliverySection() {
  const { program } = useProgramEnrollment();

  if (program.status === 'future') return null;

  return (
    <div className="border-b border-border bg-[#f8fafc]">
      <div className="container-gclt py-6">
        <div className="mb-4 flex flex-wrap items-end justify-between gap-3">
          <div>
            <h2 className="text-lg font-semibold text-primary">Choose your delivery mode</h2>
            <p className="mt-1 text-sm text-[var(--color-text-light)]">
              Weekend &amp; evening schedules · Onsite &amp; online options available.
            </p>
          </div>
          <div className="flex flex-wrap items-center gap-x-5 gap-y-2 text-sm text-[var(--color-text-light)]">
            <span className="inline-flex items-center gap-2">
              <Clock className="h-4 w-4 shrink-0" aria-hidden />
              {program.schedule} · {program.durationOnsite}
            </span>
            <span className="inline-flex items-center gap-2">
              <MapPin className="h-4 w-4 shrink-0" aria-hidden />
              {program.quickFacts.location}
            </span>
          </div>
        </div>
        <DeliveryModeSelector />
      </div>
    </div>
  );
}
