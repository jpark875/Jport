import type { Metadata } from "next";
import { JetBrains_Mono, Space_Grotesk } from "next/font/google";
import "./globals.css";

const heading = Space_Grotesk({ subsets: ["latin"], variable: "--font-heading" });
const body = JetBrains_Mono({ subsets: ["latin"], variable: "--font-body" });

export const metadata: Metadata = {
  title: "Jason Park",
  description: "Developer and analytics portfolio.",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" className={`${heading.variable} ${body.variable}`}>
      <body className="bg-[#0D0E11] font-body text-[#E2E8F0] antialiased">{children}</body>
    </html>
  );
}
