import swaggerJsdoc from "swagger-jsdoc";
import swaggerUi from "swagger-ui-express";
import { Express } from "express";

const options: swaggerJsdoc.Options = {
  definition: {
    openapi: "3.0.0",
    info: {
      title: "PokeAPI Abilities App",
      version: "1.0.0",
      description: "API that fetches and returns Pokémon abilities in alphabetical order."
    }
  },
  apis: ["./src/interfaces/http/routes/*.ts"], // Diretório com os JSDoc
};

const specs = swaggerJsdoc(options);

export function setupSwaggerDocs(app: Express): void {
  app.use("/api-docs", swaggerUi.serve, swaggerUi.setup(specs));
}
