import Image from "next/image";

export default function StaticNote({
  name,
  content,
  signature,
}: {
  name: string;
  content: string;
  signature: string | null;
}) {
  return (
    <div className="h-full w-full rounded-lg border border-black/10 bg-gray-1 px-2.5 pt-2.5 pb-3 text-gray-12 shadow-sm transition-shadow duration-300 ease-out hover:shadow-md">
      {signature ? (
        <div className="relative flex items-center justify-center overflow-hidden rounded-[4px] border border-gray-6 bg-gray-3">
          <div
            className="z-10 object-contain"
            // biome-ignore lint/security/noDangerouslySetInnerHtml: signature SVG is user-generated but sanitized on save
            dangerouslySetInnerHTML={{ __html: signature }}
          />
          <Image
            src="/images/33.jpeg"
            className="absolute object-cover"
            fill
            sizes="(max-width: 640px) 50vw, (max-width: 1024px) 33vw, 20vw"
            draggable={false}
            quality={25}
            alt=""
          />
        </div>
      ) : null}
      <div className="mt-1.5 w-full text-sm break-words">
        <span className="mr-1 text-[14px] font-semibold text-gray-11">
          {name}
        </span>
        <div className="text-[16px] leading-tight font-medium">{content}</div>
      </div>
    </div>
  );
}
