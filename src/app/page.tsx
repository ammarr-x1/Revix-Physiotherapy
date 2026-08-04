import type { Metadata } from 'next';
import AboutUs from '@/components/about/AboutUs';
import Hero from '@/components/home/Hero';
import OurServices from '@/components/OurServices';
import OurTeam from '@/components/about/OurTeam';
import AppointmentForm from '@/components/AppointmentForm';
import Testimonials from '@/components/home/Testimonials';

export const metadata: Metadata = {
  title: 'Revix Physiotherapy | Pain Management & Rehabilitation in Islamabad',
  description:
    'Revix Physio Care provides expert physiotherapy, pain management, sports rehabilitation, and home visit services in Islamabad & Rawalpindi. Book your appointment today.',
  alternates: { canonical: 'https://revixphysiotherapy.com' },
  openGraph: {
    title: 'Revix Physiotherapy | Pain Management & Rehabilitation in Islamabad',
    description:
      'Expert physiotherapy and rehabilitation services in Islamabad & Rawalpindi. Book your appointment today.',
    url: 'https://revixphysiotherapy.com',
    images: [
      { url: '/revix1.png', width: 1200, height: 630, alt: 'Revix Physiotherapy Clinic' },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Revix Physiotherapy | Pain Management & Rehabilitation',
    description: 'Expert physiotherapy services in Islamabad & Rawalpindi.',
    images: ['/revix1.png'],
  },
};

export default function Home() {
  const jsonLd = {
    '@context': 'https://schema.org',
    '@type': 'MedicalClinic',
    name: 'Revix Physiotherapy',
    image: 'https://revixphysiotherapy.com/revix1.png',
    '@id': 'https://revixphysiotherapy.com',
    url: 'https://revixphysiotherapy.com',
    telephone: '+923251510459',
    address: {
      '@type': 'PostalAddress',
      streetAddress: '123 Health Ave',
      addressLocality: 'Islamabad',
      postalCode: '44000',
      addressCountry: 'PK',
    },
    geo: {
      '@type': 'GeoCoordinates',
      latitude: 33.6844,
      longitude: 73.0479,
    },
    openingHoursSpecification: [
      {
        '@type': 'OpeningHoursSpecification',
        dayOfWeek: ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'],
        opens: '09:00',
        closes: '18:00',
      },
    ],
    sameAs: [
      'https://www.facebook.com/revixphysio',
      'https://www.instagram.com/revixphysio',
    ],
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      <Hero />
      <AboutUs />
      <OurServices />
      <OurTeam />
      <AppointmentForm />
      <Testimonials />
    </>
  );
}