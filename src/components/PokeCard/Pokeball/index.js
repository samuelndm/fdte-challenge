import React from "react";
import PropTypes from "prop-types";
import { usePokemonsBagContext } from "contexts/PokemonsBag";
import * as S from "./styled";
import { useCurrentPokemonContext } from "contexts/CurrentPokemonProvider";

const Pokeball = ({ pokemon }) => {
  const { setCurrentPokemon } = useCurrentPokemonContext();
  const { addPokemon } = usePokemonsBagContext();

  const handleClick = (event) => {
    event.preventDefault();

    addPokemon(pokemon);
    setCurrentPokemon(null);
  };

  return <S.Container onClick={(e) => handleClick(e)} />;
};

Pokeball.propTypes = {
  pokemon: PropTypes.object.isRequired,
};

export default Pokeball;
