import FadeIn from "@/components/FadeIn";
import Image from "next/image";
import Link from "next/link"; // Add Link
import { Mail } from "lucide-react"; // Add Mail icon

// Updated data with new emails
const leaders = [
    {
        name: "Matthew McStravick",
        role: "President",
        details: "4th Year, Political Science",
        desc: "Chief spokesperson and strategic lead.",
        img: "/team/president.png",
        email: "president@ursa-students.ca"
    },
    {
        name: "Ella Gidluck",
        role: "VP Internal",
        details: "5th Year, Philosophy & Politics",
        desc: "Manages governance systems.",
        img: "/team/vp-internal.png",
        email: "vp.internal@ursa-students.ca"
    },
    {
        name: "Matthew Reiman",
        role: "VP Finance",
        details: "5th Year, Marketing",
        desc: "Treasurer and financial oversight.",
        img: "/team/vp-finance.png",
        email: "vp.finance@ursa-students.ca"
    },
    {
        name: "Ben Alexander",
        role: "VP External",
        details: "4th Year, Philosophy",
        desc: "Outreach and advocacy campaigns.",
        img: "/team/vp-external.png",
        email: "vp.external@ursa-students.ca"
    },
    {
        name: "Kimberley Kaufman",
        role: "VP Student Life",
        details: "4th Year, Social Work",
        desc: "Events and campus accessibility.",
        img: "/team/vp-student-life.png",
        email: "vp.studentlife@ursa-students.ca"
    }
];

export default function Leadership() {
    return (
        <div className="pt-32 pb-20 px-6 container mx-auto relative min-h-screen">

            {/* --- BACKGROUND --- */}
            <div className="fixed inset-0 bg-gray-50/50 z-[-2] pointer-events-none" />
            <div className="fixed top-0 right-0 w-[600px] h-[600px] bg-gold/10 rounded-full blur-[100px] pointer-events-none z-[-1]" />
            <div className="fixed bottom-0 left-0 w-[800px] h-[800px] bg-accent/5 rounded-full blur-[120px] pointer-events-none z-[-1]" />

            <FadeIn>
                <div className="border-l-4 border-accent pl-8 mb-20">
                    <h1 className="font-display font-black text-6xl uppercase mb-4 text-accent">Interim Team</h1>
                    <p className="text-gray-600 max-w-2xl text-lg">Guiding the setup of URSA’s governance structures.</p>
                </div>
            </FadeIn>

            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
                {leaders.map((leader, i) => (
                    <FadeIn key={i} delay={i * 0.1}>
                        <div className="bg-white shadow-lg rounded-md overflow-hidden flex flex-col md:flex-row h-full group transition-all duration-300 border-l-8 border-gold hover:border-accent">

                            {/* IMAGE AREA */}
                            <div className="relative w-full md:w-56 h-64 md:h-auto bg-gray-100 flex items-center justify-center shrink-0">
                                <span className="font-display font-black text-8xl text-gray-200 group-hover:text-gold/50 transition-colors">
                                    {leader.name[0]}
                                </span>
                                <Image
                                    src={leader.img}
                                    alt={leader.name}
                                    fill
                                    className="object-cover"
                                />
                            </div>

                            {/* TEXT AREA */}
                            <div className="p-8 flex flex-col justify-between">
                                <div>
                                    <h4 className="text-gold font-bold text-xs uppercase tracking-widest mb-2 group-hover:text-accent transition-colors">{leader.role}</h4>
                                    <h3 className="font-display font-black text-2xl text-accent mb-2">{leader.name}</h3>
                                    <p className="text-gray-500 italic text-sm mb-4 border-b border-gray-100 pb-4">{leader.details}</p>
                                    <p className="text-gray-700 text-sm leading-relaxed mb-6">
                                        {leader.desc}
                                    </p>
                                </div>

                                {/* --- NEW EMAIL BUTTON --- */}
                                <div className="mt-auto">
                                    <a
                                        href={`mailto:${leader.email}`}
                                        className="inline-flex items-center gap-2 px-4 py-3 bg-gray-100 border border-gray-200 text-gray-500 font-bold uppercase text-xs tracking-widest hover:bg-accent hover:text-white hover:border-accent transition-all duration-300 rounded-sm"
                                    >
                                        <Mail size={16} /> Contact {leader.name.split(' ')[0]}
                                    </a>
                                </div>
                            </div>
                        </div>
                    </FadeIn>
                ))}
            </div>
        </div>
    );
} 