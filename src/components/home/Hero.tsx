import Image from 'next/image';
import Link from 'next/link';
import { ChevronRight } from 'lucide-react';

export default function Hero() {
    return (
        <section className="relative overflow-hidden bg-white">
            {/* Background shape */}
            <div className="absolute inset-0 bg-gradient-to-br from-green-50 to-blue-50"></div>

            <div className="container mx-auto px-4 py-16 md:py-24 lg:py-32 relative z-10">
                <div className="flex flex-col-reverse md:flex-row items-center justify-between gap-8 md:gap-12 lg:gap-16">
                    {/* Left Section: Content */}
                    <div className="flex-1 text-center md:text-left">
                        <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold tracking-tight leading-tight text-emerald-800">
                            Transforming your health <br /> and well-being.
                        </h1>
                        <p className="mt-4 md:mt-6 text-lg text-gray-600 max-w-xl mx-auto md:mx-0">
                            Revix Physiotherapy is a trusted allied health service provider to aged care centres, and to the wider community for their rehabilitation and pain management.
                        </p>
                        <div className="mt-8 flex flex-col sm:flex-row gap-4 justify-center md:justify-start">
                            <Link href="/contact">
                                <button className="flex items-center justify-center gap-2 px-8 py-3 bg-cyan-600 text-white font-semibold rounded-full shadow-lg hover:bg-cyan-700 transition-colors duration-300">
                                    Book an Appointment
                                    <ChevronRight className="h-5 w-5" />
                                </button>
                            </Link>
                            <Link href="/services">
                                <button className="flex items-center justify-center gap-2 px-8 py-3 border border-gray-300 text-gray-800 font-semibold rounded-full hover:bg-gray-100 transition-colors duration-300">
                                    Our Services
                                </button>
                            </Link>
                        </div>
                    </div>

                    {/* Right Section: Image with a more polished look */}
                    <div className="flex-1 flex justify-center md:justify-end p-4">
                        <div className="relative w-full max-w-lg aspect-[4/3] rounded-3xl overflow-hidden shadow-2xl transform hover:scale-105 transition-transform duration-500">
                            <Image
                                src="/hero-bg.jpg"
                                alt="A smiling physiotherapist working with a patient"
                                fill
                                className="object-cover"
                            />
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}
