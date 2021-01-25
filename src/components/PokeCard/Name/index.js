import React from "react";
import PropTypes from "prop-types";
import * as S from "./styled";

const Name = ({ name }) => {
  return <S.Container>{name || "Nome Indisponível"}</S.Container>;
};

Name.propTypes = {
  name: PropTypes.string.isRequired,
};
export default Name;
