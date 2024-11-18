const db = require("../data/db")

const {DataTypes} = require ("sequelize")

const productoModel = db.define("productos", {
    nombre : {type: DataTypes.STRING},
    descripcion : {type: DataTypes.STRING},
    precio : {type: DataTypes.DECIMAL},
    status : {type: DataTypes.STRING},
    calificacion : {type: DataTypes.DECIMAL},
    stock : {type: DataTypes.INTEGER}
})

module.exports = productoModel