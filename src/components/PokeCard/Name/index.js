import React, { useState } from "react";
import PropTypes from "prop-types";
import * as S from "./styled";

const Name = ({ name, isEditable }) => {
  const [isEditing, setIsEditing] = useState(false);

  return (
    <S.Container>
      <S.Name>
        {name || "Nome Indisponível"}

        {isEditable && <S.Edit onclick={(e) => setIsEditing(true)} />}
      </S.Name>

      {isEditing && (
        <S.EditingContainer>
          <S.EditingInput type="text" required defaultValue={name} />
          <S.EditingSave />
          <S.EditingCancel />
        </S.EditingContainer>
      )}
    </S.Container>
  );
};

Name.propTypes = {
  name: PropTypes.string.isRequired,
  isEditable: PropTypes.bool.isRequired,
};
export default Name;
