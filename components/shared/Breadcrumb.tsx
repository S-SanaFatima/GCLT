import Link from 'next/link';
import { ChevronRight, Home } from 'lucide-react';

interface BreadcrumbItem {
  label: string;
  href?: string;
}

interface BreadcrumbProps {
  items: BreadcrumbItem[];
  /** Use on light page backgrounds (e.g. contact form layout) */
  onLight?: boolean;
}

export default function Breadcrumb({ items, onLight = false }: BreadcrumbProps) {
  const sep = onLight ? 'text-mid-gray/50' : 'text-white/40';
  const link = onLight
    ? 'text-mid-gray transition-colors hover:text-primary'
    : 'text-white/60 transition-colors hover:text-accent';
  const current = onLight ? 'font-medium text-primary' : 'font-medium text-accent';

  return (
    <nav aria-label="Breadcrumb" className="mb-6">
      <ol className="flex flex-wrap items-center gap-1.5 text-sm">
        {items.map((item, index) => (
          <li key={`${item.label}-${index}`} className="flex items-center gap-1.5">
            {index > 0 && <ChevronRight className={`h-3.5 w-3.5 ${sep}`} />}
            {index === 0 && item.href ? (
              <Link href={item.href} className={`flex items-center gap-1 ${link}`}>
                <Home className="h-3.5 w-3.5" />
              </Link>
            ) : item.href ? (
              <Link href={item.href} className={link}>
                {item.label}
              </Link>
            ) : (
              <span className={current}>{item.label}</span>
            )}
          </li>
        ))}
      </ol>
    </nav>
  );
}
