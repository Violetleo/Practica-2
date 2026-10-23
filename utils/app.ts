import express from "express";
import routes from "../routes";
import { notFound, errorHandler } from "../middlewares/errorHandler";

const app = express();

app.use(express.json());
app.use(routes);
app.use(notFound);
app.use(errorHandler);

export default app;
