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
        res.json(vendedores)
    } 
    catch (error) {
        res.json({message:error.message})
    }

}

const agregarVendedor = async (req,res) =>{
    try {
        const vendedor = await vendedorModel.create(req.body)
        res.json(`Vendedor creado: ${vendedor.nombre}`)

    } catch (error) {
        res.json({message:error.message})
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
            res.json(vendedor)
        }
        
    } catch (error) {
        res.json({message:error.message})
    }
}

const eliminarVendedor = async (req,res) =>{
    try {
        await vendedorModel.destroy({
            where:{id:req.params.id}
        })
        res.json("Vendedor eliminado")
    } catch (error) {
        res.json({message:error.message})
    }
}


module.exports = {traerVendedores, agregarVendedor, traerVendedor, eliminarVendedor}