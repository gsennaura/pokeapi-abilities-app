import express from "express";
import { registerRoutes } from "./routes";
import { setupSwaggerDocs } from "./docs/swagger";

const app = express();
process.env.NODE_TLS_REJECT_UNAUTHORIZED = "0";

app.use(express.json());

// Swagger docs
setupSwaggerDocs(app);

// Register routes
registerRoutes(app);

export default app;
