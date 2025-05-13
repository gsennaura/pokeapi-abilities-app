export class PokemonNotFoundError extends Error {
    constructor(pokemonName: string) {
      super(`Pokemon '${pokemonName}' not found`);
      this.name = "PokemonNotFoundError";
    }
  }  