import React, { useEffect, useState } from "react";
import PropTypes from "prop-types";
import * as S from "./styled";
import { POKEMON_TYPES } from "utils/constants";

const Type = ({ type }) => {
  const [typeInfo, setTypeInfo] = useState({});

  useEffect(() => {
    const info = POKEMON_TYPES[type.name];
    setTypeInfo(info || {});
  }, [type]);

  if (!type) return null;
  return (
    <S.Container color={typeInfo.color}>
      <S.Name>
        {(typeInfo.name && typeInfo.name.pt_br) || "Indisponível"}
      </S.Name>
    </S.Container>
  );
};

Type.propTypes = {
  type: PropTypes.object.isRequired,
};
export default Type;
