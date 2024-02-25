import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css";
import Footer from "./components/layout/Footer";
import ContactUs from "./components/pages/ConctactUs";
import ProductDetail from "./components/pages/Productdetail";
import Register from "./components/pages/Register";
import Login from "./components/pages/Login";
import Home from "./components/pages/Home";
import Page404 from "./components/pages/Page404";

function App() {
  return (
    <>
  <ContactUs
  nombre="Nombre:"
  correo="Correo:"
  mensaje="Mensaje:"

  ></ContactUs>
      <Home></Home>
      <ProductDetail></ProductDetail>
      <Login usuario="Nombre de usuario:"
       contrasena="Contraseña:">
       </Login>
       <Register
        nombre="Nombre:"
        apellido="Apellido:"
        email="Email:"
        domicilio="Domicilio:"
        telefono="Teléfono:"
        postal="Código postal:"
        usuario="Usuario:"
        contrasena="Contraseña:"
      ></Register>
      <Footer></Footer>
      <Page404 />
    </>
  );
}

// aqui se coontrolan los componentes
// aqui van todos los componentes en comun en todas las páginas

export default App;