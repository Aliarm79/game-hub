import { HStack, Image, Text } from "@chakra-ui/react";

const NavBar = () => {
  return (
    <HStack>
          <Image src="assets/images/logo.webp" boxSize={"60px"} />
          <Text>Navbar</Text>
    </HStack>
  );
};

export default NavBar;
