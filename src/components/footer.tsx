import type { FooterProps } from "../types/footer";

const Footer: React.FC<FooterProps> = ({ title, date }) => {
  return (
    <div
      style={{
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        width: "100%",
      }}
    >
      {title} - {(date ? new Date(date) : new Date()).toLocaleDateString()}
    </div>
  );
};

export default Footer;
