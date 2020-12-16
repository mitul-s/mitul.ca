import React, { useEffect, useState } from "react"
import { Box, Grid, Heading, Text, HStack, Icon, Stack, Link } from "@chakra-ui/react"
import { MusicNotesSimple, Monitor, Bookmarks, GearSix } from "phosphor-react";
import Section from "@/components/Section";

const CurrentItem = ({ icon, title, caption, link }) => {
  return (
      <HStack spacing={4}>
        <Icon fontSize="xl" as={icon} />
        <Box>
          <Link href={link} _hover={{ color: "blueGray.500" }}>
            <Text fontWeight="bold" maxW="175px" whiteSpace="nowrap" overflow="hidden" textOverflow="ellipsis">{title}</Text>
            <Text fontSize="sm" color="trueGray.500">
              {caption}
            </Text>
          </Link>
        </Box>
      </HStack>
  );
}


const Current = () => {
  
  const [data, setData] = useState("");
  const [loading, setLoading] = useState('');
  const [error, setError] = useState();
  const username = "mitul-s";

  useEffect(() => {
    let ignore = false;
    const getMusic = async () => {
      const url = `https://ws.audioscrobbler.com/2.0/?method=user.getrecenttracks&user=${username}&api_key=${process.env.NEXT_PUBLIC_LASTFM_KEY}&format=json`;
      try {
        setLoading(true);
        const res = await fetch(url);
        const body = await res.json();
        console.log(body);
        if (!ignore) setData(body);
       
      } catch (err) {
        setError(err);
      } finally {
        setLoading(false);
      }
    };

    getMusic();
    return () => {
      ignore = true;
    };
  }, []);

  if(loading || !data) {
    return <h1>Loading</h1>
  }

  return (
    <Section header="Currently">
      <Stack spacing={8} direction="row">
        <CurrentItem
          icon={MusicNotesSimple}
          title={data.recenttracks.track[0].name}
          caption={data.recenttracks.track[0].artist["#text"]}
          link={data.recenttracks.track[0].url}
        />
        <CurrentItem
          icon={Bookmarks}
          title={"Range"}
          caption={"David Epstein"}
        />
        <CurrentItem icon={GearSix} title={"Range"} caption={"Artist Name"} />
      </Stack>
    </Section>
  );
}

export default Current;