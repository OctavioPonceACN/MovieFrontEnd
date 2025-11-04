import type { Movie } from "./movie";

export interface UseMoviesResult {
  loading: boolean;
  movies: Movie[];
  showRecent: boolean;
  toggleShowRecent: () => void;
  error: string | null;
}
