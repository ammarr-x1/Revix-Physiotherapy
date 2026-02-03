import AboutUs from '@/components/about/AboutUs';
import Hero from '@/components/home/Hero';
import OurServices from '@/components/OurServices';
import OurTeam from '@/components/about/OurTeam';
import AppointmentForm from '@/components/AppointmentForm';
import Testimonials from '@/components/home/Testimonials';

export default function Home() {
  return (
    <>
      <Hero />
      <AboutUs />
      <OurServices />
      <OurTeam />
      <AppointmentForm />
      <Testimonials />
    </>
  );
}