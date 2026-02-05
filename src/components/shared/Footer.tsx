import Image from 'next/image';
import Link from 'next/link';
import { ArrowRight } from 'lucide-react';

export default function Footer() {
    const globalData = {
        companyName: 'Revix Physiotherapy',
        description: 'Revix Physiotherapy is a trusted physiotherapy and allied health service provider to aged care centres.',
        phone: '1300 733 488',
        email: 'info@revixphysiotherapy.com',
        address: '123 Health Ave, Wellness City, 12345',
        googleMapsEmbedUrl: 'https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3153.2842091410116!2d144.96305781531818!3d-37.81725517975199!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x6ad642af0f11fd81%3A0xf577f884a44135e0!2sFederation%20Square!5e0!3m2!1sen!2sau!4v1628122394593!5m2!1sen!2sau',
        webDesigner: 'Revix Technologies',
    };

    const quickLinks = [
        { name: 'Home', href: '/' },
        { name: 'Core Values', href: '/core-values' },
        { name: 'Our Team', href: '/our-team' },
        { name: 'FAQs', href: '/faqs' },
        { name: 'What do we treat', href: '/what-we-treat' },
        { name: 'Contact Us', href: '/contact' },
    ];

    const services = [
        { name: 'General Physiotherapy', href: '/services/general-physiotherapy' },
        { name: 'Aged Care Physiotherapy', href: '/services/aged-care-physiotherapy' },
        { name: 'NDIS & Home visit', href: '/services/ndis-home-visit' },
        { name: 'Corporate/onsite Physiotherapy Services', href: '/services/corporate' },
    ];

    return (
        <footer className="bg-gray-800 text-white mt-20">
            {/* Main Footer Content */}
            <div className="container mx-auto px-6 py-12">
                <div className="grid grid-cols-1 lg:grid-cols-4 gap-8">
                    {/* Company Info */}
                    <div className="space-y-4">
                        <Link href="/" className="inline-block">
                            <Image
                                src="/logo.png"
                                alt={`${globalData.companyName} Logo`}
                                width={180}
                                height={60}
                                className="h-auto w-[180px] filter brightness-0 invert"
                            />
                        </Link>


                    </div>

                    {/* Quick Links */}
                    <div>
                        <h4 className="text-lg font-semibold text-white mb-4 relative">
                            Quick Links
                            <div className="absolute -bottom-1 left-0 w-8 h-0.5 bg-teal-400 rounded-full"></div>
                        </h4>
                        <nav className="space-y-2">
                            {quickLinks.map((link) => (
                                <Link
                                    key={link.name}
                                    href={link.href}
                                    className="flex items-center text-gray-300 hover:text-teal-400 transition-colors text-sm group"
                                >
                                    <ArrowRight className="w-3 h-3 mr-2 opacity-0 group-hover:opacity-100 transform -translate-x-2 group-hover:translate-x-0 transition-all duration-200" />
                                    <span className="group-hover:translate-x-1 transition-transform duration-200">
                                        {link.name}
                                    </span>
                                </Link>
                            ))}
                        </nav>
                    </div>

                    {/* Services */}
                    <div>
                        <h4 className="text-lg font-semibold text-white mb-4 relative">
                            Our Services
                            <div className="absolute -bottom-1 left-0 w-8 h-0.5 bg-teal-400 rounded-full"></div>
                        </h4>
                        <nav className="space-y-2">
                            {services.map((service) => (
                                <Link
                                    key={service.name}
                                    href={service.href}
                                    className="flex items-center text-gray-300 hover:text-teal-400 transition-colors text-sm group"
                                >
                                    <ArrowRight className="w-3 h-3 mr-2 opacity-0 group-hover:opacity-100 transform -translate-x-2 group-hover:translate-x-0 transition-all duration-200" />
                                    <span className="group-hover:translate-x-1 transition-transform duration-200 leading-tight">
                                        {service.name}
                                    </span>
                                </Link>
                            ))}
                        </nav>
                    </div>

                    {/* Google Maps */}
                    <div>
                        <h4 className="text-lg font-semibold text-white mb-4 relative">
                            Find Us
                            <div className="absolute -bottom-1 left-0 w-8 h-0.5 bg-teal-400 rounded-full"></div>
                        </h4>
                        <div className="w-full h-40 bg-gray-700 rounded-lg overflow-hidden shadow-lg hover:shadow-xl transition-shadow">
                            <iframe
                                src={globalData.googleMapsEmbedUrl}
                                width="100%"
                                height="100%"
                                style={{ border: 0 }}
                                allowFullScreen={false}
                                loading="lazy"
                                referrerPolicy="no-referrer-when-downgrade"
                                className="grayscale hover:grayscale-0 transition-all duration-300"
                            ></iframe>
                        </div>
                    </div>
                </div>
            </div>

            {/* Bottom Bar */}
            <div className="border-t border-gray-700 bg-gray-800">
                <div className="container mx-auto px-6 py-4">
                    <div className="flex flex-col md:flex-row justify-between items-center space-y-2 md:space-y-0">
                        <p className="text-sm text-gray-400">
                            &copy; {new Date().getFullYear()} {globalData.companyName}. All rights reserved.
                        </p>

                        <div className="flex items-center space-x-4 text-sm">
                            <Link href="/privacy-policy" className="text-gray-400 hover:text-teal-400 transition-colors">
                                Privacy Policy
                            </Link>
                            <Link href="/terms-of-service" className="text-gray-400 hover:text-teal-400 transition-colors">
                                Terms of Service
                            </Link>
                            <div className="flex items-center space-x-2">
                                <span className="text-gray-400">Web Design by</span>
                                <Link
                                    href="#"
                                    className="text-teal-400 hover:text-teal-300 font-medium transition-colors"
                                >
                                    {globalData.webDesigner}
                                </Link>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </footer>
    );
}