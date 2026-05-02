"use client"

import Image from "next/image"
import { Mail, Phone, Menu, X, ChevronDown, ChevronRight } from "lucide-react"
import {
    NavigationMenu,
    NavigationMenuContent,
    NavigationMenuItem,
    NavigationMenuLink,
    NavigationMenuList,
    NavigationMenuTrigger,
} from "@/components/ui/navigation-menu"
import { usePathname } from "next/navigation"
import React, { useState, useEffect } from "react"
import Link from 'next/link';
import type { ConditionNavItem } from "@/queries/treatable-conditions";
import type { Service } from "@/queries/services";
import { formatSlug } from "@/lib/formatSlug";





interface NavLinkItem {
    name: string;
    href: string;
}

interface NavbarProps {
    conditions: ConditionNavItem[];
    services: Service[];
}

const menuItems: NavLinkItem[] = [
    { name: "Home", href: "/" },
    { name: "About Us", href: "/about" },
    { name: "Services", href: "/services" },
    { name: "FAQs", href: "/faqs" },
    { name: "Contact Us", href: "/contact" },
];


function TreatmentDropdownContent({ conditions }: { conditions: ConditionNavItem[] }) {
    return (
        <NavigationMenuContent className="p-4 grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 bg-card shadow-lg rounded-xl min-w-[500px]">
            {conditions.length > 0 ? conditions.map((item, i) => (
                <NavigationMenuLink asChild key={item.slug}>
                    <Link
                        href={`/what-do-we-treat/${item.slug}`}
                        className={`flex flex-col items-center p-2 rounded-lg transition-colors
                            ${i % 2 === 1 ? 'bg-cyan-50' : 'bg-transparent'}
                            hover:bg-cyan-100 hover:shadow-md
                        `}
                    >
                        <div className="relative w-24 h-24">
                            <Image
                                src={item.hero_image}
                                alt={formatSlug(item.slug)}
                                fill
                                sizes="96px"
                                className="rounded-md object-cover"
                            />
                        </div>
                        <p className="mt-2 text-sm font-medium text-center text-gray-700 group-hover:text-cyan-600">{formatSlug(item.slug)}</p>
                    </Link>
                </NavigationMenuLink>
            )) : (
                <p className="col-span-4 px-2 py-3 text-sm text-gray-500">No conditions available</p>
            )}
        </NavigationMenuContent>
    );
}

function ServicesDropdownContent({ services }: { services: Service[] }) {
    return (
        <NavigationMenuContent className="left-0 top-0 w-full data-[motion^=from-]:animate-in data-[motion^=to-]:animate-out data-[motion^=from-]:fade-in data-[motion^=to-]:fade-out data-[motion=from-end]:slide-in-from-right-52 data-[motion=from-start]:slide-in-from-left-52 data-[motion=to-end]:slide-out-to-right-52 data-[motion=to-start]:slide-out-to-left-52 md:absolute md:w-auto">
            <div className="p-2 bg-white rounded-md shadow-lg border border-gray-200 min-w-[250px] max-w-[350px]">
                <ul className="flex flex-col py-1">
                    {services.length > 0 ? (
                        services.map((service, index) => (
                            <li key={service.slug || index} className="w-full">
                                <NavigationMenuLink asChild>
                                    <Link href={`/services/${service.slug}`} className="block w-full px-4 py-3 text-sm text-gray-700 hover:bg-cyan-50 hover:text-cyan-600 transition-colors duration-150 whitespace-nowrap overflow-hidden text-ellipsis rounded-sm">
                                        {service.title}
                                    </Link>
                                </NavigationMenuLink>
                            </li>
                        ))
                    ) : (
                        <li className="px-4 py-3 text-sm text-gray-500">No services available</li>
                    )}
                </ul>
            </div>
        </NavigationMenuContent>
    );
}

