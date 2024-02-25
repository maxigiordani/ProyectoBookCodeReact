import React from 'react'
import '../../stylesheet/Home.css';
import imgUno from '../../img/libroEstrellasDelMundial.png';
import imgDos from '../../img/libroElHombreEnBuscaDeSentido.png';
import imgTres from '../../img/libroLaPsicologiaDelDinero.png';
import imgCuatro from '../../img/libroPensamientosNutritivos.png';
import imgCinco from '../../img/libroElDuelo.png';

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