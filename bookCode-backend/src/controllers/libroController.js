import { libro } from "../model/data.js";

export const obtenerLibros = async (req,res) => {
   try {
    res.status(200).json(libro)
   } catch (error) {
        res.status(500).json({mensaje: 'Error Interno en el servidor'})
   }
}

export const obtenerLibro = async (req,res) => {
    try {
        const {id} = req.body

        const obtLibro = libro.filter(l => l.ID === id)

        res.status(200).json(obtLibro)

    } catch (error) {
        res.status(500).json({mensaje: 'Error en el servidor'})
    }
}

export const filtrarLibro = async (req,res) => {
    try {
        const {titulo, autor, genero} = req.query
        const filtro = libro.filter(l => l.genero === genero || l.titulo === titulo || l.autor === autor)

        res.status(200).json(filtro)
    } catch (error) {
        res.status(500).json({mensaje: "Hubo un error al filtra los libros"})
    }
}