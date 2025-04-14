import { Accordion, AccordionItem } from "@/components/collapsible";
// import CursorTrail from "@/components/cursor-trail";
import LinkPrimitive from "@/components/link-primitive";
import { experiences, photos } from "@/content";
import { ArrowRight } from "@phosphor-icons/react/dist/ssr/ArrowRight";
// import Tree from "./tree";
// import { unstable_noStore as noStore } from "next/cache";
// import React, { Suspense } from "react";
// import {
//   ArrowRight,
//   ArrowUpRight,
//   Copy,
//   ScribbleLoop,
// } from "@phosphor-icons/react/dist/ssr/index";
// import { Accordion, AccordionItem } from "@/components/collapsible";
// import { MusicCard, ReadingCard } from "@/components/hover-card";
// import Contact, {
//   ContactCopyItem,
//   ContactItem,
// } from "@/components/contact-link";
// import { experiences, photos } from "@/content";
// import LinkPrimitive from "@/components/link-primitive";
// import { getShelves } from "@/lib/literal";
// import getLastPlayed from "@/lib/spotify";
// import Filter from "bad-words";
// import Gallery from "@/components/gallery";
// import Section from "@/components/section";
// import Skeleton from "@/components/skeleton";

import Link from "next/link";
import { Globe } from "@phosphor-icons/react/dist/ssr/Globe";
import { Terminal } from "@phosphor-icons/react/dist/ssr/Terminal";
import dynamic from "next/dynamic";
import Gallery from "@/components/gallery";
import { PencilSimpleLine } from "@phosphor-icons/react/dist/ssr/PencilSimpleLine";
import TwitterXMotion from "@/components/twitter-x-loop";
import { CopyEmailButton } from "@/components/copy-email-button";
import Footer from "@/components/footer";
import { cn } from "@/lib/utils";
import { ScribbleLoop } from "@phosphor-icons/react/dist/ssr/ScribbleLoop";
import MusicPlayer from "@/components/music-player";
import ThemeChanger from "@/components/theme-switcher";

// export const dynamic = "force-dynamic";
const DynamicTree = dynamic(() => import("./tree"), { ssr: false });

// const Photography = () => {
//   return (
//     <>
//       <Section heading="Photography" className="shrink-0">
//         <div className="flex flex-col gap-y-1.5">
//           <p>
//             I've built up my craft as a photographer over a number of years and
//             thrived in turning it into an indepedent business.
//           </p>
//           <span>
//             <span className="font-medium">Notable achievements include</span>
//             <ul>
//               <li className="relative flex items-center before:w-1 before:h-1 before:bg-accent before:rounded-full before:leading-none gap-x-2 ">
//                 being a personal photographer for the Uber CEO
//               </li>
//               <li className="relative flex items-center before:w-1 before:h-1 before:bg-accent before:rounded-full before:leading-none gap-x-2 ">
//                 featured in local Toronto newspapers
//               </li>
//               <li className="relative flex items-center before:w-1 before:h-1 before:bg-accent before:rounded-full before:leading-none gap-x-2 ">
//                 having a photo as a wallpaper in every Google device
//               </li>
//             </ul>
//           </span>
//           <p>
//             Today, my focus is on music photography where I capture my favourite
//             artists at concerts or festivals. You can learn a little more by
//             visiting my portfolio below.
//           </p>
//           <LinkPrimitive
//             external
//             href="https://typicalmitul.com/"
//             variant="route"
//             className="my-2"
//           >
//             Visit my portfolio
//             <ArrowRight size={12} aria-hidden={true} />
//           </LinkPrimitive>
//         </div>
//       </Section>
//       <Gallery photos={photos} />
//     </>
//   );
// };

// const Items = () => {
//   return (
//     <Section>
//       <h1 className="font-medium flex items-center gap-x-1.5">
//         <span className="inline-block w-2 h-2 rounded-full bg-accent" />
//         Mitul Shah
//       </h1>
//       <p className="mt-1 text-gray-9">
//         Photographer, design engineer, and a bit more.
//       </p>
//       <div className="flex flex-col mt-4 gap-y-2">
//         <p>
//           Crafting memorable interfaces with a deep attention to detail. I
//           dedicate most my time to continuous learning and refining my skillset.
//         </p>
//         <p>
//           I'm a creative{" "}
//           <LinkPrimitive
//             href="https://www.youtube.com/watch?v=jG7dSXcfVqE"
//             external
//           >
//             doing what I can't
//           </LinkPrimitive>
//           .
//         </p>
//         <div className="flex gap-x-6 mt-2 items-center">
//           <LinkPrimitive href="/about" variant="route">
//             Learn a bit more
//             <ArrowRight size={12} aria-hidden={true} />
//           </LinkPrimitive>

