import '../../stylesheet/Home.css';
import { Link } from "react-router-dom";
import imgUno from '../../img/imgCarousel/libroEstrellasDelMundial.png';
import imgDos from '../../img/imgCarousel/libroElHombreEnBuscaDeSentido.png';
import imgTres from '../../img/imgCarousel/libroLaPsicologiaDelDinero.png';
import imgCuatro from '../../img/imgCarousel/libroPensamientosNutritivos.png';
import imgCinco from '../../img/imgCarousel/libroElDuelo.png';
import libroTaylor from "../../img/imgBook-cards/libroTaylor.png";
import misDiasenlaLibreria from "../../img/imgBook-cards/misDiasenlaLibreria.png";
import libroRosario from "../../img/imgBook-cards/libroRosario.png";
import libroSpreen from "../../img/imgBook-cards/libroSpreen.png";
import libroElartedeViajar from "../../img/imgBook-cards/libroElartedeViajar.png";
import libroVidaReal from "../../img/imgBook-cards/libroVidaReal.png";
import libroCuadra from "../../img/imgBook-cards/libroCuadra.png";
import libroDiariodeunaSoledad from "../../img/imgBook-cards/libroDiariodeunaSoledad.png";
import libroBritney from "../../img/imgBook-cards/libroBritney.jpg";
import libroEstedolorNoesmio from "../../img/imgBook-cards/libroEstedolorNoesmio.png";
import libroLanata from "../../img/imgBook-cards/libroLanata.png";
import libroElpoderdelasPalabras from "../../img/imgBook-cards/libroElpoderdelasPalabras.png";

