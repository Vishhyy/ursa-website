import FadeIn from "@/components/FadeIn";
import Link from "next/link";
import { allStatements } from "@/data/statements";
import { notFound } from "next/navigation";
import { ArrowLeft, CalendarDays } from "lucide-react";
import { Metadata } from "next";
import StatementActions from "@/components/StatementActions";
// (You can remove Share2 and Printer from the lucide-react import in this file now, they are used in the other file)
// UPDATED TYPE: params is now a Promise in Next.js 15
type Props = {
    params: Promise<{ slug: string }>
};

// 1. DYNAMIC METADATA (Async Fix)
export async function generateMetadata(props: Props): Promise<Metadata> {
    const params = await props.params;
    const post = allStatements.find((s) => s.slug === params.slug);

    if (!post) return { title: "Statement Not Found" };

    return {
        title: post.title, // <--- Just the title. Next.js adds " | URSA" automatically.
        description: post.summary,
    };
}

// 2. THE PAGE COMPONENT (Async Fix)
export default async function StatementPage(props: Props) {
    const params = await props.params; // <--- WE MUST AWAIT IT

    // Now we can use params.slug safely
    const post = allStatements.find((s) => s.slug === params.slug);

    if (!post) {
        notFound();
    }

    return (
        <div className="pt-32 pb-24 px-6 container mx-auto relative min-h-screen">

            <div className="fixed inset-0 bg-gray-50/50 z-[-2] pointer-events-none" />
            <div className="fixed top-0 right-0 w-[600px] h-[600px] bg-gold/5 rounded-full blur-[100px] pointer-events-none z-[-1]" />

            <FadeIn>
                <div className="max-w-4xl mx-auto">

                    <Link href="/statements" className="inline-flex items-center gap-2 text-gray-500 hover:text-accent mb-8 font-bold uppercase text-xs tracking-widest transition-colors">
                        <ArrowLeft size={16} /> Back to Press Room
                    </Link>

                    <div className="bg-white p-8 md:p-16 shadow-2xl border-t-8 border-accent rounded-sm relative">

                        {/* Header */}
                        <div className="border-b border-gray-100 pb-8 mb-8">
                            <span className="font-bold text-gold uppercase tracking-widest text-sm mb-2 block">Official Statement</span>
                            <h1 className="font-display font-black text-3xl md:text-5xl text-accent mb-4 leading-tight">
                                {post.title}
                            </h1>
                            <div className="flex items-center gap-3 text-sm font-bold text-gray-400 uppercase tracking-wider">
                                <CalendarDays size={16} />
                                {post.date}
                            </div>
                        </div>

                        {/* Content */}
                        <div className="prose prose-lg text-gray-700 leading-relaxed font-medium max-w-none">
                            {post.content}
                        </div>

                        {/* Interactive Footer */}
                        <StatementActions title={post.title} />

                    </div>
                </div>
            </FadeIn>
        </div>
    );
}