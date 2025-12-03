import FadeIn from "@/components/FadeIn";
import Image from "next/image";

// UPDATED: Used a highly stable Engineering stock photo (Industrial/Tech vibe)
const groups = [
    {
        name: "Engineering Society",
        image: "https://images.unsplash.com/photo-1518770660439-4636190af475?q=80&w=1000&auto=format&fit=crop"
    },
    {
        name: "Science Society",
        image: "https://images.unsplash.com/photo-1532094349884-543bc11b234d?q=80&w=1000&auto=format&fit=crop"
    },
    {
        name: "Arts Students Assoc.",
        image: "https://images.unsplash.com/photo-1460661419201-fd4cecdf8a8b?q=80&w=1000&auto=format&fit=crop"
    },
    {
        name: "Business Society",
        image: "https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?q=80&w=1000&auto=format&fit=crop"
    },
    {
        name: "Nursing Society",
        image: "https://images.unsplash.com/photo-1576091160399-112ba8d25d1d?q=80&w=1000&auto=format&fit=crop"
    },
    {
        name: "Education Society",
        image: "https://images.unsplash.com/photo-1503676260728-1c00da094a0b?q=80&w=1000&auto=format&fit=crop"
    }
];

export default function Groups() {
    // Using Canadian Holiday calendar as placeholder until you add your specific URSA one
    const googleCalendarUrl = "https://calendar.google.com/calendar/embed?src=urstudentassociation%40gmail.com&ctz=America%2FRegina&color=%23004F2E&showTitle=0&showPrint=0&showTabs=0&showCalendars=0";

    return (
        <div className="pt-32 pb-20 px-6 container mx-auto relative min-h-screen">

            {/* --- AMBIENT BG --- */}
            <div className="fixed top-0 left-0 w-[500px] h-[500px] bg-accent/5 rounded-full blur-[100px] pointer-events-none z-[-1]" />
            <div className="fixed bottom-0 right-0 w-[700px] h-[700px] bg-gold/5 rounded-full blur-[120px] pointer-events-none z-[-1]" />
            <div className="fixed inset-0 bg-gray-50/50 z-[-2] pointer-events-none" />

            {/* HEADER */}
            <FadeIn>
                <div className="border-l-4 border-accent pl-8 mb-20">
                    <h1 className="font-display font-black text-6xl uppercase mb-4 text-accent">Student Groups</h1>
                    <p className="text-gray-600 max-w-2xl text-lg">
                        Connect with your faculty representatives and campus communities.
                    </p>
                </div>
            </FadeIn>

            {/* GRID */}
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 mb-24">
                {groups.map((g, i) => (
                    <FadeIn key={i} delay={i * 0.05}>
                        <div className="relative aspect-video rounded-lg overflow-hidden group cursor-pointer shadow-lg hover:shadow-2xl transition-all duration-500 border border-gray-100">
                            <Image
                                src={g.image}
                                alt={g.name}
                                fill
                                className="object-cover group-hover:scale-110 transition-transform duration-700"
                            />
                            <div className="absolute inset-0 bg-accent/80 group-hover:bg-accent/70 transition-colors duration-300" />
                            <div className="absolute inset-0 flex flex-col items-center justify-center p-4">
                                <span className="font-display font-black text-white text-xl text-center uppercase tracking-wide drop-shadow-md transform translate-y-2 group-hover:translate-y-0 transition-transform duration-300">{g.name}</span>
                                <div className="w-0 h-1 bg-gold mt-4 group-hover:w-16 transition-all duration-300 rounded-full" />
                            </div>
                        </div>
                    </FadeIn>
                ))}
            </div>

            {/* CALENDAR */}
            {/* <FadeIn>
                <div className="bg-white/80 backdrop-blur-md border-t-8 border-accent shadow-xl rounded-lg overflow-hidden p-6 md:p-10">
                    <div className="flex flex-col md:flex-row justify-between items-start md:items-end mb-8 pb-4 border-b border-gray-200">
                        <div>
                            <h2 className="font-display font-bold text-3xl md:text-4xl text-accent mb-2">Event Calendar</h2>
                            <p className="text-gray-500">Live updates from URSA and Campus Groups.</p>
                        </div>
                        <a href="https://calendar.google.com" target="_blank" className="mt-4 md:mt-0 px-6 py-2 bg-gold text-accent font-bold uppercase text-xs tracking-widest hover:bg-accent hover:text-white transition-colors rounded-sm">+ Add to Google</a>
                    </div>
                    <div className="w-full h-[600px] bg-gray-50 rounded-sm border border-gray-200 relative">
                        <iframe src={googleCalendarUrl} style={{ border: 0 }} width="100%" height="100%" frameBorder="0" scrolling="no" className="absolute inset-0 w-full h-full"></iframe>
                    </div>
                </div>
            </FadeIn> */}
        </div>
    );
}