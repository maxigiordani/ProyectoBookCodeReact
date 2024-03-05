import "../../stylesheet/Page404.css"
import img404 from "../../img/404-removebg.png"
import { Col, Container, Row } from "react-bootstrap"
import { useNavigate } from "react-router-dom"

const Page404 = () => {

    const navigate = useNavigate()
    return (
        <>
            <div className="mt-5 mb-5">
                <Container className="contenedor-404">
                    <Row>
                        <Col className="col-md-6 col-12 text-center">
                            <p className="parrafo1 mb-1">Oops!</p>
                            <p className="parrafo2 mb-1">404</p>
                        </Col>

                        <Col className="col-md-6 col-12 text-center">
                            <img className="img-fluid" id="imagen-404" src={img404} alt="error404" />
                        </Col>
                    </Row>
                </Container>
                <Container className="container contenedor-404 mt-0">
                    <Row className="row justify-content-center">
                        <p className="parrafo3 text-center mt-5 mb-5">Página no disponible</p>
                        <Col className="col-4 col-md-2 mb-4 mt-4 mb-md-0 btn btn-reg" href="" role="button" onClick={() => navigate("/")}>Regresar</Col>
                    </Row>
                </Container>
            </div>
        </>
    )
}

export default Page404