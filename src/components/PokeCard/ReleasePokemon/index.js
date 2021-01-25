import React from "react";
import PropTypes from "prop-types";
import { useCurrentPokemonContext } from "contexts/CurrentPokemonProvider";
import { usePokemonsBagContext } from "contexts/PokemonsBag";
import * as S from "./styled";

const ReleasePokemon = ({ pokemon }) => {
  const { deletePokemon } = usePokemonsBagContext();
  const { setCurrentPokemon } = useCurrentPokemonContext();

  const handleClick = (event) => {
    event.preventDefault();
    deletePokemon(pokemon);
    setCurrentPokemon(null);
  };

  return (
    <S.Container onClick={(e) => handleClick(e)}>LIBERAR POKEMON</S.Container>
  );
};

ReleasePokemon.propTypes = {
  pokemon: PropTypes.object.isRequired,
};
export default ReleasePokemon;
