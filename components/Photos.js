import { Box, Image, HStack } from "@chakra-ui/react";
import styles from "@/styles/sidebar.module.css";
import { useState } from "react";

const Photos = ({ images, ...restProps }) => {
  return (
    <HStack
      width="100vw"
      flexWrap="nowrap"
      className={styles.fullBleed}
      {...restProps}
    >
      <Box
        display="flex"
        alignItems="center"
        margin="0 auto"
        width="fit-content"
        overflowX="scroll"
        paddingY={4}
        sx={{
          scrollbarWidth: "none",
          "&::-webkit-scrollbar": {
            display: "none",
          },
        }}
      >
        {images?.map((i) => {
          const [imgWidth, setImgWidth] = useState("240px");
          const [widthOn, setWidthOn] = useState(false);
          const toggleWidth = () => {
            if (widthOn) {
              setWidthOn(false);
              setImgWidth("240px");
            } else {
              setWidthOn(true);
              setImgWidth("400px");
            }
          };
          return (
            <Box
              key={i.id}
              minW={imgWidth}
              height="100%"
              objectFit="contain"
              transition="300ms"
              marginRight={4}
              onClick={(i) => {
                toggleWidth(i);
              }}
              sx={{
                // scrollSnapAlign: "start end",
                background: "rgba( 255, 255, 255, 0.15 )",
                boxShadow: "0 5px 12px rgb(0 0 0 / 20%)",
                backdropFilter: "blur(0.5px)",
                borderRadius: "2px",
                border: "1px solid rgba( 255, 255, 255, 0.20 )",
              }}
              className={`${styles.marginHandle} link`}
            >
              <Image src={i.src} alt={i.alt} transition="300ms" />
            </Box>
          );
        })}
      </Box>
    </HStack>
  );
};

export default Photos;