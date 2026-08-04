import Image from 'next/image';
import Link from 'next/link';
import type { Metadata } from 'next';
import { getServices } from '@/queries/services';

export const metadata: Metadata = {
    title: 'Our Physiotherapy Services',
    description:
        'Explore professional physiotherapy services at Revix Physio Care in Islamabad — General Physiotherapy, Sports Rehabilitation, Home Visits, and more.',
    alternates: { canonical: 'https://revixphysiotherapy.com/services' },
    openGraph: {
        title: 'Our Physiotherapy Services | Revix Physio Care',
        description:
            'Explore our range of professional physiotherapy services including General Physiotherapy, Sports Rehabilitation, and Home Visit Physio in Islamabad.',
        url: 'https://revixphysiotherapy.com/services',
        images: [
            { url: '/revix1.png', width: 1200, height: 630, alt: 'Revix Physiotherapy Services' },
        ],
    },
    twitter: {
        card: 'summary_large_image',
        title: 'Our Physiotherapy Services | Revix Physio Care',
        description: 'Professional physiotherapy services in Islamabad & Rawalpindi.',
        images: ['/revix1.png'],
    },
};

export const revalidate = 86400; // 24h

export default async function ServicesPage() {
    const services = await getServices();

    return (
        <main className="bg-gray-50 text-gray-800">
            {/* Hero Section */}
            <section className="relative overflow-hidden bg-white">
                {/* Background shape */}
                <div className="absolute inset-0 bg-gradient-to-br from-green-50 to-blue-50"></div>

                <div className="container mx-auto px-6 lg:px-12 py-16 lg:py-24 relative z-10">
                    <div className="max-w-3xl">
                        <span className="inline-block px-4 py-1.5 bg-emerald-100 text-emerald-800 text-sm font-bold rounded-full mb-6 uppercase tracking-wider">
                            Our Expertise
                        </span>
                        <h1 className="text-4xl lg:text-7xl font-extrabold tracking-tight leading-tight text-emerald-800 mb-6">
                            Professional <br />
                            <span className="text-cyan-600">Physiotherapy</span> Services
                        </h1>
                        <p className="text-xl text-gray-600 leading-relaxed max-w-2xl">
                            We provide a wide range of specialized physiotherapy services designed to help you regain mobility, manage pain, and achieve your wellness goals.
                        </p>
                    </div>
                </div>
            </section>

            {/* Services Grid */}
            <section className="py-16 lg:py-24 bg-gray-50">
                <div className="container mx-auto px-6 lg:px-12">
                    {services.length === 0 ? (
                        <div className="text-center py-20">
                            <p className="text-gray-500 text-xl">Our services are currently being updated. Please contact us for information.</p>
                        </div>
                    ) : (
                        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 lg:gap-12">
                            {services.filter(s => !s.title.toLowerCase().includes('home visit')).map((service) => (
                                <div
                                    key={service.slug}
                                    className="group bg-white rounded-3xl shadow-sm border border-gray-100 overflow-hidden flex flex-col transition-all duration-300 hover:shadow-xl hover:-translate-y-1"
                                >
                                    <div className="relative w-full aspect-[16/10] overflow-hidden">
                                        <Image
                                            src={service.hero_image}
                                            alt={service.title}
                                            fill
                                            sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                                            className="object-cover group-hover:scale-105 transition-transform duration-500"
                                        />
                                        <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent" />
                                    </div>

                                    <div className="p-8 flex-grow">
                                        <h2 className="text-2xl font-bold text-gray-900 mb-4 group-hover:text-cyan-600 transition-colors">
                                            {service.title}
                                        </h2>
                                        <p className="text-gray-600 leading-relaxed mb-8 line-clamp-3">
                                            {service.description}
                                        </p>

                                        <div className="mt-auto pt-6 border-t border-gray-50">
                                            <Link
                                                href={`/services/${service.slug}`}
                                                className="inline-flex items-center text-cyan-600 font-bold hover:text-cyan-700 transition-colors"
                                            >
                                                Learn More
                                                <svg className="w-5 h-5 ml-2 group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17 8l4 4m0 0l-4 4m4-4H3" />
                                                </svg>
                                            </Link>
                                        </div>
                                    </div>
                                </div>
                            ))}
                        </div>
                    )}
                </div>
            </section>

            {/* CTA Section */}
            <section className="bg-[#004d4d] py-16 lg:py-24 relative overflow-hidden">
                {/* Background Pattern */}
                <div className="absolute inset-0 opacity-10">
                    <div className="absolute inset-0" style={{
                        backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23ffffff' fill-opacity='0.3'%3E%3Ccircle cx='7' cy='7' r='2'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`,
                    }}></div>
                </div>

                <div className="container mx-auto px-6 lg:px-12 text-center relative z-10">
                    <h2 className="text-3xl lg:text-5xl font-bold text-white mb-8">
                        Not sure which service is right for you?
                    </h2>
                    <p className="text-xl text-cyan-50/90 mb-10 max-w-3xl mx-auto leading-relaxed">
                        Our specialists are here to help. Contact us today for a consultation and we'll help you find the best path to recovery.
                    </p>
                    <div className="flex flex-col sm:flex-row gap-6 justify-center items-center">
                        <Link
                            href="/contact"
                            className="bg-cyan-500 text-white px-10 py-4 rounded-full font-bold shadow-xl hover:bg-cyan-400 transition-all duration-300 transform hover:scale-105"
                        >
                            Schedule Consultation
                        </Link>
                        <a
                            href="tel:+923251510459"
                            className="bg-white/10 backdrop-blur-sm border-2 border-white/30 text-white px-10 py-4 rounded-full font-semibold hover:bg-white hover:text-[#004d4d] transition-all duration-300"
                        >
                            Call +92 325 1510459
                        </a>
                    </div>
                </div>
            </section>
        </main>
    );
}
