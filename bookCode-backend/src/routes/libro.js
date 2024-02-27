import { Router } from "express";
import { obtenerLibros } from "../controllers/libroController.js";
import {verificarToken} from "../middlewares/verificarToken.js"

const libroRouter = Router()

libroRouter.get('/home',obtenerLibros )

export default libroRouter