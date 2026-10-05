import type { Metadata } from "next";
import { Inter, JetBrains_Mono } from "next/font/google";
import { site } from "@/data/site";
import "./globals.css";

const sans = Inter({ subsets: ["latin"], weight: ["400", "500"], variable: "--font-sans" });
const mono = JetBrains_Mono({ subsets: ["latin"], weight: ["400"], variable: "--font-mono" });

export const metadata: Metadata = {
  metadataBase: new URL(site.url),
  title: { default: site.name, template: `%s · ${site.name}` },
  description: site.description,
  openGraph: { title: site.name, description: site.description, type: "website", url: "/" },
  twitter: { card: "summary", title: site.name, description: site.description },
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" className={`${sans.variable} ${mono.variable}`}>
      <body className="bg-white font-sans text-[15px] font-normal leading-[1.6] text-[#111111] antialiased sm:text-[16px]">
        {children}
      </body>
    </html>
  );
}
