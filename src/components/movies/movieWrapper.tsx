import React from "react";
import { useParams } from "react-router-dom";
import MovieCard from "./movieCard";
import useMovies from "../../hooks/useMovies";

const MovieWrapper: React.FC = () => {
  const { id } = useParams<{ id: string }>();
  const { movies, loading, error } = useMovies();

  if (loading) return <div>Loading...</div>;
  if (error) return <div>Error {error}</div>;

  const movie = movies.find(
    (m: { movieId: number }) => m.movieId === Number(id)
  );

  return movie ? (
    <div>
      <MovieCard movie={movie} key={movie.movieId} />
    </div>
  ) : (
    <p>Movie not found.</p>
  );
};

export default MovieWrapper;
