import * as React from "react";

interface PokemonCardProps {
  name: string;
  onClick: () => void;
}

export const PokemonCard: React.FC<PokemonCardProps> = ({ name, onClick }) => (
  <div className="pokemon-card">
    <h2>{name}</h2>
    <button onClick={onClick}>Ver habilidades</button>
  </div>
);
