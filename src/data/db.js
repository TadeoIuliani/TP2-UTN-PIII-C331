const {Sequelize} = require("sequelize")


const db = new Sequelize("gestion_productos", "root", "",{
    host : "localhost",
    dialect : "mysql",
    port : 3306
})

module.exports = db