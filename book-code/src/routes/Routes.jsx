import { Routes, Route, Navigate } from "react-router-dom";
import PropTypes from "prop-types";
import Home from '../components/pages/Home.jsx';
import Page404 from '../components/pages/Page404.jsx';
import ContactUs from "../components/pages/ConctactUs.jsx";
import ProductDetail from "../components/pages/Productdetail.jsx";
import Login from "../components/pages/Login.jsx";
import Register from "../components/pages/Register.jsx";

const Rutas = ({
  usuarios,
  setUsuarios,
  usuario,
  setUsuario
}) => {
  const autenticado = false; // Debes tener la lógica real para determinar si el usuario está autenticado

  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="*" element={<Page404 />} />
      <Route path="/contactus" element={autenticado ? <ContactUs nombre="Nombre:" correo="Correo:" mensaje="Mensaje:" /> : <Navigate to="*" />} />
      <Route path="/productdetail/:id" element={autenticado ? <ProductDetail /> : <Navigate to="*" />} />
      <Route path="/login" element={<Login setUsuario={setUsuario} />} />
      <Route path="/register" element={<Register usuario={usuario} usuarios={usuarios} setUsuarios={setUsuarios} />} />
    </Routes>
  );
};

Rutas.propTypes = {
  usuario: PropTypes.object,
  setUsuario: PropTypes.func,
  usuarios: PropTypes.array,
  setUsuarios: PropTypes.func
};

export default Rutas;