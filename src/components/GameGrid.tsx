import useGames from "../hooks/useGames";
import { SimpleGrid, Text } from "@chakra-ui/react";
import GameCard from "./GameCard";

const GameGeid = () => {
  const { errors, games } = useGames();

  return (
    <>
      {errors && <Text>{errors}</Text>}
      <SimpleGrid columns={{sm:1,md:2,lg:3,xl:4}} padding={"10px"} spacing={10}>
        {games.map((game) => (
          <GameCard game={game} key={game.id} />
        ))}
      </SimpleGrid>
    </>
  );
};

export default GameGeid;
