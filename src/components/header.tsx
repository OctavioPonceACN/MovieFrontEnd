import type { HeaderProps } from "../types/header";


const Header:React.FC<HeaderProps> = ({title}) => {
  return (
    <div>
      {title}
    </div>
  )
}

export default Header;
