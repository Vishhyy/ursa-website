import FadeIn from "@/components/FadeIn";
import { FileText, Lock, Download, Clock } from "lucide-react";

export default function Documents() {
    return (
        <div className="pt-24 md:pt-32 px-6 container mx-auto pb-20 relative min-h-screen">

            {/* --- BACKGROUND --- */}
            <div className="fixed top-[-10%] left-[20%] w-[500px] h-[500px] bg-accent/5 rounded-full blur-[80px] pointer-events-none z-[-1]" />
            <div className="fixed inset-0 bg-gray-50/50 z-[-2] pointer-events-none" />

            <FadeIn>
                <div className="border-l-4 border-accent pl-6 md:pl-8 mb-12 md:mb-20">
                    {/* Font reduced for mobile */}
                    <h1 className="font-display font-black text-4xl md:text-6xl uppercase mb-4 text-accent break-words">
                        Public Documents
                    </h1>
                    <p className="text-gray-600 max-w-xl text-base md:text-lg">
                        URSA is committed to transparency. This page houses the key public documents created during the interim period.
                    </p>
                </div>
            </FadeIn>

            <div className="grid gap-6 max-w-4xl">
                {/* DOCUMENT 1: CONSTITUTION (Active) */}
                <FadeIn delay={0.1}>
                    <div className="bg-white shadow-md border-t-4 border-gold p-6 md:p-8 rounded-sm flex flex-col md:flex-row items-start md:items-center justify-between group hover:shadow-xl hover:-translate-y-1 transition-all duration-300 cursor-pointer border border-gray-100">

                        <div className="flex gap-4 md:gap-6 items-start md:items-center mb-4 md:mb-0">
                            <div className="bg-green-50 p-3 md:p-4 rounded-full text-accent group-hover:bg-accent group-hover:text-gold transition-colors duration-300 shrink-0">
                                <FileText size={24} className="md:w-7 md:h-7" />
                            </div>
                            <div>
                                <h3 className="font-display font-bold text-xl md:text-2xl text-accent group-hover:text-green-900 transition-colors leading-tight">The Constitution</h3>
                                <p className="text-gray-500 mt-1 text-sm md:text-base">Defines URSA&apos;s purpose, structure, roles, and rules.</p>
                            </div>
                        </div>

                        <button className="w-full md:w-auto mt-2 md:mt-0 flex items-center justify-center gap-2 px-8 py-3 bg-accent text-white rounded-sm text-sm font-bold uppercase hover:bg-gold hover:text-accent transition-all shadow-md">
                            Download <Download size={16} />
                        </button>
                    </div>
                </FadeIn>

                {/* DOCUMENT 2: BYLAWS (Coming Soon) */}
                <FadeIn delay={0.2}>
                    <div className="bg-white/60 border border-gray-200 p-6 md:p-8 rounded-sm flex flex-col md:flex-row items-start md:items-center justify-between opacity-80 cursor-not-allowed">

                        <div className="flex gap-4 md:gap-6 items-start md:items-center w-full">
                            <div className="bg-gray-100 p-3 md:p-4 rounded-full text-gray-400 shrink-0">
                                <Clock size={24} className="md:w-7 md:h-7" />
                            </div>
                            <div className="flex-1">
                                <div className="flex flex-wrap items-center gap-2 md:gap-3 mb-1">
                                    <h3 className="font-display font-bold text-xl md:text-2xl text-gray-400">General Bylaws</h3>
                                    <span className="text-[10px] font-black uppercase tracking-widest bg-gray-200 text-gray-500 px-2 py-1 rounded-sm">Coming Soon</span>
                                </div>
                                <p className="text-gray-400 text-sm md:text-base leading-tight">Outlines rules for elections, membership, and meetings.</p>
                            </div>
                        </div>

                        <div className="hidden md:block text-gray-300">
                            <Lock size={24} />
                        </div>
                    </div>
                </FadeIn>

                {/* DOCUMENT 3: FINANCE (Coming Soon) */}
                <FadeIn delay={0.3}>
                    <div className="bg-white/60 border border-gray-200 p-6 md:p-8 rounded-sm flex flex-col md:flex-row items-start md:items-center justify-between opacity-80 cursor-not-allowed">

                        <div className="flex gap-4 md:gap-6 items-start md:items-center w-full">
                            <div className="bg-gray-100 p-3 md:p-4 rounded-full text-gray-400 shrink-0">
                                <Clock size={24} className="md:w-7 md:h-7" />
                            </div>
                            <div className="flex-1">
                                <div className="flex flex-wrap items-center gap-2 md:gap-3 mb-1">
                                    <h3 className="font-display font-bold text-xl md:text-2xl text-gray-400">Finance Policy</h3>
                                    <span className="text-[10px] font-black uppercase tracking-widest bg-gray-200 text-gray-500 px-2 py-1 rounded-sm">Coming Soon</span>
                                </div>
                                <p className="text-gray-400 text-sm md:text-base leading-tight">Budgets and fiscal oversight details.</p>
                            </div>
                        </div>

                        <div className="hidden md:block text-gray-300">
                            <Lock size={24} />
                        </div>
                    </div>
                </FadeIn>

            </div>
        </div>
    );
}