import React from "react";
import PropTypes from "prop-types";
import * as S from "./styled";
import * as C from "../";

const Statistics = ({ statistics }) => {
  if (!statistics) return null;
  return (
    <S.Container>
      <C.Section title="Estatísticas" />
    </S.Container>
  );
};

Statistics.propTypes = {
  statistics: PropTypes.array.isRequired,
};
export default Statistics;
