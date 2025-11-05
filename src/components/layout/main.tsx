import Header from "./header";
import Footer from "./footer";
import { Outlet } from "react-router-dom";

const Main: React.FC = () => {
  return (
    <>
      <Header title={"Catalogo de peliculas de Accenture"} />
      <main className="flex-grow-1">
        <Outlet />
      </main>
      <Footer title={"Accenture - Movie App"} date={new Date()} />
    </>
  );
};

export default Main;
