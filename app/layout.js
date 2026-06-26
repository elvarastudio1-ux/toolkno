import "./globals.css";
import Script from "next/script";
import { DM_Sans, Syne } from "next/font/google";
import { Analytics } from "@vercel/analytics/react";
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import AuthSessionProvider from "@/components/providers/SessionProvider";
import { buildMetadata } from "@/lib/metadata";

const syne = Syne({
  subsets: ["latin"],
  variable: "--font-syne",
  weight: ["500", "600", "700"],
  display: "swap"
});

const dmSans = DM_Sans({
  subsets: ["latin"],
  variable: "--font-dm-sans",
  weight: ["400", "500", "700"],
  display: "swap"
});

export const metadata = {
  ...buildMetadata({
    title: "Free Online Tools for Text, SEO, and Developer Workflows",
    description:
      "Toolkno offers 60+ free browser-based text tools — count words, convert case, clean lists, compare text, analyze readability, and more. No signup, instant results."
  }),
  other: {
    "google-adsense-account": "ca-pub-8193881104320445"
  }
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" className={`${syne.variable} ${dmSans.variable}`}>
      <head>
        <Script
          id="adsense-script"
          async
          strategy="afterInteractive"
          crossOrigin="anonymous"
          src="https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js?client=ca-pub-8193881104320445"
        />
      </head>
      <body className="font-body antialiased">
        <AuthSessionProvider>
          <div className="min-h-screen">
            <Navbar />
            {children}
            <Footer />
          </div>
        </AuthSessionProvider>
        <Analytics />
      </body>
    </html>
  );
}
