import { Navigate, useLocation } from "react-router-dom";
import PropTypes from 'prop-types'

export const ProtectorRutas = ({ logueado, children }) => {
  const location = useLocation()

  if (!logueado) {
    return <Navigate to="/login" state={{ from: location }}></Navigate>
  }

  return children
}

ProtectorRutas.propTypes = {
  logueado: PropTypes.bool,
  children: PropTypes.oneOfType([
    PropTypes.string,
    PropTypes.number,
    PropTypes.node,
    PropTypes.arrayOf(PropTypes.node),
  ]).isRequired,
}

export default ProtectorRutas

