import { Metadata } from 'next';
import PageHero from '@/components/shared/PageHero';

export const metadata: Metadata = {
  title: 'Privacy Policy',
  description: 'Privacy policy for the Global Centre for Learning & Training website.',
};

export default function PrivacyPage() {
  return (
    <>
      <PageHero title="Privacy Policy" breadcrumbs={[{ label: 'Home', href: '/' }, { label: 'Privacy Policy' }]} />
      <section className="section-padding bg-white">
        <div className="container-gclt max-w-3xl prose text-[var(--color-text-light)]">
          <p>The Global Centre for Learning & Training (&ldquo;GCLT&rdquo;) is committed to protecting your privacy. This policy outlines how we collect, use, and safeguard personal information submitted through our website.</p>
          <h2 className="text-primary">Information We Collect</h2>
          <p>We may collect personal information such as your name, email address, and message content when you submit contact forms, newsletter signups, or application enquiries.</p>
          <h2 className="text-primary">How We Use Information</h2>
          <p>Information is used solely to respond to enquiries, process applications, and send relevant updates you have subscribed to.</p>
          <h2 className="text-primary">Contact</h2>
          <p>For privacy-related enquiries, contact info@gclt.com.pk.</p>
          <p className="mt-8 text-xs text-mid-gray">Last updated: July 2026</p>
        </div>
      </section>
    </>
  );
}
