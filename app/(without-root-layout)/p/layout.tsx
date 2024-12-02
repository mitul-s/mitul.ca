import Link from "next/link";

const Layout = ({ children }: { children: React.ReactNode }) => {
  return (
    <div className="min-h-screen flex flex-col justify-between pt-0 md:pt-8 p-8 bg-[#F9F2E2] text-gray-12 text-[16px]">
      <nav className="max-w-[60ch] mx-auto w-full mt-6 flex gap-x-2.5">
        <Link href="/" className="hover:bg-gray-6 px-1 py-0.5 rounded-sm">
          Home
        </Link>
        <Link href="/" className="">
          Guestbook
        </Link>
      </nav>
      <main className="max-w-[60ch] mx-auto w-full">{children}</main>
    </div>
  );
};

export default Layout;
