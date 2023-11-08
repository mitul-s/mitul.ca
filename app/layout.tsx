import { Analytics } from "@vercel/analytics/react";
import type { Metadata } from "next";
import localFont from "next/font/local";
import "./globals.css";
import { cx } from "class-variance-authority";

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
    default: "Mitul Shah",
  },
  description: "Design engineer, photographer, and a bit more.",
  openGraph: {
    title: "Mitul Shah",
    description: "Design engineer, photographer, and a bit more.",
    images: "/og.png",
    url: "https://mitul.ca",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body
        className={cx(monument.className, "p-4 py-10 md:p-12")}
        style={{
          backgroundImage:
            "linear-gradient(to right, #000, rgba(0, 0, 0, 0.80)), url(/noise.svg), linear-gradient(#B3FC03 1px, transparent 1px), linear-gradient(to right, #B3FC03 1px, #000 1px)",
          backgroundSize: "auto, auto, 20px 20px, 20px 20px",
        }}
      >
        {children}
        <Analytics />
      </body>
    </html>
  );
}
