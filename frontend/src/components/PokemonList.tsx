import * as React from "react";
import { PokemonCard } from "./PokemonCard";

interface PokemonListProps {
  pokemons: string[];
  onSelect: (name: string) => void;
}

export const PokemonList: React.FC<PokemonListProps> = ({ pokemons, onSelect }) => (
  <div className="pokemon-list">
    {pokemons.map((name) => (
      <PokemonCard key={name} name={name} onClick={() => onSelect(name)} />
    ))}
  </div>
);