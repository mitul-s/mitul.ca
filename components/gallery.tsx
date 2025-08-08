import ScrollArea from "@/components/scroll-area";
import MorphingImageDialog from "@/components/photo";

const Gallery = ({
  photos,
}: {
  photos: {
    src: string;
    alt: string;
  }[];
}) => {
  return (
    <ScrollArea className="relative md:w-full">
      <div className="flex w-full h-full gap-x-2 px-4">
        {photos.map((photo) => (
          <MorphingImageDialog
            key={photo.src}
            src={photo.src}
            alt={photo.alt}
          />
        ))}
      </div>
    </ScrollArea>
  );
};

export default Gallery;
