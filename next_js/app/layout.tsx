import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import { Suspense } from "react";
import "./globals.css";
import Navbar from "@/components/navbar";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Job Tracker Application",
  description: "Job application tracking made simple.",
};

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html
      lang="en"
      className={`${geistSans.variable} ${geistMono.variable} h-full antialiased`}
    >
      <body className="flex min-h-screen flex-col bg-gray-900 text-white">
        <Suspense
          fallback={
            <div className="fixed left-2 right-2 top-0 z-50 mx-2 mt-4 h-16 rounded-full border border-white/10 bg-gray-800/90 shadow-lg backdrop-blur-xl" />
          }
        >
          <Navbar />
        </Suspense>

        <div className="flex-1 pt-20">{children}</div>
      </body>
    </html>
  );
}