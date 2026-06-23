export interface Job {
  slug: string;
  title: string;
  department: string;
  location: string;
  type: 'Full-time' | 'Part-time' | 'Contract';
  description: string;
  responsibilities: string[];
  requirements: string[];
  howToApply: string[];
  deadline?: string;
}

export const jobs: Job[] = [];

export function getJobBySlug(slug: string): Job | undefined {
  return jobs.find((j) => j.slug === slug);
}
