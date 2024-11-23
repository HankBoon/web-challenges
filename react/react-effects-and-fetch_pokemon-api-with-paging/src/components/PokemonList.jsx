import { useEffect, useState } from "react";

export default function PokemonList() {
  const [pokemon, setPokemon] = useState([]);
  const [page, setPage] = useState(0);

  useEffect(() => {
    async function loadPokemon() {
      try {
        const response = await fetch(
          `https://pokeapi.co/api/v2/pokemon?offset=${page}`
        );
        const data = await response.json();
        setPokemon(data.results);
        console.log(data);
        return data;
      } catch (error) {
        console.log(error);
      }
    }

    loadPokemon();
  }, []);

  function handleNextPage() {
    setPage(data.next);
  }

  return (
    <main>
      <button onClick={handleNextPage} type="button">
        Previous Page
      </button>
      <button type="button">Next Page</button>
      <ul>
        {pokemon.map(({ name }) => (
          <li key={name}>{name}</li>
        ))}
      </ul>
    </main>
  );
}
