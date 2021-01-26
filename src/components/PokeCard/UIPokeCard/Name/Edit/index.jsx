import React, { useState } from "react";
import PropTypes from "prop-types";
import { useCurrentPokemonContext, usePokemonsBagContext } from "contexts";
import * as S from "./styled";

const Edit = ({ name, toggleIsEditing }) => {
  const { currentPokemon } = useCurrentPokemonContext();
  const { updatePokemon } = usePokemonsBagContext();
  const [newName, setNewName] = useState("");

  const handleSaveName = (event) => {
    event.preventDefault();
    currentPokemon.name = newName;

    updatePokemon(currentPokemon.id, currentPokemon);
    toggleIsEditing(event);
  };

  return (
    <S.Container onSubmit={(e) => handleSaveName(e)}>
      <S.Input
        type="text"
        defaultValue={name}
        maxLength={16}
        required
        onChange={(e) => setNewName(e?.target?.value)}
      />
      <S.Save type="submit" />
      <S.Cancel onClick={(e) => toggleIsEditing(e)} />
    </S.Container>
  );
};

Edit.propTypes = {
  name: PropTypes.string.isRequired,
  toggleIsEditing: PropTypes.func.isRequired,
};

export default Edit;
