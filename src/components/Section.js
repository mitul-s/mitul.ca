import { Box } from "@chakra-ui/react";
import SectionHeader from "@/components/SectionHeader";

export default function Section({ header, children, ...rest }) {
  return (
    <Box mb={12} {...rest} as="section">
      <SectionHeader>{header}</SectionHeader>
      <Box>{children}</Box>
    </Box>
  );
}
