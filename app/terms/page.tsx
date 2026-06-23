import { Metadata } from 'next';
import PageHero from '@/components/shared/PageHero';

export const metadata: Metadata = {
  title: 'Terms of Use',
  description: 'Terms of use for the Global Centre for Learning & Training website.',
};

export default function TermsPage() {
  return (
    <>
      <PageHero title="Terms of Use" breadcrumbs={[{ label: 'Home', href: '/' }, { label: 'Terms' }]} />
      <section className="section-padding bg-white">
        <div className="container-gclt max-w-3xl prose text-[var(--color-text-light)]">
          <p>By accessing and using the GCLT website (www.gclt.com.pk), you agree to these terms of use.</p>
          <h2 className="text-primary">Content</h2>
          <p>All content on this website is the property of the Global Centre for Learning & Training unless otherwise stated. Reproduction requires prior written permission.</p>
          <h2 className="text-primary">Accuracy</h2>
          <p>We strive to keep information accurate and up to date but make no warranties regarding completeness or accuracy.</p>
          <h2 className="text-primary">Contact</h2>
          <p>For questions about these terms, contact info@gclt.com.pk.</p>
        </div>
      </section>
    </>
  );
}
