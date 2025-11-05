import React from "react";
import Container from "react-bootstrap/esm/Container";

const Home = () => {
  return (
    <Container
      fluid
      className="d-flex flex-column justify-content-center align-items-center"
      style={{
        height: "80hv",
        textAlign: "center",
      }}
    >
      <h1>Main Page</h1>
      <p className="text-muted">Welcome to our site!</p>
    </Container>
  );
};

export default Home;
