import FadeIn from "@/components/FadeIn";
import {
    FileText, Shield, DollarSign, ExternalLink,
    ScrollText, PenTool, Users, FileCheck, AlertCircle,
    Scale
} from "lucide-react";

export const metadata = {
    title: "Documents & Constitution",
    description: "Read the URSA Constitution, Ratification Policy, and operational documents.",
};

export default function Documents() {

    // Data list
    const otherDocs = [
        {
            title: "Confidentiality Agreement",
            desc: "Standard agreement for council members and staff regarding privacy.",
            link: "https://drive.google.com/file/d/1_R2LbkyeO1P38GkEHVWdBcKn_rZNs-XJ/view?usp=drive_link",
            icon: Shield
        },
        {
            title: "Schedule A",
            subtitle: "Council Seat Allocation",
            desc: "Breakdown of representative seats per faculty and constituency.",
            link: "https://drive.google.com/file/d/1Q6HirjJTnxnffLC6rO0Zjno2N5SH33Il/view?usp=drive_link",
            icon: Users
        },
        {
            title: "05 Ratification Policy",
            desc: "Guidelines for recognizing student groups and societies.",
            link: "https://drive.google.com/file/d/17o3WQMLgnDFmOTM9-flXI-la39DkP29E/view?usp=drive_link",
            icon: FileCheck,
            note: "Effective 2026/2027 Academic Year."
        },
        {
            title: "Ratification Consent Form",
            desc: "Required form for groups seeking ratification under Policy 05.",
            link: "https://drive.google.com/file/d/1Kv-tXIgbBUkSwsO6-EbNAscpMjI-WuBb/view?usp=drive_link",
            icon: PenTool
        },
        {
            title: "Conflict of Interest",
            desc: "Declaration form to ensure transparency and ethical conduct.",
            link: "https://drive.google.com/file/d/1pYYCuYM5rPFPfJohPmVfn9gTKgXp59R7/view?usp=drive_link",
            icon: ScrollText
        },
        {
            title: "Schedule E",
            subtitle: "Financial Support",
            desc: "Framework for funding distribution to student groups.",
            link: "https://drive.google.com/file/d/14_eh4Fm6bWXrsoOqPpJfOXZMg9B6YEcM/view?usp=drive_link",
            icon: DollarSign
        }
    ];

    return (
        <div className="pt-36 md:pt-48 px-6 container mx-auto pb-24 relative min-h-screen">

            {/* --- CLEAN BACKGROUNDS (No Texture) --- */}
            <div className="fixed inset-0 bg-gray-50/50 z-[-2] pointer-events-none" />
            <div className="fixed top-0 right-0 w-[600px] h-[600px] bg-gold/10 rounded-full blur-[100px] pointer-events-none z-[-1]" />
            <div className="fixed bottom-0 left-0 w-[800px] h-[800px] bg-accent/5 rounded-full blur-[120px] pointer-events-none z-[-1]" />

            {/* HEADER */}
            <FadeIn>
                <div className="border-l-4 border-accent pl-10 md:pl-12 pr-6 mb-16">
                    <h1 className="font-display font-black text-4xl sm:text-5xl md:text-6xl uppercase mb-4 text-accent leading-[0.9]">
                        Public <br className="md:hidden" /> Documents
                    </h1>
                    <p className="text-gray-600 max-w-xl text-base md:text-lg font-medium">
                        Official records committed to transparency. This page houses the Constitution, Policies, and operational forms.
                    </p>
                </div>
            </FadeIn>

            {/* --- PRIMARY CONSTITUTION CARD --- */}
            <FadeIn delay={0.1}>
                <div className="max-w-6xl mb-24 bg-white shadow-xl border border-gray-100 rounded-sm flex flex-col md:flex-row items-stretch overflow-hidden group hover:shadow-2xl transition-all duration-300">
                    <div className="hidden md:block w-4 bg-accent group-hover:bg-gold transition-colors duration-500"></div>
                    <div className="p-8 md:p-12 flex-grow flex flex-col justify-center">
                        <div className="flex gap-4 items-center mb-6">
                            <div className="p-3 bg-green-50 text-accent rounded-full">
                                <FileText size={32} />
                            </div>
                            <span className="font-display font-bold text-accent uppercase tracking-widest text-sm">Governing Document</span>
                        </div>
                        <h3 className="font-display font-black text-3xl md:text-5xl text-accent mb-4">
                            The Constitution
                        </h3>
                        <p className="text-gray-600 text-lg leading-relaxed max-w-2xl">
                            The supreme governing document defining URSA&apos;s purpose, structure, roles, and legislative powers.
                        </p>
                    </div>
                    <div className="bg-gray-50 p-8 md:w-80 flex flex-col justify-center items-center border-l border-gray-100 group-hover:border-gold/30 transition-colors">
                        <a
                            href="https://drive.google.com/file/d/1X3WrWgAOpED4uk3CYa3cTK8j7zuYHdUh/view"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="w-full px-6 py-4 bg-accent text-white rounded-sm text-sm font-black uppercase hover:bg-gold hover:text-accent transition-all shadow-md tracking-widest flex items-center justify-between"
                        >
                            Read File <ExternalLink size={18} />
                        </a>
                        <p className="text-xs text-gray-400 mt-4 text-center">PDF Format</p>
                    </div>
                </div>
            </FadeIn>

            {/* --- DIVIDER --- */}
            <div className="w-full flex items-center justify-center gap-2 md:gap-4 py-8 mb-4">
                <div className="h-[2px] bg-gradient-to-r from-transparent to-gold/50 w-12 md:flex-grow md:max-w-[300px]"></div>
                <div className="text-accent bg-white p-2 rounded-full shadow-sm border border-gold/30 shrink-0">
                    <Scale size={24} />
                </div>
                <div className="h-[2px] bg-gradient-to-l from-transparent to-gold/50 w-12 md:flex-grow md:max-w-[300px]"></div>
            </div>

            {/* --- TITLE --- */}
            <FadeIn delay={0.2}>
                <div className="flex flex-col items-center text-center mb-16">
                    <span className="font-bold text-gold uppercase tracking-widest text-xs md:text-sm mb-4">
                        Operational & Legal
                    </span>
                    <h2 className="font-display font-black text-4xl sm:text-5xl md:text-6xl text-accent mb-6">
                        Policies & Forms
                    </h2>
                    <div className="w-16 md:w-24 h-1 bg-gray-300 rounded-full"></div>
                </div>
            </FadeIn>

            {/* --- CARD GRID --- */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-10">
                {otherDocs.map((doc, i) => (
                    <FadeIn key={i} delay={0.2 + (i * 0.1)}>
                        <a
                            href={doc.link}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="group flex flex-col h-full bg-white shadow-sm border border-gray-200/50 border-t-[6px] border-t-accent hover:shadow-2xl hover:-translate-y-2 transition-all duration-300 p-8 md:p-10 rounded-sm"
                        >
                            {/* HEADER */}
                            <div className="flex justify-between items-start mb-6">
                                <div>
                                    {doc.subtitle && (
                                        <span className="text-[10px] font-bold text-gold uppercase tracking-widest mb-1 block">
                                            {doc.subtitle}
                                        </span>
                                    )}
                                    <h3 className="font-display font-bold text-xl md:text-2xl uppercase text-accent group-hover:text-gold transition-colors">
                                        {doc.title}
                                    </h3>
                                </div>
                                <div className="p-3 bg-gray-50 shadow-inner rounded-full text-accent group-hover:text-gold transition-colors shrink-0 ml-4">
                                    <doc.icon size={24} className="md:w-7 md:h-7" />
                                </div>
                            </div>

                            {/* BODY TEXT */}
                            <p className="text-gray-600 leading-relaxed font-medium text-sm md:text-base mb-6 flex-grow">
                                {doc.desc}
                            </p>

                            {/* FOOTER AREA */}
                            <div className="mt-auto">

                                {doc.note && (
                                    <div className="mb-4 bg-gold/10 p-3 rounded-sm border border-gold/30 flex gap-3 items-start">
                                        <AlertCircle size={16} className="text-yellow-700 shrink-0 mt-[2px]" />
                                        <span className="text-xs font-bold text-yellow-800 leading-snug">
                                            {doc.note}
                                        </span>
                                    </div>
                                )}

                                {/* VIEW DOCUMENT LINK */}
                                {/* Changed: text-accent (always green), hover:text-gold */}
                                <div className="flex items-center gap-2 text-xs font-bold text-accent group-hover:text-gold uppercase tracking-widest transition-colors pt-4 border-t border-gray-50">
                                    View Document <ExternalLink size={14} />
                                </div>
                            </div>

                        </a>
                    </FadeIn>
                ))}
            </div>

        </div>
    );
}