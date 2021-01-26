import React from "react";
import PropTypes from "prop-types";
import * as S from "../styled";
import * as UI from "../UIPokeCard";

const PokemonCaptured = ({ pokemon }) => {
  return (
    <S.Container>
      <UI.Image sprites={pokemon.sprites} />

      <S.Body>
        <UI.Name name={pokemon.name} isEditable={true} />

        <UI.Stats pokemon={pokemon} />

        <UI.Types types={pokemon.types} />

        <UI.Abilities abilities={pokemon.abilities} />

        <UI.Statistics statistics={pokemon.stats} />

        <UI.ReleasePokemon pokemon={pokemon} />
      </S.Body>
    </S.Container>
  );
};

PokemonCaptured.propTypes = {
  pokemon: PropTypes.object.isRequired,
};

export default PokemonCaptured;
