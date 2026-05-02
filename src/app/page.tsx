import AboutUs from '@/components/about/AboutUs';
import Hero from '@/components/home/Hero';
import OurServices from '@/components/OurServices';
import OurTeam from '@/components/about/OurTeam';
import AppointmentForm from '@/components/AppointmentForm';
import Testimonials from '@/components/home/Testimonials';

export default function Home() {
  const jsonLd = {
    '@context': 'https://schema.org',
    '@type': 'MedicalClinic',
    name: 'Revix Physiotherapy',
    image: 'https://revixphysiotherapy.com/revix1.png',
    '@id': 'https://revixphysiotherapy.com',
    url: 'https://revixphysiotherapy.com',
    telephone: '+923105404199',
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