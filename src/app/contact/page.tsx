import FadeIn from "@/components/FadeIn";
import { Mail, Instagram, Twitter } from "lucide-react";

export default function Contact() {
    return (
        <div className="pt-24 md:pt-32 px-6 container mx-auto min-h-[80vh] flex flex-col items-center justify-center text-center relative">

            {/* --- BACKGROUND GLOW --- */}
            <div className="absolute top-[50%] left-[50%] transform -translate-x-1/2 -translate-y-1/2 w-[300px] md:w-[600px] h-[300px] md:h-[600px] bg-accent/5 rounded-full blur-[60px] md:blur-[100px] z-[-1]" />
            <div className="fixed inset-0 bg-gray-50/50 z-[-2] pointer-events-none" />

            <FadeIn>
                {/* Adjusted Font Size for Mobile Fitting */}
                <h1 className="font-display font-black text-5xl md:text-8xl uppercase mb-6 md:mb-8 text-accent">
                    Get In <span className="text-stroke text-transparent block md:inline">Touch</span>
                </h1>

                <p className="text-gray-600 mb-8 md:mb-12 max-w-xl mx-auto text-base md:text-lg">
                    Have questions about the governance project? We want to hear from students.
                </p>

                {/* 'break-all' forces the long email to wrap on small phones */}
                <a
                    href="mailto:urstudentassociation@gmail.com"
                    className="text-lg sm:text-2xl md:text-4xl font-bold text-accent border-b-2 border-accent/20 hover:border-gold hover:text-gold pb-2 transition-all break-all"
                >
                    urstudentassociation@gmail.com
                </a>

                <div className="flex justify-center gap-6 md:gap-8 mt-12 md:mt-16 pb-12">
                    <a href="#" className="p-3 md:p-4 bg-white shadow-md border border-gray-100 rounded-full text-accent hover:bg-accent hover:text-white hover:-translate-y-1 transition-all">
                        <Instagram size={24} />
                    </a>
                    <a href="#" className="p-3 md:p-4 bg-white shadow-md border border-gray-100 rounded-full text-accent hover:bg-accent hover:text-white hover:-translate-y-1 transition-all">
                        <Twitter size={24} />
                    </a>
                    <a href="mailto:urstudentassociation@gmail.com" className="p-3 md:p-4 bg-white shadow-md border border-gray-100 rounded-full text-accent hover:bg-accent hover:text-white hover:-translate-y-1 transition-all">
                        <Mail size={24} />
                    </a>
                </div>
            </FadeIn>
        </div>
    );
}