const productoModel = require("../models/productoModel")
const vendedorModel = require("../models/vendedorModel")

const traerVendedores =  async (req,res) =>{
    try {
        const { page = 1, limit = 10, type} = req.query;

        const pageInt = parseInt(page)
        const limitInt = parseInt(limit)
        const offset = (pageInt - 1) * limitInt
    
        const filter = {}
        if (type){
            filter.ubicacion = type
        }

        const vendedores = await vendedorModel.findAll({
            where: filter, // Aquí pasamos los filtros dinámicos
            limit: limitInt,  // Límite de registros por página
            offset: offset, // Desplazamiento para la paginación
        })
        res.status(200).json(vendedores)
    } 
    catch (error) {
        res.status(500).json({message:error.message})
    }

}

const agregarVendedor = async (req,res) =>{
    try {
        const vendedor = await vendedorModel.create(req.body)
        res.status(201).json(`Vendedor creado: ${vendedor.nombre}`);

    } catch (error) {
        // Devolver error 500 si ocurre un problema en el servidor
        res.status(500).json({ message: error.message });
    }
}

const traerVendedor = async (req,res) =>{
    try {

        const { productosBool = false} = req.query;
    
        const vendedor = await vendedorModel.findByPk(req.params.id)
        /* const filter = {} */
        if (productosBool){
            const productosOrm =  await productoModel.findAll({
                where: {vendedor_id : vendedor.id}
            })
            res.json({
                id : vendedor.id,
                nombre : vendedor.nombre,
                apellido : vendedor.apellido,
                ubicacion: vendedor.ubicacion,
                createdAt : vendedor.createdAt,
                updatedAt: vendedor.updatedAt,
                productos : productosOrm
            })
        }
        else{
            res.status(200).json(vendedor);
        }
    } catch (error) {
        // Devolver error 500 si ocurre un problema en el servidor
        res.status(500).json({ message: error.message });
    }
}

const eliminarVendedor = async (req,res) =>{
    try {
        await vendedorModel.destroy({
            where:{id:req.params.id}
        })
        res.status(200).json("Vendedor eliminado");
    } catch (error) {
        // Devolver error 500 si ocurre un problema en el servidor
        res.status(500).json({ message: error.message });
    }
}


module.exports = {traerVendedores, agregarVendedor, traerVendedor, eliminarVendedor}