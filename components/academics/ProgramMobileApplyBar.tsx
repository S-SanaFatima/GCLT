'use client';

import { deliveryModeLabels } from '@/lib/deliveryMode';
import { getFeeForDelivery } from '@/lib/data/programs';
import { useProgramEnrollment } from './ProgramEnrollmentContext';
import ProgramEnrolmentCTA from './ProgramEnrolmentCTA';

export default function ProgramMobileApplyBar() {
  const { program, selectedDelivery } = useProgramEnrollment();

  if (program.status === 'future') return null;

  return (
    <div className="fixed bottom-0 left-0 right-0 z-40 border-t border-border bg-white p-4 shadow-lg lg:hidden">
      {program.status === 'live' && (
        <p className="mb-2 text-center text-xs text-[var(--color-text-light)]">
          {deliveryModeLabels[selectedDelivery]} · {getFeeForDelivery(program, selectedDelivery)}
        </p>
      )}
      <ProgramEnrolmentCTA />
    </div>
  );
}
