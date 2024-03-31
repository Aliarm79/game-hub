import {
  FaWindows,
  FaPlaystation,
  FaApple,
  FaLinux,
  FaXbox,
  FaAndroid,
} from "react-icons/fa";
import { MdPhoneIphone } from "react-icons/md";
import { SiNintendo } from "react-icons/si";
import { BsGlobe } from "react-icons/bs";
import { HStack, Icon } from "@chakra-ui/react";
import { Platform } from "../hooks/useGames";
import { IconType } from "react-icons";

const PlatformIconList = ({ platforms }: { platforms: Platform[] }) => {
  const iconMap:{[key:string]:IconType} = {
    pc: FaWindows,
    playstation: FaPlaystation,
    xbox: FaXbox,
    nintendo: SiNintendo,
    linux: FaLinux,
    mac: FaApple,
    ios: MdPhoneIphone,
    web: BsGlobe,
    android: FaAndroid,
  };
  return (
    <HStack marginY={1}>
      {platforms.map((platform) => (
        <Icon key={platform.id} color="gray.500" as={iconMap[platform.slug]}>{platform.name}</Icon>
      ))}
    </HStack>
  );
};

export default PlatformIconList;
