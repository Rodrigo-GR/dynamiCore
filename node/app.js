import express from "express"
import cors from 'cors'

import db from "./database/db.js"

import allRoutes from './routes/routes.js'

const app = express()

const port = process.env.PORT || 3000;

app.use(cors())
app.use(express.json())
app.use('/directorio', allRoutes)

try {
    db.authenticate()
    console.log('Conexión exitosa')
} catch (error) {
    console.log('El error de la conexión es:', error)
}

// app.get('/', (req, res)=>{
//     res.send('Hello World')
// })

app.listen(port, ()=>{
    console.log('Server UP running in http://localhost:8000/')
})