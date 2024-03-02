import { useEffect, useState } from 'react';
import { Form, Button } from 'react-bootstrap'
import { Link } from "react-router-dom";
import imgUno from '../../img/imgCarousel/libroEstrellasDelMundial.png';
import imgDos from '../../img/imgCarousel/libroElHombreEnBuscaDeSentido.png';
import imgTres from '../../img/imgCarousel/libroLaPsicologiaDelDinero.png';
import imgCuatro from '../../img/imgCarousel/libroPensamientosNutritivos.png';
import imgCinco from '../../img/imgCarousel/libroElDuelo.png';
import { libros } from '../../data/data.js';
import '../../stylesheet/Home.css';

function Home() {
  const [home, setHome] = useState([]);
  const [buscar, setBuscar] = useState('');

  const handleBusqueda = () => {
    const buscarLibros = libros.filter(l =>
      l.titulo.toLowerCase().includes(buscar.toLowerCase())
    );

    setHome(buscarLibros);
  };

  useEffect(() => {
    setHome(libros);
  }, []);

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

      <div className="row mt-5 mb-5 justify-content-evenly">
        <h2 className="disenoTitulo ms-4 d-flex justify-content-center mb-5">
          Libros disponibles
        </h2>
        <Form className="d-flex w-50 mb-4">
          <Form.Control
            type="search"
            placeholder="Search"
            className="me-2"
            aria-label="Search"
            onChange={(e) => setBuscar(e.target.value)}
          />
          <Button variant="outline-success" className='botonBuscar' onClick={() => handleBusqueda()}>Search</Button>
        </Form>
        <div className='containertarjetas mt-4 mb-4'>
          {home.map((card, index) => (
            <div
              key={index}
              className="card text-center mt-3 mb-3"
              style={{ width: "12rem" }}
            >
              <img
                src={card.imgUrl}
                className="card-img-top"
                alt={`libro: ${card.titulo}`}
              />
              <div className="card-body">
                <h5 className="mt-2">{card.titulo}</h5>
              </div>
              <Link to={`/productdetail/${card.ID}`} className="btn btn-primary disenoBoton">Leer</Link>
            </div>
          ))}
        </div>
      </div>
    </>
  );
}

export default Home;
