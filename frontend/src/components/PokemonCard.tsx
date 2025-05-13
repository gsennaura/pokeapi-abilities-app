import * as React from "react";

interface PokemonCardProps {
  name: string;
  onClick: () => void;
}

export const PokemonCard: React.FC<PokemonCardProps> = ({ name, onClick }) => {
  return (
    <div className="border rounded-lg p-4 shadow hover:shadow-md transition">
      <h2 className="text-xl font-semibold capitalize">{name}</h2>
      <button
        className="mt-2 px-4 py-2 bg-blue-600 text-white rounded hover:bg-blue-700"
        onClick={onClick}
      >
        Ver habilidades
      </button>
    </div>
  );
};
