const Item = ({
  heading,
  children,
}: {
  heading: string;
  children: React.ReactNode;
}) => {
  return (
    <div className="p-4">
      <h2 className="font-medium text-gray-11 mb-2">{heading}</h2>
      {children}
    </div>
  );
};

export default Item;
