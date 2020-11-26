import { Heart } from "phosphor-react"
import { Box, Stack, Heading, Text, HStack, Icon, Badge } from "@chakra-ui/react";
import SectionHeader from "@/components/SectionHeader";

const Projects = () => {
  return (
    <>
      <SectionHeader>Projects</SectionHeader>
      <Stack>
        <Box
          border="1px solid"
          borderColor="trueGray.100"
          py={8}
          px={4}
          borderRadius="4px"
        >
          <HStack spacing={5}>
            <Box>
              <Icon fontSize="3xl" as={Heart} />
            </Box>
            <Box>
              <Heading fontSize="lg" mb={2}>
                Paprback
              </Heading>
              <Text mb={2}>This is a goodreads alternative</Text>
              <HStack>
                <Badge>React</Badge>
                <Badge>Chakra UI</Badge>
                <Badge>Chakra UI</Badge>
              </HStack>
            </Box>
          </HStack>
        </Box>
        <Box
          border="1px solid"
          borderColor="trueGray.100"
          p={8}
          borderRadius="4px"
        >
          Hello
        </Box>
        <Box
          border="1px solid"
          borderColor="trueGray.100"
          p={8}
          borderRadius="4px"
        >
          Hello
        </Box>
      </Stack>
    </>
  );
};

export default Projects;
