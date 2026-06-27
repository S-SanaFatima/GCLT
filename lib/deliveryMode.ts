import { buildGoogleFormUrl } from './googleForms';

export type DeliveryMode = 'online' | 'in-person' | 'hybrid';

export const ALL_DELIVERY_MODES: DeliveryMode[] = ['online', 'in-person', 'hybrid'];

export function parseDeliveryMode(value: string): DeliveryMode {
  const lower = value.toLowerCase();

  if (lower.includes('hybrid')) return 'hybrid';
  if (lower.includes('in-person') || lower.includes('in person') || lower.includes('on-site') || lower.includes('onsite')) {
    return 'in-person';
  }
  if (lower.includes('online')) return 'online';

  return 'online';
}

export const deliveryModeLabels: Record<DeliveryMode, string> = {
  online: 'Online',
  'in-person': 'In-Person',
  hybrid: 'Hybrid',
};

export const deliveryModeDescriptions: Record<DeliveryMode, string> = {
  online: 'Attend live sessions and access materials fully online.',
  'in-person': 'Join on-campus classes at our Islamabad centre.',
  hybrid: 'Combine online learning with scheduled in-person sessions.',
};

export function formatDeliveryOptions(modes: DeliveryMode[]): string {
  return modes.map((mode) => deliveryModeLabels[mode]).join(' · ');
}

export function isDeliveryMode(value: string): value is DeliveryMode {
  return ALL_DELIVERY_MODES.includes(value as DeliveryMode);
}

export function buildProgramApplyUrl(programSlug: string, delivery: DeliveryMode): string {
  return `/academics/admissions?program=${programSlug}&delivery=${delivery}`;
}

export function buildProgramApplyMailto(
  programTitle: string,
  delivery: DeliveryMode,
  email: string,
): string {
  const subject = encodeURIComponent(
    `Application: ${programTitle} (${deliveryModeLabels[delivery]})`,
  );
  const body = encodeURIComponent(
    `I would like to apply for ${programTitle}.\n\nPreferred mode of delivery: ${deliveryModeLabels[delivery]}\n\n`,
  );

  return `mailto:${email}?subject=${subject}&body=${body}`;
}

export function buildProgramApplyGoogleFormUrl(
  programTitle: string,
  delivery: DeliveryMode,
): string | null {
  return buildGoogleFormUrl('admissions', {
    program: programTitle,
    delivery: deliveryModeLabels[delivery],
  });
}

export function buildProgramInterestGoogleFormUrl(
  programTitle: string,
  delivery: DeliveryMode,
): string | null {
  return buildGoogleFormUrl('interest', {
    program: programTitle,
    delivery: deliveryModeLabels[delivery],
  });
}

export const deliveryModeStyles: Record<
  DeliveryMode,
  { badge: string; dot: string }
> = {
  online: {
    badge: 'border-sky-200 bg-sky-50 text-sky-800',
    dot: 'bg-sky-500',
  },
  'in-person': {
    badge: 'border-emerald-200 bg-emerald-50 text-emerald-800',
    dot: 'bg-emerald-500',
  },
  hybrid: {
    badge: 'border-violet-200 bg-violet-50 text-violet-800',
    dot: 'bg-violet-500',
  },
};
