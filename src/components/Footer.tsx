"use client";
import Link from "next/link";
import { Facebook, Instagram, Linkedin, Youtube, Music } from "lucide-react";

export default function Footer() {
    const links = {
        col1: [
            { name: "Newsroom", href: "#" },
            { name: "Careers", href: "#" },
            { name: "Contact U of R", href: "#" },
            { name: "Campus Maps", href: "#" }
        ],
        col2: [
            { name: "Policies", href: "#" },
            { name: "Privacy & Terms of Use", href: "#" },
            { name: "Student Central", href: "#" },
            { name: "UR Source", href: "#" }
        ]
    };

    return (
        <footer className="bg-black text-white pt-12 md:pt-16 pb-8 border-t border-white/10 overflow-hidden">
            <div className="container mx-auto px-6">

                <div className="flex flex-col lg:flex-row justify-between items-start gap-12 lg:gap-20">

                    {/* BRANDING - Scale on Mobile to prevent overflow */}
                    <div className="lg:w-1/4 scale-75 origin-top-left md:scale-100">
                        <Link href="/" className="group block">
                            <div className="font-serif leading-[0.8] relative select-none">
                                <span className="text-[120px] text-gold font-bold block relative z-10">U</span>
                                <span className="text-[40px] text-white font-serif italic absolute top-[55px] left-[65px] z-20">of</span>
                                <span className="text-[120px] text-gold font-bold absolute top-[30px] left-[40px] z-0 group-hover:text-white transition-colors duration-500">R</span>
                            </div>
                        </Link>
                    </div>

                    {/* LINKS (Stack on mobile, Side-by-side on desktop) */}
                    <div className="flex-1 grid grid-cols-1 sm:grid-cols-2 gap-10 w-full lg:w-auto">
                        <div className="flex flex-col gap-3">
                            {links.col1.map((link) => (
                                <Link key={link.name} href={link.href} className="font-display font-bold text-lg md:text-xl hover:underline hover:text-gold transition-colors">
                                    {link.name}
                                </Link>
                            ))}
                        </div>
                        <div className="flex flex-col gap-3">
                            {links.col2.map((link) => (
                                <Link key={link.name} href={link.href} className="font-display font-bold text-lg md:text-xl hover:underline hover:text-gold transition-colors">
                                    {link.name}
                                </Link>
                            ))}
                        </div>
                    </div>

                    {/* SOCIALS */}
                    <div className="lg:w-1/4 flex flex-col items-start lg:items-end gap-6">
                        <div className="flex gap-2">
                            <SocialIcon icon={Facebook} />
                            <SocialIcon icon={Instagram} />
                            <SocialIcon icon={Linkedin} />
                            <SocialIcon icon={Youtube} />
                            <SocialIcon icon={Music} />
                        </div>
                    </div>

                </div>

                {/* COPYRIGHT (Custom URSA Text) */}
                <div className="mt-12 md:mt-20 pt-8 border-t border-white/10 flex flex-col md:flex-row justify-end items-center text-sm text-gray-400">
                    <p className="text-center md:text-right">© 2025 URSA — University of Regina Students&apos; Association</p>
                </div>

            </div>
        </footer>
    );
}

function SocialIcon({ icon: Icon }: { icon: any }) {
    return (
        <a href="#" className="bg-gold p-2 md:p-3 text-black hover:bg-white transition-colors duration-300">
            <Icon size={24} strokeWidth={1.5} />
        </a>
    );
}