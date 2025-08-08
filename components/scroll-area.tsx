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
      <ScrollAreaPrimitive.Viewport className="w-full h-full">
        {children}
        <ScrollAreaPrimitive.Scrollbar
          className="flex select-none -mb-2 w-[calc(100%-32px)] mx-auto rounded-md touch-none bg-gray-6 transition-all duration-100 ease-out data-[orientation=horizontal]:flex-col data-[orientation=horizontal]:h-0.5 hover:data-[orientation=horizontal]:h-1 group"
          orientation="horizontal"
        >
          <ScrollAreaPrimitive.Thumb className="flex-1 bg-accent/50 group-hover:bg-accent rounded-md relative before:content-[''] before:absolute before:top-1/2 before:left-1/2 before:-translate-x-1/2 before:-translate-y-1/2 before:w-full before:h-full before:min-w-[44px] before:min-h-[44px]" />
        </ScrollAreaPrimitive.Scrollbar>
      </ScrollAreaPrimitive.Viewport>
    </ScrollAreaPrimitive.Root>
  );
}
