import React, { useState } from "react";
import PropTypes from "prop-types";
import * as S from "./styled";
import Edit from "./Edit";

const Name = ({ name, isEditable }) => {
  const [isEditing, setIsEditing] = useState(false);

  const toggleIsEditing = (event) => {
    event && event.preventDefault();

    setIsEditing((prev) => !prev);
  };

  return (
    <S.Container>
      {isEditing ? (
        <Edit name={name} toggleIsEditing={toggleIsEditing} />
      ) : (
        <S.Name>
          {name || "Nome Indisponível"}

          {isEditable && <S.Edit onClick={(e) => toggleIsEditing(e)} />}
        </S.Name>
      )}
    </S.Container>
  );
};

Name.propTypes = {
  name: PropTypes.string.isRequired,
  pokemonId: PropTypes.number.isRequired,
  isEditable: PropTypes.bool.isRequired,
};
export default Name;
