import express from 'express'
import dotenv from 'dotenv'
import bodyParser from 'body-parser'
import registerRouter from './src/routes/register.js'
import loginRouter from './src/routes/login.js'
import libroRouter from './src/routes/libro.js'
dotenv.config()

const app = express()

import './src/model/user.js'

const port = process.env.PORT || 3000

app.use(bodyParser.json())
app.use(bodyParser.urlencoded({ extended: true}))

app.use('/',registerRouter)
app.use('/',loginRouter)
app.use('/',libroRouter)

app.listen(port, () => {
    console.log(`El servidor se escucha en el puerto ${port}`)
})