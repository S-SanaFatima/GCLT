import DeliveryModeBadge from './DeliveryModeBadge';
import type { DeliveryMode } from '@/lib/deliveryMode';

interface DeliveryModesListProps {
  modes: DeliveryMode[];
  size?: 'sm' | 'md';
}

export default function DeliveryModesList({ modes, size = 'sm' }: DeliveryModesListProps) {
  return (
    <div className="flex flex-wrap justify-end gap-1.5">
      {modes.map((mode) => (
        <DeliveryModeBadge key={mode} mode={mode} size={size} />
      ))}
    </div>
  );
}
