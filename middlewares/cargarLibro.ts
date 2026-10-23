import { Request, Response, NextFunction } from "express";
import db from "../data/db";
import { error } from "../utils/helpers";

function cargarLibro(req: Request, res: Response, next: NextFunction) {
    const id = Number(req.params.id);

    if (!Number.isInteger(id)) {
        return error(res, 400, "El id debe ser un número entero");
    }

    const libro = db.libros.find((l) => l.id === id);

    if (!libro) {
        return error(res, 404, `No existe un libro con id ${id}`);
    }

    req.libro = libro;
    next();
}

export default cargarLibro;
