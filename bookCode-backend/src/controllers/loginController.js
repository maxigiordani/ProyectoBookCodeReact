import bcrypt from 'bcryptjs'
import moment from 'moment'
import jwt from 'jwt-simple'
import { User } from '../model/user.js'
import dotenv from 'dotenv'
dotenv.config()

export const login = async (req,res) => {
    const user = await User.findOne(
        {
            where: {email: req.body.email}
        }
    )
    if (user) {
        const iguales = bcrypt.compareSync(req.body.password, user.password)

        if (iguales) {
            res.json({succes: createToken(user)})
        }else{
            res.json({error: 'Error en usuario y/o contraseña'})
        }
    }
}

export const createToken = (user) =>{
    const payload ={
        usuarioId: user.id,
        createAt: moment().unix(),
        expired: moment().add(5,'minutes').unix()
    }

    return jwt.encode(payload, process.env.FRASE_SECRETA)
}