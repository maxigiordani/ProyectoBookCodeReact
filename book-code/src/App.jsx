import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css";
import { useState, useEffect } from "react";
import Navigator from "./components/layout/Navigator";
import Rutas from "../src/routes/Routes";
import Footer from "./components/layout/Footer";

function App() {
  const [usuarios, setUsuarios] = useState([])
  const [usuario, setUsuario] = useState({})
  const [logueado, setLogueado] = useState(false)

  useEffect(() => {
    const obtenerStorge = () => {
      const obtenerUsuarios = JSON.parse(localStorage.getItem('usuarios')) || []

      setUsuarios(obtenerUsuarios)
    }
    obtenerStorge()
  }, [])

  useEffect(() => {
    if (usuarios.length > 0) {
      localStorage.setItem('usuarios', JSON.stringify(usuarios))
    }
  }, [usuarios])

  return (
    <>
      <Navigator />
      <Rutas
        usuario={usuario}
        setUsuario={setUsuario}
        usuarios={usuarios}
        setUsuarios={setUsuarios}
        logueado={logueado}
        setLogueado={setLogueado}
      />
      <Footer />
    </>
  );
}

// aqui se controlan los componentes
// aqui van todos los componentes en comun en todas las páginas

export default App;
