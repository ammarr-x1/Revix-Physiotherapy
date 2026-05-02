import Image from 'next/image';
import { notFound } from 'next/navigation';
import { createBrowserClient } from '@supabase/ssr';
import { getServiceBySlug } from '@/queries/services';
import AppointmentForm from '@/components/AppointmentForm';
import { CheckCircle } from 'lucide-react';
import Link from 'next/link';
import { Metadata } from 'next';

interface ServicesPageProps {
    params: Promise<{
        slug: string;
    }>;
}

// SSG: Pre-render all known slugs at build time
export async function generateStaticParams() {
    const supabase = createBrowserClient(
        process.env.NEXT_PUBLIC_SUPABASE_URL!,
        process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY!
    );

    const { data } = await supabase
        .from('services')
        .select('slug')
        .eq('is_active', true);

    return (data ?? []).map(({ slug }) => ({ slug }));
}

export async function generateMetadata({ params }: ServicesPageProps): Promise<Metadata> {
    const { slug } = await params;
    const service = await getServiceBySlug(slug);

    if (!service) return { title: 'Service Not Found' };

    return {
        title: `${service.title} | Revix Physiotherapy`,
        description: service.description,
        openGraph: {
            title: service.hero_title,
            description: service.description,
            images: [service.hero_image],
        }
    };
}

export const dynamicParams = true;
export const revalidate = 86400; // Revalidate daily

