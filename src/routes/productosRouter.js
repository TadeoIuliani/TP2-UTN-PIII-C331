const express  = require ("express")
const {traerProductos, agregarProducto, actualizarProducto} = require("../controllers/productosController")

const router = express.Router()

router.get("/", traerProductos)
router.post("/", agregarProducto)
router.put("/:id", actualizarProducto)

module.exports = router