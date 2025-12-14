import { google } from 'googleapis';
import FadeIn from "@/components/FadeIn";
import { FileText, ExternalLink, CalendarDays } from 'lucide-react';
import { format } from 'date-fns';

export const revalidate = 3600;

export const metadata = {
    title: "Meeting Minutes",
    description: "Transparency record. Download official meeting minutes from the Executive Council.",
};

async function getMeetingMinutes() {
    try {
        const credentials = JSON.parse(process.env.GOOGLE_SERVICE_ACCOUNT_CREDENTIALS || '{}');
        if (!credentials.client_email) return [];

        const auth = new google.auth.GoogleAuth({
            credentials,
            scopes: ['https://www.googleapis.com/auth/drive.readonly'],
        });
        const drive = google.drive({ version: 'v3', auth });
        const folderId = '1QW9EFhe2CrcD6iE9FyMdCF_QS7j1Jijp'; // Your Folder ID

        const response = await drive.files.list({
            q: `'${folderId}' in parents and trashed = false`,
            fields: 'files(id, name, webViewLink, createdTime, mimeType)',
            orderBy: 'createdTime desc',
        });

        return response.data.files || [];
    } catch (error) {
        console.error("Failed to fetch meeting minutes:", error);
        return [];
    }
}

export default async function MeetingMinutes() {
    const minutes = await getMeetingMinutes();

    return (
        <div className="pt-32 px-6 container mx-auto pb-20 relative min-h-screen">

            {/* --- UNIFIED BACKGROUND THEME --- */}
            <div className="fixed inset-0 bg-gray-50/50 z-[-2] pointer-events-none" />
            <div className="fixed top-0 right-0 w-[600px] h-[600px] bg-gold/10 rounded-full blur-[100px] pointer-events-none z-[-1]" />
            <div className="fixed bottom-0 left-0 w-[800px] h-[800px] bg-accent/5 rounded-full blur-[120px] pointer-events-none z-[-1]" />

            <FadeIn>
                <div className="border-l-4 border-accent pl-8 mb-20">
                    <h1 className="font-display font-black text-5xl md:text-7xl uppercase mb-4 text-accent">Meeting Minutes</h1>
                    <p className="text-gray-600 max-w-xl text-lg">
                        Official records from URSA General and Executive meetings. Updated automatically.
                    </p>
                </div>
            </FadeIn>

            <div className="grid gap-4 max-w-4xl">
                {minutes.length > 0 ? (
                    minutes.map((file, i) => (
                        <FadeIn key={file.id} delay={i * 0.05}>
                            <a
                                href={file.webViewLink || '#'}
                                target="_blank"
                                rel="noopener noreferrer"
                                className="bg-white shadow-sm border border-gray-200 p-6 rounded-sm flex flex-col md:flex-row items-start md:items-center justify-between group hover:shadow-md hover:border-gold transition-all duration-200"
                            >
                                <div className="flex gap-5 items-center">
                                    <div className="bg-green-50 p-3 rounded-full text-accent group-hover:bg-accent group-hover:text-white transition-colors">
                                        <FileText size={24} />
                                    </div>
                                    <div>
                                        <h3 className="font-display font-bold text-lg text-gray-800 group-hover:text-accent transition-colors">{file.name}</h3>
                                        {file.createdTime && (
                                            <div className="flex items-center gap-2 text-gray-400 mt-1 text-xs font-medium uppercase tracking-wider">
                                                <CalendarDays size={12} />
                                                {format(new Date(file.createdTime), 'MMMM dd, yyyy')}
                                            </div>
                                        )}
                                    </div>
                                </div>
                                <div className="mt-4 md:mt-0 flex items-center gap-2 text-sm font-bold text-gold opacity-0 group-hover:opacity-100 transition-opacity transform translate-x-2 group-hover:translate-x-0">
                                    OPEN FILE <ExternalLink size={16} />
                                </div>
                            </a>
                        </FadeIn>
                    ))
                ) : (
                    <FadeIn>
                        <div className="bg-white/60 border-2 border-dashed border-gray-300 p-12 text-center rounded-sm">
                            <p className="text-gray-500 font-medium">No meeting minutes found.</p>
                            <p className="text-sm text-gray-400 mt-2">Check back later for updates.</p>
                        </div>
                    </FadeIn>
                )}
            </div>
        </div>
    );
}