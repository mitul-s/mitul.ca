import { Heading } from "@chakra-ui/react";

export default function SectionHeader({ children, ...rest }) {
    return (
      <Heading
        textTransform="uppercase"
        size="xs"
        color="cyan.400"
        letterSpacing="1.3px"
        my={5}
        {...rest}
      >
        {children}
      </Heading>
    );
}