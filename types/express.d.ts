import { Libro } from "../data/db";

declare global {
    namespace Express {
        interface Request {
            libro: Libro;
        }
    }
}

export {};
