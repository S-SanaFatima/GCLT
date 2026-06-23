import type { ProgramStatus } from '@/lib/data/programs';
import { getStatusLabel } from '@/lib/data/programs';

const statusConfig: Record<
  ProgramStatus,
  { dot: string; ping?: string; bar: string }
> = {
  live: {
    dot: 'bg-emerald-500',
    ping: 'bg-emerald-400',
    bar: 'bg-emerald-500',
  },
  'launching-soon': {
    dot: 'bg-primary',
    bar: 'bg-primary',
  },
  future: {
    dot: 'bg-[var(--color-mid-gray)]',
    bar: 'bg-[var(--color-mid-gray)]',
  },
};

interface ProgramStatusBadgeProps {
  status: ProgramStatus;
  variant?: 'light' | 'dark';
  showDot?: boolean;
}

export function getStatusAccentBar(status: ProgramStatus): string {
  return statusConfig[status].bar;
}

export default function ProgramStatusBadge({
  status,
  variant = 'light',
  showDot = true,
}: ProgramStatusBadgeProps) {
  const config = statusConfig[status];
  const label = getStatusLabel(status);

  const shellClass =
    variant === 'dark'
      ? 'border-white/15 bg-white/10 text-white'
      : 'border-border/70 bg-white text-[var(--color-text)] shadow-sm';

  return (
    <span
      className={`inline-flex items-center gap-2 whitespace-nowrap rounded-lg border px-3 py-1.5 text-xs font-medium leading-none ${shellClass}`}
    >
      {showDot && (
        <span className="relative flex h-2 w-2 shrink-0">
          {status === 'live' && config.ping && (
            <span
              className={`absolute inline-flex h-full w-full animate-ping rounded-full opacity-50 ${config.ping}`}
            />
          )}
          <span className={`relative inline-flex h-2 w-2 rounded-full ${config.dot}`} />
        </span>
      )}
      {label}
    </span>
  );
}
