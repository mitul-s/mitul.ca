import React, { Suspense } from "react";
import {
  ArrowRight,
  ArrowUpRight,
  Copy,
} from "@phosphor-icons/react/dist/ssr/index";
import { Accordion, AccordionItem } from "@/components/collapsible";
import { MusicCard, ReadingCard } from "@/components/hover-card";
import Contact, {
  ContactCopyItem,
  ContactItem,
} from "@/components/contact-link";
import { experiences, photos } from "@/content";
import LinkPrimitive from "@/components/link-primitive";
import { getShelves } from "@/lib/literal";
import getLastPlayed from "@/lib/spotify";
import Filter from "bad-words";
import Gallery from "@/components/gallery";
import Section from "@/components/section";
import Skeleton from "@/components/skeleton";

export const dynamic = "force-dynamic";

const Photography = () => {
  return (
    <>
      <Section heading="Photography" className="shrink-0">
        <div className="flex flex-col gap-y-1.5">
          <p>
            I've built up my craft as a photographer over a number of years and
            thrived in turning it into an indepedent business.
          </p>
          <span>
            <span className="font-medium">Notable achievements include</span>
            <ul>
              <li className="relative flex items-center before:w-1 before:h-1 before:bg-accent before:rounded-full before:leading-none gap-x-2 ">
                being a personal photographer for the Uber CEO
              </li>
              <li className="relative flex items-center before:w-1 before:h-1 before:bg-accent before:rounded-full before:leading-none gap-x-2 ">
                featured in local Toronto newspapers
              </li>
              <li className="relative flex items-center before:w-1 before:h-1 before:bg-accent before:rounded-full before:leading-none gap-x-2 ">
                having a photo as a wallpaper in every Google device
              </li>
            </ul>
          </span>
          <p>
            Today, my focus is on music photography where I capture my favourite
            artists at concerts or festivals. You can learn a little more by
            visiting my portfolio below.
          </p>
          <LinkPrimitive
            external
            href="https://typicalmitul.com/"
            variant="route"
            className="my-2"
          >
            Visit my portfolio
            <ArrowRight size={12} aria-hidden={true} />
          </LinkPrimitive>
        </div>
      </Section>
      <Gallery photos={photos} />
    </>
  );
};

const Items = () => {
  return (
    <Section>
      <h1 className="font-medium flex items-center gap-x-1.5">
        <span className="inline-block w-2 h-2 rounded-full bg-accent"></span>
        Mitul Shah
      </h1>
      <p className="mt-1 text-gray-9">
        Photographer, design engineer, and a bit more.
      </p>
      <div className="flex flex-col mt-4 gap-y-2">
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
          .
        </p>
        <div className="flex gap-x-6 mt-2 items-center">
          <LinkPrimitive href="/about" variant="route">
            Learn a bit more
            <ArrowRight size={12} aria-hidden={true} />
          </LinkPrimitive>
          <ContactItem icon={<Copy />} className="text-sm">
            <ContactCopyItem title="Email me" copy="mitulxshah@gmail.com" />
          </ContactItem>
        </div>
      </div>
    </Section>
  );
};

const Experience = () => {
  return (
    <Section heading="Experience">
      <Accordion className="flex flex-col w-[calc(100%+16px)] -mx-2">
        {experiences.map((role) => (
          <React.Fragment key={role.company}>
            <AccordionItem
              role={role.role}
              company={role.company}
              range={role.range}
              description={role.description}
              skills={role.skills}
              link={role.link}
            />
            <div className="h-px bg-gray-12 w-[calc(100%-16px)] mx-auto" />
          </React.Fragment>
        ))}
      </Accordion>
    </Section>
  );
};

