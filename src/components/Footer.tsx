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

    return (
        <footer className="bg-black text-white pt-12 md:pt-16 pb-8 border-t border-white/10 overflow-hidden">
            <div className="container mx-auto px-6">

                <div className="flex flex-col lg:flex-row justify-between items-start gap-12 lg:gap-20">

                    {/* 1. BRANDING (Bigger Logo, No Extra Text) */}
                    <div className="lg:w-1/4">
                        <Link href="/" className="group block">
                            {/* Increased logo size significantly */}
                            <div className="relative w-48 h-48 md:w-56 md:h-56">
                                <Image
                                    src="/logo.png"
                                    alt="URSA Logo"
                                    fill
                                    className="object-contain object-left group-hover:opacity-90 transition-opacity"
                                />
                            </div>

                            <p className="mt-4 text-gray-500 text-sm leading-snug max-w-xs">
                                The official student voice of the University of Regina.
                            </p>
                        </Link>
                    </div>

                    {/* 2. LINKS COLUMNS */}
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

                    {/* 3. SOCIAL ICONS */}
                    <div className="lg:w-1/4 flex flex-col items-start lg:items-end gap-6">
                        <div className="flex gap-2">
                            <SocialIcon icon={Facebook} />
                            <SocialIcon icon={Instagram} />
                            <SocialIcon icon={Linkedin} />
                            <SocialIcon icon={Youtube} />
                            <SocialIcon icon={Music} /> {/* Placeholder for TikTok */}
                        </div>
                    </div>

                </div>

                {/* 4. COPYRIGHT */}
                <div className="mt-12 md:mt-20 pt-8 border-t border-white/10 flex flex-col md:flex-row justify-end items-center text-sm text-gray-400">
                    <p className="text-center md:text-right">© 2025 URSA — University of Regina Students&apos; Association</p>
                </div>

            </div>
        </footer>
    );
}

// Helper component
function SocialIcon({ icon: Icon }: { icon: any }) {
    return (
        <a href="#" className="bg-gold p-2 md:p-3 text-black hover:bg-white transition-colors duration-300">
            <Icon size={24} strokeWidth={1.5} />
        </a>
    );
}