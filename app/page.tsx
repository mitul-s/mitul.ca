import React from "react";
import { ArrowUpRight } from "@phosphor-icons/react/dist/ssr/index";
import Item from "@/components/item";
import Image from "next/image";
import { Accordion, AccordionItem } from "@/components/collapsible";
import { MusicCard, ReadingCard } from "@/components/hover-card";
import Contact from "@/components/contact-link";
import { experiences, photos } from "@/content";
import LinkPrimitive, { link } from "@/components/link-primitive";
import { getShelves } from "@/lib/literal";
import getLastPlayed from "@/lib/spotify";

export const dynamic = "force-dynamic";

const Photo = ({ src, alt }: { src: string; alt: string }) => (
  <div className="relative w-60 h-80 shrink-0 rounded-sm overflow-hidden border border-gray-12">
    <Image
      src={src}
      className="object-cover w-full h-full object-center"
      sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
      fill
      alt={alt}
      quality={25}
    />
  </div>
);

const Photography = () => {
  return (
    <div>
      <div className="md:flex justify-between md:w-[calc(100vw-95px)] gap-x-12">
        <Item heading="Photography" className="md:max-w-[450px] shrink-0">
          <div className="flex flex-col gap-y-1.5">
            <p>
              I've built up my craft as a photographer over a number of years
              and thrived in turning into an indepedent business.
            </p>
            <p>
              Notable achievements include being a personal photographer for the
              Uber CEO, being paid to travel and having a photo as a wallpaper
              in every Google device.
            </p>
            <p>
              Today, my focus is on music photography where I capture my
              favourite artists at concerts or festivals. You can learn a little
              more by visiting my portfolio below.
            </p>
            <a
              href="https://typicalmitul.com/"
              target="_blank"
              className={link({ variant: "route" })}
            >
              See my portfolio →
            </a>
          </div>
        </Item>
        <div className="flex gap-x-2 overflow-x-auto border-x border-gray-12 px-2">
          {photos.map((photo) => (
            <Photo key={photo.src} src={photo.src} alt={photo.alt} />
          ))}
        </div>
      </div>
    </div>
  );
};

const Items = () => {
  return (
    <Item>
      <h1 className="font-medium flex items-center gap-x-1.5">
        <span className="rounded-full bg-accent w-2 h-2 inline-block"></span>
        Mitul Shah
      </h1>
      <p className="text-gray-9 mt-1">
        Photographer, design engineer, and a bit more.
      </p>
      <div className="space-y-2 mt-4">
        <p>
          Crafting memorable interfaces with a deep attention to detail. I
          dedicate most my time to continuous learning and refining my skillset.
        </p>
        <p>
          I'm a creative{" "}
          <LinkPrimitive
            href="https://www.youtube.com/watch?v=jG7dSXcfVqE"
            external
          >
            doing what I can't
          </LinkPrimitive>
          . Building great things with great people.
        </p>
        {/* <Link href="/about" className={link({ variant: "route" })}>
          Learn a bit more →
        </Link> */}
      </div>
    </Item>
  );
};

const Experience = () => {
  return (
    <Item heading="Experience">
      <Accordion className="flex flex-col w-[calc(100%+16px)] -mx-2">
        {experiences.map((role) => (
          <React.Fragment key={role.company}>
            <AccordionItem
              role={role.role}
              company={role.company}
              range={role.range}
              description={role.description}
              skills={role.skills}
            />
            <div className="h-px bg-gray-12 w-[calc(100%-16px)] mx-auto" />
          </React.Fragment>
        ))}
      </Accordion>
    </Item>
  );
};

