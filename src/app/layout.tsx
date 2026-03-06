import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import { ConditionalHeader } from "@/components/layout/ConditionalHeader";
import { LenisProvider } from "@/components/LenisProvider";
import { PageTransition } from "@/components/layout/PageTransition";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "PadelRise 8.0 | Tournament Results",
  description: "Padel tournament match tracking - groups, schedule, points table",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        <LenisProvider>
          <div className="flex min-h-screen flex-col">
            <ConditionalHeader />
            <main className="flex-1">
            <PageTransition>{children}</PageTransition>
          </main>
          </div>
        </LenisProvider>
      </body>
    </html>
  );
}
