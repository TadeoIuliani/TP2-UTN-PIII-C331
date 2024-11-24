const swaggerJsdoc = require('swagger-jsdoc');
const swaggerUi = require('swagger-ui-express');

// Configuración de Swagger
const swaggerOptions = {
    definition: {
      openapi: '3.0.0',
      info: {
        title: 'API de E-commerce',
        version: '1.0.0',
        description: 'Documentación de la API REST para el e-commerce de camisetas de fútbol.',
      },
      servers: [
        {
          url: 'http://localhost:3000', // URL base de tu API
          description: 'Servidor de desarrollo',
        },
      ],
    },
    apis: [
      './src/routes/*.js'
    ] // Archivos donde documentarás tus rutas
  };
  
  const swaggerSpecs = swaggerJsdoc(swaggerOptions);

  module.exports = { swaggerUi, swaggerSpecs };