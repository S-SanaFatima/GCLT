import Link from 'next/link';

export default function NotFound() {
  return (
    <section className="flex min-h-[60vh] flex-col items-center justify-center bg-white px-4 text-center">
      <h1 className="mb-4 text-6xl font-bold text-primary">404</h1>
      <p className="mb-8 text-[var(--color-text-light)]">The page you are looking for could not be found.</p>
      <Link href="/" className="btn-primary">
        Return Home
      </Link>
    </section>
  );
}
