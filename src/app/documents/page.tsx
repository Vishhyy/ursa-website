import FadeIn from "@/components/FadeIn";
import { FileText, Lock, Download, Clock, ExternalLink } from "lucide-react";

export default function Documents() {
    return (
        <div className="pt-32 px-6 container mx-auto pb-20 relative min-h-screen">

            {/* BACKGROUND */}
            <div className="fixed top-[-10%] left-[20%] w-[500px] h-[500px] bg-accent/5 rounded-full blur-[80px] pointer-events-none z-[-1]" />
            <div className="fixed inset-0 bg-gray-50/50 z-[-2] pointer-events-none" />

            <FadeIn>
                <div className="border-l-4 border-accent pl-8 mb-20">
                    <h1 className="font-display font-black text-6xl uppercase mb-4 text-accent">Public Documents</h1>
                    <p className="text-gray-600 max-w-xl text-lg">
                        URSA is committed to transparency. This page houses the key public documents created during the interim period.
                    </p>
                </div>
            </FadeIn>

            <div className="grid gap-6 max-w-4xl">
                {/* DOCUMENT 1: CONSTITUTION (LINKED TO DRIVE) */}
                <FadeIn delay={0.1}>
                    <div className="bg-white shadow-md border-t-4 border-gold p-8 rounded-sm flex flex-col md:flex-row items-start md:items-center justify-between group hover:shadow-xl hover:-translate-y-1 transition-all duration-300 cursor-pointer border border-gray-100">
                        <div className="flex gap-6 items-center">
                            <div className="bg-green-50 p-4 rounded-full text-accent group-hover:bg-accent group-hover:text-gold transition-colors duration-300">
                                <FileText size={28} />
                            </div>
                            <div>
                                <h3 className="font-display font-bold text-2xl text-accent group-hover:text-green-900 transition-colors">The Constitution</h3>
                                <p className="text-gray-500 mt-1">Defines URSA&apos;s purpose, structure, roles, and rules.</p>
                            </div>
                        </div>

                        {/* Updated Button to point to Google Drive */}
                        <a
                            href="https://drive.google.com/file/d/1X3WrWgAOpED4uk3CYa3cTK8j7zuYHdUh/view"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="mt-6 md:mt-0 flex items-center gap-2 px-8 py-3 bg-accent text-white rounded-sm text-sm font-bold uppercase hover:bg-gold hover:text-accent transition-all shadow-md"
                        >
                            View / Download <ExternalLink size={16} />
                        </a>
                    </div>
                </FadeIn>

                {/* BYLAWS */}
                <FadeIn delay={0.2}>
                    <div className="bg-white/60 border border-gray-200 p-8 rounded-sm flex flex-col md:flex-row items-center justify-between opacity-80 cursor-not-allowed">
                        <div className="flex gap-6 items-center">
                            <div className="bg-gray-100 p-4 rounded-full text-gray-400">
                                <Clock size={28} />
                            </div>
                            <div>
                                <div className="flex items-center gap-3">
                                    <h3 className="font-display font-bold text-2xl text-gray-400">General Bylaws</h3>
                                    <span className="text-[10px] font-black uppercase tracking-widest bg-gray-200 text-gray-500 px-2 py-1 rounded-sm">Coming Soon</span>
                                </div>
                                <p className="text-gray-400 mt-1">Outlines rules for elections, membership, and meetings.</p>
                            </div>
                        </div>
                        <div className="hidden md:block text-gray-300"><Lock size={24} /></div>
                    </div>
                </FadeIn>

                {/* FINANCE */}
                <FadeIn delay={0.3}>
                    <div className="bg-white/60 border border-gray-200 p-8 rounded-sm flex flex-col md:flex-row items-center justify-between opacity-80 cursor-not-allowed">
                        <div className="flex gap-6 items-center">
                            <div className="bg-gray-100 p-4 rounded-full text-gray-400">
                                <Clock size={28} />
                            </div>
                            <div>
                                <div className="flex items-center gap-3">
                                    <h3 className="font-display font-bold text-2xl text-gray-400">Finance Policy</h3>
                                    <span className="text-[10px] font-black uppercase tracking-widest bg-gray-200 text-gray-500 px-2 py-1 rounded-sm">Coming Soon</span>
                                </div>
                                <p className="text-gray-400 mt-1">Budgets and fiscal oversight details.</p>
                            </div>
                        </div>
                        <div className="hidden md:block text-gray-300"><Lock size={24} /></div>
                    </div>
                </FadeIn>
            </div>
        </div>
    );
}