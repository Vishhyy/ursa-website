"use client"; // This tells Next.js to run this code in the browser

import { Share2, Printer, Check } from "lucide-react";
import { useState } from "react";

export default function StatementActions({ title }: { title: string }) {
    const [copied, setCopied] = useState(false);

    const handlePrint = () => {
        window.print();
    };

    const handleShare = async () => {
        const url = window.location.href;

        // Try the native mobile share menu first (iOS/Android)
        if (navigator.share) {
            try {
                await navigator.share({
                    title: title,
                    text: `Check out this statement from URSA: ${title}`,
                    url: url,
                });
            } catch (err) {
                console.log("Share cancelled");
            }
        } else {
            // Fallback for Desktop: Copy URL to clipboard
            navigator.clipboard.writeText(url);
            setCopied(true);
            // Reset the "Copied" message after 2 seconds
            setTimeout(() => setCopied(false), 2000);
        }
    };

    return (
        <div className="mt-12 pt-8 border-t border-gray-100 flex gap-6">

            <button
                onClick={handleShare}
                className="flex items-center gap-2 text-xs font-bold uppercase text-gray-400 hover:text-accent transition-colors"
            >
                {copied ? (
                    <>
                        <Check size={16} className="text-green-500" />
                        <span className="text-green-600">Link Copied!</span>
                    </>
                ) : (
                    <>
                        <Share2 size={16} /> Share Link
                    </>
                )}
            </button>

            <button
                onClick={handlePrint}
                className="flex items-center gap-2 text-xs font-bold uppercase text-gray-400 hover:text-accent transition-colors"
            >
                <Printer size={16} /> Print Statement
            </button>

        </div>
    );
}