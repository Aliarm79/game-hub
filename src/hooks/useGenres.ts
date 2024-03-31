import { CanceledError } from "axios";
import { useState, useEffect } from "react";
import Axios from "../services/api-client";
interface Genre {
  id: number;
  name: string;
}
interface GenreResponse {
  count: number;
  results: Genre[];
}

const useGenres = () => {
  const [genres, setGenre] = useState<Genre[]>([]);
  const [errors, setErrors] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  useEffect(() => {
    const controller = new AbortController();
    setIsLoading(true);
    Axios.get<GenreResponse>("/genres", {
      signal: controller.signal,
    })
      .then((res) => {
        setGenre(res.data.results);
        setErrors("");
        setIsLoading(false);
      })
      .catch((err) => {
        if (err instanceof CanceledError) return;
        setErrors(err.message);
        setIsLoading(false);
      });

    return () => controller.abort();
  }, []);
  return { genres, errors, isLoading };
};

export default useGenres;
