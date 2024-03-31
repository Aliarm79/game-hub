import { useState, useEffect } from "react";
import Axios from "../services/api-client";
import { CanceledError } from "axios";

interface Game {
  id: number;
  name: string;
}
interface GamesResponse {
  count: number;
  results: Game[];
}
const useGames = () => {
  const [games, setGames] = useState<Game[]>([]);
  const [errors, setErrors] = useState("");
  useEffect(() => {
    const controller = new AbortController();
    Axios.get<GamesResponse>("/games", {
      signal: controller.signal,
    })
      .then((res) => {
        setGames(res.data.results);
        setErrors("");
      })
      .catch((err) => {
        if (err instanceof CanceledError) return;
        setErrors(err.message);
      });

    return () => controller.abort();
  }, []);

  return { games, errors };
};

export default useGames;