//           <LinkPrimitive href="/visitors" variant="route">
//             Sign the visitor's log
//             <ScribbleLoop size={12} aria-hidden={true} />
//           </LinkPrimitive>
//           <ContactItem icon={<Copy />} className="text-sm">
//             <ContactCopyItem title="Email me" copy="mitulxshah@gmail.com" />
//           </ContactItem>
//         </div>
//       </div>
//     </Section>
//   );
// };

// const Experience = () => {
//   return (
//     <Section heading="Experience">
//       <Accordion className="flex flex-col w-[calc(100%+16px)] -mx-2">
//         {experiences.map((role) => (
//           <React.Fragment key={role.company}>
//             <AccordionItem
//               role={role.role}
//               company={role.company}
//               range={role.range}
//               description={role.description}
//               skills={role.skills}
//               link={role.link}
//             />
//             <div className="h-px bg-gray-12 w-[calc(100%-16px)] mx-auto" />
//           </React.Fragment>
//         ))}
//       </Accordion>
//     </Section>
//   );
// };

// const Projects = () => {
//   return (
//     <Section heading="Projects">
//       <ul className="flex flex-col gap-y-6">
//         <li>
//           <p>
//             <LinkPrimitive href="https://placestoread.xyz" external>
//               Places to Read
//             </LinkPrimitive>{" "}
//             is a microsite to discover community submitted parks around the
//             world where you can sit down, chill and enjoy reading a book.
//           </p>
//           <div className="flex items-center mt-2 gap-x-4">
//             <a
//               className="flex gap-x-1.5 items-center text-gray-10 cursor-pointer text-sm"
//               href="https://placestoread.xyz"
//               target="_blank"
//               rel="noreferrer"
//             >
//               Live{" "}
//               <span
//                 className="w-3.5 h-3.5 p-0.5 bg-accent flex items-center justify-center rounded-sm"
//                 aria-hidden={true}
//               >
//                 <ArrowUpRight size={12} className="shrink-0 text-gray-12" />
//               </span>
//             </a>
//             <a
//               className="flex gap-x-1.5 items-center text-gray-10 cursor-pointer text-sm"
//               href="https://github.com/mitul-s/placestoread"
//               target="_blank"
//               rel="noreferrer"
//             >
//               Code{" "}
//               <span
//                 className="w-3.5 h-3.5 p-0.5 bg-accent flex items-center justify-center rounded-sm"
//                 aria-hidden={true}
//               >
//                 <ArrowUpRight size={12} className="shrink-0 text-gray-12" />
//               </span>
//             </a>
//           </div>
//         </li>
//         <li>
//           <p>
//             <LinkPrimitive
//               href="https://typicalmitul.com/montreal-in-motion"
//               external
//             >
//               Montreal in Motion
//             </LinkPrimitive>{" "}
//             is a documentation of the brutalist and distinctly designed metro
//             stations. The project uses CSS 3D transforms and noise to mirror the
//             architecutral character of the spaces.
//           </p>
//           <div className="flex items-center mt-3 gap-x-4">
//             <a
//               className="flex gap-x-1.5 items-center text-gray-10 cursor-pointer text-sm"
//               href="https://typicalmitul.com/montreal-in-motion"
//               target="_blank"
//               rel="noreferrer"
//             >
//               Live{" "}
//               <span className="w-3.5 h-3.5 p-0.5 bg-accent flex items-center justify-center rounded-sm">
//                 <ArrowUpRight size={12} className="shrink-0 text-gray-12" />
//               </span>
//             </a>
//             <a
//               href="https://github.com/mitul-s/typicalmitul.com"
//               className="flex gap-x-1.5 items-center text-gray-10 cursor-pointer text-sm"
//             >
//               Code{" "}
//               <span
//                 className="w-3.5 h-3.5 p-0.5 bg-accent flex items-center justify-center rounded-sm"
//                 aria-hidden={true}
//               >
//                 <ArrowUpRight size={12} className="shrink-0 text-gray-12" />
//               </span>
//             </a>
//           </div>
//         </li>
//         {/* <li>
//           <p>
//             <LinkPrimitive
//               href="https://github.com/mitul-s/areyoubalding-v2"
//               external
//             >
//               Are You Balding?
//             </LinkPrimitive>{" "}
//             [WIP] is a fun, short online quiz to find out if you're suffering
//             early male pattern baldness. Use the results to find the right
//             products to buy.
//           </p>
//           <div className="flex items-center mt-3 gap-x-4">
//             <a className="flex gap-x-1.5 items-center text-gray-10 cursor-pointer text-sm">
//               Live{" "}
//               <span className="w-3.5 h-3.5 p-0.5 bg-accent flex items-center justify-center rounded-sm">
//                 <ArrowUpRight size={12} className="shrink-0 text-gray-12" />
//               </span>
//             </a>
//             <a
//               href="https://github.com/mitul-s/areyoubalding-v2"
//               className="flex gap-x-1.5 items-center text-gray-10 cursor-pointer text-sm"
//             >
//               Code{" "}
//               <span
//                 className="w-3.5 h-3.5 p-0.5 bg-accent flex items-center justify-center rounded-sm"
//                 aria-hidden={true}
//               >
//                 <ArrowUpRight size={12} className="shrink-0 text-gray-12" />
//               </span>
//             </a>
//           </div>
//         </li> */}
//       </ul>
//     </Section>
//   );
// };

