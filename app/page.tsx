import { ArrowUpRight } from "@phosphor-icons/react/dist/ssr/index";
import Item from "@/components/item";
import Link from "next/link";
import { Accordion, AccordionItem } from "@/components/collapsible";
import HoverCard from "@/components/hover-card";
import React from "react";
import { cx } from "class-variance-authority";

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
    previewUrl,
    title,
    artist,
    songUrl,
    coverArt,
  };

  return track;
};

const ExternalLink = ({
  href,
  className,
  children,
}: {
  href?: string;
  className?: string;
  children: React.ReactNode;
}) => {
  return (
    <a
      className={cx(
        "hover:bg-accent hover:text-gray-12 after:content-[''] after:absolute after:bottom-px after:left-0 after:w-full after:h-px after:bg-accent relative",
        className
      )}
      target="_blank"
      href={href ?? ""}
    >
      {children}
    </a>
  );
};

const Items = () => {
  return (
    <div className="p-4">
      <h1 className="font-medium flex items-center gap-x-1.5">
        <span className="rounded-full bg-accent w-2 h-2 inline-block"></span>
        Mitul Shah
      </h1>
      <p className="text-gray-9 mt-1">
        Photographer, design engineer, all around nice guy.
      </p>
      <div className="space-y-2 mt-4">
        <p>
          At the intersection of brand{" "}
          <a
            className="hover:bg-accent hover:text-gray-12 after:content-[''] after:absolute after:bottom-px after:left-0 after:w-full after:h-px after:bg-accent relative"
            href=""
          >
            awareness
          </a>
          , technical understanding, and visual reductiveness, useful software
          is built and maintained.
        </p>
        <p>
          Crafting thoughtful interfaces takes time, and it is only through slow
          design that we are able to refine, polish, engineer, and successfully
          launch great products.
        </p>
        <Link
          href="/about"
          className="text-gray-11 text-sm hover:bg-accent hover:text-gray-12 px-1.5 py-1 rounded-sm -mx-1.5 mt-12 inline-block"
        >
          Learn a bit more →
        </Link>
      </div>
    </div>
  );
};

const Experience = () => {
  const roles = [
    {
      role: "Software Engineer",
      company: "Compound",
      range: "2022 – 2023",
    },
    {
      role: "UX Engineer",
      company: "Composer",
      range: "2022 – 2023",
    },
    {
      role: "Product Analyst",
      company: "Hypercontext",
      range: "2019 – 2020",
    },
    {
      role: "Operations Intern",
      company: "Uber",
      range: "2018",
    },
  ];

  return (
    <Item heading="Experience">
      <Accordion className="flex flex-col w-[calc(100%+16px)] -mx-2">
        {roles.map((role) => (
          <React.Fragment key={role.company}>
            <AccordionItem
              role={role.role}
              company={role.company}
              range={role.range}
              description="Officia aliquip fugiat sunt. Ad sint est cupidatat commodo ea voluptate anim. Ut non ex do sint magna sit deserunt amet voluptate elit consequat non."
            />
            <div className="last:hidden h-px bg-gray-12 w-[calc(100%-16px)] mx-auto" />
          </React.Fragment>
        ))}
      </Accordion>
    </Item>
  );
};
const Contact = () => {
  return (
    <div className="p-4">
      <h2 className="font-medium text-gray-11 mb-2">Get in touch</h2>
      <p>
        Officia aliquip fugiat sunt. Ad sint est cupidatat commodo ea voluptate
        anim. Ut non ex do sint magna sit deserunt amet voluptate elit consequat
        non.
      </p>
    </div>
  );
};

const Projects = () => {
  return (
    <Item heading="Projects">
      <ul className="flex flex-col gap-y-6">
        <li>
          <p>
            <ExternalLink href="https://placestoread.xyz">
              Places to Read
            </ExternalLink>{" "}
            is dolor ad voluptate adipisicing. Voluptate duis pariatur eiusmod.
            Cupidatat non sint minim do. Ipsum nisi cillum commodo. Nulla aliqua
            cupidatat amet.
          </p>
          <div className="flex items-center gap-x-4 mt-2">
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
        <li>
          <p>
            <ExternalLink>Are You Balding?</ExternalLink> is dolor ad voluptate
            adipisicing. Voluptate duis pariatur eiusmod. Cupidatat non sint
            minim do. Ipsum nisi cillum commodo. Nulla aliqua cupidatat amet.
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
      <HoverCard {...track}>
        <p>
          Listening to{" "}
          <ExternalLink href={track.songUrl} className="bg-accent/20">
            {track.title}
          </ExternalLink>{" "}
          by {track.artist}
        </p>
      </HoverCard>
      <p>
        Slowly reading{" "}
        <ExternalLink href={`https://literal.club/ms/book/${reading.slug}`}>
          {reading.title}
        </ExternalLink>{" "}
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
      className="max-w-[450px]"
      // className="grid auto-cols-fr"
      // style={{
      //   gridTemplateColumns: "repeat(auto-fill, minmax(400px, 1fr))",
      //   gridTemplateRows: "repeat(auto-fill, minmax(200px, 1fr))",
      // }}
    >
      <Items />
      <Experience />
      <Projects />
      <Currently />
      <Contact />
    </div>
  );
}
