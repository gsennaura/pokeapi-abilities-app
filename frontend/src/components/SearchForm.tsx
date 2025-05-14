import { useState } from "react";

interface Props {
  onSearch: (pokemon: string) => void;
}

export function SearchForm({ onSearch }: Props) {
  const [pokemon, setPokemon] = useState("");

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (pokemon.trim()) {
      onSearch(pokemon.trim().toLowerCase());
    }
  };

  return (
    <form onSubmit={handleSubmit} className="flex items-center gap-4 mb-6">
      <input
        type="text"
        placeholder="Enter Pokémon name (Just filter in current page)"
        value={pokemon}
        onChange={(e) => setPokemon(e.target.value)}
        className="border border-gray-300 px-4 py-2 rounded-lg w-full"
      />
      <button
        type="submit"
        className="bg-blue-600 text-white px-4 py-2 rounded-lg hover:bg-blue-700"
      >
        Search
      </button>
    </form>
  );
}
