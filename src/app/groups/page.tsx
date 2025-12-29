import FadeIn from "@/components/FadeIn";
import GroupDirectory from "@/components/GroupDirectory";

export const metadata = {
    title: "Student Groups & Societies | URSA",
    description: "Directory of U of R student societies, clubs, and federated colleges.",
};

export default function Groups() {
    return (
        <div className="pt-32 pb-24 px-6 container mx-auto relative min-h-screen">

            {/* --- BACKGROUND THEME (Unified Standard) --- */}
            <div className="fixed inset-0 bg-gray-50/50 z-[-2] pointer-events-none" />
            <div className="fixed top-0 right-0 w-[600px] h-[600px] bg-gold/10 rounded-full blur-[100px] pointer-events-none z-[-1]" />
            <div className="fixed bottom-0 left-0 w-[800px] h-[800px] bg-accent/5 rounded-full blur-[120px] pointer-events-none z-[-1]" />

            {/* HEADER TEXT (Reduced bottom margin since directory is next) */}
            <FadeIn>
                <div className="border-l-4 border-accent pl-8 mb-12">
                    <h1 className="font-display font-black text-5xl md:text-6xl uppercase mb-4 text-accent">Student Groups</h1>
                    <p className="text-gray-600 max-w-2xl text-lg font-medium">
                        Connect with your faculty representatives, explore campus clubs, and find student services.
                    </p>
                </div>
            </FadeIn>

            {/* DIRECTORY COMPONENT (The main feature) */}
            <FadeIn delay={0.2}>
                <div className="mb-8">
                    <GroupDirectory />
                </div>
            </FadeIn>

        </div>
    );
}