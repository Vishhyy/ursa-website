import type { Metadata, Viewport } from "next"; // Added Viewport
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

export const viewport: Viewport = {
  themeColor: "#004F2E", // Your University Green color in mobile browser bars
}

export const metadata: Metadata = {
  // 1. BASE URL (Crucial for sharing links on social media)
  metadataBase: new URL("https://www.ursa-students.ca"),

  // 2. TITLE TEMPLATE (Auto-adds " | URSA" to every page)
  title: {
    default: "URSA | University of Regina Students' Association",
    template: "%s | URSA"
  },

  // 3. STRONG DESCRIPTION (Contains keywords like 'University of Regina')
  description: "The official University of Regina Students' Association (URSA). Building transparent, accountable, student-led governance for U of R students.",

  // 4. KEYWORDS (What people search for)
  keywords: [
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
  ],

  // 5. OPEN GRAPH (How links look on iMessage/Facebook/LinkedIn)
  openGraph: {
    title: "URSA | The Governance Project",
    description: "Building transparent, accountable, student-led governance for the University of Regina.",
    url: "https://www.ursa-students.ca",
    siteName: "URSA",
    locale: "en_CA",
    type: "website",
  },

  // 6. ROBOTS (Tell Google to index this)
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