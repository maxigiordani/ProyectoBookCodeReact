import { Router } from "express";
import { obtenerLibros, obtenerLibro } from "../controllers/libroController.js";
import {verificarToken} from "../middlewares/verificarToken.js"

const libroRouter = Router()

libroRouter.get('/home',obtenerLibros )
libroRouter.get('/productdetail',obtenerLibro)

export default libroRouter