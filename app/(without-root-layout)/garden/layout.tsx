const Layout = ({ children }: { children: React.ReactNode }) => {
  return (
    <div className="flex flex-col min-h-screen bg-[#fff]">
      <main className="p-4 py-10 h-full md:p-12 text-gray-11">{children}</main>
    </div>
  );
};

export default Layout;
