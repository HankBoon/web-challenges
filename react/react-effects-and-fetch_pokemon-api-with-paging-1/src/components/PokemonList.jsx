import { useEffect, useState } from "react";

export default function PokemonList() {
  const [pokemonData, setPokemonData] = useState([]);
  const [page, setPage] = useState(0);
  const [nextPage, setNextPage] = useState(null);
  const [prevPage, setPrevPage] = useState(null);

  useEffect(() => {
    async function loadPokemon() {
      try {
        const response = await fetch(
          `https://pokeapi.co/api/v2/pokemon?offset=${page}`
        );
        const data = await response.json();

        setPokemonData(data.results);
        setNextPage(data.next);
        setPrevPage(data.previous);
      } catch (error) {
        console.log(error);
      }
    }
    loadPokemon();
  }, [page]);

  return (
    <main>
      {prevPage && (
        <button onClick={() => setPage(page - 20)} type="button">
          Previous Page
        </button>
      )}
      {nextPage && (
        <button onClick={() => nextPage && setPage(page + 20)} type="button">
          Next Page
        </button>
      )}
      <ul>
        {pokemonData.map(({ name }) => (
          <li key={name}>{name}</li>
        ))}
      </ul>
    </main>
  );
}
