import { Response } from "express";

export function error(res: Response, status: number, message: string) {
    return res.status(status).json({ error: message });
}
