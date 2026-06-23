import Image from 'next/image';
import { cn } from '@/lib/utils';

interface LogoProps {
  variant?: 'default' | 'footer';
  className?: string;
  priority?: boolean;
}

export default function Logo({ variant = 'default', className, priority = false }: LogoProps) {
  const isFooter = variant === 'footer';

  return (
    <div
      className={cn(
        'relative flex shrink-0 items-center',
        isFooter ? 'rounded-lg bg-primary-dark/40 p-2' : '',
        className
      )}
    >
      <Image
        src="/images/logo/gclt-logo.png"
        alt="Global Centre for Learning & Training"
        width={280}
        height={72}
        priority={priority}
        className={cn(
          'h-auto w-auto object-contain mix-blend-screen',
          isFooter ? 'max-h-12' : 'max-h-11 sm:max-h-12 md:max-h-14'
        )}
      />
    </div>
  );
}
