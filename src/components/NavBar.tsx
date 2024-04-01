import { HStack, Image } from "@chakra-ui/react";
import ColorModeSwitch from "./ColorModeSwitch";
import SearchInput from "./SearchInput";

const NavBar = () => {
  return (
    <HStack  padding="10px">
      <Image src="./assets/images/logo.webp" boxSize={"60px"} />
      <SearchInput/>
      <ColorModeSwitch />
    </HStack>
  );
};

export default NavBar;
