import {
  Button,
  HStack,
  Image,
  List,
  ListItem,
  Skeleton,
  SkeletonCircle,
} from "@chakra-ui/react";
import useGenres, { Genre } from "../hooks/useGenres";
import getCroppedImage from "../services/image-url";
interface Props {
  onSelectGenre: (genre: Genre) => void;
}

const GenreList = ({ onSelectGenre }: Props) => {
  const skeletons = [
    1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20,
  ];

  const { data: genres, isLoading } = useGenres();
  return (
    <List>
      {isLoading
        ? skeletons.map((skeleton) => (
            <HStack key={skeleton} spacing={1} paddingY="5px">
              <SkeletonCircle size="6" />
              <Skeleton w="100px" h={5} />
            </HStack>
          ))
        : genres.map((genre) => (
            <ListItem key={genre.id} paddingY="5px">
              <HStack>
                <Image
                  boxSize="32px"
                  borderRadius={8}
                  src={getCroppedImage(genre.image_background)}
                />
                <Button
                  variant="link"
                  onClick={() => onSelectGenre(genre)}
                  fontSize="lg"
                >
                  {genre.name}
                </Button>
              </HStack>
            </ListItem>
          ))}
    </List>
  );
};

export default GenreList;
