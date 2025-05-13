import * as React from "react";
import { PokemonCard } from "./PokemonCard";

interface PokemonListProps {
  pokemons: string[];
  onSelect: (name: string) => void;
}

export const PokemonList: React.FC<PokemonListProps> = ({ pokemons, onSelect }) => {
  return (
    <div className="grid gap-4 grid-cols-1 sm:grid-cols-2">
      {pokemons.map((name) => (
        <PokemonCard key={name} name={name} onClick={() => onSelect(name)} />
      ))}
    </div>
  );
};
