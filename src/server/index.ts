import express, { Application } from "express";
import cors from "cors";
import swaggerUi from "swagger-ui-express";
import path from 'path'
import YAML from 'yamljs'
import { errorHandler } from "../middlewares/errorHandler";
import { responseHandler } from "../middlewares/responseHandler";
import todoRoutes from "../routes/todoRoutes";

const app: Application = express();
app.use(cors());
app.use(express.json());
app.use(responseHandler);

const swaggerDocument = YAML.load(path.join(__dirname, '../docs/openapi.yaml'));

app.use("/api-docs", swaggerUi.serve, swaggerUi.setup(swaggerDocument));

/** todo routes */
app.use("/api", todoRoutes);

app.use(errorHandler);
export default app;
