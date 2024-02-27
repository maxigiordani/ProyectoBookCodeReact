import React from 'react';
import { Form, Button, Row, Col } from 'react-bootstrap';
import '../../stylesheet/Register.css';
import { PropTypes } from "prop-types";


function Register({nombre,apellido,email,domicilio,telefono,postal,usuario,contrasena}) {
  return (
    <div className="container-fluid contenedorregistro mt-4 mb-5 ">
      <div className="row justify-content-center">
        <div className="col-md-4 col-lg-10">
          <div className="text-center mt-4 tituloregistro">
            <h1 className='mb-4'>REGÍSTRATE</h1>
          </div>
          <div>
            <Form>
              <Row className="mb-3">
                <Col xs={12} sm={6}>
                  <Form.Label htmlFor="nombre">{nombre}</Form.Label>
                  <Form.Control type="text" id="nombre" name="nombre" required pattern="[A-Za-záéíóúÁÉÍÓÚñÑ\s]+" minLength="5" maxLength="20" />
                </Col>
                <Col xs={12} sm={6}>
                  <Form.Label htmlFor="apellido">{apellido}</Form.Label>
                  <Form.Control type="text" id="apellido" name="apellido" required pattern="[A-Za-záéíóúÁÉÍÓÚñÑ\s]+" minLength="5" maxLength="20" />
                </Col>
              </Row>
              <Form.Group className="mb-3">
                <Form.Label htmlFor="email">{email}</Form.Label>
                <Form.Control type="email" id="email" name="email" required minLength="11" maxLength="20" />
              </Form.Group>
             
              <Row className="mb-3">
                <Col xs={12} sm={6}>
                  <Form.Label htmlFor="telefono">{telefono}</Form.Label>
                  <Form.Control type="tel" id="telefono" name="telefono" required pattern="[0-9]{10}" minLength="10" maxLength="11" />
                </Col>
                <Col xs={12} sm={6}>
                  <Form.Label htmlFor="codigoPostal">{postal}</Form.Label>
                  <Form.Control type="text" id="codigoPostal" name="codigoPostal" required />
                </Col>
              </Row>
              <Row className="mb-3">
                <Col xs={12} sm={6}>
                  <Form.Label htmlFor="usuario">{usuario}</Form.Label>
                  <Form.Control type="text" id="usuario" name="usuario" required minLength="5" maxLength="15" />
                </Col>
                <Col xs={12} sm={6}>
                  <Form.Label htmlFor="contrasena">{contrasena}</Form.Label>
                  <Form.Control type="password" id="contrasena" name="contrasena" required minLength="5" maxLength="15" />
                </Col>
              </Row>
              <div className="text-center mt-5">
                <Button type="submit" className="btn botonregis">Crear Cuenta</Button>
                <p className="mt-3">¿Ya tienes cuenta? <a href="../views/login.html" className="black-link" id="linkIniciarSesion">Iniciar Sesión</a></p>
              </div>
            </Form>
          </div>
        </div>
      </div>
    </div>
  );
}

Register.propTypes = {
  nombre: PropTypes.string,
  apellido: PropTypes.string,
  email: PropTypes.string,
  domicilio: PropTypes.string,
  usuario: PropTypes.string,
  contrasena: PropTypes.string,
  postal: PropTypes.string,
  telefono: PropTypes.number

}



export default Register;