'use client';

import { useParams } from 'next/navigation';
import Image from 'next/image';
import Link from 'next/link';
import { treatableConditions, TreatableCondition } from '@/lib/treatableConditionsData';
import AppointmentForm from '@/components/AppointmentForm';


export default function TreatableConditionPage() {
    const { slug } = useParams();


    const condition: TreatableCondition | undefined = treatableConditions.find(
        (c) => c.slug === slug
    );


    if (!condition) {
        return (
            <main className="bg-gray-50 text-gray-800">
                <div className="container mx-auto px-6 lg:px-12 py-20 text-center">
                    <h1 className="text-4xl font-bold text-gray-900 mb-4">Page Not Found</h1>
                    <p className="text-lg text-gray-600 mb-8">
                        The requested condition page could not be found.
                    </p>
                    <Link
                        href="/"
                        className="bg-brand-primary text-white px-6 py-3 rounded-lg hover:bg-opacity-90 transition-colors"
                    >
                        Return Home
                    </Link>
                </div>
            </main>
        );
    }

    return (
        <main className="bg-gray-50 text-gray-800">
            {/* */}
            <section className="relative bg-gradient-to-r from-gray-100 to-gray-200 py-16 lg:py-20">
                <div className="container mx-auto px-6 lg:px-12">
                    <div className="flex items-center justify-between">
                        <div className="flex-1">
                            <h1 className="text-4xl lg:text-5xl font-bold text-gray-900 mb-4">
                                {condition.heroTitle}
                            </h1>
                            <div className="w-16 h-1 bg-teal-500 rounded-full mb-6"></div>
                            <p className="text-lg text-gray-700 max-w-2xl leading-relaxed">
                                Comprehensive treatment and rehabilitation for {condition.heroTitle.toLowerCase()} conditions
                            </p>
                        </div>

                        {/*  */}
                        <div className="hidden lg:block lg:w-1/3 ml-12">
                            <div className="relative aspect-square rounded-2xl overflow-hidden shadow-lg">
                                <Image
                                    src={condition.heroImage}
                                    alt={condition.heroTitle}
                                    fill
                                    className="object-cover"
                                    priority
                                />
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* Main Content Section */}
            <section className="py-16 lg:py-20">
                <div className="container mx-auto px-6 lg:px-12">
                    <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-16">
                        {/* Left Column: Condition Details */}
                        <div className="lg:col-span-8">
                            <div className="space-y-12 lg:space-y-16">
                                {condition.sections.map((section, index) => {
                                    // Determine the layout based on the index
                                    const isImageLeft = index % 2 === 0;

                                    // Handle sections with images
                                    if (section.image) {
                                        return (
                                            <div
                                                key={index}
                                                className="bg-white rounded-2xl shadow-sm border border-gray-100 overflow-hidden"
                                            >
                                                <div className={`flex flex-col ${isImageLeft ? 'lg:flex-row' : 'lg:flex-row-reverse'} items-stretch`}>
                                                    {/* Image Section */}
                                                    <div className="w-full lg:w-2/5 flex justify-center items-center">
                                                        <div className="relative w-full max-w-sm aspect-[16/10] lg:max-w-none lg:max-h-[280px] rounded-lg bg-white">
                                                            <Image
                                                                src={section.image}
                                                                alt={section.imageAlt || section.title}
                                                                fill
                                                                className="object-contain rounded-lg"
                                                                sizes="(max-width: 768px) 90vw, 40vw"
                                                            />
                                                        </div>
                                                    </div>

                                                    {/* Text Content */}
                                                    <div className="w-full lg:w-3/5 p-8 lg:p-12 flex flex-col justify-center">
                                                        <h2 className="text-2xl lg:text-3xl font-bold text-gray-900 mb-4">
                                                            {section.title}
                                                        </h2>
                                                        <div className="w-12 h-1 bg-teal-500 rounded-full mb-6"></div>
                                                        <div className="prose prose-lg prose-gray max-w-none">
                                                            {section.description.split('\n\n').map((paragraph, pIndex) => (
                                                                <p key={pIndex} className="text-gray-700 leading-relaxed mb-4 last:mb-0 text-base lg:text-lg">
                                                                    {paragraph}
                                                                </p>
                                                            ))}
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        );
                                    } else {
                                        // Handle sections with no image (full width text)
                                        return (
                                            <div key={index} className="bg-white rounded-2xl shadow-sm border border-gray-100 p-8 lg:p-12">
                                                <div className="max-w-4xl">
                                                    <h2 className="text-2xl lg:text-3xl font-bold text-gray-900 mb-4">
                                                        {section.title}
                                                    </h2>
                                                    <div className="w-12 h-1 bg-teal-500 rounded-full mb-8"></div>
                                                    <div className="prose prose-lg prose-gray max-w-none">
                                                        {section.description.split('\n\n').map((paragraph, pIndex) => (
                                                            <p key={pIndex} className="text-gray-700 leading-relaxed mb-6 last:mb-0 text-base lg:text-lg">
                                                                {paragraph}
                                                            </p>
                                                        ))}
                                                    </div>
                                                </div>
                                            </div>
                                        );
                                    }
                                })}
                            </div>
                        </div>

                        {/* Appointment Form */}
                        <div className="lg:col-span-4">
                            <div className="sticky top-8 space-y-6">
                                {/* Main Appointment Form */}
                                <div className="bg-white rounded-2xl shadow-lg border border-gray-100 p-6 lg:p-8">
                                    <div className="text-center mb-6">
                                        <h3 className="text-xl lg:text-2xl font-bold text-gray-900 mb-2">
                                            Book an Appointment
                                        </h3>
                                        <p className="text-sm text-gray-600">
                                            Take the first step towards recovery
                                        </p>
                                    </div>

                                    {/* Compact Appointment Form */}
                                    <AppointmentForm compact={true} />
                                </div>

                                {/* Contact CTA */}
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

                                {/* Quick Info*/}
                                <div className="bg-gray-50 rounded-2xl p-6 border border-gray-200">
                                    <h4 className="font-bold text-gray-900 mb-3 text-center">Why Choose Us?</h4>
                                    <ul className="space-y-2 text-sm text-gray-700">
                                        <li className="flex items-center">
                                            <span className="w-2 h-2 bg-teal-500 rounded-full mr-3 flex-shrink-0"></span>
                                            Expert physiotherapists
                                        </li>
                                        <li className="flex items-center">
                                            <span className="w-2 h-2 bg-teal-500 rounded-full mr-3 flex-shrink-0"></span>
                                            Modern treatment methods
                                        </li>
                                        <li className="flex items-center">
                                            <span className="w-2 h-2 bg-teal-500 rounded-full mr-3 flex-shrink-0"></span>
                                            Personalized care plans
                                        </li>
                                        <li className="flex items-center">
                                            <span className="w-2 h-2 bg-teal-500 rounded-full mr-3 flex-shrink-0"></span>
                                            Quick recovery focus
                                        </li>
                                    </ul>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </main>
    );
}