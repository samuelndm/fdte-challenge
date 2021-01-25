import React, { createContext, useContext, useState } from "react";
import { getPokemonById, getPokemonSpecies } from "services/endpoints/pokemon";
import { getRandomInteger } from "utils";
// import { handleCurrentPokemonStatus } from "utils/pokemon";
// import { usePokemonsBagContext } from "contexts/PokemonsBag";

const CurrentPokemonContext = createContext();

export const useCurrentPokemonContext = () => useContext(CurrentPokemonContext);

const CurrentPokemonProvider = ({ children }) => {
  // const { pokemonsBag } = usePokemonsBagContext();
  const [currentPokemon, setCurrentPokemon] = useState(null);
  const [isLoadingPokemon, setIsLoadingPokemon] = useState(false);

  // useEffect(() => {
  //   const pokemon = handleCurrentPokemonStatus(currentPokemon, pokemonsBag);
  //   setCurrentPokemon(pokemon);
  // }, [currentPokemon, pokemonsBag]);

  const loadPokemonSpecies = async () => {
    try {
      const { data } = await getPokemonSpecies();
      return data || {};
    } catch (err) {
      console.error(err);
    }
  };

  const getRandomPokemon = async (event) => {
    event && event.preventDefault();

    setIsLoadingPokemon(true);

    try {
      const species = await loadPokemonSpecies();
      const speciesTotal = species.count || 0;
      const randomInteger = getRandomInteger(1, speciesTotal);

      const { data } = await getPokemonById(randomInteger);

      setCurrentPokemon(data);
    } catch (err) {
      console.error(err);
    }

    setIsLoadingPokemon(false);
  };

  return (
    <CurrentPokemonContext.Provider
      value={{
        currentPokemon,
        setCurrentPokemon,
        getRandomPokemon,
        isLoadingPokemon,
      }}
    >
      {children}
    </CurrentPokemonContext.Provider>
  );
};

export default CurrentPokemonProvider;
