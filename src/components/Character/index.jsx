import React from "react";
import * as Validations from "utils/validations";
import {
  useNotificationContext,
  usePokemonsBagContext,
  useCurrentPokemonContext,
} from "contexts";
import * as S from "./styled";

const Character = () => {
  const { createNotification, NOTIFICATION_TYPES } = useNotificationContext();
  const { isLoadingPokemon, getRandomPokemon } = useCurrentPokemonContext();
  const { pokemonsBag } = usePokemonsBagContext();

  const handleClick = (event) => {
    event.preventDefault();

    try {
      Validations.validateIsBagFull(pokemonsBag);

      getRandomPokemon();
    } catch (err) {
      console.error("error", err);
      createNotification(NOTIFICATION_TYPES.ERROR, err.message);
    }
  };

  return (
    <S.Container isLoading={isLoadingPokemon} onClick={(e) => handleClick(e)} />
  );
};

export default Character;
