# Practica-2
Practica 2 Arquitectura y Programación de Sistemas en Internet Leonardo Jesús Tapia Martínezx
# API de Biblioteca
 
## Arrancar
 
```bash
npm install
npm start        # producción
npm run dev      # recarga automática al guardar (Node 18.11+)
```
 
Servidor en http://localhost:5000
 
## Estructura
 
```
src/
├── server.js            # Arranca el servidor (listen)
├── app.js               # Configura Express y middlewares
├── data/db.js           # Datos en memoria + contadores de id
├── routes/              # Define URLs y métodos HTTP
├── controllers/         # Lógica de negocio de cada endpoint
├── middlewares/         # cargarLibro, notFound, errorHandler
└── utils/helpers.js     # Validaciones y funciones auxiliares
```
