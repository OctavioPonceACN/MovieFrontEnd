import { useCallback, useEffect, useState } from "react";
import type { Movie } from "../types/movie";
import type { UseMoviesResult } from "../types/useMoviesResult";
import { apiClient } from "../lib/axios";
import type { Genre } from "../types/genre";

function useMovies(): UseMoviesResult {
  const [showRecent, setShowRecent] = useState(false);
  const [loading, setLoading] = useState(true);
  const [movieData, setMovieData] = useState<Movie[]>([]);
  const [originalMovieData, setOriginalMovieData] = useState<Movie[]>([]);
  const [error, setError] = useState<string | null>(null);
  const [genres, setGenres] = useState<Genre[]>([]);

  const baseUrl = "https://localhost:44359";

  useEffect(() => {
    const controller = new AbortController();
    async function fetchMovies() {
      try {
        setLoading(true);
        setError(null);

        const response = await apiClient.get(`${baseUrl}/api/Movie/catalog`, {
          signal: controller.signal,
        });

        const data: Movie[] = response.data as Array<Movie>;
        const normalizedData: Movie[] = data.map((movie: Movie) => ({
          ...movie,
          releaseDate: new Date(movie.releaseDate),
        }));

        setMovieData(normalizedData);
        setOriginalMovieData(normalizedData);
        const genres = await apiClient.get(`${baseUrl}/api/Genre`, {
          signal: controller.signal,
        });

        const genreData: Genre[] = genres.data as Array<Genre>;
        setGenres(genreData);
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
    genres,
    onGenreChange: (genre: string) => {
      if (genre === "all") {
        setMovieData(originalMovieData);
        return;
      }
      setMovieData(
        originalMovieData.filter((movie) =>
          movie.genres.some((g) => g === genre)
        )
      );
    },
  };
}

export default useMovies;
