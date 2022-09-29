import db from "../database/db.js";

import { DataTypes } from "sequelize";

const UsuarioModel = db.define('usuarios',{
    
    Nombre: {type: DataTypes.STRING},
    Apellido_Paterno: {type: DataTypes.STRING},
    Apellido_Materno: {type: DataTypes.STRING},
    Telefono: {type: DataTypes.NUMBER}
})

export default UsuarioModel