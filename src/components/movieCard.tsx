import React from "react";
import type { MovieCardProps } from "../types/movieCard";

const MovieCard: React.FC<MovieCardProps> = ({ movie }) => {
  return (
    <>
      <h3>Id: {movie.movieId}</h3>
      <h3>Title: {movie.title}</h3>
      <p>Description {movie.description}</p>
      <img
        src={movie.pictureUrl}
        style={{
          width: "200px",
          height: "auto",
          borderRadius: "8px",
        }}
      />
      <p>Release Date: {movie.releaseDate.toDateString()}</p>
    </>
  );
};

export default MovieCard;
