import Image from 'next/image';
import Link from 'next/link';
import { Mail, MapPin, Phone, ArrowRight } from 'lucide-react';
import { getServiceNavItems } from '@/queries/services';

export default async function Footer() {
    // Audit Fix: Fetching dynamic services from DAL to prevent link rot
    const dynamicServices = await getServiceNavItems();

    const globalData = {
        companyName: 'Revix Physiotherapy',
        description: 'Revix Physiotherapy is a trusted physiotherapy and allied health service provider to aged care centres.',
        phone: '+92 310 5404199',
        email: 'info@revixphysiotherapy.com',
        address: 'Office #10, 2nd Floor, Al-Anayat Mall, G-11 Markaz, Islamabad',
        googleMapsEmbedUrl: 'https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3321.30825345712!2d72.9961633!3d33.68442!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x38dfbe29048f8899%3A0x6b97f35a092822a1!2sG-11%20Markaz%20Islamabad!5e0!3m2!1sen!2spk!4v1628122394593!5m2!1sen!2spk',
        webDesigner: 'Revix Technologies',
    };

    const quickLinks = [
        { name: 'Home', href: '/' },
        { name: 'About Us', href: '/about' },
        { name: 'Our Services', href: '/services' },
        { name: 'What do we treat', href: '/what-do-we-treat' },
        { name: 'FAQs', href: '/faqs' },
        { name: 'Contact Us', href: '/contact' },
    ];

    return (
        <footer className="bg-gray-900 text-white mt-20">
            {/* Main Footer Content */}
            <div className="container mx-auto px-6 py-16">
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12">
                    {/* Company Info */}
                    <div className="space-y-6">
                        <Link href="/" className="inline-block">
                            <Image
                                src="/revix1.png"
                                alt={`${globalData.companyName} Logo`}
                                width={180}
                                height={60}
                                priority
                                className="h-auto w-[180px] brightness-0 invert"
                            />
                        </Link>
                        <p className="text-gray-400 text-sm leading-relaxed max-w-xs">
                            {globalData.description}
                        </p>
                        <div className="space-y-3">
                            <div className="flex items-center text-gray-400 text-sm">
                                <Phone size={16} className="mr-3 text-cyan-400" />
                                <span>{globalData.phone}</span>
                            </div>
                            <div className="flex items-center text-gray-400 text-sm">
                                <Mail size={16} className="mr-3 text-cyan-400" />
                                <span>{globalData.email}</span>
                            </div>
                        </div>
                    </div>

                    {/* Quick Links */}
                    <div>
                        <h4 className="text-lg font-bold text-white mb-6 relative inline-block">
                            Quick Links
                            <div className="absolute -bottom-2 left-0 w-8 h-1 bg-cyan-400 rounded-full"></div>
                        </h4>
                        <nav className="flex flex-col space-y-3">
                            {quickLinks.map((link) => (
                                <Link
                                    key={link.name}
                                    href={link.href}
                                    className="text-gray-400 hover:text-cyan-400 transition-colors text-sm flex items-center group"
                                >
                                    <ArrowRight className="w-3 h-3 mr-2 opacity-0 -ml-5 group-hover:opacity-100 group-hover:ml-0 transition-all duration-300" />
                                    {link.name}
                                </Link>
                            ))}
                        </nav>
                    </div>

                    {/* Services */}
                    <div>
                        <h4 className="text-lg font-bold text-white mb-6 relative inline-block">
                            Our Services
                            <div className="absolute -bottom-2 left-0 w-8 h-1 bg-cyan-400 rounded-full"></div>
                        </h4>
                        <nav className="flex flex-col space-y-3">
                            {dynamicServices.map((service) => (
                                <Link
                                    key={service.slug}
                                    href={`/services/${service.slug}`}
                                    className="text-gray-400 hover:text-cyan-400 transition-colors text-sm flex items-center group"
                                >
                                    <ArrowRight className="w-3 h-3 mr-2 opacity-0 -ml-5 group-hover:opacity-100 group-hover:ml-0 transition-all duration-300" />
                                    {service.title}
                                </Link>
                            ))}
                        </nav>
                    </div>

                    {/* Map & Address */}
                    <div>
                        <h4 className="text-lg font-bold text-white mb-6 relative inline-block">
                            Find Us
                            <div className="absolute -bottom-2 left-0 w-8 h-1 bg-cyan-400 rounded-full"></div>
                        </h4>
                        <div className="w-full h-40 bg-gray-800 rounded-xl overflow-hidden shadow-lg border border-gray-700">
                            <iframe
                                src={globalData.googleMapsEmbedUrl}
                                width="100%"
                                height="100%"
                                style={{ border: 0 }}
                                allowFullScreen={false}
                                loading="lazy"
                                referrerPolicy="no-referrer-when-downgrade"
                                className="grayscale hover:grayscale-0 transition-all duration-500"
                            ></iframe>
                        </div>
                        <div className="mt-4 flex items-start text-gray-400 text-xs leading-relaxed">
                            <MapPin size={14} className="mr-2 mt-0.5 text-cyan-400 shrink-0" />
                            <span>{globalData.address}</span>
                        </div>
                    </div>
                </div>
            </div>

            {/* Bottom Bar */}
            <div className="border-t border-gray-800 bg-black/20">
                <div className="container mx-auto px-6 py-6">
                    <div className="flex flex-col md:flex-row justify-between items-center gap-4">
                        <p className="text-xs text-gray-500">
                            &copy; {new Date().getFullYear()} {globalData.companyName}. All rights reserved.
                        </p>

                        <div className="flex items-center gap-6 text-xs">
                            <Link href="/privacy-policy" className="text-gray-500 hover:text-cyan-400 transition-colors">
                                Privacy Policy
                            </Link>
                            <Link href="/terms" className="text-gray-500 hover:text-cyan-400 transition-colors">
                                Terms & Conditions
                            </Link>
                            <div className="flex items-center gap-2">
                                <span className="text-gray-600">Built by</span>
                                <span className="text-cyan-500/80 font-medium">{globalData.webDesigner}</span>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </footer>
    );
}