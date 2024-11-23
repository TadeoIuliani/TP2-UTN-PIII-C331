const productoModel = require("../models/productoModel")
const vendedorModel = require("../models/vendedorModel")


const traerProductos = async (req,res)=>{
    try {
        const { page = 1, limit = 10, sort = "ASC", type, status } = req.query;

        const pageInt = parseInt(page)
        const limitInt = parseInt(limit)
        const offset = (pageInt - 1) * limitInt

        const filter = {}
        if (type){
            filter.marca = type
        }
        if (status){
            filter.status = status
        }

        const order = [["createdAt", sort.toUpperCase() === "DESC" ? "DESC" : "ASC"]];

        const productos = await productoModel.findAll({
            /* include: {
                model: vendedorModel
            } */
            where: filter, // Aquí pasamos los filtros dinámicos
            limit: limitInt,  // Límite de registros por página
            offset: offset, // Desplazamiento para la paginación
            order: order,  // Ordenar por fecha de creación (ASC o DESC)
        
        })
        res.json(productos)
    } catch (error) {
        res.json({message:error.message})
    }
};

const traerProductoId = async (req,res)=>{
    try {
        const producto = await productoModel.findByPk(req.params.id)
        res.json(producto)
    } catch (error) {
        res.json({message:error.message})
    }
};

const agregarProducto = async (req,res)=>{
    try {
        await productoModel.create(req.body)
        res.json("Registro exitoso")
    } catch (error) {
        res.json({message:error.message})
    }
};

const actualizarProducto = async (req,res)=>{
    try {
        await productoModel.update(req.body, {
            where:{id:req.params.id}
        })
        res.json("Registro actualzado")
    } catch (error) {
        res.json({message:error.message})
    }
};

const eliminarProducto = async (req,res)=>{
    try {
        await productoModel.destroy({
            where:{id:req.params.id}
        })
        res.json("Registro elimnado")
    } catch (error) {
        res.json({message:error.message})
    }
};

module.exports = {traerProductos, agregarProducto, actualizarProducto, traerProductoId, eliminarProducto}