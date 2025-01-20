"use client";

import {
  MorphingDialog,
  MorphingDialogTrigger,
  MorphingDialogContent,
  MorphingDialogClose,
  MorphingDialogImage,
  MorphingDialogContainer,
} from "@/components/morphing-dialog";
import { X as XIcon } from "@phosphor-icons/react";

export function MorphingImageDialog({ src, alt, className }) {
  return (
    <MorphingDialog
      transition={{
        duration: 0.3,
        ease: "easeInOut",
      }}
    >
      <MorphingDialogTrigger className="relative overflow-hidden rounded-4 w-60 h-80 shrink-0 shadow border border-accent/50">
        <MorphingDialogImage
          src={src}
          alt={alt}
          className="object-cover object-center w-full h-full"
        />
      </MorphingDialogTrigger>
      <MorphingDialogContainer>
        <MorphingDialogContent className="relative">
          <MorphingDialogImage
            src={src}
            alt={alt}
            className="h-auto w-full max-w-[90vw] rounded-[4px] object-cover lg:h-[90vh]"
          />
        </MorphingDialogContent>
        <MorphingDialogClose
          className="fixed right-6 top-6 h-fit w-fit rounded-full bg-white p-1"
          variants={{
            initial: { opacity: 0 },
            animate: {
              opacity: 1,
              transition: { delay: 0.3, duration: 0.1 },
            },
            exit: { opacity: 0, transition: { duration: 0 } },
          }}
        >
          <XIcon className="h-5 w-5 text-zinc-500" />
        </MorphingDialogClose>
      </MorphingDialogContainer>
    </MorphingDialog>
  );
}

export default MorphingImageDialog;

// import { cn } from "@/lib/utils";
// import Image from "next/image";

// const Photo = ({
//   src,
//   alt,
//   priority,
//   className,
// }: {
//   src: string;
//   alt: string;
//   priority?: boolean;
//   className?: string;
// }) => (
//   <div
//     className={cn(
//       "relative overflow-hidden rounded-4 w-60 h-80 shrink-0 shadow border border-accent/50",
//       className
//     )}
//   >
//     <Image
//       src={src}
//       className="object-cover object-center w-full h-full"
//       sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
//       fill
//       placeholder="blur"
//       blurDataURL={src}
//       alt={alt}
//       quality={30}
//       priority={priority}
//     />
//   </div>
// );

// export default Photo;
