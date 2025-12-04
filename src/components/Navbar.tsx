"use client";
import { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { usePathname } from "next/navigation";
import { Menu, X } from "lucide-react";
import { clsx } from "clsx";

// Find the navItems array at the top and add "Events"
const navItems = [
    { name: "Home", path: "/" },
    { name: "Events", path: "/events" }, // <--- Insert this new line
    { name: "Leadership", path: "/leadership" },
    { name: "Groups", path: "/groups" },
    { name: "Documents", path: "/documents" },
    { name: "Minutes", path: "/minutes" },
    { name: "Contact", path: "/contact" },
];

export default function Navbar() {
    const pathname = usePathname();
    const [isOpen, setIsOpen] = useState(false);

    return (
        <>
            {/* 
         MAIN DESKTOP BAR 
         - Keeps 'bg-constellation' for that shiny starry look you liked on desktop.
      */}
            <nav className="fixed top-0 w-full z-50 bg-[#004F2E] bg-constellation text-white shadow-lg border-b-4 border-gold">

                <div className="container mx-auto px-6 h-24 flex justify-between items-center relative z-20">

                    {/* BRANDING */}
                    <Link href="/" className="flex items-center gap-4 group" onClick={() => setIsOpen(false)}>
                        <div className="relative w-20 h-20 shrink-0 transition-transform group-hover:scale-105 drop-shadow-md">
                            <Image
                                src="/logo.png"
                                alt="URSA Logo"
                                fill
                                className="object-contain"
                                priority
                            />
                        </div>

                        <span className="font-display font-black text-3xl tracking-tighter leading-none drop-shadow-md">
                            URSA<span className="text-gold">.</span>
                        </span>
                    </Link>

                    {/* DESKTOP LINKS */}
                    <div className="hidden lg:flex gap-10 items-center">
                        {navItems.map((item) => (
                            <Link
                                key={item.path}
                                href={item.path}
                                className={clsx(
                                    "text-xs font-bold uppercase tracking-widest hover:text-gold transition-colors pt-2 drop-shadow-sm",
                                    pathname === item.path ? "text-gold border-b-2 border-gold pb-1" : "text-white/90"
                                )}
                            >
                                {item.name}
                            </Link>
                        ))}
                    </div>

                    {/* MOBILE TOGGLE */}
                    <button
                        className="lg:hidden p-2 text-white hover:text-gold transition-colors"
                        onClick={() => setIsOpen(!isOpen)}
                    >
                        {isOpen ? <X size={32} /> : <Menu size={32} />}
                    </button>
                </div>
            </nav>

            {/* 
         MOBILE MENU OVERLAY
         - REMOVED 'bg-constellation' 
         - Kept solid 'bg-[#0A2A4A]' so it is a clean, readable Deep Blue block.
      */}
            {isOpen && (
                <div className="fixed inset-0 top-24 z-40 bg-[#004F2E] lg:hidden flex flex-col p-8 gap-6 animate-in fade-in duration-200 border-t border-white/10">

                    {/* Dark solid overlay ensuring no texture bleeds through */}
                    <div className="absolute inset-0 bg-[#004F2E] z-[-1]" />

                    {navItems.map((item) => (
                        <Link
                            key={item.path}
                            href={item.path}
                            onClick={() => setIsOpen(false)}
                            className={clsx(
                                "text-3xl font-display font-black uppercase tracking-tight py-4 border-b border-white/10 active:scale-95 transition-transform relative z-10",
                                pathname === item.path ? "text-gold pl-2" : "text-white"
                            )}
                        >
                            {item.name}
                        </Link>
                    ))}
                </div>
            )}
        </>
    );
}