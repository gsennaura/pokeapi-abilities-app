import { PokemonApiService } from "../../infrastructure/services/pokemon-api.service";
import { PokemonNotFoundError } from "../../domain/errors/pokemon-not-found.error";

export class GetPokemonAbilitiesUseCase {
  constructor(private readonly api: PokemonApiService) {}

  async execute(name: string): Promise<string[]> {
    try {
      const pokemon = await this.api.fetchPokemon(name);
      return pokemon.abilities.sort((a, b) => a.localeCompare(b));
    } catch {
      throw new PokemonNotFoundError(name);
    }
  }
}
