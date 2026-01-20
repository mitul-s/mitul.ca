import Image, { type StaticImageData } from "next/image";

interface FigureProps {
  src: string | StaticImageData;
  alt: string;
  caption?: string;
  width?: number;
  height?: number;
}

const Figure = (props: FigureProps) => {
  const { src, alt, caption, width, height } = props;
  const isExternalUrl = typeof src === "string";

  // For external URLs without dimensions, use unoptimized mode
  const imageProps = isExternalUrl && !width
    ? { unoptimized: true, width: 1400, height: 900 }
    : width && height
      ? { width, height }
      : {};

  if (caption !== undefined) {
    return (
      <figure>
        <Image
          className="rounded-4 border border-gray-6"
          src={src}
          alt={alt}
          fetchPriority="high"
          quality={30}
          placeholder={isExternalUrl ? "empty" : "blur"}
          sizes="(max-width: 768px) 100vw, 700px"
          {...imageProps}
        />
        <figcaption className="text-sm text-gray-11 mt-1.5">
          {caption}
        </figcaption>
      </figure>
    );
  }
  return (
    <Image
      className="rounded-4 border border-gray-6"
      src={src}
      alt={alt}
      {...imageProps}
    />
  );
};

export default Figure;
