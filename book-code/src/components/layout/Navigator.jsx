import Button from 'react-bootstrap/Button';
import Container from 'react-bootstrap/Container';
import Form from 'react-bootstrap/Form';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import '../../stylesheet/Navigator.css'
import imgLogo from '../../img/logo.png'

const Navigator = () => {
  return (
    <>
      <Navbar expand="lg" className="bg-white">
        <Container fluid>
          <Navbar.Brand href=""><img src={imgLogo} className='imgLogo' alt='logoBookCode'></img></Navbar.Brand>
          <Navbar.Toggle aria-controls="navbarScroll" />
          <Navbar.Collapse id="navbarScroll">
            <Nav
              className="me-auto my-2 my-lg-0"
              style={{ maxHeight: '100px' }}
              navbarScroll
            >
              <Nav.Link href="" className='tamanoLetra'>Contacto</Nav.Link>
              <Nav.Link href=""className='tamanoLetra'>Iniciar sesión</Nav.Link>
            </Nav>
            <Form className="d-flex w-50">
              <Form.Control
                type="search"
                placeholder="Search"
                className="me-2"
                aria-label="Search"
              />
              <Button variant="outline-success" className='botonBuscar'>Search</Button>
            </Form>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </>
  )
}

export default Navigator