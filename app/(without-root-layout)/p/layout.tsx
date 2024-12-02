const Layout = ({ children }: { children: React.ReactNode }) => {
  return (
    <div className="min-h-screen flex flex-col justify-between pt-0 md:pt-8 p-8 bg-[#F9F2E2] text-gray-12 text-[16px]">
      <main className="max-w-[60ch] mx-auto w-full space-y-6">{children}</main>
    </div>
  );
};

export default Layout;
