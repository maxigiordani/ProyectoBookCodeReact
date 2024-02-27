import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css";
import Footer from "./components/layout/Footer";
import ContactUs from "./components/pages/ConctactUs";
import ProductDetail from "./components/pages/Productdetail";
import Register from "./components/pages/Register";
import Login from "./components/pages/Login";
import Navigator from "./components/layout/Navigator";
import Rutas from "../src/routes/Routes.jsx";

function App() {
  return (
    <>
      <Navigator />
      <Rutas />
      <ContactUs
        nombre="Nombre:"
        correo="Correo:"
        mensaje="Mensaje:"
      ></ContactUs>
      <Home></Home>
      <ProductDetail></ProductDetail>
      <Login
        usuario="Nombre de usuario:"
        contrasena="Contraseña:">
      </Login>
      <Register
        nombre="Nombre:"
        apellido="Apellido:"
        email="Email:"
        contrasena="Contraseña:"
      ></Register>
      <Footer></Footer>
    </>
  );
}

// aqui se controlan los componentes
// aqui van todos los componentes en comun en todas las páginas

export default App;
