import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import PropTypes from 'prop-types'
import '../../stylesheet/Navigator.css'
import { useNavigate } from "react-router-dom"
import imgLogo from '../../img/logos/logo.png'

const Navigator = ({logueado, setLogueado}) => {

  const navigate = useNavigate()

  const handleLogueado = () => {
    setLogueado(false)

    navigate('/login')
  }


  return (
    <>
      <Navbar expand="lg" className="bg-white">
        <Container fluid>
          <Navbar.Brand href="" onClick={() => navigate("/")}><img src={imgLogo} className='imgLogo' alt='logoBookCode'></img></Navbar.Brand>
          <Navbar.Toggle aria-controls="navbarScroll" />
          <Navbar.Collapse id="navbarScroll">
            <Nav
              className="me-auto my-2 my-lg-0"
              style={{ maxHeight: '100px' }}
              navbarScroll
            >
              <Nav.Link href="" className='tamanoLetra' onClick={() => navigate("/contactus")}>Contacto</Nav.Link>
              <Nav.Link href=""className='tamanoLetra' onClick={handleLogueado}>{!logueado ? 'Iniciar Sesión' : 'Cerrar Sesión'}</Nav.Link>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </>
  )
}
Navigator.propTypes = {
  logueado: PropTypes.bool,
  setLogueado: PropTypes.func
}

export default Navigator