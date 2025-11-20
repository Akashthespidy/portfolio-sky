import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Billal Ahmed Akash - Software Engineer & Competitive Programmer",
  description: "Portfolio of Billal Ahmed Akash, Software Engineer at Geekly specializing in React, Next.js, TypeScript, and competitive programming. 1300+ problems solved.",
  keywords: ["Software Engineer", "Full Stack Developer", "React", "Next.js", "TypeScript", "Competitive Programming", "ACM ICPC"],
  authors: [{ name: "Billal Ahmed Akash" }],
  openGraph: {
    title: "Billal Ahmed Akash - Software Engineer",
    description: "Software Engineer passionate about building scalable web applications and solving complex algorithmic problems.",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="dark" suppressHydrationWarning>
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
