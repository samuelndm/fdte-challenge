import React, { createContext, useContext, useEffect, useState } from "react";
import { createEmptyArray } from "utils";
import { validatePokemon, validateIsBagFull } from "utils/validations";
import { useNotificationContext } from "contexts/NotificationProvider";

const PokemonsBagContext = createContext();

export const usePokemonsBagContext = () => useContext(PokemonsBagContext);

const PokemonsBag = ({ children }) => {
  const { createNotification } = useNotificationContext();
  const [pokemonsBag, setPokemonsBag] = useState([]);
  const BAG_LIMIT = 6;

  useEffect(() => {
    const emptyArray = createEmptyArray(BAG_LIMIT);
    setPokemonsBag(emptyArray);
  }, []);

  const addPokemon = (pokemon) => {
    try {
      validatePokemon(pokemon);
      validateIsBagFull(pokemonsBag);

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

      createNotification({
        type: "error",
        message: err.message,
      });
    }
  };

  const deletePokemon = (pokemon) => {
    try {
      validatePokemon(pokemon);

      const newPokemonsBag = [...pokemonsBag];
      for (let i = 0; i < newPokemonsBag.length; i++) {
        if (newPokemonsBag[i]?.id === pokemon.id) {
          newPokemonsBag[i] = null;
          setPokemonsBag([...newPokemonsBag]);
          break;
        }
      }
    } catch (err) {
      console.error(err);

      createNotification({
        type: "error",
        message: err.message,
      });
    }
  };

  return (
    <PokemonsBagContext.Provider
      value={{ pokemonsBag, addPokemon, deletePokemon }}
    >
      {children}
    </PokemonsBagContext.Provider>
  );
};

export default PokemonsBag;
