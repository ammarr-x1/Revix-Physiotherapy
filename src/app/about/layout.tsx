import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'About Us',
  description:
    'Learn about Revix Physio Care — our mission, vision, and the values that drive our team of expert physiotherapists in Islamabad & Rawalpindi.',
  alternates: { canonical: 'https://revixphysiotherapy.com/about' },
  openGraph: {
    title: 'About Revix Physio Care',
    description:
      'Meet the expert physiotherapy team behind Revix Physio Care. Our mission is to help every patient recover and live an active, pain-free life.',
    url: 'https://revixphysiotherapy.com/about',
    images: [
      { url: '/revix1.png', width: 1200, height: 630, alt: 'Revix Physio Care team' },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'About Revix Physio Care',
    description: 'Expert physiotherapy in Islamabad. Learn about our mission and team.',
    images: ['/revix1.png'],
  },
};

export default function AboutLayout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}
