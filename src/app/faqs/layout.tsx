import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Frequently Asked Questions',
  description:
    'Find answers to common questions about physiotherapy at Revix Physio Care — appointments, sessions, insurance coverage, and what to expect.',
  alternates: { canonical: 'https://revixphysiotherapy.com/faqs' },
  openGraph: {
    title: 'FAQs | Revix Physio Care',
    description:
      'Common questions about physiotherapy appointments, treatment duration, insurance, and more — answered by the Revix team.',
    url: 'https://revixphysiotherapy.com/faqs',
    images: [
      { url: '/revix1.png', width: 1200, height: 630, alt: 'Revix Physiotherapy FAQs' },
    ],
  },
  twitter: {
    card: 'summary',
    title: 'FAQs | Revix Physio Care',
    description: 'Answers to your physiotherapy questions — Revix Physio Care.',
  },
};

export default function FaqsLayout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}
