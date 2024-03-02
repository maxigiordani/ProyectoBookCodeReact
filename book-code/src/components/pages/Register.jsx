import { Form, Button, Row, Col } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import { useState, useEffect } from 'react';
import Swal from 'sweetalert2';
import Error from './Error';
import '../../stylesheet/Register.css';
import PropTypes from "prop-types";

function Register({ usuario, usuarios, setUsuarios }) {
  const [nombre, setNombre] = useState('')
  const [apellido, setApellido] = useState('')
  const [email, setEmail] = useState('')
  const [contrasena, setContrasena] = useState('')

  const [error, setError] = useState(false)

  useEffect(() => {
    // tiene al menos un propiedad definida
    if (Object.keys(usuario).length > 0) {
      setNombre(usuario.nombre)
      setApellido(usuario.apellido)
      setEmail(usuario.email)
      setContrasena(usuario.contrasena)
    }
  }, [usuario])

  const generarId = () => {
    const random = Math.random().toString().substring(2)
    const fecha = Date.now().toString(36)

    return random + fecha
  }

  const handleFormSubmit = (e) => {
    e.preventDefault(); // Evitar que el formulario se envíe automáticamente  
    if ([nombre, apellido, email, contrasena].includes('')) {
      console.log('Hay al menos un campo vacio')
      setError(true)

      return
    }

    setError(false)
    // Crea el registro de usuario
    const registro = {
      nombre,
      apellido,
      email,
      contrasena
    }
    registro.id = generarId()
    setUsuarios([...usuarios, registro])

    console.log(registro.id)

    //Resetea el formulario
    setNombre('')
    setApellido('')
    setEmail('')
    setContrasena('')

    Swal.fire({
      icon: 'success',
      title: 'Registro exitoso',
      text: 'Usuario registrado'
    }).then(() => {
      window.location.href = '/login'
    })

  };

  return (
    <div className="container-fluid contenedorregistro mt-4 mb-5 ">
      <div className="row justify-content-center">
        <div className="col-md-4 col-lg-10">
          <div className="text-center mt-4 tituloregistro">
            <h1 className='mb-4'>REGÍSTRATE</h1>
          </div>
          <div>
            <Form onSubmit={handleFormSubmit}>
              {error ? <Error><p>Los campos están vacíos</p></Error> : ''}
              <Row className="mb-3">
                <Col xs={12} sm={6}>
                  <Form.Label htmlFor="nombre">nombre</Form.Label>
                  <Form.Control type="text" id="nombre" name="nombre" value={nombre} onChange={(e) => setNombre(e.target.value)} required pattern="[A-Za-záéíóúÁÉÍÓÚñÑ\s]+" minLength="5" maxLength="20" />
                </Col>
                <Col xs={12} sm={6}>
                  <Form.Label htmlFor="apellido">apellido</Form.Label>
                  <Form.Control type="text" id="apellido" name="apellido" value={apellido} onChange={(e) => setApellido(e.target.value)} required pattern="[A-Za-záéíóúÁÉÍÓÚñÑ\s]+" minLength="5" maxLength="20" />
                </Col>
              </Row>
              <Form.Group className="mb-3">
                <Form.Label htmlFor="email">email</Form.Label>
                <Form.Control type="email" id="email" name="email" value={email} onChange={(e) => setEmail(e.target.value)} required minLength="11" maxLength="20" />
              </Form.Group>
              <Row className="mb-3">
                <Col xs={12} sm={6}>
                  <Form.Label htmlFor="contrasena">contraseña</Form.Label>
                  <Form.Control type="password" id="contrasena" name="contrasena" value={contrasena} onChange={(e) => setContrasena(e.target.value)} required minLength="5" maxLength="15" />
                </Col>
              </Row>
              <div className="text-center mt-5">
                <Button type="submit" className="btn botonregis">Crear Cuenta</Button>
                <p className="mt-3">¿Ya tienes cuenta? <Link to="/login" className="black-link" id="linkIniciarSesion">Iniciar Sesión</Link></p>
              </div>
            </Form>
          </div>
        </div>
      </div>
    </div>
  );
}

Register.propTypes = {
  usuario: PropTypes.object,
  setUsuario: PropTypes.func,
  usuarios: PropTypes.array,
  setUsuarios: PropTypes.func,
}

export default Register; 
