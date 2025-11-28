import FadeIn from "@/components/FadeIn";

const leaders = [
    { name: "Matthew McStravick", role: "President", details: "4th Year, Political Science", desc: "Chief spokesperson and strategic lead." },
    { name: "Ella Gidluck", role: "VP Internal", details: "5th Year, Philosophy & Politics", desc: "Manages governance systems." },
    { name: "Matthew Reiman", role: "VP Finance", details: "5th Year, Marketing", desc: "Treasurer and financial oversight." },
    { name: "Ben Alexander", role: "VP External", details: "4th Year, Philosophy", desc: "Outreach and advocacy campaigns." },
    { name: "Kimberley Kaufman", role: "VP Student Life", details: "4th Year, Social Work", desc: "Events and campus accessibility." }
];

export default function Leadership() {
    return (
        <div className="pt-32 pb-20 px-6 container mx-auto relative min-h-screen">

            {/* --- BACKGROUND GLOWS (Soften the White) --- */}
            <div className="fixed top-0 right-0 w-[600px] h-[600px] bg-gold/10 rounded-full blur-[100px] pointer-events-none z-[-1]" />
            <div className="fixed bottom-0 left-0 w-[800px] h-[800px] bg-accent/5 rounded-full blur-[120px] pointer-events-none z-[-1]" />
            {/* Subtle off-white overlay to reduce eye strain */}
            <div className="fixed inset-0 bg-gray-50/50 z-[-2] pointer-events-none" />

            <FadeIn>
                <div className="border-l-4 border-accent pl-8 mb-20">
                    <h1 className="font-display font-black text-6xl uppercase mb-4 text-accent">Interim Team</h1>
                    <p className="text-gray-600 max-w-2xl text-lg">Guiding the setup of URSA’s governance structures.</p>
                </div>
            </FadeIn>

            <div className="grid lg:grid-cols-2 gap-8">
                {leaders.map((leader, i) => (
                    <FadeIn key={i} delay={i * 0.1}>
                        <div className="bg-white/80 backdrop-blur-sm shadow-md border-l-4 border-gold overflow-hidden flex flex-col md:flex-row h-full group hover:-translate-y-1 transition-transform">
                            <div className="bg-green-50 w-full md:w-40 h-40 md:h-auto flex items-center justify-center shrink-0">
                                <span className="font-display font-black text-6xl text-accent/20 group-hover:text-accent transition-colors">
                                    {leader.name[0]}
                                </span>
                            </div>
                            <div className="p-8">
                                <h4 className="text-gold font-bold text-xs uppercase tracking-widest mb-1">{leader.role}</h4>
                                <h3 className="font-display font-black text-2xl text-accent mb-2">{leader.name}</h3>
                                <p className="text-gray-500 italic text-sm mb-4">{leader.details}</p>
                                <p className="text-gray-700">{leader.desc}</p>
                            </div>
                        </div>
                    </FadeIn>
                ))}
            </div>
        </div>
    );
}