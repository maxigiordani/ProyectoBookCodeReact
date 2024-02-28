import { useEffect, useState } from 'react';
/* import { Link } from 'react-router-dom'; */
import axios from 'axios';

function Home() {
  const [home, setHome] = useState([]);

  useEffect(() => {
    const obtenerCard = async () => {
      try {
        const respuesta = await axios.get('http://localhost:4000/home');
        setHome(respuesta.data);
      } catch (error) {
        console.error(error);
      }
    };

    obtenerCard();
  }, []);

  return (
    <>
      {/* Tu código para mostrar las cards */}
      {home.map((card, index) => (
        <div key={index} className="card text-center mt-3 mb-3" style={{ width: '12rem' }}>
          <img src={card.imgUrl} className="card-img-top" alt={card.titulo} />
          <div className="card-body">
            <h5 className="mt-2">{card.titulo}</h5>
            {/* Utiliza Link para navegar a ProductDetail con el ID del libro */}
          {/*  <button onClick={}>Leer</button> */}
          </div>
        </div>
      ))}
    </>
  );
}

export default Home;