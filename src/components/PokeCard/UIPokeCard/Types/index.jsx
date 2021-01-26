import React from "react";
import PropTypes from "prop-types";
import * as S from "./styled";
import * as C from "../";
import Type from "./Type";

const Types = ({ types }) => {
  if (!types) return null;
  return (
    <S.Container>
      <C.Section title="tipos" />

      <S.TypesList>
        {types.map(({ type }, index) => (
          <Type type={type} key={`type-${index}`} />
        ))}
      </S.TypesList>
    </S.Container>
  );
};

Types.propTypes = {
  types: PropTypes.arrayOf(PropTypes.object).isRequired,
};
export default Types;
