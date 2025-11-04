import type { ContentProps } from "../types/content";
import MovieCard from "./movieCard";
import useMovies from "../hooks/useMovies";

const Content: React.FC<ContentProps> = () => {
  const { loading, movies, showRecent, toggleShowRecent, error } = useMovies();

  if (loading) {
    return <div>Loading...</div>;
  }

  return (
    <div>
      {movies.length > 0 ? (
        movies.map((movie) => <MovieCard movie={movie} key={movie.movieId} />)
      ) : (
        <div>No se encuentran peliculas</div>
      )}
    </div>
  );
};

export default Content;
