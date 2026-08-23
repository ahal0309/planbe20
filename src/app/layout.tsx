import type { Metadata } from "next";
import { Inter, Playfair_Display } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import TopographicBackground from "@/components/TopographicBackground";
import SplashScreen from "@/components/SplashScreen";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
  display: "swap",
});

const playfair = Playfair_Display({
  subsets: ["latin"],
  variable: "--font-playfair",
  display: "swap",
});

export const metadata: Metadata = {
  title: "Plan Bē Architectural Design Studio | Home",
  description: "We seek inspiration in simplicity, finding harmony between architecture, nature, and everyday life.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${inter.variable} ${playfair.variable} light`} suppressHydrationWarning>
      <body className="antialiased min-h-screen flex flex-col bg-surface text-ink font-sans selection:bg-ochre selection:text-white" suppressHydrationWarning>
        <SplashScreen />
        <TopographicBackground />
        <Navbar />
        <main className="flex-grow">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
