import { Request, Response } from "express";
import { GetPokemonAbilitiesUseCase } from "../../../application/use-cases/get-pokemon-abilities.use-case";
import { ListPokemonsUseCase } from "../../../application/use-cases/list-all-pokemons.use-case";
import { PokemonNotFoundError } from "../../../domain/errors/pokemon-not-found.error";
import { GetPokemonParamsSchema } from "../validators/pokemon.validator";
import { toPokemonAbilitiesResponse } from "../schemas/pokemon-abilities-response";
import { toPokemonListResponse } from "../schemas/pokemon-list-response";

export class PokemonController {
  constructor(
    private readonly getAbilitiesUseCase: GetPokemonAbilitiesUseCase,
    private readonly listAllUseCase: ListPokemonsUseCase
  ) {}

  async getAbilities(req: Request, res: Response) {
    try {
      const parsed = GetPokemonParamsSchema.parse(req.params);
      const abilities = await this.getAbilitiesUseCase.execute(parsed.pokemon);
      const response = toPokemonAbilitiesResponse(parsed.pokemon, abilities);
      res.status(200).json(response);
    } catch (error: any) {
      if (error instanceof PokemonNotFoundError) {
        res.status(404).json({ error: error.message });
      } else if (error.name === "ZodError") {
        res.status(400).json({ error: error.errors });
      } else {
        res.status(500).json({ error: "Internal server error" });
      }
    }
  }

  async listAll(req: Request, res: Response) {
    try {
      const limit = parseInt(req.query.limit as string) || 20;
      const offset = parseInt(req.query.offset as string) || 0;
      const result = await this.listAllUseCase.execute(limit, offset);
      const response = toPokemonListResponse(result);
      res.status(200).json(response);
    } catch (error) {
      res.status(500).json({ error: "Internal server error" });
    }
  }
}
