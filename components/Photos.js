import { Box, Image, HStack } from "@chakra-ui/react"
import Images from "@/components/Images"


const Photos = () => {
    return (
      <HStack overflowX="scroll" w="100%" flexWrap="nowrap" sx={{ scrollSnapType: "x mandatory"}}>
      {
        Images.map(i => {
          return (
            <Box
              minW="300px"
              objectFit="scale-down"
              key={i.id}
              sx={{ scrollSnapAlign: "center" }}
            >
              <Image src={i.src} alt={i.alt} />
            </Box>
          );
        })
      }
      </HStack>
    );
}

export default Photos;