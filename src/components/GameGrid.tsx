
import useGames from "../hooks/useGames";
import { Text } from "@chakra-ui/react";

const GameGeid = () => {
  const { errors, games } = useGames();

  return (
    <>
      {errors && <Text>{errors}</Text>}
      <ul>
        {games.map((game) => (
          <li key={game.id}>{game.name}</li>
        ))}
      </ul>
    </>
  );
};

export default GameGeid;
