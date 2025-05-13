export interface PokemonAbilitiesResponse {
    pokemon: string;
    abilities: string[];
  }
  
  export function toPokemonAbilitiesResponse(
    pokemon: string,
    abilities: string[]
  ): PokemonAbilitiesResponse {
    return { pokemon, abilities };
  }
  