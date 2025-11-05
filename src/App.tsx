import { useRoutes } from "react-router-dom";
import { appRoutes } from "./routes/routes";
import { Suspense } from "react";
import "bootstrap/dist/css/bootstrap.min.css";

function App() {
  const routing = useRoutes(appRoutes);
  return (
    <>
      <Suspense fallback={<p>Loading...</p>}> {routing}</Suspense>
    </>
  );
}

export default App;
