const SmallText = ({ children }: { children: React.ReactNode }) => {
  return (
    <div className="text-gray-11 text-[12px] flex flex-col">{children}</div>
  );
};

export default SmallText;
