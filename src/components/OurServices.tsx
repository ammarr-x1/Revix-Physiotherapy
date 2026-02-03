import Image from 'next/image';
import Link from 'next/link';
import React from 'react';

export default function OurServices() {
    const services = [
        {
            title: 'General Physicaltherapy',
            description: 'Our Physiotherapists are experts in movement and function who work in partnership.',
            imageSrc: '/about-img-1.jpg',
            href: '/services/general-physiotherapy'
        },
        {
            title: 'Aged care Physicaltherapy',
            description: 'We consistently provide physiotherapy services to nursing homes, hostels, and retirement villages with exceptional care.',
            imageSrc: '/service-img-2.png',
            href: '/services/aged-care-physiotherapy'
        },

    ];

    return (
        <section className="bg-gray-50 py-16 md:py-24">
            <div className="container mx-auto px-4">
                <h2 className="text-center text-3xl md:text-4xl font-bold text-emerald-800 mb-12">
                    Our Services
                </h2>
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
                    {services.map((service) => (
                        <div key={service.title} className="bg-white rounded-xl shadow-lg overflow-hidden transition-transform duration-300 hover:scale-105">
                            <div className="relative w-full aspect-[4/3]">
                                <Image
                                    src={service.imageSrc}
                                    alt={service.title}
                                    fill
                                    className="object-cover"
                                />
                            </div>
                            <div className="bg-cyan-600 text-white p-6">
                                <h3 className="text-xl font-semibold">{service.title}</h3>
                                <p className="mt-2 text-sm">
                                    {service.description}
                                </p>
                                <Link href={service.href} className="mt-4 inline-block font-semibold text-white hover:underline">
                                    Learn More
                                </Link>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}
