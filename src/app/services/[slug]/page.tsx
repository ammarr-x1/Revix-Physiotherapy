import Image from 'next/image';
import { notFound } from 'next/navigation';
import { servicesData } from '@/lib/servicesData';
import AppointmentForm from '@/components/AppointmentForm';
import { CheckCircle } from 'lucide-react';
import Link from 'next/link';

interface ServicesPageProps {
    params: {
        slug: string;
    };
}

export default function ServicesPage({ params }: ServicesPageProps) {

    const service = servicesData.find(s => s.slug === params.slug);


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
                            src={service.heroImage}
                            alt={service.heroTitle}
                            fill
                            className="object-cover"
                            priority
                        />
                        {/* Overlay for better text readability */}
                        <div className="absolute inset-0 bg-gradient-to-r from-black/60 via-black/40 to-black/30"></div>
                    </div>

                    {/* Hero Content */}
                    <div className="relative z-10 h-full flex items-center">
                        <div className="max-w-3xl">
                            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-white leading-tight drop-shadow-lg">
                                {service.heroTitle}
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
                            <div className="bg-white rounded-xl shadow-sm p-8 lg:p-12">
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
                                {service.treatableConditions && (
                                    <div className="mt-12">
                                        <h3 className="text-2xl lg:text-3xl font-semibold text-gray-900 mb-8 flex items-center">
                                            <span className="w-1 h-8 bg-cyan-500 rounded-full mr-4"></span>
                                            We are expert at treating:
                                        </h3>
                                        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                                            {service.treatableConditions.map((condition, index) => (
                                                <div key={index} className="flex items-start space-x-3 p-3 rounded-lg hover:bg-gray-50 transition-colors">
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
                            <div className="sticky top-8">
                                <div className="bg-white rounded-xl shadow-lg p-6 border-t-4 border-cyan-500">
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
                                <div className="mt-6 bg-gradient-to-r from-cyan-500 to-teal-600 rounded-xl p-6 text-white text-center">
                                    <h4 className="font-bold mb-2">Need Help?</h4>
                                    <p className="text-sm mb-4 opacity-90">
                                        Call us for immediate assistance
                                    </p>
                                    <a
                                        href="tel:+923105404199"
                                        className="inline-block bg-white text-cyan-600 font-semibold py-2 px-6 rounded-full hover:bg-gray-100 transition-colors text-sm"
                                    >
                                        Call Now
                                    </a>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* Call to Action Section */}
            <section className="relative bg-brand-primary py-20">
                {/* Background Pattern */}
                <div className="absolute inset-0 opacity-10">
                    <div className="absolute inset-0" style={{
                        backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23ffffff' fill-opacity='0.3'%3E%3Ccircle cx='7' cy='7' r='2'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`,
                    }}></div>
                </div>

                <div className="container mx-auto px-6 lg:px-12 text-center relative z-10">
                    <h3 className="text-3xl lg:text-4xl font-bold text-white mb-6">
                        Ready to start your healing journey?
                    </h3>
                    <p className="text-xl text-white/90 mb-8 max-w-2xl mx-auto leading-relaxed">
                        Our expert team is dedicated to helping you achieve optimal health and wellness through personalized physiotherapy care.
                    </p>
                    <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
                        <Link
                            href="/contact-us"
                            className="bg-white text-teal-600 font-bold py-4 px-8 rounded-full shadow-lg hover:bg-gray-100 transition-all duration-300 transform hover:scale-105"
                        >
                            Schedule Consultation
                        </Link>
                        <Link
                            href="/about"
                            className="border-2 border-white text-white font-semibold py-4 px-8 rounded-full hover:bg-white hover:text-teal-600 transition-all duration-300"
                        >
                            Learn More About Us
                        </Link>
                    </div>
                </div>
            </section>

            {/* Trust Indicators */}
            <section className="bg-white py-16">
                <div className="container mx-auto px-6 lg:px-12">
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-center">
                        <div className="p-6">
                            <div className="w-16 h-16 bg-cyan-100 rounded-full flex items-center justify-center mx-auto mb-4">
                                <CheckCircle className="w-8 h-8 text-cyan-600" />
                            </div>
                            <h4 className="font-bold text-gray-900 mb-2">Expert Care</h4>
                            <p className="text-gray-600">Qualified physiotherapists with years of experience</p>
                        </div>
                        <div className="p-6">
                            <div className="w-16 h-16 bg-teal-100 rounded-full flex items-center justify-center mx-auto mb-4">
                                <CheckCircle className="w-8 h-8 text-teal-600" />
                            </div>
                            <h4 className="font-bold text-gray-900 mb-2">Personalized Treatment</h4>
                            <p className="text-gray-600">Tailored therapy plans for your specific needs</p>
                        </div>
                        <div className="p-6">
                            <div className="w-16 h-16 bg-emerald-100 rounded-full flex items-center justify-center mx-auto mb-4">
                                <CheckCircle className="w-8 h-8 text-emerald-600" />
                            </div>
                            <h4 className="font-bold text-gray-900 mb-2">Proven Results</h4>
                            <p className="text-gray-600">Helping patients achieve their recovery goals</p>
                        </div>
                    </div>
                </div>
            </section>
        </main>
    );
}