import type { Metadata } from "next";
import { Inter, Montserrat } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer"; // Import the new footer

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

export const metadata: Metadata = {
  title: "URSA | The Governance Project",
  description: "Transparent. Accountable. Student-Led.",
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

        {/* Main Content grows to push footer down */}
        <main className="flex-grow">
          {children}
        </main>

        {/* The New Professional Footer */}
        <Footer />

      </body>
    </html>
  );
}