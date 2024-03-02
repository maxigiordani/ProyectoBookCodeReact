import React from 'react';
import { Link } from 'react-router-dom'; // Importa Link desde react-router-dom
import { FaEnvelope, FaFacebook, FaInstagram, FaTwitter } from 'react-icons/fa'; 
import logo from '../../img/logos/logoNegro.png'; 
import '../../stylesheet/Footer.css';

function Footer() {
  return (
    <footer className="p-5 fondoColor">
      <div className="container text-center">
        <div className="row">
          <div className="col-md-4">
            <img src={logo} className="w-100" alt="Logo de Book code" /> 
          </div>
          <div className="col-md-4 mt-5 colorLetra">
            <h4>Información</h4>
            <hr />
            <ul className="list-unstyled">
              <li><Link to="*">Preguntas frecuentes</Link></li>
              <hr />
              
              <li><Link to="*">Términos y condiciones</Link></li>
              <hr />
            </ul>
          </div>
          <div className="col-md-4 mt-4">
            <ul className="list-unstyled">
              <li className="mt-3">
                <Link to="/contact" className="imgLogo"><FaEnvelope /></Link> 
              </li>
              <li className="mt-3">
                <Link to="https://www.facebook.com/" className="imgLogo"><FaFacebook /></Link> 
              </li>
              <li className="mt-3">
                <Link to="https://www.instagram.com/" className="imgLogo"><FaInstagram /></Link> 
              </li>
              <li className="mt-3">
                <Link to="https://twitter.com/" className="imgLogo"><FaTwitter /></Link> 
              </li>
            </ul>
          </div>
        </div>
        <div className="row text-center colorLetra">
          <p> &copy; Book code 2024 - Todos los derechos reservados</p>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
