import db from "../database/db.js";

import { DataTypes, Op} from "sequelize";

const ContactoModel = db.define('contactos',{
    
    Nombre: {type: DataTypes.STRING},
    Apellido_Paterno: {type: DataTypes.STRING},
    Apellido_Materno: {type: DataTypes.STRING},
    Telefono: {type: DataTypes.NUMBER}
})

export default ContactoModel