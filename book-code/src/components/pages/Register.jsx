import React from 'react';
import { Form, Button, Row, Col } from 'react-bootstrap';
import '../../stylesheet/Register.css';

function Register() {
  return (
    <div className="containerregistro mt-4 d-flex justify-content-center align-items-center">
      <div>
        <div className="text-center mt-4 tituloregistro">
          <h1>REGÍSTRATE</h1>
        </div>
        <div className='registrotabla'>
        <Form id="registroForm" className='registrotabla'>
          <Row className="mb-3">
            <Col>
              <Form.Label htmlFor="nombre">Nombre:</Form.Label>
              <Form.Control type="text" id="nombre" name="nombre" required pattern="[A-Za-záéíóúÁÉÍÓÚñÑ\s]+" minLength="5" maxLength="20" />
            </Col>
            <Col>
              <Form.Label htmlFor="apellido">Apellido:</Form.Label>
              <Form.Control type="text" id="apellido" name="apellido" required pattern="[A-Za-záéíóúÁÉÍÓÚñÑ\s]+" minLength="5" maxLength="20" />
            </Col>
          </Row>
          <Form.Group className="mb-3">
            <Form.Label htmlFor="email">Email:</Form.Label>
            <Form.Control type="email" id="email" name="email" required minLength="11" maxLength="20" />
          </Form.Group>
          <Form.Group className="mb-3">
            <Form.Label htmlFor="domicilio">Domicilio:</Form.Label>
            <Form.Control type="text" id="domicilio" name="domicilio" required minLength="6" maxLength="25" />
          </Form.Group>
          <Row className="mb-3">
            <Col>
              <Form.Label htmlFor="telefono">Teléfono:</Form.Label>
              <Form.Control type="tel" id="telefono" name="telefono" required pattern="[0-9]{10}" minLength="10" maxLength="11" />
            </Col>
            <Col>
              <Form.Label htmlFor="codigoPostal">Código Postal:</Form.Label>
              <Form.Control type="text" id="codigoPostal" name="codigoPostal" required />
            </Col>
          </Row>
          <Row className="mb-3">
            <Col>
              <Form.Label htmlFor="usuario">Usuario:</Form.Label>
              <Form.Control type="text" id="usuario" name="usuario" required minLength="5" maxLength="15" />
            </Col>
            <Col>
              <Form.Label htmlFor="contrasena">Contraseña:</Form.Label>
              <Form.Control type="password" id="contrasena" name="contrasena" required minLength="5" maxLength="15" />
            </Col>
          </Row>
          <div className="text-center">
            <Button type="submit" className="btn botonregis">Crear Cuenta</Button>
            <p className="mt-3">¿Ya tienes cuenta? <a href="../views/login.html" className="black-link" id="linkIniciarSesion">Iniciar Sesión</a></p>
          </div>
        </Form>
        </div>
      </div>
    </div>
  );
}

export default Register;
