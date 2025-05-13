import { Router } from "express";
import { PokemonController } from "../controllers/pokemon.controller";
import { GetPokemonAbilitiesUseCase } from "../../../application/use-cases/get-pokemon-abilities.use-case";
import { ListPokemonsUseCase } from "../../../application/use-cases/list-all-pokemons.use-case";
import { PokemonApiService } from "../../../infrastructure/services/pokemon-api.service";

const router = Router();

const apiService = new PokemonApiService();
const getAbilitiesUseCase = new GetPokemonAbilitiesUseCase(apiService);
const listAllUseCase = new ListPokemonsUseCase(apiService);
const controller = new PokemonController(getAbilitiesUseCase, listAllUseCase);

/**
 * @openapi
 * /api/pokemons:
 *   get:
 *     summary: List all Pokémon
 *     description: Returns a paginated list of Pokémon.
 *     parameters:
 *       - in: query
 *         name: limit
 *         schema:
 *           type: integer
 *           default: 20
 *         description: Number of Pokémon to return
 *       - in: query
 *         name: offset
 *         schema:
 *           type: integer
 *           default: 0
 *         description: Number of Pokémon to skip
 *     responses:
 *       200:
 *         description: A list of Pokémon
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 count:
 *                   type: integer
 *                 next:
 *                   type: string
 *                   nullable: true
 *                 previous:
 *                   type: string
 *                   nullable: true
 *                 results:
 *                   type: array
 *                   items:
 *                     type: object
 *                     properties:
 *                       name:
 *                         type: string
 *                       url:
 *                         type: string
 */
router.get("/", controller.listAll.bind(controller));

/**
 * @openapi
 * /api/pokemons/{pokemon}/abilities:
 *   get:
 *     summary: Get Pokémon abilities
 *     description: Returns a list of Pokémon abilities in alphabetical order.
 *     parameters:
 *       - in: path
 *         name: pokemon
 *         required: true
 *         schema:
 *           type: string
 *         description: Name of the Pokémon
 *     responses:
 *       200:
 *         description: A list of abilities
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 pokemon:
 *                   type: string
 *                 abilities:
 *                   type: array
 *                   items:
 *                     type: string
 *       404:
 *         description: Pokémon not found
 */
router.get("/:pokemon/abilities", controller.getAbilities.bind(controller));

export { router as pokemonRouter };
