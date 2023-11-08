import { cx } from "class-variance-authority";

const Item = ({
  heading,
  children,
  className,
}: {
  heading?: string;
  className?: string;
  children: React.ReactNode;
}) => {
  return (
    <div className={cx("p-1 md:p-4", className)}>
      {heading && <h2 className="font-medium text-gray-11 mb-2">{heading}</h2>}
      {children}
    </div>
  );
};

export default Item;