// const Currently = async () => {
//   noStore();
//   const { reading } = await getShelves();
//   const { data: song } = await getLastPlayed();
//   const filter = new Filter();

//   const recent = song.is_playing ? song.item : song.items[0].track;
//   const track = {
//     title: filter.clean(recent.name),
//     artist: recent.artists
//       .map((_artist: { name: string }) => _artist.name)
//       .shift(),
//     songUrl: recent.external_urls.spotify,
//     coverArt: recent.album.images[0].url,
//     previewUrl: recent.preview_url,
//   };

//   return (
//     <>
//       <p className="first-letter:uppercase">
//         Listening to{" "}
//         <MusicCard {...track}>
//           <LinkPrimitive href={track.songUrl} external popover>
//             {track.title}
//           </LinkPrimitive>
//         </MusicCard>{" "}
//         by {track.artist} and slowly reading{" "}
//         <ReadingCard {...reading}>
//           <LinkPrimitive
//             href={`https://literal.club/ms/book/${reading.slug}`}
//             external
//             popover
//           >
//             {reading.title}
//           </LinkPrimitive>
//         </ReadingCard>{" "}
//         by {reading.author}.
//       </p>
//     </>
//   );
// };

const DottedSpacer = ({
  lines = 3,
  className,
}: {
  lines?: number;
  className?: string;
}) => {
  return (
    <div className={cn("flex gap-y-0.5 my-0.5 flex-col", className)}>
      {Array.from({ length: lines }).map((_, index) => (
        <span
          // biome-ignore lint/suspicious/noArrayIndexKey: this is a static list
          key={index}
          className="h-px border-b border-dotted border-accent"
          aria-hidden
        />
      ))}
    </div>
  );
};

const SectionTitle = ({ children }: { children: React.ReactNode }) => {
  return (
    <h2 className="py-4 pl-4 md:pr-4 font-bold h-full md:ml-auto">
      {children}
    </h2>
  );
};

const Section = ({
  title,
  children,
}: {
  title?: string;
  children: React.ReactNode;
}) => {
  return (
    <section className="grid md:grid-cols-[160px_500px_auto] divide-x w-full border-b border-accent divide-accent text-accent">
      {title ? <SectionTitle>{title}</SectionTitle> : null}
      <SectionContent>{children}</SectionContent>
    </section>
  );
};

