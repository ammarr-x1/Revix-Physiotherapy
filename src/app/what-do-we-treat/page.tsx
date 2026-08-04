import Image from 'next/image';
import Link from 'next/link';
import type { Metadata } from 'next';
import { getTreatableConditions } from '@/queries/treatable-conditions';
import { formatSlug } from '@/lib/formatSlug';

export const metadata: Metadata = {
    title: 'Conditions We Treat',
    description:
        'Browse all conditions treated at Revix Physio Care — from headaches and spine pain to sports injuries and post-surgical rehabilitation in Islamabad.',
    alternates: { canonical: 'https://revixphysiotherapy.com/what-do-we-treat' },
    openGraph: {
        title: 'Conditions We Treat | Revix Physio Care',
        description:
            'Expert physiotherapy for a wide range of musculoskeletal and neurological conditions in Islamabad & Rawalpindi.',
        url: 'https://revixphysiotherapy.com/what-do-we-treat',
        images: [
            { url: '/revix1.png', width: 1200, height: 630, alt: 'Conditions treated at Revix Physio Care' },
        ],
    },
    twitter: {
        card: 'summary_large_image',
        title: 'Conditions We Treat | Revix Physio Care',
        description: 'Expert physiotherapy for sports injuries, back pain, and more in Islamabad.',
        images: ['/revix1.png'],
    },
};

export const revalidate = 86400;

export default async function WhatDoWeTreatPage() {
    const conditions = await getTreatableConditions();

    return (
        <main className="bg-gray-50 text-gray-800">
            {/* Hero */}
            <section className="relative overflow-hidden bg-white">
                <div className="absolute inset-0 bg-gradient-to-br from-green-50 to-blue-50"></div>
                <div className="container mx-auto px-6 lg:px-12 py-16 lg:py-24 text-center relative z-10">
                    <h1 className="text-4xl lg:text-6xl font-extrabold tracking-tight leading-tight text-emerald-800 mb-6">
                        What Do We Treat?
                    </h1>
                    <div className="w-20 h-1.5 bg-cyan-500 rounded-full mx-auto mb-8" />
                    <p className="text-xl text-gray-600 max-w-2xl mx-auto leading-relaxed">
                        Our expert physiotherapists provide targeted, evidence-based care for a wide range of
                        musculoskeletal and neurological conditions.
                    </p>
                </div>
            </section>

            {/* Conditions Grid */}
            <section className="py-16 lg:py-20">
                <div className="container mx-auto px-6 lg:px-12">
                    {conditions.length === 0 ? (
                        <p className="text-center text-gray-500 text-lg">
                            No conditions listed yet. Please check back soon.
                        </p>
                    ) : (
                        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-6">
                            {conditions.map((condition) => (
                                <Link
                                    key={condition.slug}
                                    href={`/what-do-we-treat/${condition.slug}`}
                                    className="group flex flex-col items-center bg-white rounded-2xl shadow-sm border border-gray-100 p-4 hover:shadow-md hover:border-teal-200 transition-all duration-200"
                                >
                                    <div className="relative w-full aspect-square rounded-xl overflow-hidden mb-3">
                                        <Image
                                            src={condition.hero_image}
                                            alt={formatSlug(condition.slug)}
                                            fill
                                            sizes="(max-width: 640px) 45vw, (max-width: 1024px) 30vw, 20vw"
                                            className="object-cover group-hover:scale-105 transition-transform duration-300"
                                        />
                                    </div>
                                    <p className="text-sm font-semibold text-center text-gray-800 group-hover:text-teal-600 transition-colors">
                                        {formatSlug(condition.slug)}
                                    </p>
                                </Link>
                            ))}
                        </div>
                    )}
                </div>
            </section>
        </main>
    );
}
