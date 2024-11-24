const express = require("express")
const path = require("path")
const db = require("./data/db")
require('dotenv').config();

//Swagger
const { swaggerUi, swaggerSpecs } = require('../swaggerConfig');

const port = process.env.PORT
console.log('Puerto desde .env:', process.env.PORT);

const app = express()

const productosRouter = require("./routes/productosRouter")
const vendedorRouter = require("./routes/vendedoresRouter")
app.use(express.json()) //analiza los request

// Middleware de Swagger
app.use('/api-docs', swaggerUi.serve, swaggerUi.setup(swaggerSpecs));



app.use("/productos", productosRouter)
app.use("/vendedores", vendedorRouter)

const conexionDB = async ()=>{
    try {
        await db.authenticate()
        await db.sync()
        console.log("conexion ok a la base de datos");
        
    } catch (error) {
        console.log(`hay un error y es el siguiente ${error}`);
    }
}

app.listen(port, ()=>{
    conexionDB()
    console.log(`conexion exitosa ${port}`);
    console.log(`Documentación disponible en http://localhost:${port}/api-docs`);
    /* console.log('Puerto cargado desde .env:', process.env.PORT); */

})