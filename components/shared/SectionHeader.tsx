interface SectionHeaderProps {
  title: string;
  subtitle?: string;
  label?: string;
  centered?: boolean;
  light?: boolean;
}

export default function SectionHeader({
  title,
  subtitle,
  label,
  centered = true,
  light = false,
}: SectionHeaderProps) {
  return (
    <div className={`mb-14 ${centered ? 'text-center' : ''}`}>
      <span className={`section-label ${centered ? 'mx-auto' : ''} ${light ? 'section-label-light' : ''}`}>
        {label || 'Discover GCLT'}
      </span>
      <h2 className={`mt-4 ${light ? 'text-white' : 'text-primary'}`}>{title}</h2>
      {subtitle && (
        <p
          className={`mt-4 max-w-2xl text-lg leading-relaxed ${centered ? 'mx-auto' : ''} ${
            light ? 'text-gray-200' : 'text-[var(--color-text-light)]'
          }`}
        >
          {subtitle}
        </p>
      )}
      <div className={`mt-6 flex items-center gap-3 ${centered ? 'justify-center' : ''}`}>
        <div className="h-px w-12 bg-accent" />
        <div className="h-2 w-2 rotate-45 bg-accent" />
        <div className="h-px w-12 bg-accent" />
      </div>
    </div>
  );
}