const Projects = () => {
  return (
    <Section heading="Projects">
      <ul className="flex flex-col gap-y-6">
        <li>
          <p>
            <LinkPrimitive href="https://placestoread.xyz" external>
              Places to Read
            </LinkPrimitive>{" "}
            is a microsite to discover community submitted parks around the
            world where you can sit down, chill and enjoy reading a book.
          </p>
          <div className="flex items-center mt-2 gap-x-4">
            <a
              className="flex gap-x-1.5 items-center text-gray-10 cursor-pointer text-sm"
              href="https://placestoread.xyz"
              target="_blank"
            >
              Live{" "}
              <span
                className="w-3.5 h-3.5 p-0.5 bg-accent flex items-center justify-center rounded-sm"
                aria-hidden={true}
              >
                <ArrowUpRight size={12} className="shrink-0 text-gray-12" />
              </span>
            </a>
            <a
              className="flex gap-x-1.5 items-center text-gray-10 cursor-pointer text-sm"
              href="https://github.com/mitul-s/placestoread"
              target="_blank"
            >
              Code{" "}
              <span
                className="w-3.5 h-3.5 p-0.5 bg-accent flex items-center justify-center rounded-sm"
                aria-hidden={true}
              >
                <ArrowUpRight size={12} className="shrink-0 text-gray-12" />
              </span>
            </a>
          </div>
        </li>
        <li>
          <p>
            <LinkPrimitive
              href="https://typicalmitul.com/montreal-in-motion"
              external
            >
              Montreal in Motion
            </LinkPrimitive>{" "}
            is a documentation of the brutalist and distinctly designed metro
            stations. The project uses CSS 3D transforms and noise to mirror the
            architecutral character of the spaces.
          </p>
          <div className="flex items-center mt-3 gap-x-4">
            <a
              className="flex gap-x-1.5 items-center text-gray-10 cursor-pointer text-sm"
              href="https://typicalmitul.com/montreal-in-motion"
              target="_blank"
            >
              Live{" "}
              <span className="w-3.5 h-3.5 p-0.5 bg-accent flex items-center justify-center rounded-sm">
                <ArrowUpRight size={12} className="shrink-0 text-gray-12" />
              </span>
            </a>
            <a
              href="https://github.com/mitul-s/typicalmitul.com"
              className="flex gap-x-1.5 items-center text-gray-10 cursor-pointer text-sm"
            >
              Code{" "}
              <span
                className="w-3.5 h-3.5 p-0.5 bg-accent flex items-center justify-center rounded-sm"
                aria-hidden={true}
              >
                <ArrowUpRight size={12} className="shrink-0 text-gray-12" />
              </span>
            </a>
          </div>
        </li>
        {/* <li>
          <p>
            <LinkPrimitive
              href="https://github.com/mitul-s/areyoubalding-v2"
              external
            >
              Are You Balding?
            </LinkPrimitive>{" "}
            [WIP] is a fun, short online quiz to find out if you're suffering
            early male pattern baldness. Use the results to find the right
            products to buy.
          </p>
          <div className="flex items-center mt-3 gap-x-4">
            <a className="flex gap-x-1.5 items-center text-gray-10 cursor-pointer text-sm">
              Live{" "}
              <span className="w-3.5 h-3.5 p-0.5 bg-accent flex items-center justify-center rounded-sm">
                <ArrowUpRight size={12} className="shrink-0 text-gray-12" />
              </span>
            </a>
            <a
              href="https://github.com/mitul-s/areyoubalding-v2"
              className="flex gap-x-1.5 items-center text-gray-10 cursor-pointer text-sm"
            >
              Code{" "}
              <span
                className="w-3.5 h-3.5 p-0.5 bg-accent flex items-center justify-center rounded-sm"
                aria-hidden={true}
              >
                <ArrowUpRight size={12} className="shrink-0 text-gray-12" />
              </span>
            </a>
          </div>
        </li> */}
      </ul>
    </Section>
  );
};

const Currently = async () => {
  const { reading } = await getShelves();
  const { data: song } = await getLastPlayed();
  const filter = new Filter();

  const recent = song.is_playing ? song.item : song.items[0].track;
  const track = {
    title: filter.clean(recent.name),
    artist: recent.artists
      .map((_artist: { name: string }) => _artist.name)
      .shift(),
    songUrl: recent.external_urls.spotify,
    coverArt: recent.album.images[0].url,
    previewUrl: recent.preview_url,
  };

  return (
    <>
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
    </>
  );
};

const Footer = () => {
  return (
    <Section>
      <div className="max-w-xs mt-12 text-sm text-gray-11 md:mt-0">
        This website has recently been revamped and is constant a work in
        progress. Last updated on{" "}
        <Suspense fallback={<Skeleton className="inline-flex w-24 h-4" />}>
          <FooterDate />
        </Suspense>
        .
      </div>
    </Section>
  );
};

const FooterDate = async () => {
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
    <LinkPrimitive href="https://github.com/mitul-s/mitul.ca" external>
      {formatDate}
    </LinkPrimitive>
  );
};

export default function Home() {
  return (
    <div className="justify-between md:flex animate-in fade-in duration-500">
      <div className="md:max-w-[450px] flex flex-col md:gap-y-0 gap-y-6">
        <Items />
        <Section heading="Currently">
          <Suspense
            fallback={
              <div className="flex flex-wrap items-center gap-x-1">
                Listening to <Skeleton className="inline-flex w-24 h-4" /> by{" "}
                <Skeleton className="inline-flex w-24 h-4" /> and slowly reading{" "}
                <Skeleton className="inline-flex w-24 h-4" /> by{" "}
                <Skeleton className="inline-flex w-24 h-4" />.
              </div>
            }
          >
            <Currently />
          </Suspense>
        </Section>
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
