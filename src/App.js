import React, { useEffect, useState } from "react";
import { getPokemonData, getPokemons, searchPokemon } from "./api";

import PokemonThumb from "./components/pokemonThumb/PokemonThumb.jsx";
import { Container, GlobalStyle } from "./styles/global.js";
import Pagination from "./components/pagination/Pagination";
import Search from "./components/search/Search";
import ModalPokemon from "./components/modalPokemon/ModalPokemon";

const App = () => {
  const limit = 20;
  const [pokemons, setPokemons] = useState([]);
  const [pokemonsDetails, setPokemonsDetails] = useState(undefined);
  const [favoritePokemons, setFavoritePokemons] = useState([]);
  const [count, setCount] = useState(0);
  const [page, setPage] = useState(0);
  const [totalPage, setTotalPage] = useState(0);
  const [loading, setLoading] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    fetchPokemons();
  }, [page]);

  const nextPage = () => {
    if (page + 1 !== totalPage) {
      setPage(page + 1);
    }
  };

  const proviousPage = () => {
    if (page > 0) {
      setPage(page - 1);
    }
  };

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  const fetchPokemons = async () => {
    try {
      setLoading(true);
      const data = await getPokemons(limit, limit * page);
      const promises = data.results.map(async (pokemon) => {
        return await getPokemonData(pokemon.url);
      });

      const results = await Promise.all(promises);
      setPokemons(results);
      setLoading(false);
      setTotalPage(Math.ceil(data.count / limit));
    } catch (error) {
      console.log("fetchPokemons error: ", error);
    }
  };

  const onSearchHandler = async (pokemon) => {
    if (!pokemon) {
      return fetchPokemons();
    }

    setLoading(true);
    const result = await searchPokemon(pokemon);
    if (result) {
      setPokemons([result]);
      setPage(0);
      setTotalPage(1);
    }
    setLoading(false);
  };

  const onClickDetails = async (pokemon) => {
    const result = await searchPokemon(pokemon);
    if (result) {
      setPokemonsDetails(result);
    }
  };

  const updateFavoritePokemons = (name) => {
    const updatedFavorites = [...favoritePokemons];
    const favoriteIndex = favoritePokemons.indexOf(name);
    if (favoriteIndex >= 0) {
      updatedFavorites.splice(favoriteIndex, 1);
    } else {
      updatedFavorites.push(name);
    }
    setFavoritePokemons(updatedFavorites);
  };

  const pokemonsFavorite = () => {
    if (favoritePokemons.length !== 0) {
      setCount(1);
    }
  };

  const isTypePokemonsFavorite = () => {
    if (count === 1) {
      return favoritePokemons.map((pokemonStats, index) => (
        <PokemonThumb
          key={index}
          pokemon={pokemonStats}
          favoritePokemons={favoritePokemons}
          updateFavoritePokemons={updateFavoritePokemons}
          handleClickOpen={handleClickOpen}
          onClickDetails={onClickDetails}
        />
      ));
    }

    return pokemons.map((pokemonStats, index) => (
      <PokemonThumb
        key={index}
        pokemon={pokemonStats}
        favoritePokemons={favoritePokemons}
        updateFavoritePokemons={updateFavoritePokemons}
        handleClickOpen={handleClickOpen}
        onClickDetails={onClickDetails}
      />
    ));
  };
  return (
    <>
      <Container>
        {loading ? "" : <h1 onClick={() => setCount(0)}>Pokemon</h1>}

        <div className="pokemon-container">
          {loading ? (
            ""
          ) : (
            <div className="container-options">
              <Search onSearch={onSearchHandler} />
              <div className="container-favorite" onClick={pokemonsFavorite}>
                {favoritePokemons.length} ❤️
              </div>
              {count === 0 && (
                <Pagination
                  page={page + 1}
                  totalPages={totalPage}
                  nextPage={nextPage}
                  proviousPage={proviousPage}
                />
              )}
            </div>
          )}

          <div className="all-container">
            {loading ? (
              <div style={{ color: "white" }}>Carregando...</div>
            ) : (
              isTypePokemonsFavorite()
            )}
          </div>
        </div>
        {pokemonsDetails !== undefined && (
          <ModalPokemon
            pokemon={pokemonsDetails}
            open={open}
            handleClose={handleClose}
          />
        )}
      </Container>
      <GlobalStyle />
    </>
  );
};

export default App;
