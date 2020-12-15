import { Heading } from "@chakra-ui/react";

export default function SectionHeader({ children, ...rest }) {
    return (
      <Heading
        textTransform="uppercase"
        size="xs"
        color="trueGray.400"
        letterSpacing="1.3px"
        fontWeight="bold"
        my={5}
        {...rest}
      >
        {children}
      </Heading>
    );
}