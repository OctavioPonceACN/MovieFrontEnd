import { useState } from "react";
import type { ContentProps } from "../types/content";
import type { Movie } from "../types/movie";
import MovieCard from "./movieCard";

const Content: React.FC<ContentProps> = () => {
  const [movies, setMovies] = useState<Movie[]>([]);

  return (
    <div>
      {movies.length > 0 ? (
        movies.map((movie) => <MovieCard movie={movie} key={movie.movieId} />)
      ) : (
        <div>Loading...</div>
      )}
    </div>
  );
};

export default Content;
