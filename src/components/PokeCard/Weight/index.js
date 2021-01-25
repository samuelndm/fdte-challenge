import React from "react";
import PropTypes from "prop-types";
import * as S from "../styled";

const Weight = ({ weight }) => {
  return (
    <S.Stats>
      <S.StatsLabel>PESO</S.StatsLabel>
      <S.StatsContent>{`${weight / 10} kg`}</S.StatsContent>
    </S.Stats>
  );
};

Weight.propTypes = {
  weight: PropTypes.string.isRequired,
};

export default Weight;