const Projects = () => {
  return (
    <Item heading="Projects">
      <ul className="flex flex-col gap-y-6">
        <li>
          <p>
            <LinkPrimitive href="https://placestoread.xyz" external>
              Places to Read
            </LinkPrimitive>{" "}
            is a microsite to discover community submitted parks around the
            world where you can sit down, chill and enjoy reading a book.
          </p>
          <div className="flex items-center gap-x-4 mt-2">
            <a
              className="flex gap-x-1.5 items-center text-gray-10 cursor-pointer text-sm"
              href="https://placestoread.xyz"
              target="_blank"
            >
              Live{" "}
              <span className="w-3.5 h-3.5 p-0.5 bg-accent flex items-center justify-center rounded-sm">
                <ArrowUpRight size={12} className="shrink-0 text-gray-12" />
              </span>
            </a>
            <a
              className="flex gap-x-1.5 items-center text-gray-10 cursor-pointer text-sm"
              href="https://github.com/mitul-s/placestoread"
              target="_blank"
            >
              Code{" "}
              <span className="w-3.5 h-3.5 p-0.5 bg-accent flex items-center justify-center rounded-sm">
                <ArrowUpRight size={12} className="shrink-0 text-gray-12" />
              </span>
            </a>
          </div>
        </li>
        <li>
          <p>
            <LinkPrimitive href="https://areyoubalding.com" external>
              Are You Balding?
            </LinkPrimitive>{" "}
            is a (wip) fun, short online quiz to find out if you're suffering
            early male pattern baldness. Use the results to find the right
            products to buy.
          </p>
          <div className="flex items-center gap-x-4 mt-3">
            {/* <a className="flex gap-x-1.5 items-center text-gray-10 cursor-pointer text-sm">
              Live{" "}
              <span className="w-3.5 h-3.5 p-0.5 bg-accent flex items-center justify-center rounded-sm">
                <ArrowUpRight size={12} className="shrink-0 text-gray-12" />
              </span>
            </a> */}
            <a
              href="https://github.com/mitul-s/areyoubalding-v2"
              className="flex gap-x-1.5 items-center text-gray-10 cursor-pointer text-sm"
            >
              Code{" "}
              <span className="w-3.5 h-3.5 p-0.5 bg-accent flex items-center justify-center rounded-sm">
                <ArrowUpRight size={12} className="shrink-0 text-gray-12" />
              </span>
            </a>
          </div>
        </li>
      </ul>
    </Item>
  );
};

const Currently = async () => {
  const { reading } = await getShelves();
  const { data: song } = await getLastPlayed();

  const recent = song.is_playing ? song.item : song.items[0].track;
  const track = {
    title: recent.name,
    artist: recent.artists
      .map((_artist: { name: string }) => _artist.name)
      .shift(),
    songUrl: recent.external_urls.spotify,
    coverArt: recent.album.images[0].url,
    previewUrl: recent.preview_url,
  };

  return (
    <Item heading="Currently">
      <p>
        Listening to{" "}
        <MusicCard {...track}>
          <LinkPrimitive href={track.songUrl} external popover>
            {track.title}
          </LinkPrimitive>
        </MusicCard>{" "}
        by {track.artist} and slowly reading{" "}
        <ReadingCard {...reading}>
          <LinkPrimitive
            href={`https://literal.club/ms/book/${reading.slug}`}
            external
            popover
          >
            {reading.title}
          </LinkPrimitive>
        </ReadingCard>{" "}
        by {reading.author}.
      </p>
    </Item>
  );
};

const Footer = async () => {
  const data = await fetch(
    "https://api.github.com/repos/mitul-s/mitul.ca/commits",
    {
      method: "GET",
      headers: {
        Accept: "application/vnd.github.v3+json",
      },
    }
  ).then((res) => res.json());

  // hack lazy way to bypass rate limit without going through auth
  // to add proper stuff later!
  const lastCommit = !data.message
    ? data.map((commit: any) => commit.commit.committer.date)[0]
    : "";
  const formatDate = lastCommit
    ? new Date(lastCommit).toLocaleDateString()
    : "2023/11/07";
  return (
    <Item>
      <p className="text-sm text-gray-11 max-w-xs md:mt-0 mt-12">
        This website has recently been revamped and is constant a work in
        progress. Last updated on{" "}
        <LinkPrimitive href="https://github.com/mitul-s/mitul.ca" external>
          {formatDate}
        </LinkPrimitive>
        .
      </p>
    </Item>
  );
};

export default async function Home() {
  return (
    <div
      // className="max-w-[450px]"
      // className="grid auto-cols-fr"
      // style={{
      //   gridTemplateColumns: "repeat(auto-fill, minmax(400px, 1fr))",
      //   gridTemplateRows: "repeat(auto-fill, minmax(200px, 1fr))",
      // }}
      className="md:flex justify-between"
    >
      <div className="md:max-w-[450px] flex flex-col md:gap-y-0 gap-y-6">
        <Items />
        <Currently />
        <Experience />
        <Projects />
        <Photography />
        <Footer />
      </div>
      <aside className="md:max-w-[450px] md:text-right">
        <Contact />
      </aside>
    </div>
  );
}
