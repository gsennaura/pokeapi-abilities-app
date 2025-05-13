import { useEffect, useState } from "react";
import { PokemonList } from "../components/PokemonList";
import { useNavigate } from "react-router-dom";

export const Home = () => {
  const [pokemons, setPokemons] = useState<string[]>([]);
  const navigate = useNavigate();

  useEffect(() => {
    const fetchPokemons = async () => {
      try {
        const res = await fetch("http://localhost:3001/api/pokemons");
        const data = await res.json();
        const names = data.results.map((p: { name: string }) => p.name);
        setPokemons(names);
      } catch (error) {
        console.error("Failed to fetch pokemons:", error);
      }
    };

    fetchPokemons();
  }, []);

  const handleSelect = (name: string) => {
    navigate(`/pokemon/${name}`);
  };

  return (
    <div className="min-h-screen bg-gray-100 p-8">
      <div className="max-w-4xl mx-auto">
        <h1 className="text-3xl font-bold text-center mb-6">Pokémon List</h1>
        <PokemonList pokemons={pokemons} onSelect={handleSelect} />
      </div>
    </div>
  );
};
