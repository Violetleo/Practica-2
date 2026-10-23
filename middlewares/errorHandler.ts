import { Request, Response, NextFunction } from "express";
import { error } from "../utils/helpers";

function notFound(req: Request, res: Response) {
    error(res, 404, `Ruta no encontrada: ${req.method} ${req.originalUrl}`);
}

function errorHandler(err: any, req: Request, res: Response, next: NextFunction) {
    if (err.type === "entity.parse.failed") {
        return error(res, 400, "El body no es un JSON válido");
    }

    console.error(err);
    error(res, 500, "Error interno del servidor");
}

export { notFound, errorHandler };
