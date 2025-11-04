import "./App.css";
import Content from "./components/content";
import Footer from "./components/footer";
import Header from "./components/header";

function App() {
  return (
    <>
      <Header title={"Catalogo de peliculas de Accenture"} />
      <hr />
      <Content />
      <hr />
      <Footer title={"Movie App"} date={new Date()} />
    </>
  );
}

export default App;