export default function Navbar({ conditions, services }: NavbarProps) {
    const pathname = usePathname();
    const [isScrolled, setIsScrolled] = useState(false);
    const [isMounted, setIsMounted] = useState(false);
    const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
    const [activeMobileSection, setActiveMobileSection] = useState<string | null>(null);


    useEffect(() => {
        setIsMounted(true);
    }, []);


    useEffect(() => {
        const handleScroll = () => {
            if (window.scrollY > 50) {
                setIsScrolled(true);
            } else {
                setIsScrolled(false);
            }
        };

        window.addEventListener("scroll", handleScroll);
        return () => window.removeEventListener("scroll", handleScroll);
    }, []);

    // Close mobile menu on route change
    useEffect(() => {
        setMobileMenuOpen(false);
    }, [pathname]);


    const scrolledState = isMounted ? isScrolled : false;

    return (
        <header className={`
            bg-background text-foreground border-b shadow-md z-50 transition-all duration-300
            ${scrolledState ? 'sticky top-0' : 'relative'}
        `}>
            {/* Top Bar - Hidden on small mobile to save space */}
            <div
                className={`container mx-auto flex flex-col md:flex-row items-center justify-between px-6 transition-all duration-300
                ${scrolledState ? 'py-2 hidden md:flex' : 'py-4'}
            `}
            >
                <div className="flex items-center justify-between w-full md:w-auto">
                    <Link href="/" className="md:justify-start">
                        <Image
                            src="/revix1.png"
                            alt="Revix Physio Care"
                            width={200}
                            height={50}
                            priority
                            className={`
                                object-contain transition-all duration-300 ease-in-out
                                ${scrolledState ? 'h-10 md:h-12' : 'h-14 md:h-16'}
                            `}
                        />
                    </Link>

                    {/* Hamburger Toggle */}
                    <button
                        onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
                        className="md:hidden p-2 text-gray-600 hover:text-cyan-600 transition-colors"
                        aria-label="Toggle Menu"
                    >
                        {mobileMenuOpen ? <X size={28} /> : <Menu size={28} />}
                    </button>
                </div>

                <div className="hidden md:flex items-center justify-end gap-6 text-sm text-gray-600 mt-2 md:mt-0">
                    <div className="flex items-center gap-2 hover:text-cyan-600 transition-colors">
                        <Mail size={16} />
                        <a href="mailto:info@revixphysiotherapy.com">Email Us</a>
                    </div>
                    <div className="flex items-center gap-2 hover:text-cyan-600 transition-colors">
                        <Phone size={16} />
                        <a href="tel:+923251510459">+92 325 1510459</a>
                    </div>
                </div>
            </div>

            {/* Desktop Menu Row */}
            <div className={`hidden md:flex justify-center border-t bg-card transition-all duration-300 ${scrolledState ? 'border-t-0' : 'border-t'}`}>
                <NavigationMenu>
                    <NavigationMenuList className="gap-2 md:gap-8">
                        {menuItems.slice(0, 2).map((item, index) => (
                            <NavigationMenuItem key={index}>
                                <NavigationMenuLink asChild>
                                    <Link href={item.href}
                                        className={`
                                            font-medium transition-colors hover:text-cyan-500
                                            ${scrolledState ? 'py-3 text-sm' : 'py-4 text-base'}
                                            ${pathname === item.href ? 'text-cyan-500 border-b-2 border-cyan-500' : 'text-foreground'}
                                        `}
                                    >
                                        {item.name}
                                    </Link>
                                </NavigationMenuLink>
                            </NavigationMenuItem>
                        ))}

                        <NavigationMenuItem>
                            <NavigationMenuTrigger className={`
                                font-medium transition-colors hover:text-cyan-500 bg-transparent data-[state=open]:text-cyan-500
                                ${scrolledState ? 'py-3 text-sm' : 'py-4 text-base'}
                                ${pathname.startsWith("/services") ? 'text-cyan-500 border-b-2 border-cyan-500' : 'text-foreground'}
                            `}>
                                Services
                            </NavigationMenuTrigger>
                            <ServicesDropdownContent services={services} />
                        </NavigationMenuItem>

                        <NavigationMenuItem>
                            <NavigationMenuTrigger className={`
                                font-medium transition-colors hover:text-primary bg-transparent
                                ${scrolledState ? 'py-3 text-sm' : 'py-4 text-base'}
                                ${pathname.startsWith("/what-do-we-treat") ? 'text-primary border-b-2 border-primary' : 'text-foreground'}
                            `}>
                                What do we treat
                            </NavigationMenuTrigger>
                            <TreatmentDropdownContent conditions={conditions} />
                        </NavigationMenuItem>

                        {menuItems.slice(3).map((item, index) => (
                            <NavigationMenuItem key={index}>
                                <NavigationMenuLink asChild>
                                    <Link href={item.href}
                                        className={`
                                            font-medium transition-colors hover:text-cyan-500
                                            ${scrolledState ? 'py-3 text-sm' : 'py-4 text-base'}
                                            ${pathname === item.href ? 'text-cyan-500 border-b-2 border-cyan-500' : 'text-foreground'}
                                        `}
                                    >
                                        {item.name}
                                    </Link>
                                </NavigationMenuLink>
                            </NavigationMenuItem>
                        ))}
                    </NavigationMenuList>
                </NavigationMenu>
            </div>

            {/* Mobile Menu Overlay */}
            <div
                className={`
                    fixed inset-0 z-40 bg-black/50 md:hidden transition-opacity duration-300
                    ${mobileMenuOpen ? 'opacity-100 pointer-events-auto' : 'opacity-0 pointer-events-none'}
                `}
                onClick={() => setMobileMenuOpen(false)}
            />

            <div
                className={`
                    fixed top-0 right-0 z-50 h-full w-[80%] max-w-[300px] bg-white shadow-2xl md:hidden transition-transform duration-300 ease-in-out
                    ${mobileMenuOpen ? 'translate-x-0' : 'translate-x-full'}
                `}
            >
                <div className="p-6 flex flex-col h-full">
                    <div className="flex justify-between items-center mb-8">
                        <span className="text-xl font-bold text-emerald-800">Menu</span>
                        <button onClick={() => setMobileMenuOpen(false)} className="p-1">
                            <X size={24} />
                        </button>
                    </div>

                    <nav className="flex flex-col space-y-2 overflow-y-auto flex-grow pb-8">
                        {menuItems.map((item) => (
                            <Link
                                key={item.href}
                                href={item.href}
                                className={`py-3 px-4 rounded-lg font-medium transition-colors ${pathname === item.href ? 'bg-cyan-50 text-cyan-600' : 'text-gray-700 hover:bg-gray-50'}`}
                            >
                                {item.name}
                            </Link>
                        ))}

                        {/* Collapsible Services */}
                        <div className="py-2">
                            <button
                                onClick={(e) => {
                                    e.stopPropagation();
                                    setActiveMobileSection(activeMobileSection === 'services' ? null : 'services');
                                }}
                                className="w-full flex items-center justify-between py-3 px-4 text-gray-700 font-medium hover:bg-gray-50 rounded-lg"
                            >
                                Services
                                <ChevronDown className={`transition-transform duration-200 ${activeMobileSection === 'services' ? 'rotate-180' : ''}`} size={18} />
                            </button>
                            {activeMobileSection === 'services' && (
                                <div className="pl-4 mt-1 space-y-1">
                                    {services.map((s) => (
                                        <Link key={s.slug} href={`/services/${s.slug}`} className="block py-2.5 px-4 text-sm text-gray-600 hover:text-cyan-600 transition-colors">
                                            {s.title}
                                        </Link>
                                    ))}
                                </div>
                            )}
                        </div>

                        {/* Collapsible Treatments */}
                        <div className="py-2">
                            <button
                                onClick={(e) => {
                                    e.stopPropagation();
                                    setActiveMobileSection(activeMobileSection === 'treatments' ? null : 'treatments');
                                }}
                                className="w-full flex items-center justify-between py-3 px-4 text-gray-700 font-medium hover:bg-gray-50 rounded-lg"
                            >
                                What we treat
                                <ChevronDown className={`transition-transform duration-200 ${activeMobileSection === 'treatments' ? 'rotate-180' : ''}`} size={18} />
                            </button>
                            {activeMobileSection === 'treatments' && (
                                <div className="pl-4 mt-1 space-y-1">
                                    {conditions.map((c) => (
                                        <Link key={c.slug} href={`/what-do-we-treat/${c.slug}`} className="block py-2.5 px-4 text-sm text-gray-600 hover:text-cyan-600 transition-colors">
                                            {formatSlug(c.slug)}
                                        </Link>
                                    ))}
                                </div>
                            )}
                        </div>
                    </nav>

                    <div className="mt-auto pt-6 border-t border-gray-100 space-y-4">
                        <a href="tel:+923251510459" className="flex items-center gap-3 py-3 px-4 bg-cyan-600 text-white rounded-xl font-bold justify-center shadow-lg hover:bg-cyan-700 transition-colors">
                            <Phone size={20} />
                            Call Us Now
                        </a>
                    </div>
                </div>
            </div>
        </header>
    );
}
