import { Routes, Route } from "react-router-dom";
import PropTypes from "prop-types";
import Home from '../components/pages/Home.jsx';
import ContactUs from '../components/pages/ConctactUs.jsx'
import Page404 from '../components/pages/Page404.jsx';
import ProductDetail from "../components/pages/Productdetail.jsx";
import Login from "../components/pages/Login.jsx";
import Register from "../components/pages/Register.jsx";
import ProtectorRutas from "../components/pages/ProtectorRutas.jsx";

const Rutas = ({
  usuarios,
  setUsuarios,
  usuario,
  setUsuario,
  logueado,
  setLogueado
}) => {

  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="*" element={<Page404 />} />
      <Route path="/contactus" element={
        <ProtectorRutas logueado={logueado} >
          <ContactUs nombre="Nombre:" correo="Correo:" mensaje="Mensaje:" />
        </ProtectorRutas>} />
      <Route path="/productdetail/:id" element={
        <ProtectorRutas logueado={logueado}>
          <ProductDetail />
        </ProtectorRutas>} />
      <Route path="/login" element={<Login setUsuario={setUsuario} logueado={logueado} setLogueado={setLogueado} />} />
      <Route path="/register" element={<Register usuario={usuario} usuarios={usuarios} setUsuarios={setUsuarios} />} />
    </Routes>
  );
};

Rutas.propTypes = {
  usuario: PropTypes.object,
  setUsuario: PropTypes.func,
  usuarios: PropTypes.array,
  setUsuarios: PropTypes.func,
  logueado: PropTypes.bool,
  setLogueado: PropTypes.func
};

export default Rutas;