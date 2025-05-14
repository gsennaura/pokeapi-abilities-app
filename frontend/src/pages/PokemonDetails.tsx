import { useEffect, useState } from "react";
import { useParams, Link } from "react-router-dom";
import { AbilitiesList } from "../components/AbilitiesList";

export const PokemonDetails = () => {
  const { name } = useParams();
  const [abilities, setAbilities] = useState<string[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchAbilities = async () => {
      try {
        const res = await fetch(`${import.meta.env.VITE_API_URL || "http://localhost:3001"}/api/pokemons/${name}/abilities`);
        const data = await res.json();
        setAbilities(data.abilities);
      } catch (error) {
        console.error("Failed to fetch abilities:", error);
        setAbilities([]);
      } finally {
        setLoading(false);
      }
    };

    if (name) fetchAbilities();
  }, [name]);

  return (
    <div className="min-h-screen bg-gray-100 p-8">
      <div className="max-w-xl mx-auto bg-white p-6 rounded-lg shadow-lg">
        <h1 className="text-2xl font-bold mb-4 text-center capitalize">{name}</h1>
        {loading ? (
          <p className="text-center text-gray-500">Loading abilities...</p>
        ) : (
          <AbilitiesList pokemon={name || ""} abilities={abilities} />
        )}
        <div className="mt-6 text-center">
          <Link to="/" className="text-blue-500 hover:underline">
            ← Back to list
          </Link>
        </div>
      </div>
    </div>
  );
};
