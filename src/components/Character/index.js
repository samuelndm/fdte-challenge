import React, { useState } from "react";
import { getPokemonById, getPokemonSpecies } from "services/endpoints/pokemon";
import { getRandomInteger } from "../../utils/index";
import * as S from "./styled";

const Character = () => {
  const [isLoading, setIsLoading] = useState(false);

  const loadPokemonSpecies = async () => {
    try {
      const { data } = await getPokemonSpecies();
      return data || {};
    } catch (err) {
      console.error(`error at loadPokemonSpecies`, err);
    }
  };

  const loadRandomPokemon = async (event) => {
    event.preventDefault();

    setIsLoading(true);

    try {
      const species = await loadPokemonSpecies();
      const speciesTotal = species.count || 0;
      const randomInteger = getRandomInteger(1, speciesTotal);

      const { data } = await getPokemonById(randomInteger);

      console.log("data", data);
    } catch (err) {
      console.error("error at loadRandomPokemon", err);
    }

    setIsLoading(false);
  };

  return (
    <S.Container isLoading={isLoading} onClick={(e) => loadRandomPokemon(e)} />
  );
};

export default Character;
