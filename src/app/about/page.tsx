'use client';

import { motion, useInView } from 'framer-motion';
import { useRef } from 'react';
// These UI components are assumed to be available in your components/ui directory
// and can be customized further based on your specific needs.
import { Spotlight } from '@/components/ui/spotlight';
import { BorderBeam } from '../../components/ui/border-beam';
import { CardHoverEffect } from '../../components/ui/pulse-card';
import {
  Heart,
  Users,
  Lightbulb,
  Sparkles,
  Rocket,
  Target,
} from 'lucide-react';

// Define the icons and a type mapping for them.
const iconComponents = {
  Heart: Heart,
  Users: Users,
  Lightbulb: Lightbulb,
  Sparkles: Sparkles,
  Rocket: Rocket,
  Target: Target,
};

// Defining the data structure for our values, which is scalable for a backend.
const defaultValues = [
  {
    title: 'Compassion',
    description:
      'We always treat every patient with empathy and respect, creating a truly supportive environment for healing and full recovery.',
    icon: 'Heart',
  },
  {
    title: 'Expertise',
    description:
      'Our dedicated team is committed to continuous learning and providing the most up-to-date, evidence-based treatments available.',
    icon: 'Lightbulb',
  },
  {
    title: 'Integrity',
    description:
      'We operate with honesty and transparency in all our interactions, building trust with our patients and community.',
    icon: 'Sparkles',
  },
  {
    title: 'Patient-Centered',
    description:
      'Your well-being is at the core of everything we do. We tailor every treatment plan to your specific needs and goals.',
    icon: 'Users',
  },
];

