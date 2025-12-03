"use client";
import Link from "next/link";
import Image from "next/image";
import { Facebook, Instagram, Linkedin, Twitter } from "lucide-react";

export default function Footer() {

    const siteLinks = [
        { name: "Home", href: "/" },
        { name: "Interim Team", href: "/leadership" },
        { name: "Student Groups", href: "/groups" },
        { name: "Documents", href: "/documents" },
        { name: "Contact", href: "/contact" },
    ];

    const socials = [
        { icon: Instagram, href: "https://www.instagram.com/urstudentsassociation/" },
        { icon: Facebook, href: "#" },
        { icon: Twitter, href: "#" },
    ];

    return (
        // Changed background to Black, kept Gold top border for branding
        <footer className="bg-black text-white border-t-4 border-gold pt-16 pb-8">
            <div className="container mx-auto px-6">

                {/* 3-Column Grid */}
                <div className="grid grid-cols-1 md:grid-cols-3 gap-12">

                    {/* Column 1: Branding */}
                    <div className="flex flex-col items-start">
                        <Link href="/" className="group block mb-6">
                            <div className="relative w-40 h-20">
                                <Image
                                    src="/logo.png"
                                    alt="URSA Logo"
                                    fill
                                    className="object-contain object-left opacity-90 group-hover:opacity-100 transition-opacity"
                                />
                            </div>
                        </Link>
                        <p className="text-gray-400 text-sm leading-relaxed max-w-xs font-medium">
                            University of Regina Students' Association
                        </p>
                    </div>

                    {/* Column 2: Navigation */}
                    <div className="flex flex-col items-start md:items-center">
                        <div className="flex flex-col gap-4">
                            {/* Gold Header makes it pop against the black */}
                            <h4 className="font-display font-bold text-lg text-gold uppercase tracking-widest">Explore</h4>
                            <div className="flex flex-col gap-3">
                                {siteLinks.map((link) => (
                                    <Link key={link.name} href={link.href} className="text-gray-400 hover:text-white hover:underline transition-colors">
                                        {link.name}
                                    </Link>
                                ))}
                            </div>
                        </div>
                    </div>

                    {/* Column 3: Connect */}
                    <div className="flex flex-col items-start md:items-end">
                        <div className="flex flex-col gap-4">
                            <h4 className="font-display font-bold text-lg text-gold uppercase tracking-widest">Connect</h4>
                            <div className="flex gap-4">
                                {socials.map((social, i) => (
                                    <a
                                        key={i}
                                        href={social.href}
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        // Gold buttons with Black icons look very premium
                                        className="bg-gold p-3 text-black hover:bg-white transition-colors duration-300 rounded-sm"
                                    >
                                        <social.icon size={20} strokeWidth={2} />
                                    </a>
                                ))}
                            </div>
                        </div>
                    </div>

                </div>

                {/* --- Bottom Copyright Bar --- */}
                <div className="mt-16 pt-8 border-t border-white/10 text-sm text-gray-500 flex flex-col md:flex-row justify-between items-center gap-4">
                    <p>© 2025 URSA — University of Regina Students&apos; Association</p>
                    <p className="text-xs">Est. 2025</p>
                </div>

            </div>
        </footer>
    );
}