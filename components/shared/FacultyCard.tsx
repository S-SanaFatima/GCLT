import Link from 'next/link';
import Image from 'next/image';
import { ChevronRight } from 'lucide-react';
import type { FacultyMember } from '@/lib/data/faculty';

interface FacultyCardProps {
  member: FacultyMember;
}

export default function FacultyCard({ member }: FacultyCardProps) {
  return (
    <Link
      href={`/about/team/${member.slug}`}
      className="group flex gap-4 rounded-xl border border-border/70 bg-white p-3.5 shadow-card transition-all hover:border-primary/25 hover:shadow-elevated sm:gap-5 sm:p-4"
    >
      <div className="relative h-[6.75rem] w-[5.5rem] shrink-0 overflow-hidden rounded-lg bg-[#e8ecf2] sm:h-[7.5rem] sm:w-24">
        <Image
          src={member.photo || '/images/faculty/placeholder.svg'}
          alt={member.name}
          fill
          unoptimized={!!member.photo?.endsWith('.png')}
          className="object-cover object-[center_12%]"
          sizes="96px"
        />
      </div>

      <div className="flex min-w-0 flex-1 flex-col justify-center">
        <h3 className="text-[15px] font-bold leading-snug text-primary transition-colors group-hover:text-accent sm:text-base">
          {member.name}
        </h3>
        {member.designation && (
          <p className="mt-1 text-xs font-semibold leading-snug text-accent sm:text-[13px]">
            {member.designation}
          </p>
        )}
        {member.researchUnit && (
          <p className="mt-0.5 line-clamp-1 text-[11px] font-medium text-primary/75 sm:text-xs">
            {member.researchUnit}
          </p>
        )}
        {member.affiliation && (
          <p className="mt-1.5 line-clamp-2 text-[11px] leading-relaxed text-[var(--color-text-light)] sm:text-xs">
            {member.affiliation}
          </p>
        )}
      </div>

      <ChevronRight className="mt-1 h-4 w-4 shrink-0 self-center text-mid-gray/50 transition-all group-hover:translate-x-0.5 group-hover:text-accent" />
    </Link>
  );
}
