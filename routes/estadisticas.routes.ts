import { Router } from "express";
import estadisticas from "../controllers/estadisticas.controller";

const router = Router();

router.get("/", estadisticas.obtener);

export default router;
