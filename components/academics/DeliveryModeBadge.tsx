import { Building2, Layers, Monitor } from 'lucide-react';
import {
  deliveryModeLabels,
  deliveryModeStyles,
  parseDeliveryMode,
} from '@/lib/deliveryMode';

interface DeliveryModeBadgeProps {
  mode: string;
  size?: 'sm' | 'md';
  className?: string;
}

const icons = {
  online: Monitor,
  'in-person': Building2,
  hybrid: Layers,
} as const;

export default function DeliveryModeBadge({
  mode,
  size = 'sm',
  className = '',
}: DeliveryModeBadgeProps) {
  const deliveryMode = parseDeliveryMode(mode);
  const Icon = icons[deliveryMode];
  const styles = deliveryModeStyles[deliveryMode];
  const label = deliveryModeLabels[deliveryMode];

  return (
    <span
      className={`inline-flex items-center gap-1.5 rounded-full border font-semibold ${styles.badge} ${
        size === 'md' ? 'px-3.5 py-1.5 text-sm' : 'px-2.5 py-1 text-xs'
      } ${className}`}
    >
      <Icon className={size === 'md' ? 'h-4 w-4' : 'h-3.5 w-3.5'} aria-hidden />
      {label}
    </span>
  );
}
