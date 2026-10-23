# Práctica 2

**Arquitectura y Programación de Sistemas en Internet**  
Leonardo Jesús Tapia Martínez

# API de Biblioteca

API REST para la gestión de libros, préstamos y estadísticas, desarrollada con Node.js, Express y TypeScript.

## Instalación y ejecución

Para instalar las dependencias del proyecto, ejecuta:

```bash
npm install
```

Para iniciar el servidor en modo desarrollo:

```bash
npm run dev
```

El servidor se reiniciará automáticamente al detectar cambios en el código.

Para compilar el proyecto TypeScript:

```bash
npm run build
```

Para iniciar el servidor en modo producción, después de compilar:

```bash
npm start
```

Una vez iniciado, se puede acceder a la API desde [http://localhost:5000](http://localhost:5000).

## Organización del proyecto

El código se distribuye en diferentes carpetas para separar las responsabilidades de cada parte de la aplicación:

```text
biblioteca/
├── src/
│   ├── server.ts
│   ├── app.ts
│   ├── data/
│   │   └── db.ts
│   ├── routes/
│   ├── controllers/
│   ├── middlewares/
│   ├── types/
│   │   └── express.d.ts
│   └── utils/
│       └── helpers.ts
├── dist/                 # Código JavaScript compilado
├── package.json
├── package-lock.json
└── tsconfig.json
```

La carpeta `src` contiene el código fuente TypeScript. La carpeta `dist` contiene los archivos JavaScript generados durante la compilación.

## Funcionalidades

- Consultar el listado de libros y obtener información de un libro concreto.
- Crear, reemplazar, modificar y eliminar libros.
- Consultar el historial de préstamos de un libro.
- Prestar y devolver libros.
- Consultar estadísticas de la biblioteca.
- Validar los datos recibidos y gestionar errores mediante middlewares.

## Tecnologías utilizadas

- **Node.js:** entorno de ejecución.
- **Express:** framework para desarrollar la API REST.
- **TypeScript:** lenguaje utilizado para desarrollar el código fuente con tipado estático.

