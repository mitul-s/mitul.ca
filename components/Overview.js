import SectionHeader from "@/components/SectionHeader"
import { Text } from "@chakra-ui/react"

const Overview = ({ children }) => {
    return (
      <>
        <SectionHeader>About</SectionHeader>
        <Text>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad
          minim veniam, quis nostrud exercitation ullamco laboris nisi{" "}
        </Text>
      </>
    );
}

export default Overview;