import Image, { type StaticImageData } from "next/image";

interface FigureProps {
  src: string | StaticImageData;
  alt: string;
  caption?: string;
}

const Figure = (props: FigureProps) => {
  const { src, alt, caption } = props;
  if (caption !== undefined) {
    return (
      <figure>
        <Image
          className="rounded-4 border border-gray-6"
          src={src}
          alt={alt}
          fetchPriority="high"
        />
        <figcaption className="text-sm text-gray-11 mt-1.5">
          {caption}
        </figcaption>
      </figure>
    );
  }
  return (
    <Image className="rounded-4 border border-gray-6" src={src} alt={alt} />
  );
};

export default Figure;
