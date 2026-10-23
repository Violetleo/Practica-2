import { Router } from "express";
import librosRoutes from "./libros.routes";
import prestamosRoutes from "./prestamos.routes";
import estadisticasRoutes from "./estadisticas.routes";

const router = Router();

router.use("/libros", librosRoutes);
router.use("/prestamos", prestamosRoutes);
router.use("/estadisticas", estadisticasRoutes);

export default router;
