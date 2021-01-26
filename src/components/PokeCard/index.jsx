import React from "react";
import PropTypes from "prop-types";
import { useCurrentPokemonContext } from "contexts";
import { CURRENT_POKEMON_STATUS } from "utils/constants";
import PokemonNew from "./PokemonNew";
import PokemonCaptured from "./PokemonCaptured";
import PokemonCustom from "./PokemonCustom";

const PokeCard = ({ pokemon }) => {
  const { currentPokemonStatus } = useCurrentPokemonContext();

  if (!pokemon) return null;

  return (
    <>
      {currentPokemonStatus === CURRENT_POKEMON_STATUS.NEW && (
        <PokemonNew pokemon={pokemon} />
      )}

      {currentPokemonStatus === CURRENT_POKEMON_STATUS.CAPTURED && (
        <PokemonCaptured pokemon={pokemon} />
      )}

      {currentPokemonStatus === CURRENT_POKEMON_STATUS.CUSTOM && (
        <PokemonCustom pokemon={pokemon} />
      )}
    </>
  );
};

PokeCard.propTypes = {
  pokemon: PropTypes.object.isRequired,
};

export default PokeCard;
