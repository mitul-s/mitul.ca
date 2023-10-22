"use client";
import * as HoverCardPrimitive from "@radix-ui/react-hover-card";

const HoverCard = ({
  children,
  song,
}: {
  children: React.ReactNode;
  song: string;
}) => {
  return (
    <HoverCardPrimitive.Root>
      <HoverCardPrimitive.Trigger asChild>
        {children}
      </HoverCardPrimitive.Trigger>
      <HoverCardPrimitive.Portal>
        <HoverCardPrimitive.Content className="w-96 h-20 bg-gray-1 text-gray-12 rounded-sm p-4 border">
          <audio controls>
            <source src={song} type="audio/ogg" />
            Your browser does not support the audio element.
          </audio>
        </HoverCardPrimitive.Content>
      </HoverCardPrimitive.Portal>
    </HoverCardPrimitive.Root>
  );
};

export default HoverCard;
