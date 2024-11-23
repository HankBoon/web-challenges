import { useEffect, useState } from "react";

export default function PokemonList() {
  const [pokemonData, setPokemonData] = useState([]);
  const [page, setPage] = useState(
    `https://pokeapi.co/api/v2/pokemon?offset=0`
  );
  const [nextPage, setNextPage] = useState("");
  const [prevPage, setPrevPage] = useState("");

  // console.log("pokemon", pokemonData);
  // console.log("nextPage", nextPage);

  // function handleSetNextPage(nextPage) {
  //   setNextPage(nextPage);
  // }

  useEffect(() => {
    async function loadPokemon() {
      try {
        const response = await fetch(page);
        const data = await response.json();
        // console.log("response", response);
        console.log("data:", data);
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
      <button onClick={() => setPage(prevPage)} type="button">
        Previous Page
      </button>
      <button onClick={() => setPage(nextPage)} type="button">
        Next Page
      </button>
      <ul>
        {pokemonData.map(({ name }) => (
          <li key={name}>{name}</li>
        ))}
      </ul>
    </main>
  );
}
