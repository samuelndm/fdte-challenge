import React, { createContext, useContext, useEffect, useState } from "react";
import * as Util from "utils";
import * as Validations from "utils/validations";
import { useNotificationContext } from "contexts";

const PokemonsBagContext = createContext();

export const usePokemonsBagContext = () => useContext(PokemonsBagContext);

const PokemonsBagProvider = ({ children }) => {
  const { createNotification, NOTIFICATION_TYPES } = useNotificationContext();
  const [pokemonsBag, setPokemonsBag] = useState([]);
  const BAG_LIMIT = 6;

  useEffect(() => {
    const emptyArray = Util.createEmptyArray(BAG_LIMIT);
    setPokemonsBag(emptyArray);
  }, []);

  const addPokemon = (pokemon) => {
    try {
      Validations.validatePokemon(pokemon);
      Validations.validateIsBagFull(pokemonsBag);

      const newPokemonsBag = [...pokemonsBag];
      for (let i = 0; i < newPokemonsBag.length; i++) {
        if (!newPokemonsBag[i]) {
          newPokemonsBag[i] = pokemon;
          setPokemonsBag([...newPokemonsBag]);
          break;
        }
      }
    } catch (err) {
      console.error(err);
      createNotification(NOTIFICATION_TYPES.ERROR, err.message);
    }
  };

  const getPokemon = (pokemonId) => {
    try {
      Validations.validatePokemonId(pokemonId);
      return pokemonsBag.find((pokemon) => pokemon?.id === pokemonId);
    } catch (err) {
      console.error(err);
      createNotification(NOTIFICATION_TYPES.ERROR, err.message);
    }
  };

  const updatePokemon = (pokemonId, pokemon) => {
    try {
      Validations.validatePokemonId(pokemonId);

      const newPokemonsBag = [...pokemonsBag];
      for (let i = 0; i < newPokemonsBag.length; i++) {
        if (newPokemonsBag[i]?.id === pokemonId) {
          newPokemonsBag[i] = { ...pokemon };
          setPokemonsBag([...newPokemonsBag]);
          break;
        }
      }
    } catch (err) {
      console.error(err);
      createNotification(NOTIFICATION_TYPES.ERROR, err.message);
    }
  };

  const deletePokemon = (pokemonId) => {
    try {
      Validations.validatePokemonId(pokemonId);

      const newPokemonsBag = [...pokemonsBag];
      for (let i = 0; i < newPokemonsBag.length; i++) {
        if (newPokemonsBag[i]?.id === pokemonId) {
          newPokemonsBag[i] = null;
          setPokemonsBag([...newPokemonsBag]);
          break;
        }
      }
    } catch (err) {
      console.error(err);
      createNotification(NOTIFICATION_TYPES.ERROR, err.message);
    }
  };

  return (
    <PokemonsBagContext.Provider
      value={{
        pokemonsBag,
        addPokemon,
        getPokemon,
        updatePokemon,
        deletePokemon,
      }}
    >
      {children}
    </PokemonsBagContext.Provider>
  );
};

export default PokemonsBagProvider;
