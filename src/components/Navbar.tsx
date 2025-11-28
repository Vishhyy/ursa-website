"use client";
import { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { usePathname } from "next/navigation";
import { Menu, X } from "lucide-react";
import { clsx } from "clsx";

const navItems = [
    { name: "Home", path: "/" },
    { name: "Leadership", path: "/leadership" },
    { name: "Groups", path: "/groups" },
    { name: "Documents", path: "/documents" },
    { name: "Contact", path: "/contact" },
];

export default function Navbar() {
    const pathname = usePathname();
    const [isOpen, setIsOpen] = useState(false);

    return (
        <>
            <nav className="fixed top-0 w-full z-50 bg-[#004F2E] text-white shadow-md border-b-4 border-gold">
                <div className="container mx-auto px-6 h-24 flex justify-between items-center">

                    {/* BRANDING: Final large logo */}
                    <Link href="/" className="flex items-center gap-4 group" onClick={() => setIsOpen(false)}>

                        {/* Logo Image (Enlarged to w-20 h-20 for prominence) */}
                        <div className="relative w-20 h-20 shrink-0 transition-transform group-hover:scale-105">
                            <Image
                                src="/logo.png"
                                alt="URSA Logo"
                                fill
                                className="object-contain"
                            />
                        </div>

                        {/* Text Logo */}
                        <span className="font-display font-black text-3xl tracking-tighter leading-none">
                            URSA<span className="text-gold">.</span>
                        </span>
                    </Link>

                    {/* DESKTOP LINKS */}
                    <div className="hidden lg:flex gap-10">
                        {navItems.map((item) => (
                            <Link
                                key={item.path}
                                href={item.path}
                                className={clsx(
                                    "text-xs font-bold uppercase tracking-widest hover:text-gold transition-colors pt-2",
                                    pathname === item.path ? "text-gold border-b-2 border-gold pb-1" : "text-white/80"
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

            {/* MOBILE MENU */}
            {isOpen && (
                <div className="fixed inset-0 top-24 z-40 bg-[#004F2E] lg:hidden flex flex-col p-8 gap-6 animate-in fade-in duration-200 border-t border-white/10">
                    {navItems.map((item) => (
                        <Link
                            key={item.path}
                            href={item.path}
                            onClick={() => setIsOpen(false)}
                            className={clsx(
                                "text-3xl font-display font-black uppercase tracking-tight py-4 border-b border-white/10 active:scale-95 transition-transform",
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