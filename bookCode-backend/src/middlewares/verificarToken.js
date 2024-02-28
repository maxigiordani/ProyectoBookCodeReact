import jwt from 'jwt-simple'
import moment from 'moment'
import dotenv from 'dotenv'
dotenv.config()

export const verificarToken = (req,res, next) =>{

    if (!req.headers['user-token']) {
        return res.json({error: 'Necesitas incluir el user-token en la cabecera'})
    }

    const userToken = req.headers['user-token']

    let payload = {}

    try {
        payload = jwt.encode(userToken, process.env.FRASE_SECRETA )
    } catch (error) {
        return res.json({error: 'El token es incorrecto'})
    }
    if (payload.expired < moment().unix()) {
        return res.json({error: 'El Token ha expirado'})
    }

    req.usuarioId = payload.usuarioId

    next()
}