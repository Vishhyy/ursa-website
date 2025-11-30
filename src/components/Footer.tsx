"use client";
import Link from "next/link";
import Image from "next/image";
import { Facebook, Instagram, Linkedin, Youtube, Music } from "lucide-react";

export default function Footer() {
    const links = {
        col1: [
            { name: "Newsroom", href: "https://www.uregina.ca/media/index.html" },
            { name: "Careers", href: "https://www.uregina.ca/hr/careers/index.html" },
            { name: "Contact U of R", href: "https://www.uregina.ca/contact.html" },
            { name: "Campus Maps", href: "https://www.uregina.ca/maps/index.html" }
        ],
        col2: [
            { name: "Policies", href: "https://www.uregina.ca/policy/" },
            { name: "Privacy & Terms of Use", href: "https://www.uregina.ca/terms-of-use.html" },
            { name: "Student Central", href: "https://www.uregina.ca/student/registrar/" },
            { name: "UR Source", href: "https://ursource.uregina.ca/" }
        ]
    };

    const socials = [
        { icon: Facebook, href: "#" },
        { icon: Instagram, href: "https://www.instagram.com/urstudentsassociation/" },
        { icon: Linkedin, href: "#" },
        { icon: Youtube, href: "#" },
        { icon: Music, href: "#" }
    ];

    return (
        // REVERTED: Solid Black Background (Removed 'bg-constellation')
        <footer className="bg-black text-white pt-12 md:pt-16 pb-8 border-t border-white/10 overflow-hidden">
            <div className="container mx-auto px-6">

                <div className="flex flex-col lg:flex-row justify-between items-start gap-12 lg:gap-20">

                    {/* BRANDING */}
                    <div className="lg:w-1/4">
                        <Link href="/" className="group block">
                            <div className="relative w-48 h-32 md:w-56 md:h-32">
                                <Image
                                    src="/logo.png"
                                    alt="URSA Logo"
                                    fill
                                    className="object-contain object-left group-hover:opacity-90 transition-opacity"
                                />
                            </div>

                            <p className="mt-4 text-gray-500 text-sm leading-snug">
                                The University of Regina Students&apos; Association.
                            </p>
                        </Link>
                    </div>

                    {/* LINKS */}
                    <div className="flex-1 grid grid-cols-1 sm:grid-cols-2 gap-10 w-full lg:w-auto">
                        <div className="flex flex-col gap-3">
                            {links.col1.map((link) => (
                                <Link key={link.name} href={link.href} target="_blank" className="font-display font-bold text-lg md:text-xl hover:underline hover:text-gold transition-colors">
                                    {link.name}
                                </Link>
                            ))}
                        </div>
                        <div className="flex flex-col gap-3">
                            {links.col2.map((link) => (
                                <Link key={link.name} href={link.href} target="_blank" className="font-display font-bold text-lg md:text-xl hover:underline hover:text-gold transition-colors">
                                    {link.name}
                                </Link>
                            ))}
                        </div>
                    </div>

                    {/* SOCIALS */}
                    <div className="lg:w-1/4 flex flex-col items-start lg:items-end gap-6">
                        <div className="flex gap-2">
                            {socials.map((social, i) => (
                                <a
                                    key={i}
                                    href={social.href}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="bg-gold p-2 md:p-3 text-black hover:bg-white transition-colors duration-300"
                                >
                                    <social.icon size={24} strokeWidth={1.5} />
                                </a>
                            ))}
                        </div>
                    </div>

                </div>

                {/* COPYRIGHT */}
                <div className="mt-12 md:mt-20 pt-8 border-t border-white/10 flex flex-col md:flex-row justify-end items-center text-sm text-gray-400">
                    <p className="text-center md:text-right">© 2025 URSA — University of Regina Students&apos; Association</p>
                </div>

            </div>
        </footer>
    );
}