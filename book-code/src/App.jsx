import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css";
import Navigator from "./components/layout/Navigator";
import Rutas from "../src/routes/Routes.jsx";
import Footer from "./components/layout/Footer";

function App() {
  return (
    <>
      <Navigator />
      <Rutas />
      <Footer />
    </>
  );
}

// aqui se controlan los componentes
// aqui van todos los componentes en comun en todas las páginas

export default App;
