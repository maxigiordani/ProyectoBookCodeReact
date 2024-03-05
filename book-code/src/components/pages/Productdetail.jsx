import { useState, useEffect } from 'react';
import { Container, Row, Col, Form } from 'react-bootstrap';
import { useParams } from 'react-router-dom';
import '../../stylesheet/ProductDetail.css';
import usuario1 from '../../img/usuario1.jpg';
import usuario2 from '../../img/usuario2.jpeg';
import usuario3 from '../../img/usuario3.avif';
import libroanimado from '../../img/logos/logo-removebg.png';
import { libros } from '../../data/data';
import { dataimg } from '../../data/dataimg';

function ProductDetail() {
  const [libro, setLibro] = useState({});
  const { id } = useParams();

  useEffect(() => {
    const libroFound = libros.find(l => l.ID === parseInt(id));
    setLibro(libroFound);
  }, [id]);

  const getLibroImage = () => {
    const libroImage = dataimg.find(img => img.ID === libro.ID);
    return libroImage ? libroImage.imgUrl : ''; 
  };

  return (
    <>
      <h1 className="mb-5 mt-5 estilotitulo text-center">{libro.titulo}</h1>
      <div className=' mt-5 mb-5 text-center'> 
        <img src={getLibroImage()} alt="Portada del Libro" className='imagenportada' />
      </div>

      <div className='container descripcionlibros text-center'>
        <h3 className='h2 mt-3'>INFORMACION DEL LIBRO: </h3>
        <p className="estiloparrafo">Autor: {libro.autor}</p>
        <p className="estiloparrafo">Género: {libro.genero}</p>
        <p className="estiloparrafo">Descripción: {libro.descripcion}</p>
        <p className="estiloparrafo">Editorial: {libro.editorial}</p>
        <p className="estiloparrafo">Idioma: {libro.idioma}</p>
        <div className="justify-content-center">
          <a href={libro.url} className="boton-descarga mb-2">
            Descargar libro PDF
          </a>
        </div>
      </div>

      <Container className="mt-5 containerdetail">
        <Row className="imagenportada">
          {!libro ? (
            <h2>No Hay Libros</h2>
          ) : (
            <div>
              <Col md={5} className="imagenportada">
                <div className="libro-animado">
                  <img src={libroanimado} alt="Libro Animado" />
                </div>
              </Col>
            </div>
          )}
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
          <div className="cardestilo">
            <div className="card-body cardcuerpo">
              <img src={usuario1} alt="Foto de Perfil" className="rounded-circle usuarioimagen" />
              <h2>Carlos Rodriguez</h2>
              <p className="card-text">Excelente libro, muy recomendable.</p>
              <small className="text-muted">Hace 30 minutos</small>
            </div>
          </div>
          <div className="cardestilo">
            <div className="card-body cardcuerpo">
              <img src={usuario2} alt="Foto de Perfil" className="rounded-circle usuarioimagen" />
              <h2>Patricia Perez</h2>
              <p className="card-text">Sinceramente es un libro decepcionante, no lo recomiendo.</p>
              <small className="text-muted">Hace 120 minutos</small>
            </div>
          </div>
          <div className="cardestilo">
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