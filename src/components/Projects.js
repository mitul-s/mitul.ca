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
      <Flex justifyContent="space-between" alignItems="center" mb={4}>
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
      <HStack fontSize="md" mt={4} color="trueGray.500">
        {repo && demo ? (
          <Link
            data-splitbee-event={`${title} - Demo`}
            data-splitbee-event-type="Projects"
            href={data.homepage}
            variant="ghost-sm"
            marginLeft={-1.5}
            isExternal
          >
            <Flex alignItems="center" justifyContent="center">
              <Text marginRight={1}>Demo</Text>
              <Lightning />
            </Flex>
          </Link>
        ) : (
          ""
        )}
        {code ? (
          <Link
            data-splitbee-event={`${title} - Code`}
            data-splitbee-event-type="Projects"
            href={data.svn_url}
            variant="ghost-sm"
            marginLeft={-1.5}
            isExternal
          >
            <Flex alignItems="center" justifyContent="center">
              <Text marginRight={1}>Code</Text>
              <Code />
            </Flex>
          </Link>
        ) : (
          ""
        )}
        {journal ? (
          <Link
            data-splitbee-event={`${title} - Journal`}
            data-splitbee-event-type="Projects"
            href="https://futureland.tv/mitul/project-annotate"
            variant="ghost-sm"
            marginLeft={-1.5}
            isExternal
          >
            <Flex alignItems="center" justifyContent="center">
              <Text marginRight={1}>Journal</Text>
              <Note />
            </Flex>
          </Link>
        ) : (
          ""
        )}
      </HStack>
    </Box>
  );
};

export default Project;
