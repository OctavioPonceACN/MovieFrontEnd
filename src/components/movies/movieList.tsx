import Button from "react-bootstrap/esm/Button";
import MovieCard from "./movieCard";
import Container from "react-bootstrap/esm/Container";
import Row from "react-bootstrap/esm/Row";
import Col from "react-bootstrap/esm/Col";
import useMovies from "../../hooks/useMovies";
import useUser from "../../hooks/useUser";
import Dropdown from "react-bootstrap/esm/Dropdown";

const MovieList: React.FC = () => {
  const {
    loading,
    movies,
    showRecent,
    genres,
    toggleShowRecent,
    onGenreChange,
  } = useMovies();

  const { userName, toggleTheme } = useUser();

  if (loading) {
    return <div>Loading...</div>;
  }

  return (
    <Container>
      <div className="d-flex justify-content-between align-items-center">
        <p>{`Bienvenido ${userName}!`}</p>
        <div className="d-flex justify-content-between align-items-end gap-2">
          <Dropdown
            onSelect={(eventKey) => {
              if (eventKey !== null) {
                onGenreChange(eventKey);
              }
            }}
          >
            <Dropdown.Toggle variant="success" id="dropdown-basic">
              Generos
            </Dropdown.Toggle>

            <Dropdown.Menu>
              <Dropdown.Item eventKey="all" key={"all"}>
                {"Todos los generos"}
              </Dropdown.Item>
              {genres.length > 0 &&
                genres.map((genre) => (
                  <Dropdown.Item eventKey={genre.name} key={genre.id}>
                    {genre.name}
                  </Dropdown.Item>
                ))}
            </Dropdown.Menu>
          </Dropdown>
          <Button
            onClick={toggleShowRecent}
            className="mt-2"
            variant="secondary"
          >
            {showRecent
              ? "Mostrar todas las peliculas"
              : "Mostrar solo las recientes"}
          </Button>
        </div>
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
