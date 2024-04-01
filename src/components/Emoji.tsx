import { Image } from "@chakra-ui/react";
interface Props {
  rating: number;
}
const Emoji = ({ rating }: Props) => {
  if (rating < 3) return;
  const emojiObj: {
    [key: number]: { src: string; alt: string; boxSize: string };
  } = {
    3: { src: "./assets/images/meh.webp", alt: "meh", boxSize: "25px" },
    4: {
      src: "./assets/images/thumbs-up.webp",
      alt: "recommended",
      boxSize: "25px",
    },
    5: {
      src: "./assets/images/bulls-eye.webp",
      alt: "exceptional",
      boxSize: "35px",
    },
  };
  return <Image {...emojiObj[rating]} marginTop={1} />;
};

export default Emoji;
