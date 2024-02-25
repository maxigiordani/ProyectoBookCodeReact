import { DataTypes } from "sequelize";
import sequelize from "../dataBase/db.js";

export const User = sequelize.define('User', {
    id:{
        type:DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true
    },
    nombre:DataTypes.STRING,
    apellido: DataTypes.STRING,
    email: {
        type: DataTypes.STRING(20),
        unique: true
    },
    password:DataTypes.STRING,
})

/* await User.sync() */