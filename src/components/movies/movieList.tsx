import Button from "react-bootstrap/esm/Button";
import MovieCard from "./movieCard";
import Container from "react-bootstrap/esm/Container";
import Row from "react-bootstrap/esm/Row";
import Col from "react-bootstrap/esm/Col";
import useMovies from "../../hooks/useMovies";
import useUser from "../../hooks/useUser";

const MovieList: React.FC = () => {
  const { loading, movies, showRecent, toggleShowRecent } = useMovies();

  const { userName } = useUser();

  if (loading) {
    return <div>Loading...</div>;
  }

  return (
    <Container>
      <div className="d-flex justify-content-between align-items-center">
        <p>{`Bienvenido ${userName}!`}</p>
        <Button onClick={toggleShowRecent} className="mt-2" variant="secondary">
          {showRecent
            ? "Mostrar todas las peliculas"
            : "Mostrar solo las recientes"}
        </Button>
      </div>

      <div>
        <Row xs={1} md={2} lg={4} className="g-4 mt-1">
          {movies.length > 0 ? (
            movies.map((movie) => (
              <Col key={movie.movieId}>
                <MovieCard movie={movie} />
              </Col>
            ))
          ) : (
            <div>No se encuentran peliculas</div>
          )}
        </Row>
      </div>
    </Container>
  );
};

export default MovieList;