export default function AboutUsPage() {
  // This object holds all the content for the page.
  // In a production environment, this data would likely be fetched from a CMS like Strapi.
  const aboutData = {
    title: 'About Revix Physio Care',
    subtitle: 'Your Partner in Health and Recovery',
    mission:
      'Our mission is to provide personalized, high-quality physiotherapy services to help our patients recover from injury, manage pain, and improve their overall quality of life.',
    vision:
      'We envision a community where everyone has access to the care they need to live an active, pain-free life, empowered by knowledge and compassionate support.',
    values: defaultValues,
  };

  const missionRef = useRef(null);
  const valuesRef = useRef(null);


  const missionInView = useInView(missionRef, { once: true, amount: 0.3 });
  const valuesInView = useInView(valuesRef, { once: true, amount: 0.3 });

  return (
    <section className="relative w-full overflow-hidden pt-20">
      {/*  */}
      <Spotlight
        gradientFirst="radial-gradient(68.54% 68.72% at 55.02% 31.46%, hsla(145, 100%, 50%, 0.08) 0, hsla(149, 100%, 55%, 0.04) 50%, hsla(145, 100%, 45%, 0) 80%)"
        gradientSecond="radial-gradient(50% 50% at 50% 50%, hsla(145, 100%, 85%, 0.08) 0, hsla(145, 100%, 55%, 0.04) 80%, transparent 100%)"
        gradientThird="radial-gradient(50% 50% at 50% 50%, hsla(145, 100%, 85%, 0.06) 0, hsla(145, 100%, 85%, 0.06) 80%, transparent 100%)"
      />

      <div className="relative z-10 mx-auto container px-4 md:px-6">
        {/* Header Section */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: 'easeOut' }}
          className="mx-auto mb-16 max-w-2xl text-center"
        >
          <h1 className="bg-gradient-to-r from-foreground/80 via-foreground to-foreground/80 bg-clip-text text-4xl font-bold tracking-tight text-transparent sm:text-5xl md:text-6xl">
            {aboutData.title}
          </h1>
          <p className="mt-6 text-xl text-muted-foreground">
            {aboutData.subtitle}
          </p>
        </motion.div>

        {/* Mission & Vision Section */}
        <div ref={missionRef} className="relative mx-auto mb-24 max-w-7xl">
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            animate={
              missionInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 40 }
            }
            transition={{ duration: 0.8, delay: 0.2, ease: 'easeOut' }}
            className="relative z-10 grid gap-12 md:grid-cols-2"
          >
            {/* Mission Card */}
            <motion.div
              whileHover={{ y: -5, boxShadow: '0 20px 40px rgba(0,0,0,0.1)' }}
              className="group relative block overflow-hidden rounded-2xl border border-border/40 bg-gradient-to-br p-10 backdrop-blur-3xl"
            >
              <BorderBeam
                duration={8}
                size={300}
                className="from-transparent via-primary/40 to-transparent"
              />
              <div className="mb-6 inline-flex aspect-square h-16 w-16 flex-1 items-center justify-center rounded-2xl bg-gradient-to-br from-primary/20 to-primary/5 backdrop-blur-sm">
                <Rocket className="h-8 w-8 text-primary" />
              </div>
              <div className="space-y-4">
                <h2 className="mb-4 bg-gradient-to-r from-primary/90 to-primary/70 bg-clip-text text-3xl font-bold text-transparent">
                  Our Mission
                </h2>
                <p className="text-lg leading-relaxed text-muted-foreground">
                  {aboutData.mission}
                </p>
              </div>
            </motion.div>

            {/* Vision Card  */}
            <motion.div
              whileHover={{ y: -5, boxShadow: '0 20px 40px rgba(0,0,0,0.1)' }}
              className="group relative block overflow-hidden rounded-2xl border border-border/40 bg-gradient-to-br p-10 backdrop-blur-3xl"
            >
              <BorderBeam
                duration={8}
                size={300}
                className="from-transparent via-secondary/40 to-transparent"
                reverse
              />
              <div className="mb-6 inline-flex h-16 w-16 items-center justify-center rounded-2xl bg-gradient-to-br from-secondary/20 to-secondary/5 backdrop-blur-sm">
                <Target className="h-8 w-8 text-secondary" />
              </div>
              <h2 className="mb-4 bg-gradient-to-r from-secondary/90 to-secondary/70 bg-clip-text text-3xl font-bold text-transparent">
                Our Vision
              </h2>
              <p className="text-lg leading-relaxed text-muted-foreground">
                {aboutData.vision}
              </p>
            </motion.div>
          </motion.div>
        </div>

        {/* Our Core Values Section */}
        <div ref={valuesRef} className="mb-24">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={
              valuesInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }
            }
            transition={{ duration: 0.6, ease: 'easeOut' }}
            className="mb-12 text-center"
          >
            <h2 className="bg-gradient-to-r from-foreground/80 via-foreground to-foreground/80 bg-clip-text text-3xl font-bold tracking-tight text-transparent sm:text-4xl">
              Our Core Values
            </h2>
            <p className="mx-auto mt-4 max-w-2xl text-lg text-muted-foreground">
              The principles that guide our practice and dedication to your
              health.
            </p>
          </motion.div>

          {/* Value Cards - */}
          <div className="grid gap-6 md:grid-cols-2 xl:grid-cols-4">
            {aboutData.values.map((value, index) => {
              const IconComponent = iconComponents[value.icon as keyof typeof iconComponents];
              const variant =
                index === 0
                  ? 'green'
                  : index === 1
                    ? 'teal'
                    : index === 2
                      ? 'emerald'
                      : 'lime';

              return (
                <motion.div
                  key={value.title}
                  initial={{ opacity: 0, y: 30 }}
                  animate={
                    valuesInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }
                  }
                  transition={{
                    duration: 0.6,
                    delay: index * 0.1 + 0.2,
                    ease: 'easeOut',
                  }}
                  whileHover={{ y: -5, scale: 1.02 }}
                >
                  <CardHoverEffect
                    icon={<IconComponent className="h-6 w-6" />}
                    title={value.title}
                    description={value.description}
                    variant={variant}
                    glowEffect={true}
                    size="lg"
                  />
                </motion.div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}
