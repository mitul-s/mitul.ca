const ImgContainer = ({ children }: { children: React.ReactNode }) => {
  return (
    <div className="max-h-[400px] overflow-hidden [&_img]:!object-contain [&_img]:!w-[300px]">
      {children}
    </div>
  );
};

export default ImgContainer;