const SocialLink = ({
  href,
  social,
  children,
}: {
  href: string;
  social: string;
  children: React.ReactNode;
}) => {
  return (
    <div className="grid grid-cols-[75px_auto_1fr] gap-x-1 items-center px-4 py-2">
      <p className="font-medium">{social}</p>
      <Link
        href={href}
        target="_blank"
        rel="noopener noreferrer"
        className="hover:underline underline-offset-2"
      >
        {children}
      </Link>
    </div>
  );
};

const SectionContent = ({ children }: { children: React.ReactNode }) => {
  return <div className="border-r">{children}</div>;
};

interface ProjectProps {
  title: string;
  description: string;
  hrefs: {
    live?: string;
    code?: string;
  };
}

const Project = ({
  title,
  description,
  hrefs: { live, code },
}: ProjectProps) => {
  return (
    <div className="px-4 pt-4 pb-5 flex flex-col gap-y-1">
      <h3 className="font-medium">{title}</h3>
      <p>{description}</p>
      <div className="flex items-center mt-2 gap-x-2">
        {live ? (
          <Link
            className="flex gap-x-1.5 items-center bg-accent hover:bg-accent/80 transition text-gray-1 py-0.5 pl-1 pr-1.5 rounded-[2px] cursor-pointer text-sm"
            href={live}
            target="_blank"
            rel="noopener noreferrer"
          >
            <Globe
              aria-hidden={true}
              size={12}
              className="shrink-0 text-gray-1"
            />
            Live{" "}
          </Link>
        ) : null}
        {code ? (
          <Link
            className="flex gap-x-1.5 items-center bg-accent hover:bg-accent/80 transition text-gray-1 py-0.5 pl-1 pr-1.5 rounded-[2px] cursor-pointer text-sm"
            href={code}
            target="_blank"
            rel="noopener noreferrer"
          >
            <Terminal
              aria-hidden={true}
              size={12}
              className="shrink-0 text-gray-1"
            />
            Code{" "}
          </Link>
        ) : null}
      </div>
    </div>
  );
};

