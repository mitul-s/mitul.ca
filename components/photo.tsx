import { cn } from "@/lib/utils";
import Image from "next/image";

const Photo = ({
  src,
  alt,
  priority,
  className,
}: {
  src: string;
  alt: string;
  priority?: boolean;
  className?: string;
}) => (
  <div
    className={cn(
      "relative overflow-hidden border rounded-md w-60 h-80 shrink-0 border-gray-12",
      className
    )}
  >
    <Image
      src={src}
      className="object-cover object-center w-full h-full"
      sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
      fill
      placeholder="blur"
      blurDataURL={src}
      alt={alt}
      quality={30}
      priority={priority}
    />
  </div>
);

export default Photo;