function Home() {
  return (
    <>
      <div className='containerDiseno'>
            <div className='disenoImg mt-3 mb-5'>
                <img src={imgUno} alt="libro: Estrellas del mundial" />
                <img src={imgDos} alt="libro: El hombre en busca de sentido" />
                <img src={imgTres} alt="libro: La psicologia del dinero" />
                <img src={imgCuatro} alt="libro: Pensamientos nutritivos" />
                <img src={imgCinco} alt="libro: El duelo" />
            </div>
        </div>

     <div className="container-fluid bg-white mt-3 mb-5">
      <section>
        <div className="container-fluid containerdiseno">
          <div className="row mt-5 mb-5 justify-content-evenly">
            <h2 className="disenoTitulo ms-4 d-flex justify-content-center mb-5">
              Novedades
            </h2>
            <div
              className="card text-center mt-3 mb-3"
              style={{ width: "12rem" }}
            >
              <img
                src={libroTaylor}
                className="card-img-top"
                alt="libro: TAYLOR"
              />
              <div className="card-body">
                <h5 className="mt-2">TAYLOR:</h5>
                <p>FROM THE VAULT</p>
              </div>
              <Link to="productdetail" className="btn btn-primary disenoBoton">
                Leer
              </Link>
            </div>
            <div
              className="card text-center mt-3 mb-3"
              style={{ width: "12rem" }}
            >
              <img
                src={misDiasenlaLibreria}
                className="card-img-top"
                alt="libro: MIS DIAS EN LA LIBRERIA MORISAKI"
              />
              <div className="card-body">
                <h5>MIS DIAS EN..</h5>
                <p>YAGISAWA, SATOSHI</p>
              </div>
              <Link to="/" className="btn btn-primary disenoBoton">
                Leer
              </Link>
            </div>
            <div
              className="card text-center mt-3 mb-3"
              style={{ width: "12rem" }}
            >
              <img
                src={libroRosario}
                className="card-img-top"
                alt="libro: ROSARIO"
              />
              <div className="card-body">
                <h5>ROSARIO</h5>
                <p>DE LOS SANTOS, GERMAN</p>
              </div>
              <Link to="/" className="btn btn-primary disenoBoton">
                Leer
              </Link>
            </div>
            <div
              className="card text-center mt-3 mb-3"
              style={{ width: "12rem" }}
            >
              <img
                src={libroSpreen}
                className="card-img-top"
                alt="libro: SPREEN"
              />
              <div className="card-body">
                <h5>SPREEN</h5>
                <p>LO MEJOR Y LO PEOR DE INTERNET</p>
              </div>
              <Link to="/" className="btn btn-primary disenoBoton">
                Leer
              </Link>
            </div>
            <div
              className="card text-center mt-3 mb-3"
              style={{ width: "12rem" }}
            >
              <img
                src={libroElartedeViajar}
                className="card-img-top"
                alt="libro: EL ARTE DE VIAJAR"
              />
              <div className="card-body">
                <h5>EL ARTE DE VIAJAR</h5>
                <p>MUJICA LAINEZ, MANUEL</p>
              </div>
              <Link to="/" className="btn btn-primary disenoBoton">
                Leer
              </Link>
            </div>
            <div
              className="card text-center mt-3 mb-3"
              style={{ width: "12rem" }}
            >
              <img
                src={libroVidaReal}
                className="card-img-top"
                alt="libro: VIDA REAL"
              />
              <div className="card-body">
                <h5 className="mt-2">VIDA REAL</h5>
                <p>TAYLOR, BRANDON</p>
              </div>
              <Link to="/" className="btn btn-primary disenoBoton">
                Leer
              </Link>
            </div>

            {/* Tarjetas de Recomendaciones */}
            <h2 className="disenoTitulo ms-4 d-flex justify-content-center mt-5 mb-5">
              Recomendaciones
            </h2>
            <div
              className="card text-center mt-3 mb-3"
              style={{ width: "12rem" }}
            >
              <img
                src={libroCuadra}
                className="card-img-top"
                alt="libro: CUADRA"
              />
              <div className="card-body">
                <h5>CUADRA</h5>
                <p>CHEHIN, MAXIMO</p>
              </div>
              <Link to="/" className="btn btn-primary disenoBoton">
                Leer
              </Link>
            </div>
            <div
              className="card text-center mt-3 mb-3"
              style={{ width: "12rem" }}
            >
              <img
                src={libroDiariodeunaSoledad}
                className="card-img-top"
                alt="libro: DIARIO DE UNA SOLEDAD"
              />
              <div className="card-body">
                <h5>DIARIO DE UNA SOLEDAD</h5>
                <p>SARTON, MAY</p>
              </div>
              <Link to="/" className="btn btn-primary disenoBoton">
                Leer
              </Link>
            </div>
            <div
              className="card text-center mt-3 mb-3"
              style={{ width: "12rem" }}
            >
              <img
                src={libroBritney}
                className="card-img-top"
                alt="libro: LA MUJER QUE SOY"
              />
              <div className="card-body">
                <h5>LA MUJER QUE SOY</h5>
                <p>SPEARS, BRITNEY</p>
              </div>
              <Link to="/" className="btn btn-primary disenoBoton">
                Leer
              </Link>
            </div>
            <div
              className="card text-center mt-3 mb-3"
              style={{ width: "12rem" }}
            >
              <img
                src={libroEstedolorNoesmio}
                className="card-img-top"
                alt="libro: ESTE DOLOR NO ES MIO"
              />
              <div className="card-body">
                <h5>ESTE DOLOR NO ES MIO</h5>
                <p>WOLYNN, MARK</p>
              </div>
              <Link to="/" className="btn btn-primary disenoBoton">
                Leer
              </Link>
            </div>
            <div
              className="card text-center mt-3 mb-3"
              style={{ width: "12rem" }}
            >
              <img
                src={libroLanata}
                className="card-img-top"
                alt="libro: OXIDO"
              />
              <div className="card-body">
                <h5>OXIDO</h5>
                <p>LANATA, JORGE</p>
              </div>
              <Link to="/" className="btn btn-primary disenoBoton">
                Leer
              </Link>
            </div>
            <div
              className="card text-center mt-3 mb-3"
              style={{ width: "12rem" }}
            >
              <img
                src={libroElpoderdelasPalabras}
                className="card-img-top"
                alt="libro:EL PODER DE LAS PALABRAS"
              />
              <div className="card-body">
                <h5>EL PODER DE LAS PALABRAS</h5>
                <p>SIGMAN, MARIANO</p>
              </div>
              <Link to="/" className="btn btn-primary disenoBoton">
                Leer
              </Link>
            </div>
          </div>
        </div>
      </section>
    </div>
   </>
  );
}

export default Home;