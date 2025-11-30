import FadeIn from "@/components/FadeIn";
import { FileText, Lock, Download, Clock, ExternalLink } from "lucide-react";

export default function Documents() {
    return (
        // UPDATED: Increased padding-top to pt-36 (mobile) and pt-48 (desktop)
        // This pushes content down so it clears the Navbar completely.
        <div className="pt-36 md:pt-48 px-6 container mx-auto pb-20 relative min-h-screen">

            {/* BACKGROUND ELEMENTS */}
            <div className="fixed top-[-10%] left-[20%] w-[300px] md:w-[500px] h-[300px] md:h-[500px] bg-accent/5 rounded-full blur-[60px] md:blur-[80px] pointer-events-none z-[-1]" />
            <div className="fixed inset-0 bg-gray-50/50 z-[-2] pointer-events-none" />

            {/* HEADER SECTION */}
            <FadeIn>
                <div className="border-l-4 border-accent pl-10 md:pl-12 pr-6 mb-12 md:mb-20">
                    <h1 className="font-display font-black text-4xl sm:text-5xl md:text-6xl uppercase mb-4 text-accent leading-[0.9]">
                        Public <br className="md:hidden" /> Documents
                    </h1>
                    <p className="text-gray-600 max-w-xl text-base md:text-lg font-medium">
                        URSA is committed to transparency. This page houses the key public documents created during the interim period.
                    </p>
                </div>
            </FadeIn>

            <div className="grid gap-6 max-w-4xl">

                {/* --- DOCUMENT 1: CONSTITUTION --- */}
                <FadeIn delay={0.1}>
                    <div className="bg-white shadow-md border-t-4 border-gold p-6 md:p-8 rounded-sm flex flex-col md:flex-row items-start md:items-center justify-between group hover:shadow-xl hover:-translate-y-1 transition-all duration-300 border border-gray-100">

                        {/* Icon and Text */}
                        <div className="flex gap-4 items-start w-full md:w-auto">
                            <div className="bg-green-50 p-3 md:p-4 rounded-full text-accent group-hover:bg-accent group-hover:text-gold transition-colors duration-300 shrink-0 mt-1 md:mt-0">
                                <FileText size={24} className="md:w-7 md:h-7" />
                            </div>
                            <div>
                                <h3 className="font-display font-bold text-xl md:text-2xl text-accent group-hover:text-green-900 transition-colors leading-tight">
                                    The Constitution
                                </h3>
                                <p className="text-gray-500 mt-1 text-sm md:text-base leading-snug">
                                    Defines URSA&apos;s purpose, structure, roles, and rules.
                                </p>
                            </div>
                        </div>

                        {/* Button */}
                        <a
                            href="https://drive.google.com/file/d/1X3WrWgAOpED4uk3CYa3cTK8j7zuYHdUh/view"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="w-full md:w-auto mt-6 md:mt-0 flex items-center justify-center gap-2 px-6 py-3 bg-accent text-white rounded-sm text-sm font-bold uppercase hover:bg-gold hover:text-accent transition-all shadow-md"
                        >
                            View / Download <ExternalLink size={16} />
                        </a>
                    </div>
                </FadeIn>

                {/* --- BYLAWS --- */}
                <FadeIn delay={0.2}>
                    <div className="bg-white/60 border border-gray-200 p-6 md:p-8 rounded-sm flex flex-col md:flex-row items-start md:items-center justify-between opacity-80 cursor-not-allowed">

                        <div className="flex gap-4 items-start w-full md:w-auto">
                            <div className="bg-gray-100 p-3 md:p-4 rounded-full text-gray-400 shrink-0 mt-1 md:mt-0">
                                <Clock size={24} className="md:w-7 md:h-7" />
                            </div>
                            <div>
                                <div className="flex flex-wrap items-center gap-2 md:gap-3 mb-1">
                                    <h3 className="font-display font-bold text-xl md:text-2xl text-gray-400">General Bylaws</h3>
                                    <span className="text-[10px] font-black uppercase tracking-widest bg-gray-200 text-gray-500 px-2 py-1 rounded-sm border border-gray-300">
                                        Coming Soon
                                    </span>
                                </div>
                                <p className="text-gray-400 mt-1 text-sm md:text-base leading-snug">
                                    Outlines rules for elections, membership, and meetings.
                                </p>
                            </div>
                        </div>
                        <div className="hidden md:block text-gray-300">
                            <Lock size={24} />
                        </div>
                    </div>
                </FadeIn>

                {/* --- FINANCE --- */}
                <FadeIn delay={0.3}>
                    <div className="bg-white/60 border border-gray-200 p-6 md:p-8 rounded-sm flex flex-col md:flex-row items-start md:items-center justify-between opacity-80 cursor-not-allowed">
                        <div className="flex gap-4 items-start w-full md:w-auto">
                            <div className="bg-gray-100 p-3 md:p-4 rounded-full text-gray-400 shrink-0 mt-1 md:mt-0">
                                <Clock size={24} className="md:w-7 md:h-7" />
                            </div>
                            <div>
                                <div className="flex flex-wrap items-center gap-2 md:gap-3 mb-1">
                                    <h3 className="font-display font-bold text-xl md:text-2xl text-gray-400">Finance Policy</h3>
                                    <span className="text-[10px] font-black uppercase tracking-widest bg-gray-200 text-gray-500 px-2 py-1 rounded-sm border border-gray-300">
                                        Coming Soon
                                    </span>
                                </div>
                                <p className="text-gray-400 mt-1 text-sm md:text-base leading-snug">
                                    Budgets and fiscal oversight details.
                                </p>
                            </div>
                        </div>
                        <div className="hidden md:block text-gray-300"><Lock size={24} /></div>
                    </div>
                </FadeIn>

            </div>
        </div>
    );
}