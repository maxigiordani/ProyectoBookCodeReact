import {Sequelize} from 'sequelize'
import dotenv from 'dotenv'
dotenv.config()

const sequelize = new Sequelize(process.env.NOMBRE_DB, process.env.NOMBRE_USUARIO, process.env.PASSWORD_DB,{
    dialect: 'mysql',
    port: '3306'
})

export default sequelize