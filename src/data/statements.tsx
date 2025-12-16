import { ReactNode } from "react";

export type Statement = {
    slug: string;
    title: string;
    date: string;
    summary: string;
    image: string;
    content: ReactNode;
};

export const allStatements: Statement[] = [
    // --- 1. NEW VICTORY STATEMENT (Dec 16) ---
    {
        slug: "referendum-results",
        title: "Official Statement: Referendum Victory",
        date: "December 16, 2025",
        image: "/statements/statement-dec16.jpg",
        summary: "URSA is honoured to announce that students have voted >91% in favour of recognizing URSA as the new representative body.",
        content: (
            <>
                <div className="mb-8 border-b-2 border-gray-100 pb-6">
                    <p className="text-xs font-bold text-gray-400 uppercase tracking-widest mb-1">
                        For Immediate Release
                    </p>
                    <p className="text-xl font-bold text-black">
                        Regina, Saskatchewan
                    </p>
                </div>

                <p className="mb-6">
                    After four days of voting, the University of Regina has announced today that student voters have indicated support for URSA becoming their new representative body on campus, by a margin <strong>slightly over 91% in favour</strong> among those who voted. We are extremely grateful for this support, and for the trust that has been placed in us, and will work hard to live up to that trust!
                </p>

                <h3 className="text-2xl font-display font-bold text-accent mt-10 mb-4">A Major Victory for Students</h3>
                <p className="mb-6">
                    University of Regina recognition of URSA is extremely important and represents a major victory for students! This will allow us to commence work on building out the new organization, specifically:
                </p>

                <ul className="list-disc pl-6 mb-8 space-y-2 marker:text-gold">
                    <li>Establishing the <strong>General Council</strong> to ensure oversight and representation.</li>
                    <li>Completing official incorporation.</li>
                    <li>Negotiating the return of student funds and spaces to student control.</li>
                    <li>Preparing for <strong>March General Elections!</strong></li>
                </ul>

                <p className="mb-8">
                    We will update you on all of the above in the coming weeks and months, and hope to provide certainty and clarity for students in the process!
                </p>

                <div className="my-10 p-8 bg-accent/5 border-l-8 border-accent rounded-r-lg">
                    <p className="font-bold text-accent text-lg italic leading-relaxed">
                        "Crucially, this vote also represents a repudiation of URSU, and its problematic actions in recent memory, in favour of building something new with the prevention of exploitation, exclusion, and corruption front of mind."
                    </p>
                </div>

                <p className="mb-6">
                    This sends a strong message to our community and to institutions across the country. UofR students are not, and will not be, defined by URSU or its scandals. We will do what we can, within our new capacity, to ensure students see the accountability they deserve!
                </p>

                <h3 className="text-2xl font-display font-bold text-accent mt-10 mb-4">A Constellation of Voices</h3>

                <p className="mb-6">
                    We would like to thank all students, student groups, and community supporters who have been involved in the planning and setup of URSA, and the prior campaign to hold URSU accountable! This is a great victory for activism, and proof that a <strong>constellation of student voices</strong> can, together, bring about real and positive change!
                </p>

                <p className="mb-8">
                    Thank you to all who voted, whichever way you cast your vote. We will endeavor, over the next few months, to reinvigorate trust in student democracy and hope that the team elected in March will enjoy record turnout. Until then, please, get involved! There will be many important roles to fill in the weeks to come, and we look forward to hearing from everyone who wishes to fill them!
                </p>

                {/* UPDATED FOOTER TO MATCH OLD STYLE */}
                <div className="mt-8 pt-8 border-t border-gray-200">
                    <strong>Media Contact:</strong><br />
                    URSA Interim Executive Team<br />
                    <a href="mailto:urstudentassociation@gmail.com" className="text-accent hover:text-gold font-bold transition-colors">urstudentassociation@gmail.com</a>
                </div>
            </>
        )
    },

    // --- 2. OLDER STATEMENT (Nov 26) ---
    {
        slug: "referendum-request",
        title: "URSA Requests Formal Referendum",
        date: "November 26, 2025",
        image: "/statements/statement-nov26.png",
        summary: "URSA has formally asked the University of Regina to facilitate voting on a referendum question to recognize a new representative body.",
        content: (
            <>
                <p className="mb-6">
                    We have, today, formally asked the University of Regina to facilitate voting on a referendum question that would result in recognition of URSA as the representative body of the students of the University of Regina. We look forward to their response and expect it will be forthcoming.
                </p>
                <p className="mb-6">
                    This request will, if granted, give students the first chance in quite some time to cast their vote in a manner we can be assured will bring about decisive change. We have asked that students be presented the opportunity to vote on the following question:
                </p>

                <div className="my-8 p-6 bg-accent/5 border-l-4 border-accent font-bold text-accent text-lg">
                    "Do you accept the University of Regina Students' Association as the official representative body for the students of the University of Regina, including its federated colleges, replacing the former Students' Union of the University of Regina (URSU)?"
                </div>

                <p className="mb-6">
                    We have also requested a voting period of several (four) days, including a weekend, to ensure students busy with exams have ample opportunity to vote.
                </p>

                <h3 className="text-2xl font-display font-bold text-accent mt-8 mb-4">Sending a Clear Message</h3>

                <p className="mb-6">
                    By voting in favour, students can send a clear message. We need representation, we demand our voices be heard, and we will not stand for any new student government behaving like the last.
                </p>
                <p className="mb-8">
                    We also send a clear message to the community and to institutions across the world. URSU's litany of scandals are not reflective of the University of Regina student body, the brilliant community of students and student organizations on this campus, or our ambitions.
                </p>

                <div className="my-8 p-6 bg-gray-50 border-l-4 border-gold italic text-gray-600">
                    "We look forward to hearing from you all in the coming days and weeks, and would be honoured by the chance to represent you (the students) as we work to build a new, more accountable, transparent, and strongly student-led representative organization at the UofR!"
                </div>

                <div className="mt-8 pt-8 border-t border-gray-200">
                    <strong>Media Contact:</strong><br />
                    URSA Interim Team<br />
                    <a href="mailto:urstudentassociation@gmail.com" className="text-accent hover:text-gold font-bold transition-colors">urstudentassociation@gmail.com</a>
                </div>
            </>
        )
    },
];