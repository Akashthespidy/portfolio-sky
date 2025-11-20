import type { Metadata } from "next";
import { Inter, JetBrains_Mono } from "next/font/google";
import "./globals.css";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
  display: "swap",
});

const jetbrainsMono = JetBrains_Mono({
  subsets: ["latin"],
  variable: "--font-jetbrains-mono",
  display: "swap",
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
        className={`${inter.variable} ${jetbrainsMono.variable} font-sans antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
