import PropTypes from 'prop-types'

const Error = ({children}) => {
  return (
    <div className='bg-danger text-white text-center p-3 text-uppercase font-weight-bold mb-3 rounded'>
        {children}
    </div>
  )
}
Error.propTypes = {
    children: PropTypes.oneOfType([
        PropTypes.string,
        PropTypes.number,
        PropTypes.node,
        PropTypes.arrayOf(PropTypes.node),
      ]).isRequired,
}
export default Error
