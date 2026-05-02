import Image from 'next/image';
import Link from 'next/link';
import React from 'react';
import { getServices } from '@/queries/services';

export default async function OurServices() {
    // Audit Fix: Using DAL instead of direct DB call. 
    // Now fully dynamic: updates automatically when Supabase data changes.
    const services = await getServices();

    if (!services || services.length === 0) return null;

    return (
        <section className="bg-gray-50 py-16 md:py-24">
            <div className="container mx-auto px-6 lg:px-12">
                <div className="text-center mb-16">
                    <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
                        Our Services
                    </h2>
                    <div className="w-20 h-1.5 bg-cyan-500 mx-auto rounded-full"></div>
                    <p className="mt-6 text-gray-600 max-w-2xl mx-auto text-lg">
                        Comprehensive physiotherapy solutions tailored to your specific needs, 
                        delivered by expert practitioners.
                    </p>
                </div>
                
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                    {services.map((service) => (
                        <div key={service.slug} className="group bg-white rounded-2xl shadow-sm border border-gray-100 overflow-hidden transition-all duration-300 hover:shadow-xl hover:-translate-y-1">
                            <div className="relative w-full aspect-[16/10]">
                                <Image
                                    src={service.hero_image}
                                    alt={service.title}
                                    fill
                                    sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                                    className="object-cover group-hover:scale-105 transition-transform duration-500"
                                />
                            </div>
                            <div className="p-8">
                                <h3 className="text-xl font-bold text-gray-900 mb-3 group-hover:text-cyan-600 transition-colors">
                                    {service.title}
                                </h3>
                                <p className="text-gray-600 text-sm leading-relaxed mb-6 line-clamp-3">
                                    {service.description}
                                </p>
                                <Link 
                                    href={`/services/${service.slug}`} 
                                    className="inline-flex items-center font-bold text-cyan-600 hover:text-cyan-700 transition-colors"
                                >
                                    Learn More
                                    <svg className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 5l7 7-7 7" />
                                    </svg>
                                </Link>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}
