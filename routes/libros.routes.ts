import { Router } from "express";
import cargarLibro from "../middlewares/cargarLibro";
import libros from "../controllers/libros.controller";
import prestamos from "../controllers/prestamos.controller";

const router = Router();

router.get("/", libros.listar);
router.post("/", libros.crear);

router.get("/:id", cargarLibro, libros.obtener);
router.put("/:id", cargarLibro, libros.reemplazar);
router.patch("/:id", cargarLibro, libros.modificar);
router.delete("/:id", cargarLibro, libros.borrar);

// Rutas anidadas de préstamos
router.get("/:id/prestamos", cargarLibro, prestamos.historialDeLibro);
router.post("/:id/prestar", cargarLibro, prestamos.prestar);
router.post("/:id/devolver", cargarLibro, prestamos.devolver);

export default router;
