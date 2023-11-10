"use client";
import * as ScrollAreaPrimitive from "@radix-ui/react-scroll-area";

export default function ScrollArea({
  children,
  className,
}: {
  children: React.ReactNode;
  className?: string;
}) {
  return (
    <ScrollAreaPrimitive.Root type="always" className={className}>
      <ScrollAreaPrimitive.Viewport className="w-full h-full ">
        {children}
        <ScrollAreaPrimitive.Scrollbar
          className="flex select-none -mb-2 w-[calc(100%-6px)] mx-auto rounded-md touch-none bg-gray-12 transition-colors duration-100 ease-out hover:bg-[white]/20 data-[orientation=horizontal]:flex-col data-[orientation=horizontal]:h-0.5"
          orientation="horizontal"
        >
          <ScrollAreaPrimitive.Thumb className="flex-1 bg-gray-11 rounded-md relative before:content-[''] before:absolute before:top-1/2 before:left-1/2 before:-translate-x-1/2 before:-translate-y-1/2 before:w-full before:h-full before:min-w-[44px] before:min-h-[44px]" />
        </ScrollAreaPrimitive.Scrollbar>
      </ScrollAreaPrimitive.Viewport>
    </ScrollAreaPrimitive.Root>
  );
}
