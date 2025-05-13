import { ListPokemonsUseCase } from "../../src/application/use-cases/list-all-pokemons.use-case";
import { PokemonApiService } from "../../src/infrastructure/services/pokemon-api.service";

describe("ListPokemonsUseCase", () => {
  it("should return paginated list of pokemons", async () => {
    const mockService = {
      fetchPokemonList: jest.fn().mockResolvedValue({
        count: 2,
        next: null,
        previous: null,
        results: [
          { name: "pikachu", url: "https://pokeapi.co/api/v2/pokemon/25/" },
          { name: "bulbasaur", url: "https://pokeapi.co/api/v2/pokemon/1/" }
        ]
      })
    } as unknown as PokemonApiService;

    const useCase = new ListPokemonsUseCase(mockService);
    const result = await useCase.execute(2, 0);

    expect(mockService.fetchPokemonList).toHaveBeenCalledWith(2, 0);
    expect(result.results).toHaveLength(2);
    expect(result.results[0].name).toBe("pikachu");
  });
});
