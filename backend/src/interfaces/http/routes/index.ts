import { Express } from "express";
import { healthRouter } from "./health.routes";
import { pokemonRouter } from "./pokemon.routes";

export function registerRoutes(app: Express): void {
  app.use("/api/health", healthRouter);
  app.use("/api/pokemons", pokemonRouter);
}