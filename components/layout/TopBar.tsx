import { Mail, Phone, Sparkles } from 'lucide-react';
import { SITE } from '@/lib/utils';

export default function TopBar() {
  return (
    <div className="hidden bg-gradient-to-r from-primary-dark via-primary to-primary-dark text-sm text-white md:block">
      <div className="container-gclt flex items-center justify-between py-2.5">
        <div className="flex items-center gap-6">
          <a
            href={`mailto:${SITE.emails.general}`}
            className="flex items-center gap-2 transition-colors hover:text-accent"
          >
            <Mail className="h-3.5 w-3.5" />
            {SITE.emails.general}
          </a>
          <a
            href={`tel:${SITE.phoneRaw}`}
            className="flex items-center gap-2 transition-colors hover:text-accent"
          >
            <Phone className="h-3.5 w-3.5" />
            {SITE.phone}
          </a>
        </div>
        <p className="flex items-center gap-2 text-gray-300">
          <Sparkles className="h-3.5 w-3.5 text-accent" />
          Bridging Tradition, Technology & Leadership
        </p>
      </div>
    </div>
  );
}
