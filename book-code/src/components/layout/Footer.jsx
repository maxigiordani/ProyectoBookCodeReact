import '../../stylesheet/Footer.css';
import { FaEnvelope, FaFacebook, FaInstagram, FaTwitter } from 'react-icons/fa'; 
import logo from '../../img/logos/logoNegro.png'; 


function Footer() {
  return (
    <footer className="p-5 fondoColor">
      <div className="container text-center">
        <div className="row">
          <div className="col-md-4">
            <img src={logo} className="w-100" alt="Logo de Book code" /> {/* Utiliza la variable "logo" como fuente de la imagen */}
          </div>
          <div className="col-md-4 mt-5 colorLetra">
            <h4>Información</h4>
            <hr />
            <ul className="list-unstyled">
              <li><a href="./views/error404.html">Preguntas frecuentes</a></li>
              <hr />
              <li><a href="./views/error404.html">Términos y condiciones</a></li>
              <hr />
            </ul>
          </div>
          <div className="col-md-4 mt-4">
            <ul className="list-unstyled">
              <li className="mt-3">
                <a href="./views/error404.html" className="imgLogo"><FaEnvelope /></a> 
              </li>
              <li className="mt-3">
                <a href="./views/error404.html" className="imgLogo"><FaFacebook /></a> 
              </li>
              <li className="mt-3">
                <a href="./views/error404.html" className="imgLogo"><FaInstagram /></a> 
              </li>
              <li className="mt-3">
                <a href="./views/error404.html" className="imgLogo"><FaTwitter /></a> 
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