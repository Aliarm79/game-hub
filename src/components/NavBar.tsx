import { HStack, Image } from "@chakra-ui/react";
import ColorModeSwitch from "./ColorModeSwitch";
import SearchInput from "./SearchInput";
interface Props {
  onSearch: (value: string) => void;
}
const NavBar = ({onSearch}:Props) => {
  return (
    <HStack  padding="10px">
      <Image src="./assets/images/logo.webp" boxSize={"60px"} />
      <SearchInput onSearch={onSearch}/>
      <ColorModeSwitch />
    </HStack>
  );
};

export default NavBar;
