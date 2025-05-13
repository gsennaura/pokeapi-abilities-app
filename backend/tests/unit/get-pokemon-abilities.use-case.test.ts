import { GetPokemonAbilitiesUseCase } from "../../src/application/use-cases/get-pokemon-abilities.use-case";
import { PokemonApiService } from "../../src/infrastructure/services/pokemon-api.service";
import { PokemonNotFoundError } from "../../src/domain/errors/pokemon-not-found.error";

describe("GetPokemonAbilitiesUseCase", () => {
  it("should return sorted abilities", async () => {
    const mockService = {
      fetchPokemon: jest.fn().mockResolvedValue({
        name: "pikachu",
        abilities: ["thunder", "static", "agility"]
      })
    } as unknown as PokemonApiService;

    const useCase = new GetPokemonAbilitiesUseCase(mockService);
    const result = await useCase.execute("pikachu");

    expect(result).toEqual(["agility", "static", "thunder"]);
  });

  it("should throw PokemonNotFoundError if service fails", async () => {
    const mockService = {
      fetchPokemon: jest.fn().mockRejectedValue(new Error("Not found"))
    } as unknown as PokemonApiService;

    const useCase = new GetPokemonAbilitiesUseCase(mockService);

    await expect(useCase.execute("invalid"))
      .rejects
      .toThrow(PokemonNotFoundError);
  });
});
