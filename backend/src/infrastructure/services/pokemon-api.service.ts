import axios from "axios";
import { Pokemon } from "../../domain/entities/pokemon.entity"

export class PokemonApiService {
  async fetchPokemon(name: string): Promise<Pokemon> {
    const res = await axios.get(`https://pokeapi.co/api/v2/pokemon/${name.toLowerCase()}`);
    const abilities = res.data.abilities.map((item: any) => item.ability.name);
    return {
      name: res.data.name,
      abilities
    };
  }
  
  async fetchPokemonList(limit: number, offset: number): Promise<any> {
    const response = await axios.get(`https://pokeapi.co/api/v2/pokemon?limit=${limit}&offset=${offset}`);
    return response.data;
  }
}
