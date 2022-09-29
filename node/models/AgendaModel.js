import db from "../database/db.js";

import { DataTypes, Op } from "sequelize";

const AgendaModel = db.define('agendas',{
    
    IdUsuario: {type: DataTypes.NUMBER},
    IdContacto: {type: DataTypes.NUMBER}
})

export default AgendaModel