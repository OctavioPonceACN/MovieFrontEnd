import { Container } from "react-bootstrap";
import type { FooterProps } from "../../types/footer";

const Footer: React.FC<FooterProps> = ({ title, date }) => {
  return (
    <Container fluid className="d-flex flex-column min-vh-100">
      <footer className="bg-dark text-light py-3 mt-auto">
        <Container className="text-center">
          <small>
            {title} -{" "}
            {(date ? new Date(date) : new Date()).toLocaleDateString()}
          </small>
        </Container>
      </footer>
    </Container>
  );
};

export default Footer;
