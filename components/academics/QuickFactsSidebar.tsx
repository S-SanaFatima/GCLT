'use client';

import { deliveryModeLabels } from '@/lib/deliveryMode';
import { formatFeeTier, getFeeForDelivery } from '@/lib/data/programs';
import { useProgramEnrollment } from './ProgramEnrollmentContext';
import ProgramEnrolmentCTA from './ProgramEnrolmentCTA';
import DeliveryModeBadge from './DeliveryModeBadge';
import DeliveryModeSelector from './DeliveryModeSelector';
import ProgramStatusBadge from './ProgramStatusBadge';

export default function QuickFactsSidebar() {
  const { program, selectedDelivery } = useProgramEnrollment();

  const facts = [
    { label: 'Qualification', value: program.quickFacts.qualification },
    { label: 'Schedule', value: program.schedule },
    { label: 'Duration (Onsite)', value: program.durationOnsite },
    { label: 'Duration (Online)', value: program.durationOnline },
    { label: 'Certificate by', value: program.quickFacts.certificateBy },
    { label: 'Location', value: program.quickFacts.location },
  ];

  return (
    <aside className="lg:sticky lg:top-28">
      <div className="card overflow-hidden bg-primary text-white">
        <div className="bg-primary-dark px-6 py-4">
          <div className="flex items-center justify-between gap-3">
            <h3 className="text-lg font-semibold text-white">Quick Facts</h3>
            <ProgramStatusBadge status={program.status} variant="dark" />
          </div>
        </div>
        <dl className="divide-y divide-white/10">
          {program.status !== 'future' && (
            <div className="px-6 py-4">
              <dt className="text-xs uppercase tracking-wide text-gray-300">Your delivery choice</dt>
              <dd className="mt-2 space-y-3">
                <DeliveryModeBadge mode={selectedDelivery} size="md" />
                <p className="text-xs text-gray-300">
                  {deliveryModeLabels[selectedDelivery]} · {getFeeForDelivery(program, selectedDelivery)}
                </p>
                <DeliveryModeSelector compact />
              </dd>
            </div>
          )}
          <div className="px-6 py-3">
            <dt className="text-xs uppercase tracking-wide text-gray-300">Fee — Onsite</dt>
            <dd className="mt-1 text-sm font-medium">{formatFeeTier(program.fees.onsite)}</dd>
          </div>
          <div className="px-6 py-3">
            <dt className="text-xs uppercase tracking-wide text-gray-300">Fee — Online</dt>
            <dd className="mt-1 text-sm font-medium">{formatFeeTier(program.fees.online)}</dd>
          </div>
          {program.fees.note && (
            <div className="px-6 py-3">
              <dt className="text-xs uppercase tracking-wide text-gray-300">Fee note</dt>
              <dd className="mt-1 text-sm font-medium">{program.fees.note}</dd>
            </div>
          )}
          {facts.map(({ label, value }) => (
            <div key={label} className="px-6 py-3">
              <dt className="text-xs uppercase tracking-wide text-gray-300">{label}</dt>
              <dd className="mt-1 text-sm font-medium">{value}</dd>
            </div>
          ))}
        </dl>
        <div className="p-6">
          <ProgramEnrolmentCTA />
        </div>
      </div>
    </aside>
  );
}
