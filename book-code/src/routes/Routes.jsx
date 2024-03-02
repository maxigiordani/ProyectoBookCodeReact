import { Routes, Route } from "react-router-dom";
import PropTypes  from "prop-types";
import Home from '../components/pages/Home.jsx'
import Page404 from '../components/pages/Page404.jsx'
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

  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="*" element={<Page404 />} />
      <Route path="/contactus" element={<ContactUs nombre="Nombre:" correo="Correo:" mensaje="Mensaje:" />} />
      <Route path="/productdetail/:id" element= {<ProductDetail />} />
      <Route path="/login" element= {<Login usuario={usuario} setUsuario={setUsuario} />} />
      <Route path="/register" element= {<Register usuario={usuario} setUsuario={setUsuario} usuarios={usuarios} setUsuarios={setUsuarios} />} />
    </Routes>
  )
}

Rutas.propTypes = {
  usuario: PropTypes.object,
  setUsuario: PropTypes.func,
  usuarios: PropTypes.array,
  setUsuarios: PropTypes.func
}

export default Rutas;