export default async function ServicesPage({ params }: ServicesPageProps) {
    const { slug } = await params;
    const service = await getServiceBySlug(slug);

    if (!service) {
        notFound();
    }

    return (
        <main className="bg-gray-50 text-gray-800">
            {/* Hero Section with Background Image */}
            <section className="relative w-full h-[400px] overflow-hidden">
                <div className="container mx-auto px-6 lg:px-12 h-full relative">
                    {/* Background Image - contained within margins */}
                    <div className="absolute inset-0 rounded-xl overflow-hidden">
                        <Image
                            src={service.hero_image}
                            alt={service.hero_title}
                            fill
                            className="object-cover"
                            priority
                            sizes="100vw"
                        />
                        {/* Overlay for better text readability */}
                        <div className="absolute inset-0 bg-gradient-to-r from-black/60 via-black/40 to-black/30"></div>
                    </div>

                    {/* Hero Content */}
                    <div className="relative z-10 h-full flex items-center">
                        <div className="max-w-3xl">
                            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-white leading-tight drop-shadow-lg">
                                {service.hero_title}
                            </h1>
                            <div className="mt-4 w-24 h-1 bg-cyan-400 rounded-full"></div>
                        </div>
                    </div>
                </div>
            </section>

            {/* Main Content Section */}
            <section className="py-16 lg:py-24">
                <div className="container mx-auto px-6 lg:px-12">
                    <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-16">
                        {/* Left Column: Service Details */}
                        <div className="lg:col-span-8">
                            <div className="bg-white rounded-xl shadow-sm p-8 lg:p-12 border border-gray-100">
                                <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-6 leading-tight">
                                    {service.title}
                                </h2>

                                {/* Service Description */}
                                <div className="prose prose-lg prose-gray max-w-none mb-10">
                                    {service.description.split('\n\n').map((paragraph, index) => (
                                        <p key={index} className="text-gray-700 leading-relaxed mb-6 last:mb-0">
                                            {paragraph}
                                        </p>
                                    ))}
                                </div>

                                {/* List of Treatable Conditions */}
                                {service.treatable_conditions && service.treatable_conditions.length > 0 && (
                                    <div className="mt-12">
                                        <h3 className="text-2xl lg:text-3xl font-semibold text-gray-900 mb-8 flex items-center">
                                            <span className="w-1 h-8 bg-cyan-500 rounded-full mr-4"></span>
                                            We are expert at treating:
                                        </h3>
                                        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                                            {service.treatable_conditions.map((condition, index) => (
                                                <div key={index} className="flex items-start space-x-3 p-3 rounded-lg hover:bg-gray-50 transition-colors border border-transparent hover:border-gray-200">
                                                    <CheckCircle className="size-5 mt-1 text-cyan-500 shrink-0" />
                                                    <span className="text-gray-700 font-medium">{condition}</span>
                                                </div>
                                            ))}
                                        </div>
                                    </div>
                                )}
                            </div>
                        </div>

                        {/*Appointment*/}
                        <div className="lg:col-span-4">
                            <div className="sticky top-8 space-y-6">
                                <div className="bg-white rounded-xl shadow-lg p-6 border border-gray-100 overflow-hidden relative">
                                    <div className="absolute top-0 left-0 w-full h-1 bg-cyan-500"></div>
                                    <div className="text-center mb-6">
                                        <h3 className="text-xl font-bold text-gray-900 mb-2">
                                            Book an Appointment
                                        </h3>
                                        <p className="text-sm text-gray-600">
                                            Take the first step towards recovery
                                        </p>
                                    </div>

                                    {/* Compact Appointment Form */}
                                    <AppointmentForm compact={true} />
                                </div>

                                {/* Additional CTA */}
                                <div className="bg-gradient-to-br from-cyan-600 to-teal-700 rounded-xl p-8 text-white shadow-lg relative overflow-hidden group">
                                    <div className="absolute -right-10 -bottom-10 w-40 h-40 bg-white/10 rounded-full blur-3xl group-hover:bg-white/20 transition-colors"></div>
                                    <h4 className="text-xl font-bold mb-3 relative z-10">Need Immediate Help?</h4>
                                    <p className="text-cyan-50 mb-6 relative z-10">
                                        Speak with our patient care coordinator for personalized assistance.
                                    </p>
                                    <a
                                        href="tel:+923251510459"
                                        className="inline-flex items-center justify-center w-full bg-white text-cyan-700 font-bold py-3 px-6 rounded-lg hover:bg-cyan-50 transition-all duration-300 shadow-md relative z-10"
                                    >
                                        Call Us Now
                                    </a>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* Call to Action Section */}
            <section className="relative bg-[#004d4d] py-24 overflow-hidden">
                <div className="absolute inset-0 opacity-10">
                    <div className="absolute inset-0" style={{
                        backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23ffffff' fill-opacity='0.3'%3E%3Ccircle cx='7' cy='7' r='2'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`,
                    }}></div>
                </div>

                <div className="container mx-auto px-6 lg:px-12 text-center relative z-10">
                    <h3 className="text-3xl lg:text-5xl font-bold text-white mb-8">
                        Ready to start your healing journey?
                    </h3>
                    <p className="text-xl text-cyan-50/90 mb-10 max-w-3xl mx-auto leading-relaxed">
                        Our expert team is dedicated to helping you achieve optimal health and wellness through personalized physiotherapy care tailored to your specific goals.
                    </p>
                    <div className="flex flex-col sm:flex-row gap-6 justify-center items-center">
                        <Link
                            href="/contact"
                            className="bg-cyan-500 text-white font-bold py-4 px-10 rounded-full shadow-xl hover:bg-cyan-400 transition-all duration-300 transform hover:scale-105"
                        >
                            Schedule Consultation
                        </Link>
                        <Link
                            href="/about"
                            className="bg-white/10 backdrop-blur-sm border-2 border-white/30 text-white font-semibold py-4 px-10 rounded-full hover:bg-white hover:text-[#004d4d] transition-all duration-300"
                        >
                            Learn More About Us
                        </Link>
                    </div>
                </div>
            </section>

            {/* Trust Indicators */}
            <section className="bg-white py-20 border-t border-gray-100">
                <div className="container mx-auto px-6 lg:px-12">
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-12 text-center">
                        <div className="p-8 rounded-2xl hover:bg-gray-50 transition-colors">
                            <div className="w-16 h-16 bg-cyan-100 rounded-2xl flex items-center justify-center mx-auto mb-6 transform rotate-3">
                                <CheckCircle className="w-8 h-8 text-cyan-600" />
                            </div>
                            <h4 className="text-xl font-bold text-gray-900 mb-3">Expert Care</h4>
                            <p className="text-gray-600 leading-relaxed">Highly qualified physiotherapists with specialized expertise in complex rehabilitation.</p>
                        </div>
                        <div className="p-8 rounded-2xl hover:bg-gray-50 transition-colors">
                            <div className="w-16 h-16 bg-teal-100 rounded-2xl flex items-center justify-center mx-auto mb-6 transform -rotate-3">
                                <CheckCircle className="w-8 h-8 text-teal-600" />
                            </div>
                            <h4 className="text-xl font-bold text-gray-900 mb-3">Personalized Treatment</h4>
                            <p className="text-gray-600 leading-relaxed">One-on-one sessions and bespoke recovery plans focused entirely on your progress.</p>
                        </div>
                        <div className="p-8 rounded-2xl hover:bg-gray-50 transition-colors">
                            <div className="w-16 h-16 bg-emerald-100 rounded-2xl flex items-center justify-center mx-auto mb-6 transform rotate-6">
                                <CheckCircle className="w-8 h-8 text-emerald-600" />
                            </div>
                            <h4 className="text-xl font-bold text-gray-900 mb-3">Proven Results</h4>
                            <p className="text-gray-600 leading-relaxed">Evidence-based methods that have helped thousands of patients regain their mobility.</p>
                        </div>
                    </div>
                </div>
            </section>
        </main>
    );
}