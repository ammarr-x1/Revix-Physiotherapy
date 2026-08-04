import './globals.css';
import type { Metadata } from 'next';
import { Inter } from 'next/font/google';
import NavbarWrapper from '@/components/shared/NavbarWrapper';
import Footer from '@/components/shared/Footer';

const inter = Inter({ subsets: ['latin'] });

export const metadata: Metadata = {
  metadataBase: new URL('https://revixphysiotherapy.com'),
  title: {
    default: 'Revix Physiotherapy | Pain Management & Rehabilitation in Islamabad',
    template: '%s | Revix Physiotherapy',
  },
  description:
    'Revix Physio Care is a leading physiotherapy clinic in Islamabad & Rawalpindi, specializing in pain management, sports rehabilitation, home visits, and NDIS support.',
  keywords: [
    'physiotherapy', 'physio care', 'rehabilitation', 'pain management',
    'physiotherapy in islamabad', 'physiotherapist in islamabad',
    'physiotherapy in rawalpindi', 'islamabad physiotherapy',
    'home visit physiotherapy', 'sports injury physiotherapy',
    'Revix', 'Revix Physio Care',
  ],
  authors: [{ name: 'Revix Physio Care', url: 'https://revixphysiotherapy.com' }],
  creator: 'Revix Physio Care',
  publisher: 'Revix Physio Care',
  robots: {
    index: true,
    follow: true,
    googleBot: { index: true, follow: true, 'max-image-preview': 'large' },
  },
  openGraph: {
    type: 'website',
    locale: 'en_PK',
    url: 'https://revixphysiotherapy.com',
    siteName: 'Revix Physiotherapy',
    title: 'Revix Physiotherapy | Pain Management & Rehabilitation',
    description:
      'Expert physiotherapy and rehabilitation services in Islamabad & Rawalpindi. Book your appointment today.',
    images: [
      {
        url: '/revix1.png',
        width: 1200,
        height: 630,
        alt: 'Revix Physiotherapy Clinic',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Revix Physiotherapy | Pain Management & Rehabilitation',
    description:
      'Expert physiotherapy and rehabilitation services in Islamabad & Rawalpindi.',
    images: ['/revix1.png'],
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" suppressHydrationWarning data-scroll-behavior="smooth">
      <body className={inter.className} suppressHydrationWarning>
        <NavbarWrapper />

        <main>{children}</main>
        <Footer />
      </body>
    </html>
  );
}