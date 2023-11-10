import Link from "next/link";
import { cva, cx } from "class-variance-authority";

export const link = cva(["w-fit"], {
  variants: {
    variant: {
      route: [
        "text-gray-11 text-sm hover:bg-accent hover:text-gray-12 px-1.5 py-1 rounded-sm -mx-1.5 inline-block",
      ],
      default: [
        "hover:bg-accent hover:text-gray-12 after:content-[''] after:absolute after:bottom-px after:left-0 after:w-full after:h-px after:bg-accent relative inline-flex",
      ],
    },
    popover: {
      true: ["bg-accent/20"],
    },
  },
  defaultVariants: {
    variant: "default",
    popover: false,
  },
});

const LinkPrimitive = ({
  href,
  external,
  className,
  variant = "default",
  popover,
  children,
}: {
  href: string;
  external?: boolean;
  className?: string;
  variant?: "default" | "route";
  popover?: boolean;
  children: React.ReactNode;
}) => {
  const Component = external ? "a" : Link;
  return (
    <Component
      className={cx(link({ variant: variant, popover: popover }), className)}
      target={external ? "_blank" : undefined}
      href={href}
    >
      {children}
    </Component>
  );
};

export default LinkPrimitive;
