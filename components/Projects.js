import React, { useState, useEffect } from "react";
import { Star, Lightning, Code, Note } from "phosphor-react";
import {
  Box,
  Flex,
  Tooltip,
  Link,
  Button,
  Heading,
  Text,
  HStack,
  Icon,
} from "@chakra-ui/react";

const Project = ({ title, description, repo, demo, code, journal }) => {
  const [data, setData] = useState(false);
  const getStars = () => {
    fetch(`https://api.github.com/repos/mitul-s/${repo}`)
      .then((res) => {
        return res.json();
      })
      .then((data) => {
        setData(data);
      });
  };

  useEffect(() => {
    getStars();
  }, []);

  return (
    <Box p={6} border="1px solid" borderColor="trueGray">
      <Flex justifyContent="space-between" alignItems="center" mb={3}>
        <Heading size="md">{title}</Heading>
        {data.stargazers_count > 0 ? (
          <Tooltip
            label="Github Stargazers"
            aria-label="Github Stargazers"
            closeOnClick={false}
            closeOnMouseDown={false}
            openDelay={600}
          >
            <HStack>
              <Icon fontSize="xl" as={Star} />
              <Text>{data.stargazers_count}</Text>
            </HStack>
          </Tooltip>
        ) : (
          ""
        )}
      </Flex>
      <Text>{description}</Text>
      <HStack fontSize="sm" mt={3} color="trueGray.500">
        {repo && demo ? (
          <Link href={data.homepage} isExternal>
            <Button
              data-splitbee-event={`${title} - Demo`}
              data-splitbee-event-type="Projects"
              color="trueGray.500"
              variant="link"
              fontWeight="normal"
              rightIcon={<Lightning />}
            >
              Demo
            </Button>
          </Link>
        ) : (
          ""
        )}
        {code ? (
          <Link href={data.svn_url} isExternal>
            <Button
              data-splitbee-event={`${title} - Code`}
              data-splitbee-event-type="Projects"
              variant="link"
              color="trueGray.500"
              fontWeight="normal"
              rightIcon={<Code />}
            >
              Code
            </Button>
          </Link>
        ) : (
          ""
        )}
        {journal ? (
          <Link href="https://futureland.tv/mitul/project-annotate" isExternal>
            <Button
              data-splitbee-event={`${title} - Journal`}
              data-splitbee-event-type="Projects"
              variant="link"
              color="trueGray.500"
              fontWeight="normal"
              rightIcon={<Note />}
            >
              Journal
            </Button>
          </Link>
        ) : (
          ""
        )}
      </HStack>
    </Box>
  );
};

export default Project;
