import { useCallback, useEffect, useState } from "react";
import type { Movie } from "../types/movie";
import type { UseMoviesResult } from "../types/useMoviesResult";
import { apiClient } from "../lib/axios";

function useMovies(): UseMoviesResult {
  const [showRecent, setShowRecent] = useState(false);
  const [loading, setLoading] = useState(true);
  const [movieData, setMovieData] = useState<Movie[]>([]);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const controller = new AbortController();
    async function fetchMovies() {
      try {
        setLoading(true);
        setError(null);

        const response = await apiClient.get(
          "https://localhost:44359/api/Movie/catalog",
          { signal: controller.signal }
        );

        const data: Movie[] = response.data as Array<Movie>;
        const normalizedData: Movie[] = data.map((movie: Movie) => ({
          ...movie,
          releaseDate: new Date(movie.releaseDate),
        }));

        setMovieData(normalizedData);

        console.log("Fetched movies:", movieData);
      } catch (err: any) {
        if (err?.name === "CanceledError" || err?.name === "ERR_CANCELED")
          return;

        const message =
          err?.response?.data?.message ||
          err.message ||
          "Failed to fetch movies";
        setError(message);
      } finally {
        setLoading(false);
      }
    }
    fetchMovies();
    return () => controller.abort();
  }, []);

  const filteredMovies = useCallback(
    () =>
      showRecent
        ? movieData.filter((m) => m.releaseDate.getFullYear() >= 2025)
        : movieData,
    [movieData, showRecent]
  );

  return {
    loading,
    movies: filteredMovies(),
    showRecent,
    toggleShowRecent: () => setShowRecent((prev) => !prev),
    error,
  };
}

export default useMovies;
