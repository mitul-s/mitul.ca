/* eslint-disable no-unused-vars */
/* eslint-disable react/display-name */
import React from "react";
import { Button, useColorMode } from "@chakra-ui/react";

const ActionButton = React.forwardRef((props, ref) => {
  const { colorMode } = useColorMode();

  return (
    <Button
      bg="transparent"
      fontSize="md"
      borderRadius={0}
      variant="link"
      pl={0}
      pr={3}
      py={3}
      w="min-content"
      border="1px solid transparent"
      color="trueGray.500"
      fontWeight="regular"
      transition="0.35s ease-out"
      _hover={{
        color: colorMode === "light" ? "trueGray.900" : "trueGray.50",
        border: "1px solid",
        pr: 3,
        pl: 3,
      }}
      {...props}
    >
      {props.children}
    </Button>
  );
});

export default ActionButton;
