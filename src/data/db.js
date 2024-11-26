const {Sequelize} = require("sequelize")
require('dotenv').config(); 

/* const db = new Sequelize(process.env.DB_NAME, process.env.DB_USER, "",{
    host : process.env.DB_HOST,
    dialect : "mysql",
    port : process.env.DB_PORT
})
 */
/* const db = new Sequelize("my_database", "root", "rootpassword", {
    host: "localhost",          // Host de la base de datos
    dialect: 'mysql',           // Dialecto de la base de datos
  }); */
  
const db = new Sequelize(process.env.DB_NAME, process.env.DB_USER, process.env.DB_PASSWORD, {
    host: process.env.DB_HOST,        // Host de la base de datos
    dialect: 'mysql',  // Dialecto de la base de datos
});

/* process.env.DB_HOST */

module.exports = db