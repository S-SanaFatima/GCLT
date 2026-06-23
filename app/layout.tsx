import Script from 'next/script';
import type { Metadata } from 'next';
import '@/styles/globals.css';
import Header from '@/components/layout/Header';
import Footer from '@/components/layout/Footer';
import PageThemeWrapper from '@/components/layout/PageThemeWrapper';
import WhatsAppButton from '@/components/shared/WhatsAppButton';
import AnnouncementPopup from '@/components/shared/AnnouncementPopup';
import NewsletterBanner from '@/components/shared/NewsletterBanner';

const GA_ID = process.env.NEXT_PUBLIC_GA_ID;

export const metadata: Metadata = {
  metadataBase: new URL('https://www.gclt.com.pk'),
  title: {
    default: 'Global Centre for Learning & Training (GCLT)',
    template: '%s | Global Centre for Learning & Training',
  },
  description:
    'GCLT is an international institution offering academic programmes, professional training, research publications, and conferences. Based in Islamabad, Pakistan.',
  keywords: ['GCLT', 'Global Centre for Learning & Training', 'Islamic studies', 'research', 'Islamabad'],
  openGraph: {
    type: 'website',
    url: 'https://www.gclt.com.pk',
    siteName: 'Global Centre for Learning & Training',
    images: [{ url: '/images/og-image.png', width: 1200, height: 630 }],
  },
  twitter: { card: 'summary_large_image' },
  robots: { index: true, follow: true },
  icons: {
    icon: '/images/logo/favicon.png',
    apple: '/images/logo/favicon.png',
  },
};

const organizationJsonLd = {
  '@context': 'https://schema.org',
  '@type': 'EducationalOrganization',
  name: 'Global Centre for Learning & Training',
  alternateName: 'GCLT',
  url: 'https://www.gclt.com.pk',
  email: 'info@gclt.com.pk',
  telephone: '+92-333-9381201',
  address: {
    '@type': 'PostalAddress',
    streetAddress: 'Behind National Press Club, St#39, F-6/1',
    addressLocality: 'Islamabad',
    addressCountry: 'PK',
  },
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body className="min-h-screen flex flex-col">
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(organizationJsonLd) }}
        />
        {GA_ID && (
          <>
            <Script src={`https://www.googletagmanager.com/gtag/js?id=${GA_ID}`} strategy="afterInteractive" />
            <Script id="google-analytics" strategy="afterInteractive">
              {`
                window.dataLayer = window.dataLayer || [];
                function gtag(){dataLayer.push(arguments);}
                gtag('js', new Date());
                gtag('config', '${GA_ID}');
              `}
            </Script>
          </>
        )}
        <Header />
        <main className="flex-1">
          <PageThemeWrapper>{children}</PageThemeWrapper>
        </main>
        <Footer />
        <WhatsAppButton />
        <AnnouncementPopup />
        <NewsletterBanner />
      </body>
    </html>
  );
}
