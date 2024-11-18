const express = require("express")
const path = require("path")
const db = require("./data/db")
const port = 3000
const app = express()

const productosRouter = require("./routes/productosRouter")
app.use(express.json()) //analiza los request


app.use("/productos", productosRouter)

const conexionDB = async ()=>{
    try {
        await db.authenticate()
        console.log("conexion ok a la base de datos");
        
    } catch (error) {
        console.log(`hay un error y es el siguiente ${error}`);
    }
}

app.listen(port, ()=>{
    conexionDB()
    console.log(`conexion exitosa ${port}`);
})
