'use client';

import { Building2, Layers, Monitor } from 'lucide-react';
import {
  deliveryModeDescriptions,
  deliveryModeLabels,
  deliveryModeStyles,
  type DeliveryMode,
} from '@/lib/deliveryMode';
import { useProgramEnrollment } from './ProgramEnrollmentContext';

const icons = {
  online: Monitor,
  'in-person': Building2,
  hybrid: Layers,
} as const;

interface DeliveryModeSelectorProps {
  compact?: boolean;
}

export default function DeliveryModeSelector({ compact = false }: DeliveryModeSelectorProps) {
  const { program, selectedDelivery, setSelectedDelivery } = useProgramEnrollment();

  return (
    <fieldset className={compact ? 'space-y-2' : 'space-y-3'}>
      <legend className="sr-only">Choose your preferred mode of delivery</legend>
      <div
        className={
          compact
            ? 'flex flex-wrap gap-2'
            : 'grid gap-3 sm:grid-cols-3'
        }
      >
        {program.deliveryOptions.map((mode) => {
          const Icon = icons[mode];
          const isSelected = selectedDelivery === mode;
          const styles = deliveryModeStyles[mode];

          if (compact) {
            return (
              <button
                key={mode}
                type="button"
                onClick={() => setSelectedDelivery(mode)}
                aria-pressed={isSelected}
                className={`inline-flex items-center gap-1.5 rounded-full border px-3 py-1.5 text-xs font-semibold transition-all ${
                  isSelected
                    ? `${styles.badge} ring-2 ring-primary ring-offset-1`
                    : 'border-border bg-white text-[var(--color-text-light)] hover:border-primary/30'
                }`}
              >
                <Icon className="h-3.5 w-3.5" aria-hidden />
                {deliveryModeLabels[mode]}
              </button>
            );
          }

          return (
            <button
              key={mode}
              type="button"
              onClick={() => setSelectedDelivery(mode)}
              aria-pressed={isSelected}
              className={`rounded-xl border p-4 text-left transition-all ${
                isSelected
                  ? `${styles.badge} border-current ring-2 ring-primary ring-offset-2`
                  : 'border-border bg-white hover:border-primary/25 hover:shadow-card'
              }`}
            >
              <div className="mb-2 flex items-center gap-2">
                <Icon className="h-5 w-5" aria-hidden />
                <span className="font-semibold">{deliveryModeLabels[mode]}</span>
              </div>
              <p className="text-xs leading-relaxed opacity-90">
                {deliveryModeDescriptions[mode]}
              </p>
            </button>
          );
        })}
      </div>
    </fieldset>
  );
}
