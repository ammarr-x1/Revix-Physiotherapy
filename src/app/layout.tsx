import './globals.css';
import type { Metadata } from 'next';
import { Inter } from 'next/font/google';
import NavbarWrapper from '@/components/shared/NavbarWrapper';
import Footer from '@/components/shared/Footer';

const inter = Inter({ subsets: ['latin'] });

export const metadata: Metadata = {
  title: {
    default: 'Revix Physiotherapy | Pain Management & Rehabilitation',
    template: '%s | Revix Physiotherapy'
  },
  description: 'Revix Physiotherapy is a leading allied health service provider specializing in pain management, rehabilitation, aged care, and NDIS support.',
  keywords: ['physiotherapy', 'physiocare', 'rehabilitation', 'pain management', 'aged care', 'physiotherapy in islamabad', 'physiotherapist in islamabad', 'physiotherapy in rawalpindi', 'islamabad physiotherapy', 'Revix', 'health'],
  authors: [{ name: 'Revix Physiotherapy' }],
  openGraph: {
    title: 'Revix Physiotherapy',
    description: 'Expert physiotherapy and rehabilitation services.',
    url: 'https://revixphysiotherapy.com',
    siteName: 'Revix Physiotherapy',
    locale: 'en_AU',
    type: 'website',
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