import Image from 'next/image';
import Link from 'next/link';
import type { EventOrganizer } from '@/lib/data/events';

interface EventOrganizersProps {
  organizers: EventOrganizer[];
}

export default function EventOrganizers({ organizers }: EventOrganizersProps) {
  if (!organizers.length) return null;

  return (
    <section className="mt-10">
      <h3 className="mb-4 text-xl font-bold text-primary">Organizers</h3>
      <div className="grid gap-4 sm:grid-cols-2">
        {organizers.map((person) => {
          const card = (
            <div className="flex gap-4 rounded-xl border border-border/70 bg-[#f8fafc] p-4 shadow-card transition-all hover:border-primary/20 hover:shadow-elevated">
              <div className="relative h-24 w-20 shrink-0 overflow-hidden rounded-lg bg-[#e8ecf2] sm:h-28 sm:w-24">
                {person.photo ? (
                  <Image
                    src={person.photo}
                    alt={person.name}
                    fill
                    unoptimized={person.photo.endsWith('.png')}
                    className="object-cover object-[center_15%]"
                    sizes="96px"
                  />
                ) : (
                  <div className="flex h-full w-full items-center justify-center text-sm font-semibold text-mid-gray">
                    {person.name
                      .split(' ')
                      .filter(Boolean)
                      .slice(-2)
                      .map((part) => part[0])
                      .join('')}
                  </div>
                )}
              </div>
              <div className="flex min-w-0 flex-1 flex-col justify-center">
                <p className="text-[15px] font-bold leading-snug text-primary sm:text-base">
                  {person.name}
                </p>
                <p className="mt-1 text-xs font-semibold leading-snug text-accent sm:text-[13px]">
                  {person.role}
                </p>
                {person.affiliation && (
                  <p className="mt-1.5 text-[11px] leading-relaxed text-[var(--color-text-light)] sm:text-xs">
                    {person.affiliation}
                  </p>
                )}
              </div>
            </div>
          );

          if (person.href) {
            return (
              <Link key={person.name} href={person.href} className="group block">
                {card}
              </Link>
            );
          }

          return <div key={person.name}>{card}</div>;
        })}
      </div>
    </section>
  );
}
