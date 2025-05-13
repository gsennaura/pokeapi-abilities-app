import { z } from "zod";

export const GetPokemonParamsSchema = z.object({
  pokemon: z.string().min(1, "Pokemon name is required"),
});
