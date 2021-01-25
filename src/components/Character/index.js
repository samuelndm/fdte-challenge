import React from "react";
import { useCurrentPokemonContext } from "contexts/CurrentPokemonProvider";
import * as S from "./styled";

const Character = () => {
  const { isLoadingPokemon, getRandomPokemon } = useCurrentPokemonContext();

  return (
    <S.Container
      isLoading={isLoadingPokemon}
      onClick={(e) => getRandomPokemon(e)}
    />
  );
};

export default Character;
