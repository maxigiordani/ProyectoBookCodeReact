import React from 'react'
import '../../../src/stylesheet/Home.css';
import imgUno from '../../../src/img/libroEstrellasDelMundial.png';
import imgDos from '../../../src/img/libroElHombreEnBuscaDeSentido.png';
import imgTres from '../../../src/img/libroLaPsicologiaDelDinero.png';
import imgCuatro from '../../../src/img/libroPensamientosNutritivos.png';
import imgCinco from '../../../src/img/libroElDuelo.png';

function Home() {
    return (
        <div className='containerDiseno'>
            <div className='disenoImg mt-3 mb-5'>
                <img src={imgUno} alt="libro: Estrellas del mundial" />
                <img src={imgDos} alt="libro: El hombre en busca de sentido" />
                <img src={imgTres} alt="libro: La psicologia del dinero" />
                <img src={imgCuatro} alt="libro: Pensamientos nutritivos" />
                <img src={imgCinco} alt="libro: El duelo" />
            </div>
        </div>
    );
}

export default Home