import React from "react";
import PropTypes from "prop-types";
import * as S from "./styled";
import Image from "./Image";
import Name from "./Name";
import HP from "./HP";
import Height from "./Height";
import Weight from "./Weight";
import Types from "./Types";
import Pokeball from "./Pokeball";

const PokeCard = ({ pokemon }) => {
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

        <Pokeball pokemon={pokemon} />
      </S.Body>
    </S.Container>
  );
};

PokeCard.propTypes = {
  pokemon: PropTypes.object.isRequired,
};

export default PokeCard;
