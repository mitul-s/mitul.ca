import React from "react";
import { ArrowUpRight } from "@phosphor-icons/react/dist/ssr/index";
import Item from "@/components/item";
import Link from "next/link";
import Image from "next/image";
import { Accordion, AccordionItem } from "@/components/collapsible";
import HoverCard from "@/components/hover-card";
import Contact from "@/components/contact-link";
import { experiences, photos } from "@/content";
import LinkPrimitive, { link } from "@/components/link-primitive";

const LITERAL_ENDPOINT = `https://literal.club/graphql/`;

const getAccessToken = async () => {
  const response = await fetch(LITERAL_ENDPOINT, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({
      query: `
            mutation login($email: String!, $password: String!) {
                login(email: $email, password: $password) {
                    token
                }
            }
        `,
      variables: {
        email: process.env.LITERAL_USER_EMAIL,
        password: process.env.LITERAL_USER_PASSWORD,
      },
    }),
  }).then((res) => res.json());
  return response.data.login.token;
};

const getShelves = async () => {
  const access_token = await getAccessToken();

  const response = await fetch(LITERAL_ENDPOINT, {
    method: "POST",
    headers: {
      Authorization: `Bearer ${access_token}`,
      "Content-Type": "application/json",
    },
    body: JSON.stringify({
      query: `
          query myReadingStates {
            myReadingStates {
              ...ReadingStateParts # find fragments below
              book {
                ...BookParts # find fragments below
              }
            }
          }

          fragment ReadingStateParts on ReadingState {
            id
            status
            bookId
            profileId
            createdAt
          }

          fragment BookParts on Book {
            id
            slug
            title
            subtitle
            description
            cover
            authors {
              id
              name
            }
          }
            `,
    }),
  });

  if (!response.ok) throw new Error("Something went wrong");

  const { data } = await response.json();

  const latestBook = data.myReadingStates
    .filter(
      (shelf: { status: string; book: Book }) => shelf.status === "IS_READING"
    )
    .slice(-1)
    .map(({ book }: { book: Book }) => ({
      slug: book.slug,
      title: book.title,
      author: book.authors[0].name,
    }))[0];

  return {
    reading: latestBook,
  };
};

const client_id = process.env.SPOTIFY_CLIENT_ID;
const client_secret = process.env.SPOTIFY_CLIENT_SECRET;
const refresh_token = process.env.SPOTIFY_REFRESH_TOKEN;

const basic = Buffer.from(`${client_id}:${client_secret}`).toString("base64");
const TOKEN_ENDPOINT = `https://accounts.spotify.com/api/token`;

const getSpotifyAccessToken = async () => {
  const response = await fetch(TOKEN_ENDPOINT, {
    method: "POST",
    headers: {
      Authorization: `Basic ${basic}`,
      "Content-Type": "application/x-www-form-urlencoded",
    },
    body: new URLSearchParams({
      grant_type: "refresh_token",
      refresh_token: refresh_token ?? "",
    }).toString(),
  });

  return response.json();
};

const RECENTLY_PLAYED_ENDPOINT = `https://api.spotify.com/v1/me/player/recently-played`;

const getRecentTracks = async () => {
  const { access_token } = await getSpotifyAccessToken();

  const response = fetch(RECENTLY_PLAYED_ENDPOINT, {
    headers: {
      Authorization: `Bearer ${access_token}`,
    },
  });
  if (!response) throw new Error("Something went wrong");

  const songs = await response.then((res) => res.json());

  if (songs.item === null) {
    return {
      isPlaying: false,
      previewUrl: "",
      title: "",
      artist: "",
      songUrl: "",
      coverArt: "",
    };
  }

  const isPlaying = songs.is_playing;
  const mostRecentSong = songs.items[0];
  const coverArt = mostRecentSong.track.album.images[0].url;
  const previewUrl = mostRecentSong.track.preview_url;
  const title = mostRecentSong.track.name;
  const artist = mostRecentSong.track.artists
    .map(
      (_artist: { name: string; external_urls: { spotify: string } }) =>
        _artist.name
    )
    .shift();
  const songUrl = mostRecentSong.track.external_urls.spotify;

  const track = {
    isPlaying,
    previewUrl,
    title,
    artist,
    songUrl,
    coverArt,
  };

  return track;
};

const Photo = ({ src, alt }: { src: string; alt: string }) => (
  <div className="relative w-60 h-80 shrink-0 rounded-sm overflow-hidden border border-gray-12">
    <Image
      src={src}
      objectFit="cover"
      objectPosition="center"
      fill
      alt={alt}
      quality={45}
    />
  </div>
);

const Photography = () => {
  return (
    <div>
      <div className="md:flex justify-between w-[calc(100vw-120px)] gap-x-12">
        <Item heading="Photography" className="max-w-[450px]">
          <div className="flex flex-col gap-y-1.5">
            <p>
              I've built up my craft as a photographer over a number of years
              and thrived in turning into an indepedent business.
            </p>
            <p>
              This allowed me to achieve goals I never thought I could including
              photographing the Uber CEO, being paid to travel and working with
              brands I love.
            </p>
            <p>
              Today, my focus is primarily music photography where I capture my
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
        Photographer, design engineer, and some other cool stuff.
      </p>
      <div className="space-y-2 mt-4">
        <p>
          At the middle of it all is{" "}
          <a className={link()} href="">
            portfolio
          </a>{" "}
          esse incididunt eu sit aute reprehenderit pariatur irure magna labore
          sunt do amet fugiat.
        </p>
        <p>
          Building cool things, taking photos and lorem ipsuming. Esse
          incididunt eu sit aute reprehenderit pariatur irure magna labore sunt
          do amet fugiat.
        </p>
        <Link href="/about" className={link({ variant: "route" })}>
          Learn a bit more →
        </Link>
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
            is a fun, short online quiz to find out if you're suffering early
            male pattern baldness.
          </p>
          <div className="flex items-center gap-x-4 mt-3">
            <a className="flex gap-x-1.5 items-center text-gray-10 cursor-pointer text-sm">
              Live{" "}
              <span className="w-3.5 h-3.5 p-0.5 bg-accent flex items-center justify-center rounded-sm">
                <ArrowUpRight size={12} className="shrink-0 text-gray-12" />
              </span>
            </a>
            <a className="flex gap-x-1.5 items-center text-gray-10 cursor-pointer text-sm">
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
  const track = await getRecentTracks();

  return (
    <Item heading="Currently">
      <p>
        Here's what I'm up to. Right now, I'm listening to{" "}
        {track.isPlaying && (
          <>
            <HoverCard {...track}>
              <LinkPrimitive href={track.songUrl} external popover>
                {track.title}
              </LinkPrimitive>
            </HoverCard>
            by {track.artist}
          </>
        )}
        Throughout the day, I'm trying to finish reading{" "}
        <LinkPrimitive
          href={`https://literal.club/ms/book/${reading.slug}`}
          external
          popover
        >
          {reading.title}
        </LinkPrimitive>{" "}
        by {reading.author}
      </p>
    </Item>
  );
};

interface Book {
  slug: string;
  title: string;
  authors: { name: string }[];
}

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
      <div className="max-w-[450px] flex flex-col gap-y-6">
        <Items />
        <Currently />
        <Experience />
        <Projects />
        <Photography />
      </div>
      <aside className="max-w-[450px] md:text-right">
        <Contact />
      </aside>
    </div>
  );
}
