'use client';

import { usePathname } from 'next/navigation';
import { getThemeFromPath, pageThemeStyles, type PageTheme } from '@/lib/pageThemes';

export default function PageThemeWrapper({ children }: { children: React.ReactNode }) {
  const pathname = usePathname();
  if (pathname === '/') return <>{children}</>;
  const theme = getThemeFromPath(pathname);
  return <div className={`min-h-[50vh] ${pageThemeStyles[theme].content}`}>{children}</div>;
}
