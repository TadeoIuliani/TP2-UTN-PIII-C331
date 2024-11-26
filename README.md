<img src="assets/utn_logo.svg" width="150">
<br/>
<br/>

# Trabajo Práctico Parte 2 — Node.js Express

## **Entrega**

- Suba su código a un repositorio público en GitHub.
- Incluya un archivo `README.md` con:
  - Descripción breve de la API.
  - Instrucciones para correr el proyecto localmente.
  - Ejemplos de endpoints y cómo probarlos.
- Archivos de ejemplos(seed) en formato json de cada modelo, para cargar la DDBB

Descripcion de la API: 
  - La API de Vendedores permite gestionar vendedores y sus productos asociados. Ofrece endpoints para crear, consultar, listar y eliminar vendedores, con soporte para     filtros y paginación.
  - La API de Productos permite administrar un catálogo de productos para un sistema de e-commerce. Ofrece endpoints para crear, consultar, actualizar y eliminar productos, con soporte para filtros por disponibilidad(Agotada/Disponible) o marca.

Archivos para agregar Productos y Vendedores:
  - data/productos.json
  - data/

Para ver la documentacion de las APIS a mas detalle:
http://localhost:3000/api-docs


## 🚀 Configuración y uso

### 1. **Requisitos previos**
Antes de comenzar, asegúrate de tener instalados los siguientes programas en tu sistema:
- [Docker](https://www.docker.com/)
- [Docker Compose](https://docs.docker.com/compose/)
- [Git](https://git-scm.com/)


### 2. **Clonar el repositorio**
Clona este repositorio en tu máquina local:
```bash
git clone https://github.com/tu-usuario/nombre-del-repositorio.git
cd nombre-del-repositorio
```

### 3. **Instalar Dependecias de Node.js
El comando en Bash:
```bash
npm install
```

### 4. **Configurar variables de entorno**
Crea un archivo .env en la raíz del proyecto con las variables del env.example

### 5. **Levantar el contenedor de Docker**
El comando en Bash:
```bash
docker-compose up -d
```
Este comando hará lo siguiente:
  > Descargar la imagen oficial de MySQL (mysql:8.0) si no está disponible localmente.
  > Configurar el contenedor de MySQL con las credenciales especificadas.
  > Crear un volumen para persistir los datos.

### 6. **Iniciar el servidor Node.js**
El comando es:
```bash
npm start
```
Esto ejecutará tu aplicación Node.js y debería escuchar en el puerto 3000 (por defecto). Puedes verificar que el servidor está en funcionamiento abriendo tu navegador y accediendo a http://localhost:3000/productos

