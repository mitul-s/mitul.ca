import type { Metadata, Viewport } from "next";
import Gallery from "./gallery";

export const metadata: Metadata = {
  title: "All Street hang mock",
  description:
    "Walkable 3D model of All Street Gallery with placeholder prints at true size.",
  robots: { index: false, follow: false },
};

export const viewport: Viewport = {
  themeColor: "#e7e5e0",
};

export default function Page() {
  return <Gallery />;
}
