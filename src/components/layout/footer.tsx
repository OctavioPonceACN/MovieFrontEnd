import { Container } from "react-bootstrap";
import type { FooterProps } from "../../types/footer";
import useUser from "../../hooks/useUser";

const Footer: React.FC<FooterProps> = ({ title, date }) => {
  const { theme } = useUser();

  return (
    <Container fluid className="d-flex flex-column min-vh-100">
      <footer
        className={`mt-auto py-3 bg-${theme} text-${
          theme === "light" ? "dark" : "light"
        }`}
      >
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
