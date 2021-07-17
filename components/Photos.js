import { Box, Image, HStack } from "@chakra-ui/react";
import styles from "@/styles/sidebar.module.css";

const Photos = ({ images }) => {
  return (
    <HStack width="100vw" flexWrap="nowrap" className={styles.fullBleed}>
      <Box
        display="flex"
        margin="0 auto"
        width="fit-content"
        overflowX="scroll"
        sx={{
          // scrollSnapType: "x",
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
              marginLeft={3}
              _first={{ marginLeft: "calc(50vw - 30ch)" }}
              _last={{ marginRight: "calc(50vw - 30ch)" }}
              sx={{
                // scrollSnapAlign: "start end",
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
      </Box>
    </HStack>
  );
};

export default Photos;
