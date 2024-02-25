import { Router } from "express";
import { autenticar,register } from "../controllers/register.Controller.js";

const registerRouter = Router()

registerRouter.post('/register',autenticar,register)

export default registerRouter