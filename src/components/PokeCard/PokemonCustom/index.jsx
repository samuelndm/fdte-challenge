import React from "react";
import PropTypes from "prop-types";
import * as S from "../styled";
import * as UI from "../UIPokeCard";

const PokemonCustom = ({ pokemon }) => {
  return (
    <S.Container>
      <UI.Image sprites={pokemon.sprites} isEditable={true} />

      <S.Body>
        <UI.Name name={pokemon.name} isEditable={true} />

        <UI.Stats pokemon={pokemon} isEditable={true} />

        <UI.Types types={pokemon.types} isEditable={true} />

        <UI.CreatePokemon pokemon={pokemon} isEditable={true} />
      </S.Body>
    </S.Container>
  );
};

PokemonCustom.propTypes = {
  pokemon: PropTypes.object.isRequired,
};

export default PokemonCustom;
