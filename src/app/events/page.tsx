import FadeIn from "@/components/FadeIn";

export const metadata = {
    title: "Events Calendar",
    description: "Upcoming meetings, town halls, and social events at the University of Regina.",
};

export default function Events() {
    // 1. We insert your NEW calendar ID here
    // 2. Added 'mode=AGENDA' for mobile users (optional, but often reads better)
    // 3. To default to Month view, remove "&mode=AGENDA" from string below.
    const googleCalendarUrl = "https://calendar.google.com/calendar/embed?src=urstudentassociation%40gmail.com&ctz=America%2FRegina&color=%23004F2E&showTitle=0&showPrint=0&showTabs=1&showCalendars=0";

    return (
        <div className="pt-32 pb-20 px-6 container mx-auto relative min-h-screen">

            {/* BACKGROUND ELEMENTS */}
            <div className="fixed top-[-10%] right-[10%] w-[500px] h-[500px] bg-gold/5 rounded-full blur-[80px] pointer-events-none z-[-1]" />
            <div className="fixed inset-0 bg-gray-50/50 z-[-2] pointer-events-none" />

            <FadeIn>
                <div className="border-l-4 border-accent pl-8 mb-12">
                    <h1 className="font-display font-black text-6xl uppercase mb-4 text-accent">Events</h1>
                    <p className="text-gray-600 max-w-2xl text-lg">
                        Stay up to date with URSA meetings, town halls, and campus activities.
                    </p>
                </div>

                <div className="bg-white border-t-8 border-accent shadow-xl rounded-lg overflow-hidden p-2 md:p-8">

                    {/* Add button wrapper */}
                    <div className="flex justify-end mb-4">
                        <a href="https://calendar.google.com/calendar/u/0?cid=dXJzdHVkZW50YXNzb2NpYXRpb25AZ21haWwuY29t" target="_blank" className="text-xs font-bold text-accent bg-gold/20 px-4 py-2 rounded-sm hover:bg-gold hover:text-white transition-colors">
                            OPEN IN GOOGLE CALENDAR
                        </a>
                    </div>

                    {/* Responsive Iframe Container */}
                    <div className="relative w-full h-[700px] bg-gray-50">
                        <iframe
                            src={googleCalendarUrl}
                            style={{ border: 0 }}
                            width="100%"
                            height="100%"
                            frameBorder="0"
                            scrolling="no"
                            className="absolute inset-0"
                        ></iframe>
                    </div>
                </div>
            </FadeIn>
        </div>
    );
}