import type { Viewport } from "next";

export const viewport: Viewport = {
  themeColor: "#0F0F0F",
};

const Layout = ({ children }: { children: React.ReactNode }) => {
  return <div className="p-4 py-10 md:p-12 bg">{children}</div>;
};
export default Layout;
