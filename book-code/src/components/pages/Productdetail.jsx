import { Container,Form, Row, Col } from 'react-bootstrap';
import axios from 'axios'
import { useState, useEffect } from 'react';
import '../../stylesheet/ProductDetail.css';
import usuario1 from '../../img/usuario1.jpg';
import usuario2 from '../../img/usuario2.jpeg';
import usuario3 from '../../img/usuario3.avif';
import libroanimado from '../../img/logos/logo-removebg.png';

function ProductDetail() {
  const [libro,setLibro] = useState([])

  const obtenerLibro = async(id)=>{
    const obtener = await axios.get(`http://localhost:4000/productdetail/${id}`)
     setLibro(obtener.data)
  }
useEffect(() =>{
  obtenerLibro()
},[])

  return (
    <>
      <Container className="mt-5 containerdetail">
        <Row>
          {libro.map((li, id) =>(
            <><Col md={5} key={id}>
              <img src={li.imgUrl} alt="Portada del Libro" className="img-fluid estiloimg" />
              <div className="libro-animado">
                <img src={libroanimado} alt="Libro Animado" />
              </div>
            </Col><Col md={6}>
                <h1 className="mb-5 mt-5 estilotitulo">{li.titulo}</h1>
                <p className="estiloparrafo">{li.autor}</p>
                <p className="estiloparrafo">{li.genero}</p>
                <p className="estiloparrafo">{li.descripcion}</p>
                <p className="estiloparrafo">{li.editorial}</p>
                <p className="estiloparrafo">{li.idioma}</p>
                <div className="justify-content-center">
                  <a href="/views/error404.html" className="boton-descarga">Descargar libro PDF</a>
                </div>
              </Col></>
          ))} 
        </Row>
      </Container>

     
      <Container className="mt-5 containercomentarios mb-5">
        <h1 className="text-center">Comentarios</h1>

        <Form className="form-group">
          <div className="mb-3">
            <label htmlFor="comentario" className="form-label estilocomentario">Comenta aquí</label>
            <textarea className="form-control" id="comentario" rows="5" required></textarea>
          </div>
          <div className="d-flex justify-content-end estilobotoncomentarios">
            <a href="/views/error404.html" className="btn botoncomentar mx-2">Comentar</a>
            <a href="/views/error404.html" className="btn botoncomentar">Cancelar</a>
          </div>
        </Form>

        <div className="mt-5">
          <div className="card cardestilo">
            <div className="card-body cardcuerpo">
              <img src={usuario1} alt="Foto de Perfil" className="rounded-circle usuarioimagen" />
              <h2>Carlos Rodriguez</h2>
              <p className="card-text">Excelente libro, muy recomendable.</p>
              <small className="text-muted">Hace 30 minutos</small>
            </div>
          </div>
          <div className="card cardestilo">
            <div className="card-body cardcuerpo">
              <img src={usuario2} alt="Foto de Perfil" className="rounded-circle usuarioimagen" />
              <h2>Patricia Perez</h2>
              <p className="card-text">Sinceramente es un libro decepcionante, no lo recomiendo.</p>
              <small className="text-muted">Hace 120 minutos</small>
            </div>
          </div>
          <div className="card cardestilo">
            <div className="card-body cardcuerpo">
              <img src={usuario3} alt="Foto de Perfil" className="rounded-circle usuarioimagen" />
              <h2>Benito Giovanne</h2>
              <p className="card-text">Una genialidad, para leerlo en unos días, debe ser lectura obligada.</p>
              <small className="text-muted">Hace 150 minutos</small>
            </div>
          </div>
        </div>
      </Container>
    </>
  );
}

export default ProductDetail;
