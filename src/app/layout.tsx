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
  title: "GTA 6 Hub — Unofficial Fan Site",
  description:
    "An unofficial, fan-made hub for Grand Theft Auto VI news, features, and community speculation. Not affiliated with Rockstar Games or Take-Two Interactive.",
  metadataBase: new URL("https://example.com"),
  openGraph: {
    title: "GTA 6 Hub — Unofficial Fan Site",
    description:
      "An unofficial, fan-made hub for Grand Theft Auto VI news and community speculation.",
    type: "website",
  },
};

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html
      lang="en"
      className={`${geistSans.variable} ${geistMono.variable} h-full antialiased`}
    >
      <body className="min-h-full flex flex-col bg-background text-foreground">
        {children}
      </body>
    </html>
  );
}
