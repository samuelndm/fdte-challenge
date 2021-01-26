import React from "react";
import PropTypes from "prop-types";
import * as S from "../styled";
import * as UI from "../UIPokeCard";

const PokemonNew = ({ pokemon }) => {
  return (
    <S.Container>
      <UI.Image sprites={pokemon.sprites} />

      <S.Body>
        <UI.Name name={pokemon.name} />

        <UI.Stats pokemon={pokemon} />

        <UI.Types types={pokemon.types} />

        <UI.Abilities abilities={pokemon.abilities} />

        <UI.Pokeball pokemon={pokemon} />
      </S.Body>
    </S.Container>
  );
};

PokemonNew.propTypes = {
  pokemon: PropTypes.object.isRequired,
};

export default PokemonNew;
