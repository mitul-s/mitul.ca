import ScrollArea from "@/components/scroll-area";
import Photo from "@/components/photo";

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
      <div className="flex w-full h-full gap-x-2">
        {photos.map((photo) => (
          <Photo key={photo.src} src={photo.src} alt={photo.alt} />
        ))}
      </div>
    </ScrollArea>
  );
};

export default Gallery;
