import type { Metadata, Viewport } from "next";
import { Inter, Montserrat } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
  display: 'swap',
});

const montserrat = Montserrat({
  subsets: ["latin"],
  variable: "--font-montserrat",
  display: 'swap',
});

// Static viewport settings (separate from metadata in Next.js 14)
export const viewport: Viewport = {
  themeColor: "#004F2E", // University Green
};

// DYNAMIC METADATA GENERATION
export async function generateMetadata(): Promise<Metadata> {

  // 1. Default fallback keywords (used if Google Sheets fails)
  let keywordList = [
    "URSA",
    "University of Regina",
    "Students' Association",
    "Student Governance",
    "U of R",
    "U of R Student Association",
    "Student Union",
    "Regina Student Politics",
    "Regina Student Association",
    "URSA Governance"
  ];

  try {
    // 2. Your specific Google Sheet CSV Link
    const sheetUrl = "https://docs.google.com/spreadsheets/d/e/2PACX-1vSMXfIo5-c9ou1jf46XKgj3L4bKum38o5C_esADlJJBD9BVfcxVcpSPJHJCzEt3WWUPhY1svmvGMFF7/pub?gid=0&single=true&output=csv";

    // 3. Fetch data, re-checking every 60 seconds (Time-based Revalidation)
    const res = await fetch(sheetUrl, { next: { revalidate: 60 } });

    if (res.ok) {
      const csvText = await res.text();

      // 4. Parse CSV
      // Split into rows by new line
      const rows = csvText.split("\n");

      // If we have more than just a header row (assuming Row 2 has the data)
      if (rows.length > 1) {
        // Split Row 2 by commas
        // .trim() removes spaces, .replace() removes generic CSV quotes
        const dynamicKeywords = rows[1].split(',').map(k => k.trim().replace(/^"|"$/g, ''));

        // Ensure we actually got text back before swapping
        if (dynamicKeywords.length > 0) {
          keywordList = dynamicKeywords.filter(k => k.length > 0);
        }
      }
    }
  } catch (error) {
    console.error("Failed to fetch dynamic keywords from Google Sheets:", error);
    // Code will continue using the default keywordList defined at the top
  }

  return {
    // 1. BASE URL
    metadataBase: new URL("https://www.ursa-students.ca"),

    // 2. TITLE TEMPLATE
    title: {
      default: "URSA | University of Regina Students' Association",
      template: "%s | URSA"
    },

    // 3. STRONG DESCRIPTION
    description: "The official University of Regina Students' Association (URSA). Building transparent, accountable, student-led governance for U of R students.",

    // 4. KEYWORDS (Now Dynamic!)
    keywords: keywordList,

    // 5. OPEN GRAPH
    openGraph: {
      title: "URSA | The Governance Project",
      description: "Building transparent, accountable, student-led governance for the University of Regina.",
      url: "https://www.ursa-students.ca",
      siteName: "URSA",
      locale: "en_CA",
      type: "website",
    },

    // 6. ROBOTS
    robots: {
      index: true,
      follow: true,
      googleBot: {
        index: true,
        follow: true,
        "max-video-preview": -1,
        "max-image-preview": "large",
        "max-snippet": -1,
      },
    },
  };
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${inter.variable} ${montserrat.variable} font-sans bg-background text-textMain antialiased flex flex-col min-h-screen`}
      >
        <Navbar />
        <main className="flex-grow">
          {children}
        </main>
        <Footer />
      </body>
    </html>
  );
}