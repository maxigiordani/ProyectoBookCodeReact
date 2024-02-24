import "../../../src/components/pages/Page404.jsx"
import imgAstronauta from ""

const Page404 = () => {
    return (
        <>
            <div className="container contenedor-404 mt-3 mb-3">
                <div className="row">
                    <div className="col-md-6 col-12 text-center">
                        <p className="parrafo1 mb-1">Oops!</p>
                        <p className="parrafo2 mb-1">404</p>
                    </div>

                    <div className="col-md-6 col-12 text-center">
                        <img className="img-fluid" id="imagen-astronauta" src={imgAstronauta} alt="error404" />
                    </div>
                </div>
            </div>
            <div className="container contenedor-404 mt-0">
                <div className="row justify-content-center">
                    <p className="parrafo3 text-center mb-2">Página no disponible</p>
                    <a className="col-4 col-md-2 mb-2 mb-md-0 btn btn-reg" href="" role="button">Regresar</a>
                </div>
            </div>
        </>
    )
}

export default Page404