export default function Home() {
  return (
    <div className="justify-between md:flex animate-in fade-in duration-500 select flex-col">
      <nav className="absolute top-4 right-4 flex gap-1 text-accent font-medium">
        <Link
          href="/os"
          target="_blank"
          rel="noopener noreferrer"
          className="flex gap-x-1.5 items-center bg-accent hover:bg-accent/80 transition text-gray-1 py-0.5 pl-1.5 pr-1.5 rounded-[2px] cursor-pointer text-sm"
        >
          Public Archive
        </Link>
        <Link
          href="/visitors"
          className="flex gap-x-1.5 items-center bg-accent hover:bg-accent/80 transition text-gray-1 py-0.5 pl-1.5 pr-1.5 rounded-[2px] cursor-pointer text-sm"
        >
          Guestbook
        </Link>

        <div className="bg-accent text-light-green px-1 rounded-sm py-1 leading-none">
          Email
        </div>
        <ThemeChanger />
      </nav>
      <Section title="x">
        <div className="px-4 pt-8 pb-6 col-start-2">
          <h1 className="font-medium flex items-center gap-x-1.5 text-[24px]">
            Mitul Shah
          </h1>
          <span>Photographer, design engineer, and a bit more.</span>
          <p className="mt-4">
            Crafting memorable interfaces with a deep attention to detail. I
            dedicate most my time to continuous learning and refining my
            skillset.
          </p>
          <p className="mt-2">
            I'm a creative{" "}
            <LinkPrimitive
              href="https://www.youtube.com/watch?v=jG7dSXcfVqE"
              external
            >
              doing what I can't
            </LinkPrimitive>
          </p>
          <span className="font-medium text-sm tracking-tight mt-4 -mb-2 block">
            Currently
          </span>
          <MusicPlayer />
          <div className="flex gap-x-2">
            <Link
              href="/visitors"
              className="rounded-4 bg-accent text-light-green font-medium px-2 py-1 flex gap-x-1.5 items-center"
              style={{
                boxShadow:
                  "0 4px 4px #08080814, 0 1px 2px #08080833, inset 0 6px 12px #ffffff1f, inset 0 1px 1px #fff3",
              }}
            >
              Sign guestbook
              <ScribbleLoop
                size={12}
                weight="bold"
                aria-hidden={true}
                className="shrink-0 text-light-green"
              />
            </Link>
          </div>
        </div>
      </Section>
      <Section title="Experience">
        <DottedSpacer className="mt-0.5 mb-0" />
        <Accordion className="h-full flex flex-col divide-y divide-dotted">
          {experiences.map((role) => {
            return (
              <AccordionItem
                key={role.company}
                role={role.role}
                company={role.company}
                range={role.range}
                description={role.description}
                // skills={role.skills}
                link={role.link}
              />
            );
          })}
          <DottedSpacer lines={2} />
        </Accordion>
      </Section>
      <Section title="Projects">
        <Project
          title="Daybloom"
          description="A mindful daily journal that combines your photos and thoughts into calendar view, helping you capture memories and reflect on life's meaningful moments."
          hrefs={{
            live: "https://daybloom.app",
          }}
        />
        <DottedSpacer className="my-0" />
        <Project
          title="Montreal in Motion"
          description="A documentation of the brutalist and distinctly designed metro stations. The project uses CSS 3D transforms and noise to mirror the architecutral character of the spaces."
          hrefs={{
            live: "https://typicalmitul.com/montreal-in-motion",
            code: "https://github.com/mitul-s/typicalmitul.com",
          }}
        />
        <DottedSpacer className="my-0" />
        <Project
          title="Places to Read"
          description="A microsite to discover community submitted parks around the world where you can sit down, chill and enjoy reading a book."
          hrefs={{ live: "https://placestoread.xyz" }}
        />
      </Section>
      <Section title="Photography">
        <div className="flex flex-col gap-y-1.5 pt-4 pb-8">
          <div className="flex flex-col gap-y-1.5 px-4">
            <p>
              I've built up my craft as a photographer over a number of years
              and thrived in turning it into an indepedent business.
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
              Today, my focus is on music photography where I capture my
              favourite artists at concerts or festivals. You can learn a little
              more by visiting my portfolio below.
            </p>
            <Link
              href="/visitors"
              className="flex w-fit gap-x-2 items-center rounded-4 bg-accent text-light-green font-medium px-2 py-1 mt-2 mb-4"
              style={{
                boxShadow:
                  "0 4px 4px #08080814, 0 1px 2px #08080833, inset 0 6px 12px #ffffff1f, inset 0 1px 1px #fff3",
              }}
            >
              Visit my portfolio
              <ArrowRight size={12} aria-hidden={true} />
            </Link>
          </div>
          <div className="scroll-pl-4 scroll-pr-4">
            <Gallery photos={photos} />
          </div>
        </div>
      </Section>
      <Section title="Contact">
        <p className="pb-4 px-4 pt-4">
          Dolore enim dolore ad sint nostrud culpa reprehenderit id. Anim aliqua
          elit qui tempor incididunt occaecat velit deserunt reprehenderit
          exercitation sit Lorem sit dolore. Officia officia tempor et nisi.
        </p>
        <DottedSpacer lines={2} />
        <div className="grid gap-x-4 divide-y border-y divide-dotted border-dotted">
          <div className="grid grid-cols-[75px_auto_1fr] gap-x-1.5 items-center px-4 py-2">
            <p className="font-medium">Mail</p>
            <Link href="mailto:mitulxshah@gmail.com">mitulxshah@gmail.com</Link>
            <div className="flex gap-x-1 ml-auto">
              <Link
                href="mailto:mitulxshah@gmail.com"
                className="flex gap-x-1.5 items-center bg-accent hover:bg-accent/80 transition text-gray-1 py-0.5 pl-1 pr-1.5 rounded-[2px] cursor-pointer text-sm w-fit"
              >
                <PencilSimpleLine size={12} aria-hidden={true} />
                Compose
              </Link>
              <CopyEmailButton />
            </div>
          </div>
          <TwitterXMotion className="grid grid-cols-[75px_auto_1fr] gap-x-1.5 items-center px-4 py-2 overflow-hidden" />
          <SocialLink
            social="Instagram"
            href="https://instagram.com/typicalmitul"
          >
            @typicalmitul
          </SocialLink>
          <SocialLink social="GitHub" href="https://github.com/mitul-s">
            mitul-s
          </SocialLink>
        </div>
        <DottedSpacer lines={2} />
      </Section>
      <Footer />
      <DynamicTree />
    </div>
  );
}
