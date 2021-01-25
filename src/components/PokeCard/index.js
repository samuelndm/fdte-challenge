import React from "react";
import PropTypes from "prop-types";
import { useCurrentPokemonContext } from "contexts/CurrentPokemonProvider";
import { CURRENT_POKEMON_STATUS } from "utils/constants";
import * as S from "./styled";
import Image from "./Image";
import Name from "./Name";
import HP from "./HP";
import Height from "./Height";
import Weight from "./Weight";
import Types from "./Types";
import Pokeball from "./Pokeball";
import ReleasePokemon from "./ReleasePokemon";

const PokeCard = ({ pokemon }) => {
  const { currentPokemonStatus } = useCurrentPokemonContext();

  if (!pokemon) return null;
  return (
    <S.Container>
      <S.Header />
      <Image sprites={pokemon.sprites} />

      <S.Body>
        <Name name={pokemon.name} />
        <S.Info>
          <HP stats={pokemon.stats} />

          <S.DivisorVertical />
          <Height height={pokemon.height} />

          <S.DivisorVertical />
          <Weight weight={pokemon.weight} />
        </S.Info>

        <S.DivisorHorizontal />

        <Types types={pokemon.types} />

        {currentPokemonStatus === CURRENT_POKEMON_STATUS.NEW ? (
          <Pokeball pokemon={pokemon} />
        ) : (
          <ReleasePokemon pokemon={pokemon} />
        )}
      </S.Body>
    </S.Container>
  );
};

PokeCard.propTypes = {
  pokemon: PropTypes.object.isRequired,
};

export default PokeCard;
