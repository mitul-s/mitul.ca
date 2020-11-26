import { Box, Grid, Heading, Text, HStack, Icon } from "@chakra-ui/react"
import { MusicNotesSimple, Monitor, Bookmarks, GearSix } from "phosphor-react";
import SectionHeader from "@/components/SectionHeader";

const Current = () => {
    return (
      <>
        <SectionHeader>Currently</SectionHeader>
      <Box bg="blueGray.900" rounded="4px" p={8}>

        <Grid gridTemplateColumns="1fr 1fr" gap={8}>
          <Box>
            <HStack spacing={4}>
              <Icon fontSize="xl" as={MusicNotesSimple} />
              <Box>
                <Text fontWeight="bold">Song Name</Text>
                <Text color="blueGray.500">Artist Name</Text>
              </Box>
            </HStack>
          </Box>
          <Box>
            <HStack spacing={4}>
              <Icon fontSize="xl" as={Bookmarks} />
              <Box>
                <Text fontWeight="bold">Outliers</Text>
                <Text color="blueGray.500">Malcolm Gladwell</Text>
              </Box>
            </HStack>
          </Box>
          <Box>
            <HStack spacing={4}>
              <Icon fontSize="xl" as={GearSix} />
              <Box>
                <Text fontWeight="bold">Paprback</Text>
                <Text color="blueGray.500">A Goodreads alternative</Text>
              </Box>
            </HStack>
          </Box>
          <Box>
            <HStack spacing={4}>
              <Icon fontSize="xl" as={Monitor} />
              <Box>
                <Text fontWeight="bold">New Girl</Text>
                <Text color="blueGray.500">Sitcom</Text>
              </Box>
            </HStack>
          </Box>
        </Grid>
      </Box>
      </>
    );
}

export default Current;