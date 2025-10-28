import type { FooterProps } from "../types/footer";

const Footer:React.FC<FooterProps> = ({title,date}) => {
  return (
    <div>
      {title} - {(date ? new Date(date) : new Date()).toLocaleDateString()}
    </div>
  )
}

export default Footer;


