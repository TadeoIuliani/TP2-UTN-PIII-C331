const express  = require ("express")
const {traerVendedores, agregarVendedor, traerVendedor, eliminarVendedor} = require("../controllers/vendedoresController")

const router = express.Router()

router.get("/", traerVendedores)
router.get("/:id", traerVendedor)
router.post("/", agregarVendedor)
router.delete("/:id", eliminarVendedor)

module.exports = router