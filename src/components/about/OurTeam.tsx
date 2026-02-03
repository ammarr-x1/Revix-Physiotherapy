import Image from 'next/image';
import React from 'react';

export default function OurTeam() {
    const teamMember = {
        name: 'Dr. Muhammad Anas Manzoor',
        bio: `Dr. Anas is a dedicated and highly skilled physiotherapist with over 15 years of experience in helping patients regain movement and improve their quality of life. After completing his Bachelor's degree in Physiotherapy, he pursued a Master's degree in Sports and Musculoskeletal Physiotherapy. Dr. Anas is passionate about a holistic approach to patient care, combining evidence-based practices with a strong focus on personalized treatment plans. He is a member of the Australian Physiotherapy Association and is committed to staying at the forefront of his field through continuous professional development.`,
        imageSrc: '/pimage.jpeg',
    };

    return (
        <section className="container mx-auto px-4 py-16 md:py-24">
            <h2 className="text-center text-3xl md:text-4xl font-bold text-emerald-800 mb-12">
                Our Team
            </h2>
            <div className="flex flex-col md:flex-row items-center justify-center gap-8 md:gap-12 lg:gap-16">

                <div className="relative w-48 h-48 sm:w-64 sm:h-64 rounded-full overflow-hidden shadow-xl flex-shrink-0">
                    <Image
                        src={teamMember.imageSrc}
                        alt={teamMember.name}
                        fill
                        className="object-cover"
                    />
                </div>
                {/*  */}
                <div className="text-center md:text-left max-w-2xl">
                    <h3 className="text-2xl font-bold text-emerald-800">
                        {teamMember.name}
                    </h3>
                    <p className="mt-4 text-gray-600 leading-relaxed">
                        {teamMember.bio}
                    </p>
                </div>
            </div>
        </section>
    );
}
