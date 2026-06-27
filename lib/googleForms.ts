export type GoogleFormKey =
  | 'admissions'
  | 'careers'
  | 'cv'
  | 'research'
  | 'internship'
  | 'event'
  | 'interest';

interface GoogleFormConfig {
  formId: string;
  entries: Record<string, string>;
}

const FORM_ENV: Record<GoogleFormKey, { id: string; entryPrefix: string }> = {
  admissions: { id: 'NEXT_PUBLIC_GF_ADMISSIONS_ID', entryPrefix: 'NEXT_PUBLIC_GF_ADMISSIONS_ENTRY_' },
  careers: { id: 'NEXT_PUBLIC_GF_CAREERS_ID', entryPrefix: 'NEXT_PUBLIC_GF_CAREERS_ENTRY_' },
  cv: { id: 'NEXT_PUBLIC_GF_CV_ID', entryPrefix: 'NEXT_PUBLIC_GF_CV_ENTRY_' },
  research: { id: 'NEXT_PUBLIC_GF_RESEARCH_ID', entryPrefix: 'NEXT_PUBLIC_GF_RESEARCH_ENTRY_' },
  internship: { id: 'NEXT_PUBLIC_GF_INTERNSHIP_ID', entryPrefix: 'NEXT_PUBLIC_GF_INTERNSHIP_ENTRY_' },
  event: { id: 'NEXT_PUBLIC_GF_EVENT_ID', entryPrefix: 'NEXT_PUBLIC_GF_EVENT_ENTRY_' },
  interest: { id: 'NEXT_PUBLIC_GF_INTEREST_ID', entryPrefix: 'NEXT_PUBLIC_GF_INTEREST_ENTRY_' },
};

/** Known prefill field names per form — map to env vars like NEXT_PUBLIC_GF_ADMISSIONS_ENTRY_PROGRAM */
export const FORM_PREFILL_FIELDS: Record<GoogleFormKey, string[]> = {
  admissions: ['program', 'delivery', 'name', 'email'],
  careers: ['position', 'name', 'email'],
  cv: ['name', 'email'],
  research: ['journal', 'title', 'name', 'email'],
  internship: ['program', 'name', 'email'],
  event: ['event', 'name', 'email'],
  interest: ['program', 'delivery', 'name', 'email'],
};

function getFormConfig(key: GoogleFormKey): GoogleFormConfig {
  const { id: idKey, entryPrefix } = FORM_ENV[key];
  const formId = process.env[idKey] ?? '';

  const entries: Record<string, string> = {};
  for (const field of FORM_PREFILL_FIELDS[key]) {
    const envKey = `${entryPrefix}${field.toUpperCase()}`;
    const entryId = process.env[envKey];
    if (entryId) entries[field] = entryId;
  }

  return { formId, entries };
}

export function isGoogleFormConfigured(key: GoogleFormKey): boolean {
  return Boolean(getFormConfig(key).formId);
}

export function buildGoogleFormUrl(
  key: GoogleFormKey,
  prefill?: Record<string, string>,
): string | null {
  const { formId, entries } = getFormConfig(key);
  if (!formId) return null;

  const params = new URLSearchParams();
  params.set('usp', 'pp_url');

  if (prefill) {
    for (const [field, value] of Object.entries(prefill)) {
      const entryId = entries[field];
      if (entryId && value.trim()) {
        params.set(`entry.${entryId}`, value.trim());
      }
    }
  }

  const qs = params.toString();
  return `https://docs.google.com/forms/d/e/${formId}/viewform${qs ? `?${qs}` : ''}`;
}

export function buildGoogleFormEmbedUrl(
  key: GoogleFormKey,
  prefill?: Record<string, string>,
): string | null {
  const url = buildGoogleFormUrl(key, prefill);
  if (!url) return null;

  const embed = new URL(url);
  embed.searchParams.set('embedded', 'true');
  return embed.toString();
}
