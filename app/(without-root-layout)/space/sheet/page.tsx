import type { Metadata } from "next";
import Sheet from "./sheet";

export const metadata: Metadata = {
  title: "Hanging sheet",
  description: "Where every print goes at All Street Gallery.",
  robots: { index: false, follow: false },
};

export default function Page() {
  return <Sheet />;
}
