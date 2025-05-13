import { Express } from "express";
import { healthRouter } from "./health.routes";

export function registerRoutes(app: Express): void {
  app.use("/api/health", healthRouter);
}