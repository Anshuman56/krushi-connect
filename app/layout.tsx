import type { Metadata } from "next";
import { Geist, Geist_Mono, Noto_Sans_Oriya } from "next/font/google";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

const notoSansOriya = Noto_Sans_Oriya({
  variable: "--font-noto-odia",
  subsets: ["oriya"],
});

export const metadata: Metadata = {
  title: "KrushiConnect",
  description: "Direct from farm to restaurant",
};

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html
      lang="en"
      className={`${geistSans.variable} ${geistMono.variable} ${notoSansOriya.variable} h-full antialiased`}
    >
      <body className="min-h-full flex flex-col">{children}</body>
    </html>
  );
}
