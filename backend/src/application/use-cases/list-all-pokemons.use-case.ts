import { PokemonApiService } from "../../infrastructure/services/pokemon-api.service";

export class ListPokemonsUseCase {
  constructor(private readonly api: PokemonApiService) {}

  async execute(limit: number, offset: number) {
    return await this.api.fetchPokemonList(limit, offset);
  }
}
