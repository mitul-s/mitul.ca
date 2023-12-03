import Photo from "@/components/photo";
import LinkPrimitive from "@/components/link-primitive";
import { beliefs, bucketList, Status } from "@/content";
import { ArrowLeft } from "@phosphor-icons/react/dist/ssr/ArrowLeft";
import { cva } from "class-variance-authority";
import Link from "next/link";
import { Metadata } from "next/types";
import Section from "@/components/section";
import Gallery from "@/components/gallery";

export const metadata: Metadata = {
  title: "About",
  alternates: {
    canonical: "https://mitul.ca/about",
  },
};

const bucketItem = cva(["self-start"], {
  variants: {
    status: {
      none: "",
      completed: ["line-through", "text-gray-11"],
      progress: [
        "before:content-['']",
        "before:w-1",
        "before:h-1",
        "before:bg-accent",
        "before:inline-flex",
        "before:-mt-px",
        "before:rounded-full",
        "before:animate-pulse",
        "before:mr-1",
        "flex",
        "items-center",
      ],
    },
  },
});

const BucketItem = ({
  item,
  status,
}: {
  item: string;
  status: keyof typeof Status;
}) => {
  return <li className={bucketItem({ status: Status[status] })}>{item}</li>;
};

const About = () => {
  return (
    <div className="justify-between md:flex animate-in fade-in duration-700">
      <div className="md:max-w-[450px] flex flex-col md:gap-y-0 gap-y-6">
        <Link
          href="/"
          className="block bg-accent text-gray-12 w-fit rounded-sm p-0.5 hover:bg-accent/50 transition duration-100 mx-1 md:mx-4"
          aria-label="Back"
        >
          <ArrowLeft size={16} className="shrink-0" />
        </Link>
        <div className="my-1 md:my-4 lg:hidden">
          <Gallery
            photos={[
              {
                src: "/images/me-2.jpg",
                alt: "A cinematic photo of me standing in the Monteal metro",
              },
              {
                src: "/images/me-1.jpg",
                alt: "Photo of myself standing in front of a lake and mountain peak",
              },
              {
                src: "/images/me-3.jpg",
                alt: "A sunrise in Chicago waterfront with myself standing on the edge of a pathway",
              },
              {
                src: "/images/me-4.jpg",
                alt: "A photo of myself walking down a road in rainy British Columbia",
              },
            ]}
          />
        </div>
        <Section heading="I'm still figuring it out">
          <div className="space-y-4">
            <p>
              Hey, my name is Mitul and welcome to my space on the internet. I'm
              a self-taught{" "}
              <LinkPrimitive
                href="https://bradfrost.com/blog/post/frontend-design/"
                external
              >
                design engineer
              </LinkPrimitive>{" "}
              based in Toronto, Canada.
            </p>
            <p>
              Learning to code has felt like a superpower for me, it allows me
              to bring any idea I can imagine to life. I love creating and
              focusing on the little things that enhance our experiences as we
              dive into the abyss of the web.
            </p>
            <p>
              Apart from all of that, a strong sense of curiosity about the
              world has always driven me. Travel, and specifically the diverse
              experiences gained from exploring different places, cultures, and
              landscapes, have significantly influenced my personal growth.
            </p>
            <p>
              My life thrives on both chaos and serendipity. I'm just tryna
              channel the same spirit of adventure as Ferris Bueller.
            </p>
          </div>
        </Section>

        <Section heading="Beliefs">
          <ul className="flex flex-col gap-y-1">
            {beliefs.map((belief) => {
              return <li key={belief}>{belief}</li>;
            })}
          </ul>
        </Section>
        <Section heading="Bucket List">
          <ul className="flex flex-col gap-y-1">
            {bucketList.map((item) => {
              return (
                <BucketItem
                  key={item.item}
                  item={item.item}
                  status={item.status}
                />
              );
            })}
          </ul>
        </Section>
      </div>
      <div className="hidden px-1 my-4 mt-10 lg:flex gap-x-2 md:px-4">
        <Photo
          src={"/images/me-2.jpg"}
          alt="A cinematic photo of me standing in the Monteal metro"
          priority
        />
        <Photo
          src={"/images/me-4.jpg"}
          alt="A photo of myself walking down a road in rainy British Columbia"
          priority
        />
      </div>
    </div>
  );
};

export default About;
