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
      <Image
        sprites={pokemon.sprites}
        isEditable={currentPokemonStatus === CURRENT_POKEMON_STATUS.CUSTOM}
      />

      <S.Body>
        <Name
          name={pokemon.name}
          isEditable={
            currentPokemonStatus === CURRENT_POKEMON_STATUS.CAPTURED ||
            currentPokemonStatus === CURRENT_POKEMON_STATUS.CUSTOM
          }
        />
        <S.Info>
          <HP
            stats={pokemon.stats}
            isEditable={currentPokemonStatus === CURRENT_POKEMON_STATUS.CUSTOM}
          />

          <S.DivisorVertical />
          <Height
            height={pokemon.height}
            isEditable={currentPokemonStatus === CURRENT_POKEMON_STATUS.CUSTOM}
          />

          <S.DivisorVertical />
          <Weight
            weight={pokemon.weight}
            isEditable={currentPokemonStatus === CURRENT_POKEMON_STATUS.CUSTOM}
          />
        </S.Info>

        <S.DivisorHorizontal />

        <Types
          types={pokemon.types}
          isEditable={currentPokemonStatus === CURRENT_POKEMON_STATUS.CUSTOM}
        />

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
