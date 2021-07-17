import { Box, Image, HStack } from "@chakra-ui/react";
import styles from "@/styles/sidebar.module.css";

const Photos = ({ images }) => {
  return (
    <HStack
      width="100vw"
      flexWrap="nowrap"
      className={styles.fullBleed}
    >
      <Box
        display="flex"
        margin="0 auto"
        width="fit-content"
        overflowY="scroll"
      >
        {images?.map((i) => {
          return (
            <Box
              minW="300px"
              objectFit="scale-down"
              marginLeft="15px"
              key={i.id}
              _first={{ marginLeft: "35ch" }}
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
      </Box>
    </HStack>
  );
};

export default Photos;
