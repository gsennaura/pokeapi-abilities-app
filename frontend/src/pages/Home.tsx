import { useEffect, useState } from "react";
import { PokemonList } from "../components/PokemonList";
import { SearchForm } from "../components/SearchForm";
import { useNavigate } from "react-router-dom";

export const Home = () => {
  const [pokemons, setPokemons] = useState<string[]>([]);
  const [filtered, setFiltered] = useState<string[]>([]);
  const [page, setPage] = useState(0);
  const limit = 20;
  const navigate = useNavigate();

  const fetchPokemons = async (offset = 0) => {
    try {
      const res = await fetch(`${import.meta.env.VITE_API_URL || "http://localhost:3001"}/api/pokemons?limit=${limit}&offset=${offset}`);
      const data = await res.json();
      const names = data.results.map((p: { name: string }) => p.name);
      setPokemons(names);
      setFiltered(names);
    } catch (error) {
      console.error("Failed to fetch pokemons:", error);
    }
  };

  useEffect(() => {
    fetchPokemons(page * limit);
  }, [page]);

  const handleSelect = (name: string) => navigate(`/pokemon/${name}`);
  const handleSearch = (term: string) => {
    if (!term.trim()) return setFiltered(pokemons);
    setFiltered(pokemons.filter((p) => p.includes(term.toLowerCase())));
  };

  return (
    <div className="container">
      <h1>Pokémon List</h1>
      <SearchForm onSearch={handleSearch} />
      <PokemonList pokemons={filtered} onSelect={handleSelect} />
      <div className="pagination">
        <button disabled={page === 0} onClick={() => setPage((p) => p - 1)}>Anterior</button>
        <span>Página {page + 1}</span>
        <button onClick={() => setPage((p) => p + 1)}>Próxima</button>
      </div>
    </div>
  );
};
