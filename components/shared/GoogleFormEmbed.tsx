interface GoogleFormEmbedProps {
  src: string;
  title: string;
  height?: number;
  className?: string;
}

export default function GoogleFormEmbed({
  src,
  title,
  height = 1400,
  className = '',
}: GoogleFormEmbedProps) {
  return (
    <iframe
      src={src}
      width="100%"
      height={height}
      frameBorder={0}
      marginHeight={0}
      marginWidth={0}
      title={title}
      className={`w-full rounded-xl border border-border bg-white ${className}`}
    >
      Loading…
    </iframe>
  );
}
