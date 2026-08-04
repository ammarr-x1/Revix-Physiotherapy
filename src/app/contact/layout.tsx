import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Contact Us',
  description:
    'Get in touch with Revix Physio Care. Call, email, or send us a message to book an appointment or ask any questions about our physiotherapy services.',
  alternates: { canonical: 'https://revixphysiotherapy.com/contact' },
  openGraph: {
    title: 'Contact Revix Physio Care',
    description:
      'Book an appointment or reach out to our team. Call +92 325 1510459 or email revixphysio@gmail.com.',
    url: 'https://revixphysiotherapy.com/contact',
    images: [
      { url: '/revix1.png', width: 1200, height: 630, alt: 'Contact Revix Physiotherapy' },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Contact Revix Physio Care',
    description: 'Get in touch to book your physiotherapy appointment in Islamabad.',
    images: ['/revix1.png'],
  },
};

export default function ContactLayout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}
