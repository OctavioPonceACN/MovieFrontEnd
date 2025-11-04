import type { HeaderProps } from "../types/header";

const Header: React.FC<HeaderProps> = ({ title }) => {
  return (
    <div>
      <h1>{title}</h1>
    </div>
  );
};

export default Header;
