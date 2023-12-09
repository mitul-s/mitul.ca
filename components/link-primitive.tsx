import Link from "next/link";
import { cva } from "class-variance-authority";
import { cn } from "@/lib/utils";

export const link = cva(["flex", "items-center", "gap-x-0.5", "w-fit"], {
  variants: {
    variant: {
      route: [
        "text-gray-11 text-sm hover:bg-accent hover:text-gray-12 px-1.5 py-1 rounded-sm -mx-1.5 font-medium border border-gray-12 hover:border-accent",
      ],
      default: [
        "hover:bg-accent hover:text-gray-12 after:content-[''] after:absolute after:bottom-px after:left-0 after:w-full after:h-px after:bg-accent relative inline-flex",
      ],
    },
    popover: {
      true: ["bg-accent/20 mt-0.5"],
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
      className={cn(link({ variant: variant, popover: popover }), className)}
      target={external ? "_blank" : undefined}
      href={href}
    >
      {children}
    </Component>
  );
};

export default LinkPrimitive;
