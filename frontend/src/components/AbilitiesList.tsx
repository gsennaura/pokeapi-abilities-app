interface Props {
    pokemon: string;
    abilities: string[];
  }
  
  export function AbilitiesList({ pokemon, abilities }: Props) {
    if (abilities.length === 0) {
      return <p className="text-gray-500">No abilities found for "{pokemon}".</p>;
    }
  
    return (
      <div className="mt-6">
        <h2 className="text-xl font-bold mb-4 capitalize">{pokemon} Abilities</h2>
        <ul className="list-disc list-inside space-y-1">
          {abilities.map((ability) => (
            <li key={ability} className="capitalize">{ability}</li>
          ))}
        </ul>
      </div>
    );
  }
  