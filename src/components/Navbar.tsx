"use client";
import { useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { Shield, Menu, X } from "lucide-react";
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
                <div className="container mx-auto px-6 h-20 flex justify-between items-center">

                    {/* LOGO */}
                    <Link href="/" className="flex items-center gap-2 font-display font-black text-2xl tracking-tighter" onClick={() => setIsOpen(false)}>
                        <Shield className="text-gold" size={24} />
                        URSA<span className="text-gold">.</span>
                    </Link>

                    {/* DESKTOP LINKS (Hidden on Mobile) */}
                    <div className="hidden md:flex gap-8">
                        {navItems.map((item) => (
                            <Link
                                key={item.path}
                                href={item.path}
                                className={clsx(
                                    "text-xs font-bold uppercase tracking-widest hover:text-gold transition-colors",
                                    pathname === item.path ? "text-gold border-b border-gold pb-1" : "text-white/80"
                                )}
                            >
                                {item.name}
                            </Link>
                        ))}
                    </div>

                    {/* MOBILE TOGGLE (Visible on Mobile) */}
                    <button
                        className="md:hidden p-2 text-white hover:text-gold transition-colors"
                        onClick={() => setIsOpen(!isOpen)}
                    >
                        {isOpen ? <X size={28} /> : <Menu size={28} />}
                    </button>
                </div>
            </nav>

            {/* MOBILE MENU FULLSCREEN OVERLAY */}
            {/* Slides in nicely and covers screen */}
            {isOpen && (
                <div className="fixed inset-0 top-20 z-40 bg-[#004F2E] md:hidden flex flex-col p-8 gap-6 animate-in fade-in duration-200">
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