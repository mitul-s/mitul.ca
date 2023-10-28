import { cva } from "class-variance-authority";

const link = cva([], {
  variants: {
    variant: {
      route: [
        "text-gray-11 text-sm hover:bg-accent hover:text-gray-12 px-1.5 py-1 rounded-sm -mx-1.5 mt-4 inline-block",
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
  },
});

export { link };
