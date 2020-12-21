import { Box, Image, HStack } from "@chakra-ui/react"
import Images from "@/components/Images"


const Photos = ({ children }) => {
    return (
      <HStack overflowX="scroll" w="100%" flexWrap="nowrap">
      {
        Images.map(i => {
          return (
            <Box minW="300px" objectFit="scale-down" key={i.id}>
              <Image src={i.src} />
            </Box>
          );
        })
      }
      </HStack>
    );
}

export default Photos;