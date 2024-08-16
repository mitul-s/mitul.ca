import { Analytics } from "@vercel/analytics/react";
import { SpeedInsights } from "@vercel/speed-insights/next";
import type { Metadata } from "next";
import localFont from "next/font/local";
import "./globals.css";
import { cn } from "@/lib/utils";

const monument = localFont({
  src: [
    {
      path: "../public/font/ABCMonumentGrotesk-Medium-Trial.otf",
      weight: "500",
      style: "medium",
    },
    {
      path: "../public/font/ABCMonumentGrotesk-Regular-Trial.otf",
      weight: "400",
      style: "regular",
    },
  ],
});

export const metadata: Metadata = {
  title: {
    template: "%s / Mitul Shah",
    default: "Mitul Shah / @typicalmitul",
  },
  description: "Design engineer, photographer, and a bit more.",
  openGraph: {
    title: "Mitul Shah",
    description: "Design engineer, photographer, and a bit more.",
    images: "/og-2.png",
    url: "https://mitul.ca",
  },
  alternates: {
    canonical: "https://mitul.ca",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={cn(monument.className)}>
        {children}
        <Analytics />
        <SpeedInsights />
      </body>
    </html>
  );
}
