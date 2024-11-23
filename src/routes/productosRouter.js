const express  = require ("express")
const {traerProductos, agregarProducto, actualizarProducto, traerProductoId, eliminarProducto} = require("../controllers/productosController")

const router = express.Router()

router.get("/", traerProductos)
router.get("/:id", traerProductoId)
router.post("/", agregarProducto)
router.put("/:id", actualizarProducto)
router.delete("/:id", eliminarProducto)

module.exports = router