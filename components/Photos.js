import { Box, Image, HStack } from "@chakra-ui/react";
import styles from "@/styles/sidebar.module.css";

const Photos = ({ images }) => {
  return (
    <HStack
      mt={-6}
      mb={12}
      width="100vw"
      flexWrap="nowrap"
      className={styles.fullBleed}
    >
      <Box
        display="flex"
        margin="0 auto"
        width="fit-content"
        overflowX="scroll"
        paddingY={4}
        sx={{
          // scrollSnapType: "x",
          scrollbarWidth: "none",
          "&::-webkit-scrollbar": {
            display: "none",
          },
        }}
      >
        {images?.map((i) => {
          return (
            <Box
              minW="240px"
              objectFit="scale-down"
              key={i.id}
              marginRight={4}
              _first={{ marginLeft: "calc(50vw - 30ch)" }}
              _last={{ marginRight: "calc(50vw - 30ch)" }}
              sx={{
                // scrollSnapAlign: "start end",
                background: "rgba( 255, 255, 255, 0.15 )",
                boxShadow: "0 8px 14px rgb(0 0 0 / 30%)",
                backdropFilter: "blur(6.5px)",
                webkitBackdropFilter: "blur( 6.5px )",
                borderRadius: "2px",
                border: "1px solid rgba( 255, 255, 255, 0.20 )",
              }}
            >
              <Image src={i.src} alt={i.alt} />
            </Box>
          );
        })}
      </Box>
    </HStack>
  );
};

export default Photos;