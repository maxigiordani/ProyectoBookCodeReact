import React from 'react';
import { FaUser } from 'react-icons/fa';
import '../../stylesheet/Login.css';

function Login() {
  return (
    <div className="container containerlogin mt-5 mb-5">
      <div className="row justify-content-center">
        <div className="col-md-6">
          <div className="mb-4" id='card'>
            <h1 className="text-center h2 mt-4 mb-4">INICIAR SESIÓN</h1>
            <form>
              <div className="card-body">
                <div className="mb-3 text-center">
                  <FaUser className="user-icon" size={50} />
                </div>
                <div className="mb-3">
                  <label htmlFor="usuario" className="form-label">Nombre de usuario:</label>
                  <input type="text" className="form-control" id="usuario" required />
                </div>
                <div className="mb-3">
                  <label htmlFor="contrasena" className="form-label">Contraseña:</label>
                  <input type="password" className="form-control" id="contrasena" required />
                </div>
                <div className="mb-2 form-check form-check-inline d-flex align-items-center justify-content-center">
                  <input type="checkbox" className="form-check-input" id="recordar" />
                  <label className="form-check-label mx-2" htmlFor="recordar">Recordar sesión</label>
                </div>
                <div className="mb-4 text-center">
                  <button type="submit" className="btn botonlogin btn-block">Iniciar sesión</button>
                  <div className="mt-3">
                    <a href="#" className='mensajelogin'>¿Aún no tienes cuenta?, ¡regístrate!</a>
                  </div>
                </div>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Login;
