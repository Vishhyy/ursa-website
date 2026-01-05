import FadeIn from "@/components/FadeIn";
import { Mail, Instagram, Twitter, ArrowRight } from "lucide-react";
import Link from "next/link";

// UPDATED LIST
const contacts = [
    {
        role: "General Inquiries",
        desc: "For general questions about URSA, partnerships, media, or press.",
        email: "info@ursa-students.ca",
        isPrimary: true // This will now highlight this card as the main one
    },
    {
        role: "President",
        // Removed "General Inquiries" from description
        desc: "For inquiries regarding governance, strategy, and official representation.",
        email: "president@ursa-students.ca",
    },
    {
        role: "VP Internal",
        desc: "For questions about the constitution, bylaws, and governance structures.",
        email: "vp.internal@ursa-students.ca",
    },
    {
        role: "VP Finance",
        desc: "For matters related to budgets, student fees, and financial oversight.",
        email: "vp.finance@ursa-students.ca",
    },
    {
        role: "VP External",
        desc: "For advocacy campaigns, external relations, and community outreach.",
        email: "vp.external@ursa-students.ca",
    },
    {
        role: "VP Student Life",
        desc: "For campus events, accessibility concerns, and student wellness.",
        email: "vp.studentlife@ursa-students.ca",
    },
];

export const metadata = {
    title: "Contact",
    description: "Contact URSA. Email us for general inquiries or reach out to specific executive members.",
};

export default function Contact() {
    return (
        <div className="pt-32 pb-24 px-6 container mx-auto relative min-h-screen">

            {/* Background Theme */}
            <div className="fixed inset-0 bg-gray-50/50 z-[-2] pointer-events-none" />
            <div className="fixed top-0 right-0 w-[600px] h-[600px] bg-gold/10 rounded-full blur-[100px] pointer-events-none z-[-1]" />
            <div className="fixed bottom-0 left-0 w-[800px] h-[800px] bg-accent/5 rounded-full blur-[120px] pointer-events-none z-[-1]" />

            {/* Header */}
            <FadeIn>
                <div className="text-center mb-16">
                    <h1 className="font-display font-black text-5xl md:text-7xl uppercase text-accent mb-4">
                        Contact Us
                    </h1>
                    <p className="text-gray-600 max-w-2xl mx-auto text-lg font-medium">
                        We want to hear from students. Contact our general line or reach specific executives below.
                    </p>
                </div>
            </FadeIn>

            {/* --- CONTACT DIRECTORY GRID --- */}
            <div className="max-w-5xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-6 mb-16 items-start">
                {contacts.map((contact, i) => (
                    <FadeIn key={contact.email} delay={0.1 * (i + 1)}>
                        <Link
                            href={`mailto:${contact.email}`}
                            className={`
                                group flex flex-col h-full bg-white p-8 rounded-lg shadow-sm transition-all duration-300
                                ${contact.isPrimary
                                    ? 'border-2 border-accent hover:shadow-2xl hover:-translate-y-1 relative overflow-hidden md:col-span-2' // General Inquiries spans 2 cols
                                    : 'border border-gray-200 hover:border-gold hover:shadow-xl hover:-translate-y-1'
                                }
                            `}
                        >
                            {/* Accent Glow for the Primary Card */}
                            {contact.isPrimary && <div className="absolute top-0 right-0 w-32 h-32 bg-accent/5 rounded-full blur-2xl -translate-y-1/2 translate-x-1/2 pointer-events-none" />}

                            <div className="flex items-center gap-4 mb-4">
                                <div className={`p-3 rounded-full ${contact.isPrimary ? 'bg-accent text-white shadow-md' : 'bg-green-50 text-accent group-hover:bg-accent group-hover:text-gold transition-colors'}`}>
                                    <Mail size={24} />
                                </div>
                                <h3 className="font-display font-black text-2xl text-accent group-hover:text-black">
                                    {contact.role}
                                </h3>
                            </div>

                            <p className="text-gray-500 leading-relaxed font-medium flex-grow mb-6">
                                {contact.desc}
                            </p>

                            <div className="mt-auto border-t border-gray-100 pt-4 flex items-center justify-between">
                                <span className={`font-bold transition-colors text-sm md:text-base break-all ${contact.isPrimary ? 'text-accent' : 'text-gray-400 group-hover:text-accent'}`}>
                                    {contact.email}
                                </span>
                                <ArrowRight className="text-gold opacity-0 group-hover:opacity-100 transition-all transform -translate-x-2 group-hover:translate-x-0" size={20} />
                            </div>
                        </Link>
                    </FadeIn>
                ))}
            </div>

            {/* Social Links */}
            <FadeIn delay={0.6}>
                <div className="text-center">
                    <h4 className="font-display font-bold text-accent text-sm uppercase mb-6 tracking-widest opacity-60">Connect on Socials</h4>
                    <div className="flex justify-center gap-4">
                        <a
                            href="https://www.instagram.com/urstudentsassociation/"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="flex items-center gap-3 px-6 py-3 bg-white shadow-md border border-gray-100 rounded-full text-gray-600 font-bold hover:text-white hover:bg-gradient-to-tr hover:from-[#833AB4] hover:to-[#E1306C] hover:border-transparent hover:-translate-y-1 transition-all"
                        >
                            <Instagram size={20} /> Instagram
                        </a>
                        <a
                            href="#"
                            className="flex items-center gap-3 px-6 py-3 bg-white shadow-md border border-gray-100 rounded-full text-gray-600 font-bold hover:bg-black hover:text-white hover:border-transparent hover:-translate-y-1 transition-all"
                        >
                            <Twitter size={20} /> X / Twitter
                        </a>
                    </div>
                </div>
            </FadeIn>

        </div>
    );
}