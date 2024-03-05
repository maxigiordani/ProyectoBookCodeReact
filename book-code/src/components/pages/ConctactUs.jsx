import React, { useState } from "react";
import { Container, Row, Col, Form, Button, Modal } from "react-bootstrap";
import { useForm } from "react-hook-form";
import emailjs from "emailjs-com";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faFacebookSquare,
  faTwitterSquare,
  faInstagramSquare,
} from "@fortawesome/free-brands-svg-icons";
import WeatherWidget from "../helpers/WeatherWidget";
import "../../stylesheet/Contactus.css";
import { Link } from "react-router-dom";
import PropTypes from "prop-types";
import imgBanner from "../../img/imgBanner.jpg";

const ContactUs = ({ nombre, correo, mensaje }) => {
  const { register, handleSubmit, formState: { errors }, reset } = useForm();
  const [showModal, setShowModal] = useState(false);

  const emailjsConfig = {
    serviceId:  "service_p3ys40n",
    templateId: "template_1sn2zdc",
    userId: "uMxMpO7OXL7pbTgxO",
  };

  const onSubmit = async (data) => {
    try {
      const emailData = {
        ...data,
        user_name: data.nombre,
        user_email: data.correo,
      };

      const response = await emailjs.send(
        emailjsConfig.serviceId,
        emailjsConfig.templateId,
        emailData,
        emailjsConfig.userId
      );

      setShowModal(true);

      reset();
    } catch (error) {
      console.error("Error al enviar el correo:", error);
    }
  };

  const handleCloseModal = () => {
    setShowModal(false);
  };

  return (
    <>
      <div className="text-center mt-4">
        <WeatherWidget />
      </div>
      <Container className="containerform mt-5 mb-5 formulario">
        <h1 className="text-center mt-2">CONTÁCTENOS</h1>
        <Row>
          <Col>
            <img
              src={imgBanner}
              alt="Descripción de la imagen"
              className="img-fluid imagenbanner"
            />
          </Col>
          <Col>
            <Form onSubmit={handleSubmit(onSubmit)}>
              <Form.Group className="mb-2">
                <Form.Label htmlFor="nombre">{nombre}</Form.Label>
                <Form.Control type="text" id="nombre" name="nombre" {...register("nombre")} required />
              </Form.Group>
              <Form.Group className="mb-3">
                <Form.Label htmlFor="email">{correo}</Form.Label>
                <Form.Control type="email" id="email" name="email" {...register("correo")} required />
              </Form.Group>
              <Form.Group className="mb-3">
                <Form.Label htmlFor="mensaje">{mensaje}</Form.Label>
                <Form.Control
                  as="textarea"
                  id="mensaje"
                  name="mensaje"
                  rows="4"
                  {...register("mensaje")}
                  required
                />
              </Form.Group>
              <div className="text-center">
                <Button
                  type="submit"
                  className="text-center btn botonenviarcontact"
                >
                  Enviar mensaje
                </Button>
              </div>
            </Form>
            <div className="col-md-12 text-center mt-4">
              <Link
                to="https://www.facebook.com/tu-pagina-de-facebook"
                target="_blank"
                className="mx-2"
              >
                <FontAwesomeIcon
                  icon={faFacebookSquare}
                  className="fab fa-facebook-square fa-2x redessociales"
                />
              </Link>
              <Link
                to="https://twitter.com/tu-cuenta-de-twitter"
                target="_blank"
                className="mx-2"
              >
                <FontAwesomeIcon
                  icon={faTwitterSquare}
                  className="fab fa-twitter-square fa-2x redessociales"
                />
              </Link>
              <Link
                to="https://www.instagram.com/tu-cuenta-de-instagram"
                target="_blank"
                className="mx-2"
              >
                <FontAwesomeIcon
                  icon={faInstagramSquare}
                  className="fab fa-instagram-square fa-2x redessociales"
                />
              </Link>
            </div>
          </Col>
        </Row>
      </Container>

      <Modal show={showModal} onHide={handleCloseModal}>
        <Modal.Header closeButton>
          <Modal.Title>Consulta Enviada</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          Gracias por tu consulta. Pronto serás contactado.
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleCloseModal}>
            Cerrar
          </Button>
        </Modal.Footer>
      </Modal>
    </>
  );
};

ContactUs.propTypes = {
  nombre: PropTypes.string,
  correo: PropTypes.string,
  mensaje: PropTypes.string,
};

export default ContactUs;
