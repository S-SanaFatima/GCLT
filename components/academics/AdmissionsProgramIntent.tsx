'use client';

import Link from 'next/link';
import DeliveryModeSelector from './DeliveryModeSelector';
import ProgramApplyButton from './ProgramApplyButton';
import { ProgramEnrollmentProvider, useProgramEnrollment } from './ProgramEnrollmentContext';
import { deliveryModeLabels, isDeliveryMode } from '@/lib/deliveryMode';
import { getProgramBySlug, type Program } from '@/lib/data/programs';
import DeliveryModeBadge from './DeliveryModeBadge';

interface AdmissionsProgramIntentProps {
  programSlug?: string;
  delivery?: string;
}

function AdmissionsIntentContent({ program }: { program: Program }) {
  const { selectedDelivery } = useProgramEnrollment();

  return (
    <div className="mb-10 rounded-card border border-accent/30 bg-accent/5 p-6">
      <p className="text-sm font-semibold uppercase tracking-wide text-accent">Your application</p>
      <h2 className="mt-2 text-xl font-bold text-primary">{program.title}</h2>
      <p className="mt-2 text-sm text-[var(--color-text-light)]">
        Confirm your preferred delivery mode before submitting your application.
      </p>
      <div className="mt-4">
        <DeliveryModeSelector compact />
      </div>
      <p className="mt-4 text-sm text-[var(--color-text-light)]">
        Selected format:{' '}
        <DeliveryModeBadge mode={selectedDelivery} size="md" className="ml-1 align-middle" />
        <span className="ml-2">({deliveryModeLabels[selectedDelivery]})</span>
      </p>
      <div className="mt-6 max-w-sm">
        <ProgramApplyButton tone="light" />
      </div>
      <Link
        href={`/academics/programmes/${program.slug}`}
        className="mt-4 inline-block text-sm font-medium text-primary hover:text-accent"
      >
        Back to programme details
      </Link>
    </div>
  );
}

export default function AdmissionsProgramIntent({
  programSlug,
  delivery,
}: AdmissionsProgramIntentProps) {
  const program = programSlug ? getProgramBySlug(programSlug) : undefined;
  const initialDelivery = delivery && isDeliveryMode(delivery) ? delivery : undefined;

  if (!program) return null;

  return (
    <ProgramEnrollmentProvider program={program} initialDelivery={initialDelivery}>
      <AdmissionsIntentContent program={program} />
    </ProgramEnrollmentProvider>
  );
}
