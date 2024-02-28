import { Fragment } from 'react';
import { Container, Row, Col, Form, Button } from 'react-bootstrap';
import imgBanner from '../../img/imgBanner.jpg';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faFacebookSquare, faTwitterSquare, faInstagramSquare } from '@fortawesome/free-brands-svg-icons';
import '../../stylesheet/Contactus.css';
import { PropTypes } from 'prop-types';

function ContactUs({nombre,correo,mensaje }) {

  return (
    <Fragment>
      <Container className="containerform mt-5 mb-5 formulario">
        <h1 className="text-center mt-2">CONTÁCTENOS</h1>
        <Row>
          <Col>
            <img src={imgBanner} alt="Descripción de la imagen" className="img-fluid imagenbanner" />
          </Col>
          <Col>
            <Form>
              <Form.Group className="mb-2">
                <Form.Label htmlFor="nombre">{nombre}</Form.Label>
                <Form.Control type="text" id="nombre" name="nombre" required />
              </Form.Group>
              <Form.Group className="mb-3">
                <Form.Label htmlFor="email">{correo}</Form.Label>
                <Form.Control type="email" id="email" name="email" required />
              </Form.Group>
              <Form.Group className="mb-3">
                <Form.Label htmlFor="mensaje">{mensaje}</Form.Label>
                <Form.Control as="textarea" id="mensaje" name="mensaje" rows="4" required />
              </Form.Group>
              <div className="text-center">
                <Button type="submit" className="text-center btn botonenviarcontact">Enviar mensaje</Button>
              </div>
            </Form>
            <div className="col-md-12 text-center mt-4">
              <a href="https://www.facebook.com/tu-pagina-de-facebook" target="_blank" className="mx-2">
                <FontAwesomeIcon icon={faFacebookSquare} className="fab fa-facebook-square fa-2x redessociales" />
              </a>
              <a href="https://twitter.com/tu-cuenta-de-twitter" target="_blank" className="mx-2">
                <FontAwesomeIcon icon={faTwitterSquare} className="fab fa-twitter-square fa-2x redessociales" />
              </a>
              <a href="https://www.instagram.com/tu-cuenta-de-instagram" target="_blank" className="mx-2">
                <FontAwesomeIcon icon={faInstagramSquare} className="fab fa-instagram-square fa-2x redessociales" />
              </a>
            </div>
          </Col>
        </Row>
      </Container>
    </Fragment>
  );
}

ContactUs.propTypes = {
nombre: PropTypes.string,
correo: PropTypes.string,
mensaje: PropTypes.string
}

export default ContactUs;