import { Router } from "express";
import prestamos from "../controllers/prestamos.controller";

const router = Router();

router.get("/", prestamos.listar);

export default router;
