const { DataTypes } = require('sequelize');
const db = require("../data/db"); 

const vendedorModel = db.define("vendedores", {
    id: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true,
        allowNull: false
    },
    nombre: {
        type: DataTypes.STRING(100),
        allowNull: false
    },
    apellido: {
        type: DataTypes.STRING(100),
        allowNull: false
    },
    ubicacion: {
        type: DataTypes.STRING(100),
        allowNull: false
    }
}, {
    timestamps: true, 
});

// Relación con el modelo Producto (asociación de 1:N)
vendedorModel.associate = (models) => {
    // Un vendedor puede tener muchos productos
    vendedorModel.hasMany(models.productoModel, {
        foreignKey: 'vendedor_id',  // La clave foránea en Productos que hace referencia a Vendedor
    });
};

module.exports = vendedorModel;
