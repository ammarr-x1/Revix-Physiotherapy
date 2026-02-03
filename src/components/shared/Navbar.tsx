"use client"

import Image from "next/image"
import { Mail, Phone } from "lucide-react"
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
import { servicesData } from "@/lib/servicesData";





interface NavLinkItem {
    name: string;
    href: string;
}


const menuItems: NavLinkItem[] = [
    { name: "Home", href: "/" },
    { name: "About Us", href: "/about" },
    { name: "Services", href: "/services" },
    { name: "FAQs", href: "/faqs" },
];

const treatmentItems = [
    { img: "/what-do-we-treat/headache.jpg", label: "Headache", slug: "headache" },
    { img: "/what-do-we-treat/shoulder.jpg", label: "Shoulder", slug: "shoulder" },
    { img: "/what-do-we-treat/wrist.jpg", label: "Wrist", slug: "wrist" },
    { img: "/what-do-we-treat/spine.jpg", label: "Spine", slug: "spine" },
    { img: "/what-do-we-treat/elbow.jpg", label: "Elbow", slug: "elbow" },
    { img: "/what-do-we-treat/hip.jpg", label: "Hip", slug: "hip" },
    { img: "/what-do-we-treat/knee.jpg", label: "Knee", slug: "knee" },
    { img: "/what-do-we-treat/ankle.jpg", label: "Ankle", slug: "ankle-foot" },
    { img: "/what-do-we-treat/post-surgical.jpg", label: "Post Surgical", slug: "post-surgical" },
    { img: "/what-do-we-treat/sports-injuries.jpg", label: "Sports Injuries", slug: "sports-injuries" },

];


const TreatmentDropdownContent = () => (
    <NavigationMenuContent className="p-4 grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 bg-card shadow-lg rounded-xl min-w-[500px]">
        {treatmentItems.map((item, i) => (
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
                            src={item.img}
                            alt={item.label}
                            fill
                            sizes="(max-width: 768px) 100vw, 33vw"
                            className="rounded-md object-cover"
                        />
                    </div>
                    <p className="mt-2 text-sm font-medium text-center text-gray-700 group-hover:text-cyan-600">{item.label}</p>
                </Link>
            </NavigationMenuLink>
        ))}
    </NavigationMenuContent>
);


const ServicesDropdownContent = () => (
    <NavigationMenuContent className="left-0 top-0 w-full data-[motion^=from-]:animate-in data-[motion^=to-]:animate-out data-[motion^=from-]:fade-in data-[motion^=to-]:fade-out data-[motion=from-end]:slide-in-from-right-52 data-[motion=from-start]:slide-in-from-left-52 data-[motion=to-end]:slide-out-to-right-52 data-[motion=to-start]:slide-out-to-left-52 md:absolute md:w-auto">
        <div className="p-2 bg-white rounded-md shadow-lg border border-gray-200 min-w-[250px] max-w-[350px]">
            <ul className="flex flex-col py-1">
                {servicesData && servicesData.length > 0 ? (
                    servicesData.map((service, index) => (
                        <li key={service.slug || index} className="w-full">
                            <NavigationMenuLink asChild>
                                <Link href={`/services/${service.slug}`} className="block w-full px-4 py-3 text-sm text-gray-700 hover:bg-cyan-50 hover:text-cyan-600 transition-colors duration-150 whitespace-nowrap overflow-hidden text-ellipsis rounded-sm">
                                    {service.title}
                                </Link>
                            </NavigationMenuLink>
                        </li>
                    ))
                ) : (
                    <li className="px-4 py-3 text-sm text-gray-500">
                        No services available
                    </li>
                )}
            </ul>
        </div>
    </NavigationMenuContent>
);

export default function Navbar() {
    const pathname = usePathname();
    const [isScrolled, setIsScrolled] = useState(false);
    const [isMounted, setIsMounted] = useState(false);


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


        return () => {
            window.removeEventListener("scroll", handleScroll);
        };
    }, []);


    const scrolledState = isMounted ? isScrolled : false;

    return (
        <header className={`
            bg-background text-foreground border-b shadow-md z-50 transition-all duration-300
            ${scrolledState ? 'sticky top-0' : 'relative'}
        `}>
            <div
                className={`container mx-auto flex flex-col md:flex-row items-center justify-between px-6 transition-all duration-300
                ${scrolledState ? 'py-2' : 'py-4'}
            `}
            >
                { }
                <div className="flex items-center justify-center md:justify-start w-full md:w-auto">
                    <Image
                        src="/revix1.png"
                        alt="Revix Physio Care"
                        width={220}
                        height={60}
                        priority
                        className={`
                            object-contain transition-all duration-300 ease-in-out
                             ${scrolledState ? 'h-10 md:h-12' : 'h-16 md:h-20'}
                        `}
                    />
                </div>

                <div className="flex items-center justify-center md:justify-end gap-6 text-sm text-gray-600 mt-2 md:mt-0">
                    <div className="flex items-center gap-2 hover:text-cyan-600 transition-colors">
                        <Mail size={16} />
                        <a href="mailto:info@revixphysiotherapy.com" className="hidden sm:inline">
                            Email Us
                        </a>
                    </div>
                    <div className="flex items-center gap-2 hover:text-cyan-600 transition-colors">
                        <Phone size={16} />
                        <a href="tel:+923105404199" className="hidden sm:inline">
                            Contact Us
                        </a>
                    </div>
                </div>
            </div>

            {/* Menu row */}
            <div className={`flex justify-center border-t bg-card transition-all duration-300 ${scrolledState ? 'border-t-0' : 'border-t'}`}>
                <NavigationMenu>
                    <NavigationMenuList className="gap-2 md:gap-8">
                        {/* */}
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

                        {/*  */}
                        <NavigationMenuItem>
                            <NavigationMenuTrigger className={`
                                font-medium transition-colors hover:text-cyan-500 bg-transparent data-[state=open]:text-cyan-500
                                ${scrolledState ? 'py-3 text-sm' : 'py-4 text-base'}
                                ${pathname.startsWith("/services") ? 'text-cyan-500 border-b-2 border-cyan-500' : 'text-foreground'}
                            `}>
                                Services
                            </NavigationMenuTrigger>
                            <ServicesDropdownContent />
                        </NavigationMenuItem>

                        {/* */}
                        <NavigationMenuItem>
                            <NavigationMenuTrigger className={`
                                font-medium transition-colors hover:text-primary bg-transparent
                                ${scrolledState ? 'py-3 text-sm' : 'py-4 text-base'}
                                ${pathname === "/what-do-we-treat" ? 'text-primary border-b-2 border-primary' : 'text-foreground'}
                            `}>
                                What do we treat
                            </NavigationMenuTrigger>
                            <TreatmentDropdownContent />
                        </NavigationMenuItem>

                        {/* Render FAQs */}
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
        </header>
    );
}