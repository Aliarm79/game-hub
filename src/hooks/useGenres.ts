import genres from "../data/genres";
export interface Genre {
  id: number;
  name: string;
  image_background: string;
}

const useGenres = () => ({ data: genres, isLoading: false, errors: false });

export default useGenres;
