"use client";

import Image from 'next/image';
import React from 'react';

export default function AboutUs() {
    return (
        <section className="bg-background text-foreground container mx-auto px-4 py-16 md:py-24">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-12 lg:gap-16 items-center">
                {/* Left Side: Single Image Collage */}
                <div className="relative w-full aspect-square md:aspect-auto md:h-full rounded-2xl overflow-hidden shadow-2xl">
                    <Image
                        src="/welcome_img.jpg"
                        alt="Revix Physiotherapy Image Collage"
                        fill
                        className="object-cover object-center"
                        priority
                    />
                </div>
                {/* Right Side: Text Content */}
                <div className="text-center md:text-left">
                    <h2 className="text-3xl md:text-4xl font-bold text-primary tracking-tight">
                        Welcome To Revix Physiotherapy
                    </h2>
                    <p className="mt-4 text-muted-foreground leading-relaxed">
                        We are experts in movement and function and we work in partnership with our clients assisting them to overcome movement disorders which may have been presented from birth, acquired through accident or injury, or are the result of ageing or life-changing events.
                    </p>
                    <p className="mt-4 text-muted-foreground leading-relaxed">
                        The Revix team focuses on providing the highest possible standard of service and care through their customized client dedicated programs to ensure positive outcomes for individual clients.
                    </p>
                    <div className="mt-8">
                        <h3 className="text-2xl font-semibold text-secondary">Vision & Mission</h3>
                        <p className="mt-2 text-muted-foreground leading-relaxed">
                            Our vision is to provide evidence-based physiotherapy services to enhance the health of our community.
                            <br />
                            At Revix Physiotherapy, we take a holistic approach to the prevention, diagnosis and management of human movement problems to enhance the health and welfare of our community.
                        </p>
                    </div>
                </div>
            </div>
        </section>
    );
}
