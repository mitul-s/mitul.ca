const ImgContainer = ({ children }: { children: React.ReactNode }) => {
  return (
    <div className="[&_img]:!object-contain [&_img]:!w-[300px]">
      {children}
    </div>
  );
};

export default ImgContainer;
