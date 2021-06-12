import { Box } from "@chakra-ui/react"
import SectionHeader from "@/components/SectionHeader"

export default function Section({ header, children, ...rest }) {
    return (
        <Box {...rest} as="section" my={12}>
            <SectionHeader>{header}</SectionHeader>
            <Box>
                {children}
            </Box>
        </Box>
    )
}