import bcrypt from 'bcryptjs'
import { User } from '../model/user.js'
import {check, validationResult} from 'express-validator'

export const autenticar = [
    check('nombre').notEmpty().withMessage('El nombre es obligatorio'),
    check('apellido').notEmpty().withMessage('El apellido es obligatorio'),
    check('email').isEmail().withMessage('El email es obligatorio'),
    check('password').notEmpty().withMessage('La contraseña es obligatoria'),
    
    async (req, res, next) => {
        const errors = validationResult(req);
        if (!errors.isEmpty()) {
            return res.status(422).json({ errors: errors.array() });
        }
        next();
    }
]



export const register = async (req,res) => {
    req.body.password = bcrypt.hashSync(req.body.password, 10)

    const user = await User.create(req.body)

    res.json(user)
}