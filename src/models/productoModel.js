
const db = require("../data/db")

const {DataTypes} = require ("sequelize")

const productoModel = db.define("productos", {
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
    descripcion: {
        type: DataTypes.STRING(250),
        allowNull: true
    },
    precio: {
        type: DataTypes.DECIMAL(10, 0),
        allowNull: false
    },
    status: {
        type: DataTypes.STRING(50),
        allowNull: true
    },
    calificacion: {
        type: DataTypes.DECIMAL(2, 1),
        allowNull: true
    },
    stock: {
        type: DataTypes.INTEGER,
        allowNull: true
    },
    marca: {
        type: DataTypes.STRING(50),
        allowNull: true
    },
    vendedor_id: {
        type: DataTypes.INTEGER,
        allowNull: false
    }
}, {
    timestamps: true, // Ya que estamos usando `createdAt` y `updatedAt` manualmente
});

// Relación con el modelo Vendedor (asociación de 1:N)
productoModel.associate = (models) => {
    // 'vendedor_id' es la clave foránea en Productos que referencia la tabla Vendedor
    productoModel.belongsTo(models.vendedorModel, {
        foreignKey: 'vendedor_id',   // Campo de la tabla Productos que se relaciona
        targetKey: 'id',              // Campo de la tabla Vendedor al que se hace referencia
        onDelete: 'CASCADE'           // Comportamiento cuando se elimina un vendedor
    });
};

module.exports = productoModel;



