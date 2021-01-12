import Shell from "@/components/Shell"
import { Box, Stack, Text, Flex, Heading } from "@chakra-ui/react"


const about = () => {
    return (
      <Shell>
        <Flex mt={24} justifyContent="flex-end" flexDirection="column">
          <Stack spacing={4}>
            <Heading>A little about me</Heading>
            <Text>
              I’m still figuring out what my life story would look like here,
              but for now, I’m happy to share that I’m a curious learner of all
              things. I’m a firm believer in the ideologies of doing difficult
              things because they are the most rewarding and seeking discomfort
              to support personal growth. Some things I'm super into: investment
              psychology, Fortnite and the metaverse, aerial photography and
              binge watching David Dobrik vlogs.
            </Text>
            <Text>This website is still a work in progress, bear with me.</Text>
          </Stack>
        </Flex>
      </Shell>
    );
}

export default about;