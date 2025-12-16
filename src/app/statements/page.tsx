import FadeIn from "@/components/FadeIn";
import Link from "next/link";
import Image from "next/image";
import { Megaphone, CalendarDays } from "lucide-react";
// Import the data
import { allStatements } from "@/data/statements";

export const metadata = {
    title: "Official Statements",
    description: "Official press releases from URSA.",
};

export default function Statements() {
    return (
        <div className="pt-32 pb-24 px-6 container mx-auto relative min-h-screen">

            {/* Backgrounds (Same as before) */}
            <div className="fixed inset-0 bg-gray-50/50 z-[-2] pointer-events-none" />
            <div className="fixed top-0 left-0 w-[500px] h-[500px] bg-accent/5 rounded-full blur-[100px] pointer-events-none z-[-1]" />

            <FadeIn>
                <div className="border-l-4 border-accent pl-10 mb-16 flex flex-col gap-2">
                    <span className="font-bold text-gold uppercase tracking-widest text-sm">Press Room</span>
                    <h1 className="font-display font-black text-5xl md:text-7xl uppercase text-accent leading-[0.9]">
                        Statements
                    </h1>
                </div>
            </FadeIn>

            <div className="flex flex-col gap-12 max-w-5xl mx-auto">
                {/* MAP THROUGH THE DATA FILE */}
                {allStatements.map((post, index) => (
                    <FadeIn key={post.slug} delay={index * 0.1}>
                        <div className="bg-white rounded-lg shadow-xl overflow-hidden border border-gray-100 flex flex-col lg:flex-row group">

                            <div className="lg:w-1/2 p-8 md:p-12 flex flex-col relative">
                                <div className="absolute top-0 left-0 w-full h-2 bg-accent group-hover:bg-gold transition-colors duration-500"></div>

                                <div className="flex items-center gap-3 text-sm font-bold text-gray-400 mb-6 uppercase tracking-wider">
                                    <CalendarDays size={16} className="text-gold" />
                                    {post.date}
                                </div>

                                <h2 className="font-display font-black text-3xl md:text-4xl text-accent mb-6 leading-tight group-hover:text-black transition-colors">
                                    {post.title}
                                </h2>

                                <p className="text-gray-600 text-lg leading-relaxed mb-8 flex-grow">
                                    {post.summary}
                                </p>

                                <div className="flex gap-4">
                                    {/* Link automatically uses the 'slug' from data */}
                                    <Link
                                        href={`/statements/${post.slug}`}
                                        className="flex items-center gap-2 bg-accent text-white px-6 py-3 rounded-sm font-bold uppercase text-xs tracking-widest hover:bg-gold hover:text-accent transition-colors shadow-md w-fit"
                                    >
                                        <Megaphone size={16} /> Read Full Statement
                                    </Link>
                                </div>
                            </div>

                            {/* RIGHT: IMAGE PREVIEW */}
                            <div className="lg:w-1/2 bg-gray-100 relative min-h-[250px] lg:min-h-auto border-l border-gray-100">
                                {/* 
       FIX: Changed "relative" to "absolute inset-0"
       This forces the link to stretch to fill the 250px minimum height 
       defined in the parent div above. 
    */}
                                <Link href={`/statements/${post.slug}`} className="absolute inset-0 w-full h-full group/img block">
                                    <Image
                                        src={post.image}
                                        alt={post.title}
                                        fill
                                        /* FIX: Added "sizes" to stop the Console Warnings */
                                        sizes="(max-width: 1024px) 100vw, 50vw"
                                        className="object-cover object-top opacity-95 group-hover/img:scale-105 transition-transform duration-700"
                                    />
                                    <div className="absolute inset-0 bg-accent/20 group-hover/img:bg-transparent transition-colors duration-300" />
                                </Link>
                            </div>
                        </div>
                    </FadeIn>
                ))}
            </div>
        </div>
    );
}