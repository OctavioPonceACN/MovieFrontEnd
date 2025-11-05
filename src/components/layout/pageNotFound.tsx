import Container from "react-bootstrap/esm/Container";

const PageNotFound = () => {
  return (
    <Container
      fluid
      className="d-flex flex-column justify-content-center align-items-center"
      style={{
        height: "80hv",
        textAlign: "center",
      }}
    >
      <h1>Page Not Foud</h1>
      <p className="text-muted">The page you are looking for does not exist.</p>
    </Container>
  );
};

export default PageNotFound;
