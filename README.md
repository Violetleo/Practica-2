# Práctica 2
**Arquitectura y Programación de Sistemas en Internet**  
Leonardo Jesús Tapia Martínez

# API de Biblioteca

## Instalación y ejecución

Para poner en marcha el proyecto, ejecuta los siguientes comandos:

```bash
npm install
npm start
npm run dev
```

- `npm install`: instala las dependencias necesarias.
- `npm start`: inicia el servidor en modo producción.
- `npm run dev`: ejecuta el servidor en modo desarrollo, reiniciándose automáticamente al detectar cambios (requiere Node.js 18.11 o superior).

Una vez iniciado, se puede acceder al servidor desde [http://localhost:5000](http://localhost:5000).

## Organización del proyecto

El código se distribuye en diferentes carpetas para separar las responsabilidades de cada parte de la aplicación:

```text
src/
├── server.js            # Inicio del servidor
├── app.js               # Configuración de Express
├── data/db.js           # Almacenamiento de datos en memoria
├── routes/              # Rutas de la API
├── controllers/         # Gestión de las peticiones
├── middlewares/         # Funciones intermedias y gestión de errores
└── utils/helpers.js     # Funciones auxiliares y validaciones
```

Esta estructura permite mantener el código organizado y facilita la modificación y el mantenimiento de la API.
