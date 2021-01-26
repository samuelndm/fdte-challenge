import React, { createContext, useContext, useEffect, useState } from "react";
import { getPokemonById, getPokemonSpecies } from "services/endpoints/pokemon";
import { getRandomInteger } from "utils";
import { handleCurrentPokemonStatus } from "utils/pokemon";
import { useNotificationContext, usePokemonsBagContext } from "contexts";

const CurrentPokemonContext = createContext();

export const useCurrentPokemonContext = () => useContext(CurrentPokemonContext);

const CurrentPokemonProvider = ({ children }) => {
  const { createNotification, NOTIFICATION_TYPES } = useNotificationContext();
  const { pokemonsBag } = usePokemonsBagContext();
  const [currentPokemon, setCurrentPokemon] = useState(null);
  const [currentPokemonStatus, setCurrentPokemonStatus] = useState("");
  const [isLoadingPokemon, setIsLoadingPokemon] = useState(false);

  useEffect(() => {
    const status = handleCurrentPokemonStatus(currentPokemon, pokemonsBag);
    setCurrentPokemonStatus(status);
  }, [currentPokemon, pokemonsBag]);

  const getRandomPokemon = async () => {
    setIsLoadingPokemon(true);

    try {
      const species = await getPokemonSpecies();
      const speciesTotal = species?.data?.count || 0;

      const randomSpecie = getRandomInteger(1, speciesTotal);

      const { data } = await getPokemonById(randomSpecie);

      setCurrentPokemon(data);
    } catch (err) {
      console.error(err);

      createNotification(
        NOTIFICATION_TYPES.ERROR,
        "Ocorreu algum erro ao carregar o pokémon"
      );
    }

    setIsLoadingPokemon(false);
  };

  return (
    <CurrentPokemonContext.Provider
      value={{
        currentPokemon,
        setCurrentPokemon,
        currentPokemonStatus,
        getRandomPokemon,
        isLoadingPokemon,
      }}
    >
      {children}
    </CurrentPokemonContext.Provider>
  );
};

export default CurrentPokemonProvider;
