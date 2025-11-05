import React from "react";

import Card from "react-bootstrap/esm/Card";
import Button from "react-bootstrap/esm/Button";
import type { MovieCardProps } from "../../types/movieCard";
import { Link } from "react-router";

const MovieCard: React.FC<MovieCardProps> = ({ movie }) => {
  return (
    <>
      <Card style={{ width: "19rem" }}>
        <Card.Img
          variant="top"
          src={movie.pictureUrl}
          alt={`Movie poster${movie.title}`}
          style={{
            width: "300px",
            objectFit: "cover",
          }}
        />
        <Card.Body>
          <Card.Title>{movie.title}</Card.Title>
          <Card.Subtitle className="mb-2 text-muted">
            Release Date: {movie.releaseDate.toDateString()}
          </Card.Subtitle>
          <Card.Text>{movie.description}</Card.Text>
        </Card.Body>
        <Card.Footer>
          <Card.Text>
            <Link to={`/movie/${movie.movieId}`}>
              <Button variant="light" size="sm">
                Movie Details
              </Button>
            </Link>
          </Card.Text>
        </Card.Footer>
      </Card>
    </>
  );
};

export default MovieCard;
