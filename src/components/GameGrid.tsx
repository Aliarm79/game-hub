import { useEffect, useState } from "react";
import Axios from "../services/api-client";
interface Game {
  id: number;
  name: string;
}
interface GamesResponse {
  count: number;
  results: Game[];
}
const GameGeid = () => {
  const [games, setGames] = useState<Game[]>([]);
  useEffect(() => {
    Axios.get<GamesResponse>("/games").then((res) =>
      setGames(res.data.results)
    );
  }, []);

  return (
    <ul>
      {games.map((game) => (
        <li key={game.id}>{game.name}</li>
      ))}
    </ul>
  );
};

export default GameGeid;
