const express  = require ("express")
const {traerVendedores, agregarVendedor, traerVendedor, eliminarVendedor} = require("../controllers/vendedoresController")

const router = express.Router()

/**
 * @swagger
/vendedores:
  get:
    summary: Obtiene todos los vendedores.
    description: Devuelve una lista de vendedores con soporte para paginación y filtros.
    parameters:
      - in: query
        name: page
        schema:
          type: integer
          example: 1
        description: Número de la página (por defecto 1).
      - in: query
        name: limit
        schema:
          type: integer
          example: 10
        description: Cantidad de vendedores por página (por defecto 10).
      - in: query
        name: type
        schema:
          type: string
          example: Buenos Aires
        description: Filtrar vendedores por ubicación.
    responses:
      200:
        description: Lista de vendedores obtenida con éxito.
        content:
          application/json:
            schema:
              type: array
              items:
                type: object
                properties:
                  id:
                    type: integer
                    example: 1
                  nombre:
                    type: string
                    example: Juan Pérez
                  ubicacion:
                    type: string
                    example: Buenos Aires
      500:
        description: Error interno del servidor.

  post:
    summary: Crea un nuevo vendedor.
    requestBody:
      required: true
      content:
        application/json:
          schema:
            type: object
            properties:
              nombre:
                type: string
                example: Juan Pérez
              ubicacion:
                type: string
                example: Buenos Aires
    responses:
      201:
        description: Vendedor creado con éxito.
        content:
          application/json:
            schema:
              type: string
              example: "Vendedor creado: Juan Pérez"
      400:
        description: Datos inválidos en la solicitud.
      500:
        description: Error interno del servidor.

/vendedores/{id}:
  get:
    summary: Obtiene un vendedor por ID.
    description: Devuelve la información de un vendedor específico. Incluye los productos asociados al vendedor si se proporciona el parámetro `productosBool=true`.
    parameters:
      - in: path
        name: id
        required: true
        schema:
          type: integer
          example: 1
        description: ID único del vendedor.
      - in: query
        name: productosBool
        schema:
          type: boolean
          example: true
        description: Indica si se deben incluir los productos asociados al vendedor.
    responses:
      200:
        description: Vendedor encontrado con éxito.
        content:
          application/json:
            schema:
              type: object
              properties:
                id:
                  type: integer
                  example: 1
                nombre:
                  type: string
                  example: Juan Pérez
                apellido:
                  type: string
                  example: López
                ubicacion:
                  type: string
                  example: Buenos Aires
                productos:
                  type: array
                  items:
                    type: object
                    properties:
                      id:
                        type: integer
                        example: 101
                      nombre:
                        type: string
                        example: Camiseta
                      precio:
                        type: number
                        example: 49.99
      404:
        description: Vendedor no encontrado.
      500:
        description: Error interno del servidor.

  delete:
    summary: Elimina un vendedor por ID.
    parameters:
      - in: path
        name: id
        required: true
        schema:
          type: integer
          example: 1
        description: ID único del vendedor.
    responses:
      200:
        description: Vendedor eliminado con éxito.
      404:
        description: Vendedor no encontrado.
      500:
        description: Error interno del servidor.
 */

router.get("/", traerVendedores)
router.get("/:id", traerVendedor)
router.post("/", agregarVendedor)
router.delete("/:id", eliminarVendedor)

module.exports = router