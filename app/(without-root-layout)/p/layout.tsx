import Link from "next/link";

const Layout = ({ children }: { children: React.ReactNode }) => {
  return (
    <div className="min-h-screen flex flex-col justify-between pt-0 md:pt-8 p-8 bg-[#F9F2E2] text-gray-12 text-[16px]">
      <nav className="max-w-[60ch] mx-auto w-full mt-6 flex gap-x-2.5 justify-between">
        <div className="flex gap-x-2.5 items-center">
          <Link
            href="/"
            className="underline underline-offset-4 decoration-from-font"
          >
            Home
          </Link>
          <Link
            href="/visitors"
            className="underline underline-offset-4 decoration-from-font"
          >
            Guestbook
          </Link>
        </div>
        <Link
          href="https://x.com/typicalmitul"
          className="underline underline-offset-4 decoration-from-font"
        >
          @typicalmitul
        </Link>
      </nav>
      <main className="max-w-[60ch] mx-auto w-full space-y-6 pb-12">
        {children}
      </main>
      <footer className="max-w-[60ch] mx-auto w-full text-left">
        <p className="text-[10px] text-gray-10 font-medium">
          from toronto, with love / typicalmitul
        </p>
      </footer>
    </div>
  );
};

export default Layout;
