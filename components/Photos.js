import { Box, Image, HStack } from "@chakra-ui/react";

const Photos = ({ images }) => {
  return (
    <HStack
      overflowX="scroll"
      w="100%"
      flexWrap="nowrap"
      sx={{
        scrollSnapType: "x proximity",
        scrollbarWidth: "none",
        "&::-webkit-scrollbar": {
          background: "transparent",
        },
      }}
    >
      {images?.map((i) => {
        return (
          <Box
            minW="300px"
            objectFit="scale-down"
            key={i.id}
            sx={{
              scrollSnapAlign: "start",
              background: "rgba( 255, 255, 255, 0.00 )",
              boxShadow: "0 8px 32px 0 rgba( 31, 38, 135, 0.08 );",
              backdropFilter: "blur( 0.5px );",
              borderRadius: "2px",
              border: "1px solid rgba( 255, 255, 255, 0.18 );",
            }}
          >
            <Image src={i.src} alt={i.alt} />
          </Box>
        );
      })}
    </HStack>
  );
};

export default Photos;
