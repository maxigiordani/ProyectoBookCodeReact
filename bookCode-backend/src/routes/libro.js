import { Router } from "express";
import { obtenerLibros } from "../controllers/libroController.js";
import {verificarToken} from "../middlewares/verificarToken.js"

const libroRouter = Router()

libroRouter.get('/home',verificarToken,obtenerLibros )

export default libroRouter