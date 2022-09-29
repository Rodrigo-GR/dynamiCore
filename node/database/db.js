import { Sequelize } from "sequelize";

const db = new Sequelize('heroku_0d3cd49b78de73e', 'b6e15a277ccb50', '9448c9b0',{
    host: 'us-cdbr-east-06.cleardb.net',
    dialect: 'mysql'
})

export default db