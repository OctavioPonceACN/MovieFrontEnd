import Navbar from "react-bootstrap/esm/Navbar";
import type { HeaderProps } from "../../types/header";
import Container from "react-bootstrap/esm/Container";
import Nav from "react-bootstrap/esm/Nav";
import NavDropdown from "react-bootstrap/esm/NavDropdown";
import { NavLink } from "react-router-dom";

const Header: React.FC<HeaderProps> = ({ title }) => {
  return (
    <>
      <h1>{title}</h1>
      <Navbar bg="dark" variant="dark" expand="lg" fixed="top">
        <Container>
          <Navbar.Brand>{title}</Navbar.Brand>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="ms-auto">
              <Nav.Link as={NavLink} to="/" end>
                Home
              </Nav.Link>
              <Nav.Link as={NavLink} to="/movies" end>
                Movies
              </Nav.Link>
              <Nav.Link as={NavLink} to="/user-form" end>
                User Form
              </Nav.Link>
              <NavDropdown title="Theme" id="basic-nav-dropdown">
                <NavDropdown.Item>Light</NavDropdown.Item>
                <NavDropdown.Divider />
                <NavDropdown.Item>Dark</NavDropdown.Item>
              </NavDropdown>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </>
  );
};

export default Header;
