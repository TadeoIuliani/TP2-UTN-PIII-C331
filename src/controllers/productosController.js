const postModel = require("../models/productoModel")

const traerProductos = async (req,res)=>{
    try {
        const productos = await postModel.findAll()
        res.json(productos)
    } catch (error) {
        res.json({message:error.message})
    }
};

const agregarProducto = async (req,res)=>{
    try {
        await postModel.create(req.body)
        res.json("Registro exitoso")
    } catch (error) {
        res.json({message:error.message})
    }
};

const actualizarProducto  = async (req,res)=>{
    try {
        await postModel.update(req.body, {
            where:{id:req.params.id}
        })
        res.json("Registro actualzado")
    } catch (error) {
        res.json({message:error.message})
    }
};

module.exports = {traerProductos, agregarProducto, actualizarProducto}