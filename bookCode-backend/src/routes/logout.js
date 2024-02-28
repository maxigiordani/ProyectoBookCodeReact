import {verificarToken} from '../middlewares/verificarToken.js'
import {Router} from 'express'
import { logout } from '../controllers/logoutController.js'

const logoutRouter = Router()

logoutRouter.put('/logout',verificarToken,logout)

export default logoutRouter