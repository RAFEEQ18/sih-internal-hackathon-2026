import type { Metadata } from "next";
import { Inter } from "next/font/google";
import Header from "@/components/Header";
import "./globals.css";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "SIH 2026 Internal Hackathon Problem Statements",
  description: "Official problem statements portal for the Smart India Hackathon 2026 Internal Hackathon at UCE-BIT Campus, Tiruchirappalli.",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className="h-full">
      <body className={`${inter.className} min-h-screen flex flex-col bg-slate-50 text-slate-900 antialiased`}>
        <Header />
        {children}
      </body>
    </html>
  );
}
