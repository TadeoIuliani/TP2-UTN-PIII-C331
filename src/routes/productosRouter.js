const express  = require ("express")
const {traerProductos, agregarProducto, actualizarProducto, traerProductoId, eliminarProducto} = require("../controllers/productosController")

const router = express.Router()

/**
 * @swagger
 * /productos:
 *   get:
 *     summary: Obtiene todos los productos.
 *     description: Devuelve una lista de productos con soporte para paginación, orden y filtros.
 *     parameters:
 *       - in: query
 *         name: page
 *         schema:
 *           type: integer
 *           example: 1
 *         description: Número de la página (por defecto 1).
 *       - in: query
 *         name: limit
 *         schema:
 *           type: integer
 *           example: 10
 *         description: Cantidad de productos por página (por defecto 10).
 *       - in: query
 *         name: sort
 *         schema:
 *           type: string
 *           example: ASC
 *         description: Orden de los resultados (ASC o DESC).
 *       - in: query
 *         name: type
 *         schema:
 *           type: string
 *           example: Nike
 *         description: Filtrar productos por marca.
 *       - in: query
 *         name: status
 *         schema:
 *           type: string
 *           example: Activo
 *         description: Filtrar productos por estado.
 *     responses:
 *       200:
 *         description: Lista de productos obtenida con éxito.
 *         content:
 *           application/json:
 *             schema:
 *               type: array
 *               items:
 *                 type: object
 *                 properties:
 *                   id:
 *                     type: integer
 *                     example: 1
 *                   nombre:
 *                     type: string
 *                     example: Camiseta oficial
 *                   precio:
 *                     type: number
 *                     example: 49.99
 *                   marca:
 *                     type: string
 *                     example: Nike
 *                   status:
 *                     type: string
 *                     example: Activo
 * 
 * /productos/{id}:
 *   get:
 *     summary: Obtiene un producto por ID.
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         schema:
 *           type: integer
 *           example: 1
 *         description: ID único del producto.
 *     responses:
 *       200:
 *         description: Producto encontrado con éxito.
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 id:
 *                   type: integer
 *                   example: 1
 *                 nombre:
 *                   type: string
 *                   example: Camiseta oficial
 *                 precio:
 *                   type: number
 *                   example: 49.99
 *                 marca:
 *                   type: string
 *                   example: Nike
 *                 status:
 *                   type: string
 *                   example: Activo
 *       404:
 *         description: Producto no encontrado.
 * 
 *   post:
 *     summary: Agrega un nuevo producto.
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             properties:
 *               nombre:
 *                 type: string
 *                 example: Camiseta oficial
 *               precio:
 *                 type: number
 *                 example: 49.99
 *               marca:
 *                 type: string
 *                 example: Nike
 *               status:
 *                 type: string
 *                 example: Activo
 *     responses:
 *       201:
 *         description: Producto creado con éxito.
 * 
 *   put:
 *     summary: Actualiza un producto existente.
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         schema:
 *           type: integer
 *           example: 1
 *         description: ID único del producto.
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             properties:
 *               nombre:
 *                 type: string
 *                 example: Camiseta actualizada
 *               precio:
 *                 type: number
 *                 example: 59.99
 *               marca:
 *                 type: string
 *                 example: Adidas
 *               status:
 *                 type: string
 *                 example: Inactivo
 *     responses:
 *       200:
 *         description: Producto actualizado con éxito.
 *       404:
 *         description: Producto no encontrado.
 * 
 *   delete:
 *     summary: Elimina un producto por ID.
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         schema:
 *           type: integer
 *           example: 1
 *         description: ID único del producto.
 *     responses:
 *       200:
 *         description: Producto eliminado con éxito.
 *       404:
 *         description: Producto no encontrado.
 */

router.get("/", traerProductos)
router.get("/:id", traerProductoId)
router.post("/", agregarProducto)
router.put("/:id", actualizarProducto)
router.delete("/:id", eliminarProducto)

module.exports = router